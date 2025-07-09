/**
 * Creates a lazy-loaded component that's safe for both SSR and client-side rendering.
 * The component will only load on the client side using onMount to avoid SSR issues.
 *
 * @param loadFn - Function that returns a Promise resolving to a component module
 * @returns A Svelte component that can be used with svelte:component
 */
export declare function lazy<T = any>(
	loadFn: () => Promise<{
		default: T;
	}>
): {
	readonly component: T | null;
	readonly loading: boolean;
	readonly error: string | null;
};
