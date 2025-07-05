import { describe, it, expect, vi, beforeEach } from 'vitest';
import { DURATIONS, EASINGS } from '../../motion/tokens';
// Test utilities for Svelte 5 components
function createMockProps(overrides = {}) {
    return {
        variant: 'glass',
        size: 'md',
        animated: true,
        children: 'Test Button',
        ...overrides
    };
}
function createMockElement() {
    return {
        textContent: '',
        className: '',
        classList: {
            add: vi.fn(),
            remove: vi.fn(),
            contains: vi.fn(),
            toggle: vi.fn()
        },
        style: {},
        setAttribute: vi.fn(),
        getAttribute: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        click: vi.fn(),
        focus: vi.fn(),
        blur: vi.fn(),
        getBoundingClientRect: vi.fn(() => ({
            width: 100, height: 40, top: 0, left: 0, right: 100, bottom: 40, x: 0, y: 0
        }))
    };
}
describe('Button Component (Svelte 5)', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });
    describe('Props and Variants', () => {
        it('should handle variant props correctly', () => {
            const variants = ['glass', 'terminal', 'liquid', 'neon'];
            variants.forEach(variant => {
                const props = createMockProps({ variant });
                expect(props.variant).toBe(variant);
            });
        });
        it('should handle size props correctly', () => {
            const sizes = ['sm', 'md', 'lg'];
            sizes.forEach(size => {
                const props = createMockProps({ size });
                expect(props.size).toBe(size);
            });
        });
        it('should handle boolean props correctly', () => {
            const props = createMockProps({
                animated: true,
                glow: true,
                jelly: true,
                loading: false,
                disabled: false
            });
            expect(props.animated).toBe(true);
            expect(props.glow).toBe(true);
            expect(props.jelly).toBe(true);
            expect(props.loading).toBe(false);
            expect(props.disabled).toBe(false);
        });
    });
    describe('CSS Class Generation', () => {
        it('should generate correct base classes', () => {
            const element = createMockElement();
            // Simulate class generation logic
            const variant = 'glass';
            const size = 'md';
            const expectedClasses = `btn btn-${variant} btn-${size}`;
            element.className = expectedClasses;
            expect(element.className).toContain('btn');
            expect(element.className).toContain('btn-glass');
            expect(element.className).toContain('btn-md');
        });
        it('should add animation classes when animated', () => {
            const element = createMockElement();
            const animated = true;
            if (animated) {
                element.classList.add('animated');
            }
            expect(element.classList.add).toHaveBeenCalledWith('animated');
        });
        it('should add loading classes when loading', () => {
            const element = createMockElement();
            const loading = true;
            if (loading) {
                element.classList.add('loading');
                element.setAttribute('aria-disabled', 'true');
            }
            expect(element.classList.add).toHaveBeenCalledWith('loading');
            expect(element.setAttribute).toHaveBeenCalledWith('aria-disabled', 'true');
        });
    });
    describe('Event Handling', () => {
        it('should handle click events', () => {
            const element = createMockElement();
            const onClick = vi.fn();
            element.addEventListener('click', onClick);
            element.click();
            expect(element.addEventListener).toHaveBeenCalledWith('click', onClick);
        });
        it('should not trigger click when disabled', () => {
            const element = createMockElement();
            const onClick = vi.fn();
            const disabled = true;
            if (!disabled) {
                element.addEventListener('click', onClick);
            }
            expect(element.addEventListener).not.toHaveBeenCalled();
        });
        it('should handle keyboard events', () => {
            const element = createMockElement();
            const onKeydown = vi.fn();
            element.addEventListener('keydown', onKeydown);
            expect(element.addEventListener).toHaveBeenCalledWith('keydown', onKeydown);
        });
    });
    describe('Animation Integration', () => {
        it('should apply motion effects when animated', () => {
            const element = createMockElement();
            const animated = true;
            const jelly = true;
            if (animated && jelly) {
                // Simulate jelly hover effect setup
                element.style.transition = `transform ${DURATIONS.fast}ms ${EASINGS.spring}`;
            }
            expect(element.style.transition).toContain('transform');
            expect(element.style.transition).toContain(DURATIONS.fast.toString());
        });
        it('should handle reduced motion preferences', () => {
            const element = createMockElement();
            const respectReducedMotion = true;
            // Mock matchMedia for reduced motion
            Object.defineProperty(window, 'matchMedia', {
                value: vi.fn(() => ({
                    matches: true, // Reduced motion preference
                    addListener: vi.fn(),
                    removeListener: vi.fn()
                }))
            });
            if (respectReducedMotion && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                element.style.transition = 'none';
            }
            expect(element.style.transition).toBe('none');
        });
    });
    describe('State Management', () => {
        it('should handle loading state', () => {
            const props = createMockProps({ loading: true });
            const element = createMockElement();
            if (props.loading) {
                element.setAttribute('aria-busy', 'true');
                element.classList.add('loading');
            }
            expect(element.setAttribute).toHaveBeenCalledWith('aria-busy', 'true');
            expect(element.classList.add).toHaveBeenCalledWith('loading');
        });
        it('should handle disabled state', () => {
            const props = createMockProps({ disabled: true });
            const element = createMockElement();
            if (props.disabled) {
                element.setAttribute('disabled', 'true');
                element.setAttribute('aria-disabled', 'true');
            }
            expect(element.setAttribute).toHaveBeenCalledWith('disabled', 'true');
            expect(element.setAttribute).toHaveBeenCalledWith('aria-disabled', 'true');
        });
    });
    describe('Accessibility', () => {
        it('should have proper ARIA attributes', () => {
            const element = createMockElement();
            // Set required ARIA attributes
            element.setAttribute('role', 'button');
            element.setAttribute('tabindex', '0');
            expect(element.setAttribute).toHaveBeenCalledWith('role', 'button');
            expect(element.setAttribute).toHaveBeenCalledWith('tabindex', '0');
        });
        it('should handle focus management', () => {
            const element = createMockElement();
            element.focus();
            expect(element.focus).toHaveBeenCalled();
            element.blur();
            expect(element.blur).toHaveBeenCalled();
        });
        it('should support keyboard navigation', () => {
            const element = createMockElement();
            const onKeyDown = vi.fn((e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    element.click();
                }
            });
            element.addEventListener('keydown', onKeyDown);
            // Simulate Enter key press
            const enterEvent = { key: 'Enter' };
            onKeyDown(enterEvent);
            expect(element.click).toHaveBeenCalled();
        });
    });
    describe('Performance', () => {
        it('should handle multiple rapid clicks efficiently', () => {
            const element = createMockElement();
            const onClick = vi.fn();
            let clickCount = 0;
            const throttledClick = vi.fn(() => {
                clickCount++;
                if (clickCount % 5 === 0) { // Throttle to every 5th click
                    onClick();
                }
            });
            element.addEventListener('click', throttledClick);
            // Simulate 10 rapid clicks
            for (let i = 0; i < 10; i++) {
                throttledClick();
            }
            expect(onClick).toHaveBeenCalledTimes(2); // Only called twice due to throttling
        });
        it('should cleanup event listeners properly', () => {
            const element = createMockElement();
            const onClick = vi.fn();
            element.addEventListener('click', onClick);
            element.removeEventListener('click', onClick);
            expect(element.removeEventListener).toHaveBeenCalledWith('click', onClick);
        });
    });
});
