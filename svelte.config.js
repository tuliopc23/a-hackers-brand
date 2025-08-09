import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

// Minimal Svelte 5 config for library + stories (JS for wider tool support)
const config = {
  compilerOptions: {
    runes: true,
  },
  preprocess: vitePreprocess(),
}

export default config

