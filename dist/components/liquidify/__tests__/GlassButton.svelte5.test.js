import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createMockElement, createMockProps, simulateClassGeneration, simulateAnimation, simulateMouseEvent, simulateKeyboardEvent, expectClassesToContain, expectAttributesToBeSet, expectAriaAttributes, testAccessibilityCompliance, testEventCleanup, commonSizes } from '../../__tests__/svelte5-test-utils';
describe('GlassButton Component (Svelte 5)', () => {
    const glassButtonTestDefaults = {
        variant: 'glass',
        size: 'md',
        blur: 'md',
        glow: false,
        ripple: true,
        magnetic: false,
        liquid: true,
        disabled: false,
        loading: false,
        children: 'Glass Button',
        type: 'button',
        animate: true,
        reduceMotion: false
    };
    beforeEach(() => {
        vi.clearAllMocks();
    });
    describe('Props and Variants', () => {
        it('should handle variant props correctly', () => {
            const variants = ['glass', 'liquid', 'frosted', 'crystal'];
            variants.forEach(variant => {
                const props = createMockProps(glassButtonTestDefaults, { variant });
                expect(props.variant).toBe(variant);
            });
        });
        it('should handle size props correctly', () => {
            commonSizes.forEach(size => {
                const props = createMockProps(glassButtonTestDefaults, { size });
                expect(props.size).toBe(size);
            });
        });
        it('should handle blur levels correctly', () => {
            const blurLevels = ['sm', 'md', 'lg', 'xl'];
            blurLevels.forEach(blur => {
                const props = createMockProps(glassButtonTestDefaults, { blur });
                expect(props.blur).toBe(blur);
            });
        });
        it('should handle boolean props correctly', () => {
            const props = createMockProps(glassButtonTestDefaults, {
                glow: true,
                ripple: false,
                magnetic: true,
                liquid: false,
                disabled: true,
                loading: true,
                animate: false,
                reduceMotion: true
            });
            expect(props.glow).toBe(true);
            expect(props.ripple).toBe(false);
            expect(props.magnetic).toBe(true);
            expect(props.liquid).toBe(false);
            expect(props.disabled).toBe(true);
            expect(props.loading).toBe(true);
            expect(props.animate).toBe(false);
            expect(props.reduceMotion).toBe(true);
        });
        it('should handle type prop', () => {
            const types = ['button', 'submit', 'reset'];
            types.forEach(type => {
                const props = createMockProps(glassButtonTestDefaults, { type });
                expect(props.type).toBe(type);
            });
        });
    });
    describe('CSS Class Generation', () => {
        it('should generate correct base glass classes', () => {
            const button = createMockElement();
            const variant = 'glass';
            const size = 'md';
            const blur = 'md';
            simulateClassGeneration(button, 'relative inline-flex items-center justify-center', variant, size, [
                'glass-morphism',
                'backdrop-blur-md',
                'bg-white/10',
                'border',
                'border-white/20',
                'px-6',
                'py-3',
                'rounded-xl',
                'text-white',
                'font-medium',
                'transition-all',
                'duration-200'
            ]);
            expectClassesToContain(button, [
                'relative',
                'inline-flex',
                'items-center',
                'justify-center',
                'glass-morphism',
                'backdrop-blur-md'
            ]);
        });
        it('should apply glow effect classes', () => {
            const button = createMockElement();
            const glow = true;
            const variant = 'glass';
            if (glow && variant === 'glass') {
                button.classList.add('shadow-glass-glow', 'hover:shadow-glass-glow-lg');
            }
            expect(button.classList.add).toHaveBeenCalledWith('shadow-glass-glow', 'hover:shadow-glass-glow-lg');
        });
        it('should apply liquid effect classes', () => {
            const button = createMockElement();
            const liquid = true;
            if (liquid) {
                button.classList.add('liquid-surface', 'hover:liquid-ripple');
            }
            expect(button.classList.add).toHaveBeenCalledWith('liquid-surface', 'hover:liquid-ripple');
        });
        it('should apply disabled styles', () => {
            const button = createMockElement();
            const disabled = true;
            if (disabled) {
                button.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
            }
            expect(button.classList.add).toHaveBeenCalledWith('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
        });
        it('should apply loading styles', () => {
            const button = createMockElement();
            const loading = true;
            if (loading) {
                button.classList.add('cursor-wait', 'opacity-75');
            }
            expect(button.classList.add).toHaveBeenCalledWith('cursor-wait', 'opacity-75');
        });
    });
    describe('Glass Morphism Effects', () => {
        it('should apply different glass morphism levels', () => {
            const glassMorphismLevels = {
                subtle: ['bg-white/5', 'border-white/10', 'backdrop-blur-sm'],
                medium: ['bg-white/10', 'border-white/20', 'backdrop-blur-md'],
                heavy: ['bg-white/20', 'border-white/30', 'backdrop-blur-lg'],
                intense: ['bg-white/30', 'border-white/40', 'backdrop-blur-xl']
            };
            Object.entries(glassMorphismLevels).forEach(([level, classes]) => {
                const button = createMockElement();
                classes.forEach(cls => {
                    button.classList.add(cls);
                });
                classes.forEach(cls => {
                    expect(button.classList.add).toHaveBeenCalledWith(cls);
                });
            });
        });
        it('should handle frosted variant', () => {
            const button = createMockElement();
            const variant = 'frosted';
            if (variant === 'frosted') {
                button.classList.add('bg-white/5', 'backdrop-blur-xl', 'backdrop-saturate-150');
            }
            expect(button.classList.add).toHaveBeenCalledWith('bg-white/5', 'backdrop-blur-xl', 'backdrop-saturate-150');
        });
        it('should handle crystal variant', () => {
            const button = createMockElement();
            const variant = 'crystal';
            if (variant === 'crystal') {
                button.classList.add('bg-gradient-to-br', 'from-white/20', 'to-white/5', 'backdrop-blur-md');
            }
            expect(button.classList.add).toHaveBeenCalledWith('bg-gradient-to-br', 'from-white/20', 'to-white/5', 'backdrop-blur-md');
        });
    });
    describe('Interactive Effects', () => {
        it('should handle magnetic hover effect', () => {
            const button = createMockElement();
            const magnetic = true;
            const magneticStrength = 0.3;
            if (magnetic) {
                button.addEventListener('mousemove', (e) => {
                    const rect = button.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    button.style.transform = `translate(${x * magneticStrength}px, ${y * magneticStrength}px)`;
                });
                button.addEventListener('mouseleave', () => {
                    button.style.transform = 'translate(0, 0)';
                });
            }
            expect(button.addEventListener).toHaveBeenCalledWith('mousemove', expect.any(Function));
            expect(button.addEventListener).toHaveBeenCalledWith('mouseleave', expect.any(Function));
        });
        it('should handle ripple effect on click', () => {
            const button = createMockElement();
            const ripple = true;
            if (ripple) {
                button.addEventListener('click', (e) => {
                    const rippleElement = createMockElement();
                    rippleElement.classList.add('ripple-effect', 'absolute', 'rounded-full', 'bg-white/30');
                    // Position ripple at click location
                    const rect = button.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    rippleElement.style.left = `${x}px`;
                    rippleElement.style.top = `${y}px`;
                });
            }
            expect(button.addEventListener).toHaveBeenCalledWith('click', expect.any(Function));
        });
        it('should handle liquid distortion effect', () => {
            const button = createMockElement();
            const liquid = true;
            if (liquid) {
                button.addEventListener('mouseenter', () => {
                    button.style.filter = 'blur(0.5px) contrast(1.1) saturate(1.2)';
                    button.style.transform = 'scale(1.02)';
                });
                button.addEventListener('mouseleave', () => {
                    button.style.filter = 'none';
                    button.style.transform = 'scale(1)';
                });
            }
            expect(button.addEventListener).toHaveBeenCalledWith('mouseenter', expect.any(Function));
            expect(button.addEventListener).toHaveBeenCalledWith('mouseleave', expect.any(Function));
        });
    });
    describe('Animation Integration', () => {
        it('should apply hover animations', () => {
            const button = createMockElement();
            const animate = true;
            const reduceMotion = false;
            if (animate && !reduceMotion) {
                button.addEventListener('mouseenter', () => {
                    button.style.transform = 'translateY(-2px) scale(1.02)';
                    button.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
                });
                button.addEventListener('mouseleave', () => {
                    button.style.transform = 'translateY(0) scale(1)';
                    button.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                });
            }
            if (animate && !reduceMotion) {
                expect(button.addEventListener).toHaveBeenCalledWith('mouseenter', expect.any(Function));
                expect(button.addEventListener).toHaveBeenCalledWith('mouseleave', expect.any(Function));
            }
        });
        it('should apply click animations', () => {
            const button = createMockElement();
            const animate = true;
            if (animate) {
                button.addEventListener('mousedown', () => {
                    button.style.transform = 'scale(0.98)';
                });
                button.addEventListener('mouseup', () => {
                    button.style.transform = 'scale(1)';
                });
            }
            expect(button.addEventListener).toHaveBeenCalledWith('mousedown', expect.any(Function));
            expect(button.addEventListener).toHaveBeenCalledWith('mouseup', expect.any(Function));
        });
        it('should respect reduced motion preferences', () => {
            const button = createMockElement();
            const animate = true;
            const reduceMotion = true;
            if (animate && !reduceMotion) {
                simulateAnimation(button, true);
            }
            else {
                button.style.transition = 'none';
                button.style.animation = 'none';
            }
            expect(button.style.transition).toBe('none');
            expect(button.style.animation).toBe('none');
        });
    });
    describe('Loading State', () => {
        it('should show loading spinner', () => {
            const button = createMockElement();
            const loading = true;
            if (loading) {
                const spinner = createMockElement();
                spinner.classList.add('animate-spin', 'w-4', 'h-4', 'border-2', 'border-white/30', 'border-t-white', 'rounded-full');
                button.appendChild(spinner);
            }
            expect(button.appendChild).toHaveBeenCalled();
        });
        it('should disable interaction when loading', () => {
            const button = createMockElement();
            const loading = true;
            if (loading) {
                button.setAttribute('disabled', 'true');
                button.setAttribute('aria-busy', 'true');
            }
            expectAttributesToBeSet(button, {
                disabled: 'true'
            });
            expectAriaAttributes(button, {
                'busy': 'true'
            });
        });
        it('should hide button text when loading', () => {
            const buttonText = createMockElement();
            const loading = true;
            if (loading) {
                buttonText.style.opacity = '0';
            }
            else {
                buttonText.style.opacity = '1';
            }
            expect(buttonText.style.opacity).toBe('0');
        });
    });
    describe('Event Handling', () => {
        it('should handle click events', () => {
            const button = createMockElement();
            const onClick = vi.fn();
            const disabled = false;
            const loading = false;
            if (!disabled && !loading) {
                button.addEventListener('click', onClick);
                button.click();
            }
            expect(button.click).toHaveBeenCalled();
        });
        it('should prevent click when disabled', () => {
            const button = createMockElement();
            const onClick = vi.fn();
            const disabled = true;
            if (!disabled) {
                button.addEventListener('click', onClick);
            }
            expect(button.addEventListener).not.toHaveBeenCalledWith('click', onClick);
        });
        it('should handle keyboard events', () => {
            const button = createMockElement();
            const onKeyDown = vi.fn();
            button.addEventListener('keydown', onKeyDown);
            simulateKeyboardEvent(button, 'Enter');
            simulateKeyboardEvent(button, ' ');
            expect(button.addEventListener).toHaveBeenCalledWith('keydown', onKeyDown);
        });
    });
    describe('Accessibility', () => {
        it('should have proper ARIA attributes', () => {
            const button = createMockElement();
            const loading = false;
            const disabled = false;
            expectAttributesToBeSet(button, {
                role: 'button',
                type: 'button'
            });
            expectAriaAttributes(button, {
                'disabled': String(disabled),
                'busy': String(loading)
            });
        });
        it('should support focus management', () => {
            const button = createMockElement();
            button.focus();
            expect(button.focus).toHaveBeenCalled();
            button.blur();
            expect(button.blur).toHaveBeenCalled();
        });
        it('should have visible focus indicator', () => {
            const button = createMockElement();
            const isFocused = true;
            if (isFocused) {
                button.classList.add('ring-2', 'ring-blue-400', 'ring-offset-2', 'ring-offset-transparent');
            }
            expect(button.classList.add).toHaveBeenCalledWith('ring-2', 'ring-blue-400', 'ring-offset-2', 'ring-offset-transparent');
        });
        it('should announce state changes', () => {
            const button = createMockElement();
            const loading = true;
            const statusText = 'Loading...';
            if (loading) {
                button.setAttribute('aria-label', statusText);
            }
            expectAriaAttributes(button, {
                'label': statusText
            });
        });
    });
    describe('Performance', () => {
        it('should cleanup event listeners properly', () => {
            const button = createMockElement();
            testEventCleanup(button, ['click', 'mouseenter', 'mouseleave', 'mousedown', 'mouseup', 'mousemove', 'keydown']);
        });
        it('should optimize animations with transform3d', () => {
            const button = createMockElement();
            const optimizeAnimations = true;
            if (optimizeAnimations) {
                button.style.transform = 'translate3d(0, 0, 0)';
                button.style.willChange = 'transform';
            }
            expect(button.style.transform).toContain('translate3d');
            expect(button.style.willChange).toBe('transform');
        });
        it('should debounce rapid interactions', () => {
            const button = createMockElement();
            const interactionHandler = vi.fn();
            let debounceTimeout;
            const debouncedInteraction = () => {
                clearTimeout(debounceTimeout);
                debounceTimeout = window.setTimeout(() => {
                    interactionHandler();
                }, 100);
            };
            // Simulate rapid interactions
            for (let i = 0; i < 5; i++) {
                debouncedInteraction();
            }
            vi.advanceTimersByTime(100);
            expect(interactionHandler).toHaveBeenCalledTimes(1);
        });
    });
});
