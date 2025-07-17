import { browser } from '$app/environment';

/**
 * Creates a lazy-loaded component that's safe for both SSR and client-side rendering.
 * The component will only load on the client side to avoid SSR issues.
 *
 * @param loadFn - Function that returns a Promise resolving to a component module
 * @returns A function that can be used to create a lazy component instance
 */
export function lazy<T = unknown>(loadFn: () => Promise<{ default: T }>) {
	return async function loadComponent() {
		if (!browser) {
			return null;
		}

		try {
			const module = await loadFn();
			return module.default;
		} catch (err) {
			// Component failed to load - integrate with error tracking service
			return null;
		}
	};
}

/**
 * Creates a lazy-loaded component with intersection observer for performance
 * Only loads when the component enters the viewport
 */
export function lazyWithIntersection<T = unknown>(
	loadFn: () => Promise<{ default: T }>,
	options: IntersectionObserverInit = {}
) {
	return {
		loadFn,
		observerOptions: {
			rootMargin: '50px',
			threshold: 0.1,
			...options
		}
	};
}

/**
 * Preload a component module for better performance
 */
export function preload<T = unknown>(loadFn: () => Promise<{ default: T }>) {
	if (!browser) return Promise.resolve(null);

	return loadFn().catch(() => null);
}

/**
 * Lazy load with retry mechanism
 */
export function lazyWithRetry<T = unknown>(
	loadFn: () => Promise<{ default: T }>,
	maxRetries = 3,
	retryDelay = 1000
) {
	return async function loadComponentWithRetry() {
		if (!browser) return null;

		for (let attempt = 0; attempt <= maxRetries; attempt++) {
			try {
				const module = await loadFn();
				return module.default;
			} catch (err) {
				lastError = err instanceof Error ? err : new Error(String(err));

				if (attempt < maxRetries) {
					// Wait before retrying
					await new Promise(resolve => setTimeout(resolve, retryDelay * (attempt + 1)));
				}
			}
		}

		// All retries failed - log error for monitoring
		return null;
	};
}
