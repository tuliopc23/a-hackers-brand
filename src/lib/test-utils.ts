/**
 * Test utilities for Svelte 5 components
 */
import { render as svelteRender, type RenderOptions, type RenderResult } from '@testing-library/svelte';
import type { ComponentProps, Component } from 'svelte';

// Enhanced render function that handles Svelte 5 props correctly
export function render<T extends Component>(
  component: T,
  options?: RenderOptions<ComponentProps<T>>
): RenderResult<T> {
  // Handle children prop for Svelte 5 render functions
  if (options?.props && 'children' in options.props) {
    const { children, ...otherProps } = options.props;
    
    return svelteRender(component, {
      ...options,
      props: {
        ...otherProps,
        children: children
      } as ComponentProps<T>
    });
  }

  return svelteRender(component, options);
}

// Re-export everything else from testing-library/svelte
export * from '@testing-library/svelte';
export { render as originalRender } from '@testing-library/svelte';

// Test helper for checking CSS classes
export function hasClass(element: Element, className: string): boolean {
  return element.classList.contains(className);
}

// Test helper for checking multiple CSS classes
export function hasClasses(element: Element, classNames: string[]): boolean {
  return classNames.every(className => element.classList.contains(className));
}

// Test helper for waiting for animations
export async function waitForAnimation(timeout = 500): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

// Test helper for triggering keyboard events
export function triggerKeyboardEvent(
  element: Element, 
  key: string, 
  options?: KeyboardEventInit
): void {
  const event = new KeyboardEvent('keydown', { 
    key, 
    bubbles: true, 
    cancelable: true,
    ...options 
  });
  element.dispatchEvent(event);
}

// Test helper for checking aria attributes
export function hasAriaAttribute(element: Element, attribute: string, value?: string): boolean {
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