import type { Plugin } from 'vite';

/**
 * Vitest SvelteKit Fix for Svelte 5 mount() SSR conflicts
 * 
 * This plugin patches Svelte 5 to force browser mode during testing,
 * preventing the 'mount(...) is not available on the server' error.
 */
export function vitestSvelteKitFix(): Plugin {
	return {
		name: 'vitest-sveltekit-fix',
		config(config) {
			// Force browser environment for testing
			config.define = {
				...config.define,
				'process.env.BROWSER': 'true',
				'process.env.NODE_ENV': '"test"',
				'global.window': 'globalThis',
				'typeof window': '"object"'
			};

			// Ensure proper test configuration
			if (config.test) {
				config.test.environment = 'happy-dom';
				config.test.globals = true;
			}

			return config;
		},
		
		resolveId(id) {
			// Redirect problematic Svelte server modules during testing
			if (id === 'svelte/server' || id === 'svelte/ssr' || id === 'svelte/server-route') {
				return { id: 'virtual:svelte-mock', external: false };
			}
			
			// Redirect SvelteKit server modules
			if (id.includes('@sveltejs/kit/server')) {
				return { id: 'virtual:sveltekit-mock', external: false };
			}
			
			return null;
		},

		load(id) {
			// Provide mock implementations for virtual modules
			if (id === 'virtual:svelte-mock') {
				return `
					export const mount = () => ({ $destroy: () => {}, $set: () => {} });
					export const render = () => ({ html: '', css: '', head: '' });
					export const hydrate = () => {};
					export const unmount = () => {};
				`;
			}
			
			if (id === 'virtual:sveltekit-mock') {
				return `
					export const building = false;
					export const dev = true;
					export const version = '2.0.0';
				`;
			}
			
			// Override Svelte server entry points with browser-compatible versions
			if (id.includes('svelte/src/index-server.js')) {
				return `
					export { mount, hydrate, unmount } from 'svelte';
					export * from 'svelte';
				`;
			}
			return null;
		},

		transform(code, id) {
			// Patch Svelte's environment detection in test files
			if (id.includes('.test.') || id.includes('.spec.')) {
				const patchedCode = code
					.replace(/typeof window === ['"]undefined['"]/, 'false')
					.replace(/!window/, 'false')
					.replace(/process\.env\.NODE_ENV === ['"]production['"]/, 'false');
				
				if (patchedCode !== code) {
					return {
						code: patchedCode,
						map: null
					};
				}
			}
			return null;
		}
	};
}
