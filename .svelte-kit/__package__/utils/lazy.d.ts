/**
 * Creates a lazy-loaded component that's safe for both SSR and client-side rendering.
 * The component will only load on the client side to avoid SSR issues.
 *
 * @param loadFn - Function that returns a Promise resolving to a component module
 * @returns A function that can be used to create a lazy component instance
 */
export function lazy(loadFn: any): () => Promise<any>;
//# sourceMappingURL=lazy.d.ts.map