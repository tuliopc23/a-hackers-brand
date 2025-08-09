import { defineConfig } from 'histoire'
import { HstSvelte } from '@histoire/plugin-svelte'

export default defineConfig({
  plugins: [HstSvelte()],
  storyMatch: [
    'src/lib/components/**/*.story.svelte',
  ],
  // Use a project-relative setup path for compatibility
  setupFile: './histoire.setup.ts',
  vite: {
    define: {
      'process.versions.bun': 'false'
    },
    resolve: {
      alias: { $lib: '/src/lib' }
    }
  }
})
