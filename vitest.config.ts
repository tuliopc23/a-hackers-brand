import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitestSvelteKitFix } from './scripts/vitest-sveltekit-fix';

export default defineConfig({
	plugins: [sveltekit(), vitestSvelteKitFix()],
	define: {
		// Force browser environment
		'process.env.BROWSER': 'true',
		'process.env.NODE_ENV': '"test"',
		'typeof window': '"object"',
		'global.window': 'globalThis'
	},
	test: {
		globals: true,
<<<<<<< Updated upstream
		environment: 'happy-dom',
		setupFiles: ['./src/lib/motion/__tests__/setup-legacy.ts'],
=======
		environment: 'jsdom',
>>>>>>> Stashed changes
		include: ['src/**/*.{test,spec}.{js,ts,svelte}'],
		setupFiles: ['./src/lib/motion/__tests__/setup.ts'],
		pool: 'forks',
		poolOptions: {
			forks: {
				singleFork: true
			}
		},
<<<<<<< Updated upstream
		// Force browser environment for Svelte 5 mount
		server: {
			deps: {
				inline: ['svelte', '@sveltejs/kit']
			}
		},
		// Configure environment to prevent SSR detection
		env: {
			NODE_ENV: 'test',
			VITEST: 'true',
			BROWSER: 'true'
		},
=======
		environmentOptions: {
			jsdom: {
				url: 'http://localhost:3000'
			}
		},
>>>>>>> Stashed changes
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
		benchmark: {
			include: ['src/**/*.{bench,benchmark}.{js,ts}'],
			reporters: ['verbose']
		},
		resolve: {
			alias: {
				$lib: new URL('./src/lib', import.meta.url).pathname
			}
		},
		reporter: ['default']
	}
});
