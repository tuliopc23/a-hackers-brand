/**
 * Client-side testing utilities for Svelte 5 components
 * Bypasses SSR issues by using DOM mounting directly
 */
import type { ComponentProps, Component } from 'svelte';
export interface TestComponent {
    component: any;
    container: HTMLElement;
    unmount: () => void;
}
export declare function mount<T extends Component>(component: T, options?: {
    props?: ComponentProps<T>;
    target?: HTMLElement;
}): TestComponent;
export declare function getByRole(container: HTMLElement, role: string): HTMLElement | null;
export declare function getByText(container: HTMLElement, text: string): HTMLElement | null;
export declare function fireEvent(element: HTMLElement, type: string, options?: EventInit): void;
export declare function fireKeyboardEvent(element: HTMLElement, key: string, options?: KeyboardEventInit): void;
export declare function hasClass(element: HTMLElement, className: string): boolean;
export declare function hasClasses(element: HTMLElement, classNames: string[]): boolean;
export declare function waitFor(callback: () => boolean, timeout?: number): Promise<void>;
