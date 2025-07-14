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
		environment: 'jsdom',
		setupFiles: ['./src/lib/motion/__tests__/setup.ts'],
		include: ['src/**/*.{test,spec}.{js,ts,svelte}'],
		pool: 'forks',
		poolOptions: {
			forks: {
				singleFork: true
			}
		},
		environmentOptions: {
			jsdom: {
				url: 'http://localhost:3000'
			}
		},
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html', 'lcov', 'text-summary'],
			include: ['src/lib/**/*.{js,ts,svelte}'],
			exclude: [
				'src/lib/**/__tests__/**/*',
				'src/lib/**/*.test.{js,ts,svelte}',
				'src/lib/**/*.spec.{js,ts,svelte}',
				'src/lib/**/*.d.ts',
				'src/lib/**/*.story.{js,ts,svelte}',
				'src/lib/**/index.ts', // Barrel exports
				'src/lib/types/**/*', // Type definitions
				'src/lib/tokens/**/*', // Design tokens (static data)
				'src/lib/components/webgl/**/*', // WebGL components (complex to test)
				'src/lib/components/lazy/**/*' // Lazy loading wrappers
			],
			// === PRODUCTION-READY COVERAGE THRESHOLDS (90%+) ===
			thresholds: {
				functions: 90,
				lines: 90,
				statements: 90,
				branches: 85
			},
			// === DETAILED COVERAGE REPORTING ===
			reportOnFailure: true,
			all: true,
			skipFull: false,
			// === COVERAGE OUTPUT ===
			reportsDirectory: './coverage',
			watermarks: {
				statements: [85, 90],
				functions: [85, 90],
				branches: [80, 85],
				lines: [85, 90]
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
