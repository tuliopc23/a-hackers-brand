import { vi } from 'vitest';
/**
 * Svelte 5 Test Utilities
 *
 * Helper functions for testing Svelte 5 components without relying on
 * @testing-library/svelte which has compatibility issues.
 */
export interface MockElement {
	textContent: string;
	className: string;
	classList: {
		add: ReturnType<typeof vi.fn>;
		remove: ReturnType<typeof vi.fn>;
		contains: ReturnType<typeof vi.fn>;
		toggle: ReturnType<typeof vi.fn>;
	};
	style: Record<string, any>;
	setAttribute: ReturnType<typeof vi.fn>;
	getAttribute: ReturnType<typeof vi.fn>;
	addEventListener: ReturnType<typeof vi.fn>;
	removeEventListener: ReturnType<typeof vi.fn>;
	click: ReturnType<typeof vi.fn>;
	focus: ReturnType<typeof vi.fn>;
	blur: ReturnType<typeof vi.fn>;
	getBoundingClientRect: ReturnType<typeof vi.fn>;
	[key: string]: any;
}
export declare function createMockElement(overrides?: {}): MockElement;
export declare function createMockProps<T extends Record<string, any>>(defaults: T, overrides?: Partial<T>): T;
export declare function testVariants<T>(
	variants: string[],
	propsFactory: (variant: string) => T,
	testFn: (props: T, variant: string) => void
): void;
export declare function testSizes<T>(
	sizes: string[],
	propsFactory: (size: string) => T,
	testFn: (props: T, size: string) => void
): void;
export declare function simulateClassGeneration(
	element: MockElement,
	baseClass: string,
	variant?: string,
	size?: string,
	modifiers?: string[]
): string;
export declare function simulateAnimation(
	element: MockElement,
	animated: boolean,
	duration?: number,
	easing?: string
): void;
export declare function simulateMotionPreference(reducedMotion?: boolean): void;
export declare function simulateKeyboardEvent(
	element: MockElement,
	key: string,
	callback?: () => void
): {
	key: string;
	preventDefault: import('vitest').Mock<(...args: any[]) => any>;
	stopPropagation: import('vitest').Mock<(...args: any[]) => any>;
};
export declare function simulateMouseEvent(
	element: MockElement,
	eventType: 'click' | 'mouseenter' | 'mouseleave' | 'mousedown' | 'mouseup',
	callback?: () => void
): {
	type: 'mouseenter' | 'click' | 'mousedown' | 'mouseleave' | 'mouseup';
	preventDefault: import('vitest').Mock<(...args: any[]) => any>;
	stopPropagation: import('vitest').Mock<(...args: any[]) => any>;
	clientX: number;
	clientY: number;
};
export declare function expectClassesToContain(element: MockElement, expectedClasses: string[]): void;
export declare function expectAttributesToBeSet(element: MockElement, attributes: Record<string, string>): void;
export declare function expectAriaAttributes(element: MockElement, ariaAttribs: Record<string, string>): void;
export declare function testAccessibilityCompliance(element: MockElement, role?: string): void;
export declare function testEventCleanup(element: MockElement, eventTypes?: string[]): void;
export declare function testPerformanceThreshold(testFn: () => void, maxTime?: number): void;
export declare const buttonTestDefaults: {
	variant: 'glass';
	size: 'md';
	animated: boolean;
	children: string;
};
export declare const inputTestDefaults: {
	variant: 'glass';
	size: 'md';
	type: 'text';
	placeholder: string;
};
export declare const cardTestDefaults: {
	variant: 'glass';
	animated: boolean;
	hoverable: boolean;
};
export declare const modalTestDefaults: {
	open: boolean;
	title: string;
	variant: 'glass';
	size: 'md';
};
export declare const commonVariants: readonly ['glass', 'terminal', 'liquid', 'neon'];
export declare const commonSizes: readonly ['sm', 'md', 'lg'];
export declare const alertVariants: readonly ['success', 'error', 'warning', 'info', 'terminal'];
export declare const modalSizes: readonly ['sm', 'md', 'lg', 'xl', 'full'];
