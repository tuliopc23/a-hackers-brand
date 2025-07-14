/**
 * Motion Effects Helpers for Svelte 5
 * Provides utilities for integrating motion with $effect and proper cleanup
 */
/**
 * Convert a store to work with $effect and provide proper cleanup
 * Use this in components to convert store subscriptions to work with effects
 */
export function toEffect(store, callback) {
    let cleanup;
    // Subscribe to store and handle cleanup
    const unsubscribe = store.subscribe((value) => {
        // Clean up previous effect
        if (typeof cleanup === 'function') {
            cleanup();
        }
        // Run new effect and store cleanup function
        cleanup = callback(value);
    });
    // Return cleanup function for the effect
    return () => {
        if (typeof cleanup === 'function') {
            cleanup();
        }
        unsubscribe();
    };
}
/**
 * Helper to create motion state that works with runes
 */
export function createMotionState(initialValue) {
    let state = $state(initialValue);
    return {
        get current() {
            return state;
        },
        set current(value) {
            state = value;
        },
        update(updater) {
            state = updater(state);
        }
    };
}
/**
 * Animation frame helper that works with effects
 */
export function useAnimationFrame(callback, enabledDefault = true) {
    let animationId = null;
    let enabled = $state(enabledDefault);
    const animate = (time) => {
        if (!enabled)
            return;
        const shouldContinue = callback(time);
        if (shouldContinue !== false) {
            animationId = requestAnimationFrame(animate);
        }
    };
    const start = () => {
        if (animationId === null && enabled) {
            animationId = requestAnimationFrame(animate);
        }
    };
    const stop = () => {
        if (animationId !== null) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    };
    const setEnabled = (value) => {
        enabled = value;
    };
    // Auto-start/stop based on enabled state
    $effect(() => {
        if (enabled) {
            start();
        }
        else {
            stop();
        }
        return stop;
    });
    return { start, stop, setEnabled, get enabled() { return enabled; } };
}
/**
 * GSAP context helper for effects
 */
export function useGSAPContext(setup, dependencies = []) {
    // Note: This would need GSAP imported, but keeping as placeholder
    // since GSAP might not be available in all contexts
    $effect(() => {
        // Only run if dependencies change
        setup();
        // Cleanup would be handled by GSAP context
        return () => {
            // GSAP cleanup if needed
        };
    });
}
/**
 * Media query helper for responsive motion
 */
export function useReducedMotion() {
    let prefersReducedMotion = $state(false);
    $effect(() => {
        if (typeof window === 'undefined')
            return;
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        prefersReducedMotion = mediaQuery.matches;
        const handleChange = (e) => {
            prefersReducedMotion = e.matches;
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    });
    return {
        get value() {
            return prefersReducedMotion;
        }
    };
}
/**
 * Intersection observer helper for scroll-triggered animations
 */
export function useIntersectionObserver(element, callback, options) {
    $effect(() => {
        if (!element)
            return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(callback);
        }, options);
        observer.observe(element);
        return () => {
            observer.disconnect();
        };
    });
}
/**
 * Event listener helper with automatic cleanup
 */
export function useEventListener(element, event, handler, options) {
    $effect(() => {
        if (!element)
            return;
        element.addEventListener(event, handler, options);
        return () => {
            element.removeEventListener(event, handler, options);
        };
    });
}
/**
 * Debounced effect helper
 */
export function useDebouncedEffect(callback, delay, dependencies = []) {
    let timeoutId = null;
    let cleanup;
    $effect(() => {
        // Clear existing timeout and cleanup
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        if (typeof cleanup === 'function') {
            cleanup();
        }
        // Set new timeout
        timeoutId = setTimeout(() => {
            cleanup = callback();
        }, delay);
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            if (typeof cleanup === 'function') {
                cleanup();
            }
        };
    });
}
