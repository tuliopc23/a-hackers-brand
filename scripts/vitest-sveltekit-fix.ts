import type { Plugin } from 'vite';

export function vitestSvelteKitFix(): Plugin {
  return {
    name: 'vitest-sveltekit-fix',
    config() {
      return {
        test: {
          setupFiles: ['./src/lib/motion/__tests__/setup.ts'],
        },
      };
    },
  };
}
