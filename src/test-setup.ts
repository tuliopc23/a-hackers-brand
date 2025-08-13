// Test setup for Vitest
import { beforeAll } from 'vitest';

// Setup DOM environment
beforeAll(() => {
  // Mock matchMedia for theme tests
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => {}
    })
  });
});
