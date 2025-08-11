import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    plugins: [
        svelte({
            emitCss: false,
            compilerOptions: { customElement: true }
        })
    ],
    build: {
        outDir: 'dist/wc',
        emptyOutDir: false,
        lib: {
            entry: 'src/lib/wc/register.ts',
            formats: ['es'],
            fileName: () => 'wc.js'
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
    resolve: { alias: { $lib: '/src/lib' } }
});
