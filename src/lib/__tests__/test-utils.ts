import { render, type RenderResult } from '@testing-library/svelte';
import { vi } from 'vitest';

// === ENHANCED TEST UTILITIES FOR 90%+ COVERAGE ===

// Mock window.matchMedia for responsive tests
export const mockMatchMedia = (matches: boolean = false) => {
	Object.defineProperty(window, 'matchMedia', {
		writable: true,
		value: vi.fn().mockImplementation((query) => ({
			matches,
			media: query,
			onchange: null,
			addListener: vi.fn(),
			removeListener: vi.fn(),
			addEventListener: vi.fn(),
			removeEventListener: vi.fn(),
			dispatchEvent: vi.fn()
		}))
	});
};

// Helper to render component with default props
export const renderComponent = <TProps extends Record<string, any> = Record<string, any>>(
	Component: any,
	props: Partial<TProps> = {} as Partial<TProps>
): RenderResult<any> => {
	return render(Component, { props });
};

// Wait for animations to complete
export const waitForAnimation = (duration: number = 300): Promise<void> => {
	return new Promise((resolve) => setTimeout(resolve, duration));
};

// Mock IntersectionObserver
export const mockIntersectionObserver = () => {
	global.IntersectionObserver = vi.fn().mockImplementation(() => ({
		observe: vi.fn(),
		unobserve: vi.fn(),
		disconnect: vi.fn()
	}));
};

// Mock ResizeObserver
export const mockResizeObserver = () => {
	global.ResizeObserver = vi.fn().mockImplementation(() => ({
		observe: vi.fn(),
		unobserve: vi.fn(),
		disconnect: vi.fn()
	}));
};

// Test all component variants
export const testAllVariants = async (
	testFn: (variant: string) => Promise<void> | void
) => {
	const variants = ['glass', 'terminal', 'liquid', 'neon'];
	for (const variant of variants) {
		await testFn(variant);
	}
};

// Test all component sizes
export const testAllSizes = async (
	testFn: (size: string) => Promise<void> | void
) => {
	const sizes = ['sm', 'md', 'lg'];
	for (const size of sizes) {
		await testFn(size);
	}
};

// Test accessibility
export const testAccessibility = async (container: HTMLElement) => {
	// Check for ARIA attributes
	const interactiveElements = container.querySelectorAll('button, a, input, select, textarea');

	interactiveElements.forEach((element) => {
		// Check for accessible labels
		const hasLabel =
			element.hasAttribute('aria-label') ||
			element.hasAttribute('aria-labelledby') ||
			element.closest('label') !== null;

		if (!hasLabel && element.textContent?.trim() === '') {
			throw new Error(`Element ${element.tagName} missing accessible label`);
		}
	});
};

// Mock clipboard API
export const mockClipboard = () => {
	const writeText = vi.fn();
	Object.assign(navigator, {
		clipboard: {
			writeText
		}
	});
	return writeText;
};

// Create mock event
export const createMockEvent = (type: string, options: any = {}) => {
	return new Event(type, { bubbles: true, ...options });
};

// Test keyboard navigation
export const testKeyboardNavigation = async (element: HTMLElement, key: string, expectedAction: () => void) => {
	const event = new KeyboardEvent('keydown', { key, bubbles: true });
	element.dispatchEvent(event);
	expectedAction();
};
