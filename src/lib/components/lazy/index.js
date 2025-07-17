/**
 * A Hacker's Brand - Lazy Loading Components
 * Barrel export for all lazy-loaded components
 */

// Lazy component wrappers
export { default as LazyThrelteCanvas } from '../LazyThrelteCanvas.svelte';
export { default as LazyTerminalWindow } from '../LazyTerminalWindow.svelte';

// Lazy loading utilities
export { lazy, lazyWithRetry, lazyWithIntersection, preload } from '../../utils/lazy.js';

/**
 * Lazy-loaded Monaco Editor
 */
export const LazyMonacoEditor = async () => {
    const module = await import('../playground/MonacoEditor.svelte');
    return module.default;
};

/**
 * Lazy-loaded DataTable component
 */
export const LazyDataTable = async () => {
    const module = await import('../DataTable.svelte');
    return module.default;
};

/**
 * Preload critical components for better performance
 */
export async function preloadCriticalComponents() {
    if (typeof window === 'undefined') return;

    // Preload commonly used components
    try {
        await Promise.all([
            import('../Button.svelte'),
            import('../Input.svelte'),
            import('../Card.svelte')
        ]);
    } catch (error) {
        console.warn('Failed to preload critical components:', error);
    }
}

/**
 * Preload 3D components when needed
 */
export async function preload3DComponents() {
    if (typeof window === 'undefined') return;

    try {
        await Promise.all([
            import('../webgl/LiquidBackground.svelte'),
            import('../webgl/LiquidGlassScene.svelte')
        ]);
    } catch (error) {
        console.warn('Failed to preload 3D components:', error);
    }
} 