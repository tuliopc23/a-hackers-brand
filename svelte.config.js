import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-netlify for Netlify deployments
		adapter: adapter({
			// Enable edge functions
			edge: false,
			// Split functions for better performance
			split: true
		})
	}
};

export default config;
