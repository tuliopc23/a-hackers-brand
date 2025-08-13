import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte'; // Svelte plugin for Vite

// Library build using Vite + LightningCSS (Vite uses its default bundler)
export default defineConfig({
  plugins: [
    svelte({
      // Inline component CSS into JS so consumers don't need a separate CSS file
      emitCss: false,
    }),
  ],
  // Use default CSS transformer for better Svelte :global() handling
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
        '@lucide/svelte',
        'lucide-svelte'
      ]
    }
  },
  resolve: {
    // Provide $lib alias used by stories and docs
    alias: {
      $lib: '/src/lib'
    },
    conditions: ['import', 'module', 'default']
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test-setup.ts']
  }
});
