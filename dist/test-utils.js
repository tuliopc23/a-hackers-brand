/**
 * Test utilities for Svelte 5 components
 */
import { render as svelteRender } from '@testing-library/svelte';
// Enhanced render function that handles Svelte 5 props correctly
export function render(component, options) {
    // Handle children prop for Svelte 5 render functions
    if (options?.props && 'children' in options.props) {
        const { children, ...otherProps } = options.props;
        return svelteRender(component, {
            ...options,
            props: {
                ...otherProps,
                children: children
            }
        });
    }
    return svelteRender(component, options);
}
// Re-export everything else from testing-library/svelte
export * from '@testing-library/svelte';
export { render as originalRender } from '@testing-library/svelte';
// Test helper for checking CSS classes
export function hasClass(element, className) {
    return element.classList.contains(className);
}
// Test helper for checking multiple CSS classes
export function hasClasses(element, classNames) {
    return classNames.every(className => element.classList.contains(className));
}
// Test helper for waiting for animations
export async function waitForAnimation(timeout = 500) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
// Test helper for triggering keyboard events
export function triggerKeyboardEvent(element, key, options) {
    const event = new KeyboardEvent('keydown', {
        key,
        bubbles: true,
        cancelable: true,
        ...options
    });
    element.dispatchEvent(event);
}
// Test helper for checking aria attributes
export function hasAriaAttribute(element, attribute, value) {
    const ariaValue = element.getAttribute(`aria-${attribute}`);
    if (value === undefined) {
        return ariaValue !== null;
    }
    return ariaValue === value;
}
// Mock function for motion system testing
export const mockMotionSystem = {
    liquidBlur: () => ({}),
    glassFade: () => ({}),
    springPop: () => ({}),
    magneticHover: () => ({})
};
