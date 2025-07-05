import { vi } from 'vitest';
<<<<<<< Updated upstream
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
// Prevent Svelte from detecting server environment
Object.defineProperty(globalThis, 'window', {
    value: globalThis,
    writable: true,
    configurable: true
});
// Prevent any server-side imports by overriding require resolution
const originalRequire = globalThis.require;
if (originalRequire) {
    globalThis.require = function (id) {
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
    value: (element) => ({
        getPropertyValue: (property) => {
            const mockValues = {
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
    value: vi.fn((callback) => {
        return setTimeout(() => callback(Date.now()), 16);
    }),
    writable: true
});
Object.defineProperty(window, 'cancelAnimationFrame', {
    value: vi.fn((id) => clearTimeout(id)),
    writable: true
});
// Mock ResizeObserver
Object.defineProperty(window, 'ResizeObserver', {
    value: vi.fn().mockImplementation(() => ({
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn()
=======
// Mock HTMLMediaElement
if (!global.window.HTMLMediaElement.prototype.play) {
    global.window.HTMLMediaElement.prototype.play = vi.fn();
}
if (!global.window.HTMLMediaElement.prototype.pause) {
    global.window.HTMLMediaElement.prototype.pause = vi.fn();
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
>>>>>>> Stashed changes
    })),
});
