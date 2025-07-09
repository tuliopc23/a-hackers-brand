import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import inspect from 'vite-plugin-inspect';
// Note: bundle analyzer will be added in a separate script
// import swc from 'vite-plugin-swc-transform';

export default defineConfig({
	plugins: [
		sveltekit(),
		inspect()
		// Bundle analyzer and SWC will be added conditionally
	],

	// Performance optimizations
	build: {
		target: 'esnext',
		minify: 'esbuild',
		cssMinify: 'esbuild',
		// Enable source maps for production debugging
		sourcemap: true,
		// Better chunk splitting for caching
		chunkSizeWarningLimit: 1000,
		// Manual chunking for better caching
		rollupOptions: {
			output: {
				manualChunks: {
					// Threlte packages together
					threlte: ['@threlte/core', '@threlte/extras'],
					// Lucide icons separate
					lucide: ['lucide-svelte']
				}
			}
		}
	},

	// Development optimizations
	server: {
		fs: {
			// Allow serving files from project root
			allow: ['..']
		}
	},

	// Dependency optimization
	optimizeDeps: {
		include: ['lucide-svelte', 'clsx', 'tailwind-merge'],
		exclude: ['@threlte/core', '@threlte/extras', 'monaco-editor']
	},

	// CSS optimizations
	css: {
		devSourcemap: true
	},

	// Define global constants for performance
	define: {
		__DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
		__BUILD_TIME__: JSON.stringify(new Date().toISOString())
	}
});
