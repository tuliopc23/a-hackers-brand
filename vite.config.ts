import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import inspect from 'vite-plugin-inspect';
import { visualizer } from 'rollup-plugin-visualizer';
import { compression } from 'vite-plugin-compression2';

export default defineConfig(({ mode }) => ({
	plugins: [
		sveltekit(),
		inspect(),
		// Bundle analyzer for production builds
		mode === 'analyze' && visualizer({
			filename: 'dist/bundle-analysis.html',
			open: true,
			gzipSize: true,
			brotliSize: true,
			template: 'treemap'
		}),
		// Compression for production
		mode === 'production' && compression({
			algorithm: 'gzip',
			exclude: [/\.(br)$/, /\.(gz)$/]
		}),
		mode === 'production' && compression({
			algorithm: 'brotliCompress',
			exclude: [/\.(br)$/, /\.(gz)$/]
		})
	].filter(Boolean),

	// === PERFORMANCE OPTIMIZATIONS ===
	build: {
		target: 'esnext',
		minify: 'esbuild',
		cssMinify: 'esbuild',
		// Enable source maps for production debugging
		sourcemap: mode === 'production' ? 'hidden' : true,
		// Better chunk splitting for caching
		chunkSizeWarningLimit: 500, // Stricter limit for production
		// Advanced rollup optimizations
		rollupOptions: {
			output: {
				// Advanced manual chunking strategy
				manualChunks: (id) => {
					// Vendor chunks
					if (id.includes('node_modules')) {
						// Threlte 3D packages
						if (id.includes('@threlte') || id.includes('three')) {
							return 'threlte';
						}
						// UI libraries
						if (id.includes('lucide-svelte')) {
							return 'icons';
						}
						// Motion libraries
						if (id.includes('motion') || id.includes('framer')) {
							return 'motion';
						}
						// Core utilities
						if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('class-variance-authority')) {
							return 'utils';
						}
						// Large vendor libraries
						if (id.includes('monaco-editor')) {
							return 'monaco';
						}
						// Everything else goes to vendor
						return 'vendor';
					}
					// App chunks
					if (id.includes('src/lib/components')) {
						return 'components';
					}
					if (id.includes('src/lib/motion')) {
						return 'motion';
					}
					if (id.includes('src/routes')) {
						return 'routes';
					}
				},
				// Optimize chunk names
				chunkFileNames: 'chunks/[name]-[hash].js',
				entryFileNames: 'entries/[name]-[hash].js',
				assetFileNames: 'assets/[name]-[hash].[ext]'
			}
		},
		// Additional build optimizations
		reportCompressedSize: true,
		assetsInlineLimit: 4096, // Inline small assets
		cssCodeSplit: true, // Split CSS for better caching
		emptyOutDir: true
	},

	// Development optimizations
	server: {
		fs: {
			// Allow serving files from project root
			allow: ['..']
		}
	},

	// === DEPENDENCY OPTIMIZATION ===
	optimizeDeps: {
		include: [
			'lucide-svelte',
			'clsx',
			'tailwind-merge',
			'class-variance-authority',
			'web-vitals'
		],
		exclude: [
			'@threlte/core',
			'@threlte/extras',
			'monaco-editor',
			'three'
		],
		// Force optimization of problematic dependencies
		force: mode === 'development'
	},

	// === CSS OPTIMIZATIONS ===
	css: {
		devSourcemap: mode === 'development',
		postcss: {
			plugins: mode === 'production' ? [
				// Additional PostCSS optimizations for production
			] : []
		}
	},

	// === DEFINE GLOBAL CONSTANTS ===
	define: {
		__DEV__: mode === 'development',
		__PROD__: mode === 'production',
		__VERSION__: JSON.stringify(process.env.npm_package_version || '1.0.0'),
		__BUILD_TIME__: JSON.stringify(new Date().toISOString())
	}
}));
