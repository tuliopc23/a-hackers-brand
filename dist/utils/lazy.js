import { browser } from '$app/environment';
/**
 * Creates a lazy-loaded component that's safe for both SSR and client-side rendering.
 * The component will only load on the client side to avoid SSR issues.
 *
 * @param loadFn - Function that returns a Promise resolving to a component module
 * @returns A function that can be used to create a lazy component instance
 */
export function lazy(loadFn) {
    return async function loadComponent() {
        if (!browser) {
            return null;
        }
        try {
            const module = await loadFn();
            return module.default;
        }
        catch (err) {
            console.error('Failed to load component:', err);
            return null;
        }
    };
}
