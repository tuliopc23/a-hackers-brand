import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock CSS custom properties
Object.defineProperty(window, 'getComputedStyle', {
	value: (element: Element) => ({
		getPropertyValue: (property: string) => {
			const mockValues: Record<string, string> = {
				'--duration-fast': '150ms',
				'--duration-moderate': '300ms',
				'--duration-slow': '500ms',
				'--ease-glass': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'--ease-liquid': 'cubic-bezier(0.23, 1, 0.32, 1)',
				'--ease-spring': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'--blur-sm': '4px',
				'--blur-md': '8px',
				'--blur-lg': '16px',
				'--blur-xl': '24px',
				'--blur-2xl': '40px'
			};
			return mockValues[property] || '';
		},
		opacity: '1',
		transform: 'scale(1)',
		backdropFilter: 'blur(8px)'
	}),
	writable: true
});

// Mock performance API
Object.defineProperty(window, 'performance', {
	value: {
		now: vi.fn(() => Date.now()),
		memory: {
			usedJSHeapSize: 1000000,
			totalJSHeapSize: 2000000,
			jsHeapSizeLimit: 4000000
		}
	},
	writable: true
});

// Mock requestAnimationFrame
Object.defineProperty(window, 'requestAnimationFrame', {
	value: vi.fn((callback: FrameRequestCallback) => {
		return setTimeout(() => callback(Date.now()), 16);
	}),
	writable: true
});

Object.defineProperty(window, 'cancelAnimationFrame', {
	value: vi.fn((id: number) => clearTimeout(id)),
	writable: true
});

// Mock ResizeObserver
Object.defineProperty(window, 'ResizeObserver', {
	value: vi.fn().mockImplementation(() => ({
		observe: vi.fn(),
		unobserve: vi.fn(),
		disconnect: vi.fn()
	})),
	writable: true
});

// Mock IntersectionObserver
Object.defineProperty(window, 'IntersectionObserver', {
	value: vi.fn().mockImplementation(() => ({
		observe: vi.fn(),
		unobserve: vi.fn(),
		disconnect: vi.fn()
	})),
	writable: true
});

// Mock CSS supports
Object.defineProperty(CSS, 'supports', {
	value: vi.fn((property: string, value: string) => {
		// Mock support for common CSS properties
		const supportedProperties = ['backdrop-filter', 'transform', 'opacity', 'transition', 'will-change'];
		return supportedProperties.some((prop) => property.includes(prop));
	}),
	writable: true
});

// Global test helpers
declare global {
	var testUtils: {
		createMockElement: () => HTMLElement;
		mockBoundingClientRect: (element: Element, rect: Partial<DOMRect>) => void;
		triggerAnimationFrame: () => Promise<void>;
	};
}

globalThis.testUtils = {
	createMockElement: () => {
		const element = document.createElement('div');
		element.style.cssText = `
			width: 100px;
			height: 100px;
			position: absolute;
			top: 50px;
			left: 50px;
		`;
		return element;
	},

	mockBoundingClientRect: (element: Element, rect: Partial<DOMRect>) => {
		const mockRect = {
			width: 100,
			height: 100,
			top: 50,
			left: 50,
			bottom: 150,
			right: 150,
			x: 50,
			y: 50,
			toJSON: () => ({}),
			...rect
		};

		vi.spyOn(element, 'getBoundingClientRect').mockReturnValue(mockRect as DOMRect);
	},

	triggerAnimationFrame: () => {
		return new Promise((resolve) => {
			requestAnimationFrame(() => resolve());
		});
	}
};
