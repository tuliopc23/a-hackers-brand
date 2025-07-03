import { defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';

export default defineConfig({
	plugins: [HstSvelte()],

	setupFile: './src/histoire.setup.ts',

	storyMatch: ['**/*.story.svelte', '**/*.stories.svelte'],

	vite: {
		server: {
			port: 6006
		}
	},

	// Disable all problematic built-in plugins
	builtin: false
});
