import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		globals: true,
		environment: 'happy-dom',
		setupFiles: ['./src/lib/motion/__tests__/setup.ts'],
		include: ['src/**/*.{test,spec}.{js,ts,svelte}'],
		// Ensure tests run in browser-like environment
		pool: 'forks',
		poolOptions: {
			forks: {
				singleFork: true
			}
		},
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html', 'lcov'],
			include: ['src/lib/**/*.{js,ts,svelte}'],
			exclude: [
				'src/lib/**/__tests__/**/*',
				'src/lib/**/*.test.{js,ts,svelte}',
				'src/lib/**/*.spec.{js,ts,svelte}',
				'src/lib/**/*.d.ts'
			],
			thresholds: {
				functions: 80,
				lines: 80,
				statements: 80,
				branches: 70
			}
		},
		// Performance testing configuration
		benchmark: {
			include: ['src/**/*.{bench,benchmark}.{js,ts}'],
			reporters: ['verbose']
		}
	}
});
