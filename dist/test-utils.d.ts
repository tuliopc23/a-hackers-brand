/**
 * Test utilities for Svelte 5 components
 */
import { type RenderOptions, type RenderResult } from '@testing-library/svelte';
import type { ComponentType } from 'svelte';
export declare function render<T extends Record<string, any>>(component: ComponentType<T>, options?: RenderOptions<T>): RenderResult<T>;
export * from '@testing-library/svelte';
export { render as originalRender } from '@testing-library/svelte';
export declare function hasClass(element: Element, className: string): boolean;
export declare function hasClasses(element: Element, classNames: string[]): boolean;
export declare function waitForAnimation(timeout?: number): Promise<void>;
export declare function triggerKeyboardEvent(element: Element, key: string, options?: KeyboardEventInit): void;
export declare function hasAriaAttribute(element: Element, attribute: string, value?: string): boolean;
export declare const mockMotionSystem: {
    liquidBlur: () => {};
    glassFade: () => {};
    springPop: () => {};
    magneticHover: () => {};
};
