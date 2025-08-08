import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Minimal Svelte 5 config for library + stories
const config = {
  compilerOptions: {
    runes: true
  },
  preprocess: vitePreprocess(),
};

export default config;
