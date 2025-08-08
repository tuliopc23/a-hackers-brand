import { defineConfig } from 'vite';
import rolldown from 'rolldown-vite';

// Library build using Vite + rolldown runtime and LightningCSS
export default defineConfig({
  plugins: [rolldown()],
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
        'react',
        'react-dom',
        'svelte'
      ]
    }
  },
  resolve: {
    // rolldown (oxc) provides fast resolver/minifier internally
    conditions: ['import', 'module', 'default']
  }
});
