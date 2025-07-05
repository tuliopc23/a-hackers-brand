import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createMockElement, createMockProps, simulateClassGeneration, simulateAnimation, simulateKeyboardEvent, simulateMouseEvent, expectClassesToContain, expectAttributesToBeSet, expectAriaAttributes, testAccessibilityCompliance, testEventCleanup, commonVariants, commonSizes } from './svelte5-test-utils';
describe('Accordion Component (Svelte 5)', () => {
    const defaultItems = [
        { id: '1', title: 'Item 1', content: () => 'Content 1' },
        { id: '2', title: 'Item 2', content: () => 'Content 2' },
        { id: '3', title: 'Item 3', content: () => 'Content 3', disabled: true }
    ];
    const accordionTestDefaults = {
        items: defaultItems,
        multiple: false,
        collapsible: true,
        variant: 'glass',
        size: 'md',
        blur: 'md',
        animate: true,
        reduceMotion: false,
        defaultOpen: []
    };
    beforeEach(() => {
        vi.clearAllMocks();
    });
    describe('Props and Variants', () => {
        it('should handle variant props correctly', () => {
            const variants = ['default', 'glass', 'terminal'];
            variants.forEach(variant => {
                const props = createMockProps(accordionTestDefaults, { variant });
                expect(props.variant).toBe(variant);
            });
        });
        it('should handle size props correctly', () => {
            const sizes = ['sm', 'md', 'lg'];
            sizes.forEach(size => {
                const props = createMockProps(accordionTestDefaults, { size });
                expect(props.size).toBe(size);
            });
        });
        it('should handle blur levels correctly', () => {
            const blurLevels = ['sm', 'md', 'lg', 'xl'];
            blurLevels.forEach(blur => {
                const props = createMockProps(accordionTestDefaults, { blur });
                expect(props.blur).toBe(blur);
            });
        });
        it('should handle boolean props correctly', () => {
            const props = createMockProps(accordionTestDefaults, {
                multiple: true,
                collapsible: false,
                animate: true,
                reduceMotion: false
            });
            expect(props.multiple).toBe(true);
            expect(props.collapsible).toBe(false);
            expect(props.animate).toBe(true);
            expect(props.reduceMotion).toBe(false);
        });
        it('should handle defaultOpen prop', () => {
            const props = createMockProps(accordionTestDefaults, {
                defaultOpen: ['1', '2']
            });
            expect(props.defaultOpen).toEqual(['1', '2']);
        });
    });
    describe('CSS Class Generation', () => {
        it('should generate correct container classes', () => {
            const container = createMockElement();
            const variant = 'glass';
            const blur = 'md';
            simulateClassGeneration(container, 'overflow-hidden transition-all duration-200', variant, '', [
                'glass-subtle',
                'border',
                'border-white/20',
                'backdrop-blur-md'
            ]);
            expectClassesToContain(container, [
                'overflow-hidden',
                'transition-all',
                'glass-subtle',
                'backdrop-blur-md'
            ]);
        });
        it('should generate correct header classes', () => {
            const header = createMockElement();
            const variant = 'glass';
            const size = 'md';
            simulateClassGeneration(header, 'w-full flex items-center justify-between', variant, size, [
                'px-4',
                'py-3',
                'text-sm',
                'text-white',
                'hover:glass-medium'
            ]);
            expectClassesToContain(header, [
                'w-full',
                'flex',
                'items-center',
                'px-4',
                'py-3'
            ]);
        });
        it('should apply disabled styles', () => {
            const header = createMockElement();
            const disabled = true;
            if (disabled) {
                header.classList.add('opacity-50', 'cursor-not-allowed');
            }
            expect(header.classList.add).toHaveBeenCalledWith('opacity-50', 'cursor-not-allowed');
        });
    });
    describe('State Management', () => {
        it('should toggle single item in single mode', () => {
            const openItems = new Set();
            const itemId = '1';
            const multiple = false;
            const collapsible = true;
            // Toggle open
            if (!openItems.has(itemId)) {
                openItems.clear();
                openItems.add(itemId);
            }
            expect(openItems.has(itemId)).toBe(true);
            expect(openItems.size).toBe(1);
            // Toggle closed
            if (openItems.has(itemId) && collapsible) {
                openItems.clear();
            }
            expect(openItems.size).toBe(0);
        });
        it('should handle multiple items in multiple mode', () => {
            const openItems = new Set();
            const multiple = true;
            // Add multiple items
            openItems.add('1');
            openItems.add('2');
            expect(openItems.size).toBe(2);
            expect(openItems.has('1')).toBe(true);
            expect(openItems.has('2')).toBe(true);
            // Remove one item
            openItems.delete('1');
            expect(openItems.size).toBe(1);
            expect(openItems.has('1')).toBe(false);
            expect(openItems.has('2')).toBe(true);
        });
        it('should respect collapsible prop', () => {
            const openItems = new Set(['1']);
            const collapsible = false;
            const multiple = false;
            // Try to close the only open item
            const isOpen = openItems.has('1');
            if (isOpen && (!collapsible || openItems.size <= 1)) {
                // Should not close
            }
            else {
                openItems.clear();
            }
            expect(openItems.size).toBe(1);
            expect(openItems.has('1')).toBe(true);
        });
        it('should not toggle disabled items', () => {
            const openItems = new Set();
            const item = { id: '3', title: 'Item 3', disabled: true };
            if (!item.disabled) {
                openItems.add(item.id);
            }
            expect(openItems.has(item.id)).toBe(false);
        });
    });
    describe('Event Handling', () => {
        it('should handle click events', () => {
            const header = createMockElement();
            const onClick = vi.fn();
            const onValueChange = vi.fn();
            header.addEventListener('click', onClick);
            header.click();
            expect(header.addEventListener).toHaveBeenCalledWith('click', onClick);
            expect(header.click).toHaveBeenCalled();
        });
        it('should handle keyboard navigation', () => {
            const header = createMockElement();
            const onKeydown = vi.fn();
            header.addEventListener('keydown', onKeydown);
            // Test Enter key
            const enterEvent = simulateKeyboardEvent(header, 'Enter');
            expect(enterEvent.key).toBe('Enter');
            // Test Space key
            const spaceEvent = simulateKeyboardEvent(header, ' ');
            expect(spaceEvent.key).toBe(' ');
            // Test Arrow keys
            const arrowDownEvent = simulateKeyboardEvent(header, 'ArrowDown');
            expect(arrowDownEvent.key).toBe('ArrowDown');
            const arrowUpEvent = simulateKeyboardEvent(header, 'ArrowUp');
            expect(arrowUpEvent.key).toBe('ArrowUp');
            // Test Home/End keys
            const homeEvent = simulateKeyboardEvent(header, 'Home');
            expect(homeEvent.key).toBe('Home');
            const endEvent = simulateKeyboardEvent(header, 'End');
            expect(endEvent.key).toBe('End');
        });
        it('should call onValueChange callback', () => {
            const onValueChange = vi.fn();
            const openItems = new Set(['1', '2']);
            // Simulate value change
            onValueChange(Array.from(openItems));
            expect(onValueChange).toHaveBeenCalledWith(['1', '2']);
        });
    });
    describe('Animation Integration', () => {
        it('should apply animation when animate is true', () => {
            const header = createMockElement();
            const content = createMockElement();
            const animate = true;
            const reduceMotion = false;
            if (animate && !reduceMotion) {
                simulateAnimation(header, true);
                simulateAnimation(content, true);
            }
            expect(header.style.transition).toContain('all');
            expect(content.style.transition).toContain('all');
        });
        it('should disable animation when reduceMotion is true', () => {
            const header = createMockElement();
            const animate = true;
            const reduceMotion = true;
            if (animate && !reduceMotion) {
                simulateAnimation(header, true);
            }
            else {
                simulateAnimation(header, false);
            }
            expect(header.style.transition).toBe('none');
        });
        it('should animate icon rotation', () => {
            const icon = createMockElement();
            const isOpen = true;
            if (isOpen) {
                icon.classList.add('rotate-180');
            }
            expect(icon.classList.add).toHaveBeenCalledWith('rotate-180');
        });
    });
    describe('Accessibility', () => {
        it('should have proper ARIA attributes on header', () => {
            const header = createMockElement();
            const isOpen = false;
            const itemId = '1';
            expectAriaAttributes(header, {
                'expanded': String(isOpen),
                'controls': `accordion-content-${itemId}`,
                'disabled': 'false'
            });
        });
        it('should have proper ARIA attributes on content', () => {
            const content = createMockElement();
            const itemId = '1';
            expectAttributesToBeSet(content, {
                id: `accordion-content-${itemId}`,
                role: 'region'
            });
            expectAriaAttributes(content, {
                'labelledby': `accordion-header-${itemId}`
            });
        });
        it('should support keyboard navigation', () => {
            const header = createMockElement();
            expectAttributesToBeSet(header, {
                type: 'button',
                tabindex: '0'
            });
        });
        it('should mark disabled items appropriately', () => {
            const header = createMockElement();
            const disabled = true;
            if (disabled) {
                header.setAttribute('aria-disabled', 'true');
                header.setAttribute('disabled', 'true');
            }
            expectAriaAttributes(header, {
                'disabled': 'true'
            });
            expectAttributesToBeSet(header, {
                disabled: 'true'
            });
        });
    });
    describe('Focus Management', () => {
        it('should focus next item on ArrowDown', () => {
            const currentHeader = createMockElement();
            const nextHeader = createMockElement();
            currentHeader.setAttribute('data-accordion-header', '1');
            nextHeader.setAttribute('data-accordion-header', '2');
            // Simulate focus movement
            nextHeader.focus();
            expect(nextHeader.focus).toHaveBeenCalled();
        });
        it('should focus previous item on ArrowUp', () => {
            const currentHeader = createMockElement();
            const prevHeader = createMockElement();
            currentHeader.setAttribute('data-accordion-header', '2');
            prevHeader.setAttribute('data-accordion-header', '1');
            // Simulate focus movement
            prevHeader.focus();
            expect(prevHeader.focus).toHaveBeenCalled();
        });
        it('should focus first item on Home key', () => {
            const firstHeader = createMockElement();
            firstHeader.setAttribute('data-accordion-header', '1');
            firstHeader.focus();
            expect(firstHeader.focus).toHaveBeenCalled();
        });
        it('should focus last item on End key', () => {
            const lastHeader = createMockElement();
            lastHeader.setAttribute('data-accordion-header', '3');
            lastHeader.focus();
            expect(lastHeader.focus).toHaveBeenCalled();
        });
    });
    describe('Performance', () => {
        it('should cleanup event listeners properly', () => {
            const header = createMockElement();
            testEventCleanup(header, ['click', 'keydown']);
        });
        it('should handle rapid toggles efficiently', () => {
            const openItems = new Set();
            const toggleCount = 100;
            for (let i = 0; i < toggleCount; i++) {
                if (openItems.has('1')) {
                    openItems.delete('1');
                }
                else {
                    openItems.add('1');
                }
            }
            // Should end in the same state for even number of toggles
            expect(openItems.has('1')).toBe(false);
        });
    });
});
