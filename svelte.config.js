import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	compilerOptions: {
		// Enable Svelte 4 compatibility for testing
		compatibility: {
			componentApi: 4
		}
	},

	kit: {
		// Vercel adapter with runtime configuration
		adapter: adapter({
			// Use Node.js runtime instead of edge for better compatibility
			runtime: 'nodejs20.x',
			// Enable ISR (Incremental Static Regeneration) for better performance
			isr: true
		}),

		// Alias configuration for cleaner imports
		alias: {
			'$lib': './src/lib',
			'$components': './src/lib/components',
			'$utils': './src/lib/utils',
			'$stores': './src/lib/stores',
			'$motion': './src/lib/motion'
		}
	}
};

export default config;
