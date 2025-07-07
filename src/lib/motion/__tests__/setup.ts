import { vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom';

// Force Svelte 5 to run in browser mode - override SSR detection
globalThis.window = globalThis.window || globalThis;
globalThis.document = globalThis.document || {
	createElement: vi.fn(),
	createElementNS: vi.fn(),
	createTextNode: vi.fn(),
	createComment: vi.fn(),
	createDocumentFragment: vi.fn(),
	head: { appendChild: vi.fn(), removeChild: vi.fn() },
	body: { appendChild: vi.fn(), removeChild: vi.fn() },
	documentElement: { style: {} },
	querySelector: vi.fn(),
	querySelectorAll: vi.fn(),
	getElementById: vi.fn(),
	addEventListener: vi.fn(),
	removeEventListener: vi.fn()
};
globalThis.navigator = globalThis.navigator || { userAgent: 'test' };
globalThis.location = globalThis.location || { href: 'http://localhost:3000' };

// Critical: Override environment variables early
if (typeof process !== 'undefined') {
	process.env.NODE_ENV = 'test';
	process.env.BROWSER = 'true';
	process.env.VITEST = 'true';
}

// Force client-side environment for Svelte 5
Object.defineProperty(globalThis, 'process', {
  value: {
    env: {
      NODE_ENV: 'test',
      VITE_SSR: 'false'
    }
  }
});

// Prevent Svelte from detecting server environment
Object.defineProperty(globalThis, 'window', {
	value: globalThis,
	writable: true,
	configurable: true
});

// Prevent any server-side imports by overriding require resolution
const originalRequire = globalThis.require;
if (originalRequire) {
	globalThis.require = function(id: string) {
		// Block server-specific modules
		if (id === 'svelte/server' || id === 'svelte/ssr' || id.includes('server-route')) {
			return {
				mount: vi.fn(),
				render: vi.fn(),
				hydrate: vi.fn()
			};
		}
		return originalRequire.apply(this, arguments);
	};
}

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

// Enhanced JSDOM setup for Svelte 5
beforeEach(() => {
  // Clear any previous DOM state
  document.body.innerHTML = '';
  document.head.innerHTML = '';
  
  // Ensure we're in a browser-like environment
  Object.defineProperty(globalThis, 'window', {
    value: global.window,
    writable: true
  });
  
  Object.defineProperty(globalThis, 'document', {
    value: global.document,
    writable: true
  });
});

// Mock HTMLMediaElement
if (typeof window !== 'undefined' && window.HTMLMediaElement) {
  if (!window.HTMLMediaElement.prototype.play) {
    window.HTMLMediaElement.prototype.play = vi.fn();
  }
  if (!window.HTMLMediaElement.prototype.pause) {
    window.HTMLMediaElement.prototype.pause = vi.fn();
  }
}

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock requestAnimationFrame and cancelAnimationFrame
global.requestAnimationFrame = vi.fn((callback) => {
  return setTimeout(callback, 16);
});
global.cancelAnimationFrame = vi.fn((id) => {
  clearTimeout(id);
});

// Mock performance.now for animations
Object.defineProperty(window, 'performance', {
  writable: true,
  value: {
    now: vi.fn(() => Date.now()),
  },
});

// Mock CSS.supports for feature detection
Object.defineProperty(window, 'CSS', {
  writable: true,
  value: {
    supports: vi.fn(() => true),
  },
});

// Mock getComputedStyle for CSS property checks
Object.defineProperty(window, 'getComputedStyle', {
  writable: true,
  value: vi.fn(() => ({
    getPropertyValue: vi.fn(() => ''),
    transform: 'none',
    transition: 'none',
    animation: 'none',
  })),
});

// Suppress console warnings for tests
const originalConsoleWarn = console.warn;
console.warn = vi.fn((message, ...args) => {
  // Suppress specific Svelte warnings that are expected in tests
  if (typeof message === 'string' && (
    message.includes('lifecycle_function_unavailable') ||
    message.includes('element_invalid_self_closing_tag') ||
    message.includes('a11y_no_static_element_interactions') ||
    message.includes('a11y_click_events_have_key_events') ||
    message.includes('css_unused_selector')
  )) {
    return;
  }
  originalConsoleWarn(message, ...args);
});