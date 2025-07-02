import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	
	// Performance optimizations
	build: {
		target: 'esnext',
		minify: 'esbuild',
		cssMinify: 'esbuild',
		// Enable source maps for production debugging
		sourcemap: true,
		// Better chunk splitting for caching
		chunkSizeWarningLimit: 1000
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
		include: [
			'lucide-svelte',
			'clsx',
			'tailwind-merge'
		],
		exclude: [
			'@threlte/core',
			'@threlte/extras'
		]
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
