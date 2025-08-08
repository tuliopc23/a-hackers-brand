import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte'; // Svelte plugin for Vite

// Library build using Vite + LightningCSS (Vite uses its default bundler)
export default defineConfig({
  plugins: [svelte()],
  css: {
    transformer: 'lightningcss'
  },
  build: {
    lib: {
      entry: 'src/lib/index.ts',
      formats: ['es'],
      fileName: () => 'index.js'
    },
    rollupOptions: {
      external: [
        'svelte',
        '@threlte/core',
        '@threlte/extras',
        'three',
        '@lucide/svelte'
      ]
    }
  },
  resolve: {
    // rolldown (oxc) provides fast resolver/minifier internally
    conditions: ['import', 'module', 'default']
  }
});
