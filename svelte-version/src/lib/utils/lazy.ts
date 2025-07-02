import { onMount } from 'svelte';
import { browser } from '$app/environment';

/**
 * Creates a lazy-loaded component that's safe for both SSR and client-side rendering.
 * The component will only load on the client side using onMount to avoid SSR issues.
 *
 * @param loadFn - Function that returns a Promise resolving to a component module
 * @returns A Svelte component that can be used with svelte:component
 */
export function lazy<T = any>(loadFn: () => Promise<{ default: T }>) {
	let Component: T | null = $state(null);
	let loading = $state(true);
	let error = $state<string | null>(null);

	// Only load on client side
	onMount(async () => {
		if (!browser) {
			loading = false;
			return;
		}

		try {
			const module = await loadFn();
			Component = module.default;
			loading = false;
		} catch (err) {
			error = err instanceof Error ? err.message : 'Failed to load component';
			loading = false;
		}
	});

	return {
		get component() {
			return Component;
		},
		get loading() {
			return loading;
		},
		get error() {
			return error;
		}
	};
}
