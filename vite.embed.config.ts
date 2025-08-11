import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    plugins: [svelte({ emitCss: false })],
    build: {
        outDir: 'dist/embed',
        emptyOutDir: false,
        lib: { entry: 'src/lib/embed/registry.ts', formats: ['es'], fileName: () => 'embed.js' },
        rollupOptions: {
            external: ['@threlte/core', '@threlte/extras', 'three', '@lucide/svelte', 'lucide-svelte']
        }
    },
    resolve: { alias: { $lib: '/src/lib' } }
});
