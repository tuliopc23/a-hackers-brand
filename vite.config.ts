import { defineConfig } from 'vite';
import rolldown from 'rolldown-vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// Library build using Vite + rolldown runtime and LightningCSS
export default defineConfig({
  plugins: [svelte(), rolldown()],
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
