import { type RenderResult } from '@testing-library/svelte';
import type { ComponentType } from 'svelte';
export declare const mockMatchMedia: (matches?: boolean) => void;
export declare const renderComponent: <T extends Record<string, any>>(
	Component: ComponentType<T>,
	props?: Partial<T>
) => RenderResult<T>;
export declare const waitForAnimation: (duration?: number) => Promise<void>;
export declare const mockIntersectionObserver: () => void;
export declare const mockResizeObserver: () => void;
export declare const testAllVariants: (
	Component: ComponentType,
	baseProps: Record<string, any> | undefined,
	testFn: (variant: string) => Promise<void> | void
) => Promise<void>;
export declare const testAllSizes: (
	Component: ComponentType,
	baseProps: Record<string, any> | undefined,
	testFn: (size: string) => Promise<void> | void
) => Promise<void>;
export declare const testAccessibility: (container: HTMLElement) => Promise<void>;
export declare const mockClipboard: () => import('vitest').Mock<(...args: any[]) => any>;
export declare const createMockEvent: (type: string, options?: any) => Event;
export declare const testKeyboardNavigation: (
	element: HTMLElement,
	key: string,
	expectedAction: () => void
) => Promise<void>;
