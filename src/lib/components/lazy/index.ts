/**
 * Lazy-loaded components for performance optimization
 * These components are loaded only when needed to reduce initial bundle size
 */

import { lazyWithRetry, lazyWithIntersection } from '$lib/utils/lazy.js';

// === HEAVY 3D/WebGL COMPONENTS ===
export const LazyThrelteCanvas = lazyWithRetry(
	() => import('../LazyThrelteCanvas.svelte'),
	3,
	1000
);

export const LazyLiquidGlassScene = lazyWithRetry(
	() => import('../webgl/LiquidGlassScene.svelte'),
	3,
	1000
);

export const LazyAdvancedLiquidGlassScene = lazyWithRetry(
	() => import('../webgl/AdvancedLiquidGlassScene.svelte'),
	3,
	1000
);

export const LazyParticleSystem = lazyWithRetry(
	() => import('../webgl/ParticleSystem.svelte'),
	3,
	1000
);

// === EDITOR COMPONENTS ===
export const LazyMonacoEditor = lazyWithRetry(
	() => import('../LazyMonacoEditor.svelte'),
	3,
	1000
);

export const LazyCodeHighlight = lazyWithRetry(
	() => import('../CodeHighlight.svelte'),
	2,
	500
);

// === TERMINAL COMPONENTS ===
export const LazyTerminalWindow = lazyWithRetry(
	() => import('../LazyTerminalWindow.svelte'),
	2,
	500
);

export const LazyAdvancedTerminal = lazyWithRetry(
	() => import('../AdvancedTerminal.svelte'),
	2,
	500
);

export const LazyLiquidTerminal = lazyWithRetry(
	() => import('../LiquidTerminal.svelte'),
	2,
	500
);

// === COMPLEX UI COMPONENTS ===
export const LazyDataTable = lazyWithRetry(
	() => import('../DataTable.svelte'),
	2,
	500
);

export const LazyDataGrid = lazyWithRetry(
	() => import('../DataGrid.svelte'),
	2,
	500
);

export const LazyPerformanceDashboard = lazyWithRetry(
	() => import('../PerformanceDashboard.svelte'),
	2,
	500
);

export const LazyPerformanceMonitor = lazyWithRetry(
	() => import('../PerformanceMonitor.svelte'),
	2,
	500
);

// === SHOWCASE COMPONENTS ===
export const LazyAppleLiquidShowcase = lazyWithRetry(
	() => import('../AppleLiquidShowcase.svelte'),
	2,
	500
);

export const LazyLiquidGlassShowcase = lazyWithRetry(
	() => import('../LiquidGlassShowcase.svelte'),
	2,
	500
);

// === INTERSECTION OBSERVER BASED LAZY LOADING ===
export const LazyThrelteCanvasIntersection = lazyWithIntersection(
	() => import('../LazyThrelteCanvas.svelte'),
	{ rootMargin: '100px', threshold: 0.1 }
);

export const LazyMonacoEditorIntersection = lazyWithIntersection(
	() => import('../LazyMonacoEditor.svelte'),
	{ rootMargin: '200px', threshold: 0.1 }
);

// === UTILITY FUNCTIONS ===

/**
 * Preload critical components for better UX
 */
export async function preloadCriticalComponents() {
	const criticalComponents = [
		LazyTerminalWindow,
		LazyCodeHighlight,
		LazyDataTable
	];

	// Preload in parallel but don't wait for completion
	criticalComponents.forEach(loader => {
		loader().catch(() => {
			// Silently handle preload failures
		});
	});
}

/**
 * Preload 3D components when user shows intent to interact
 */
export async function preload3DComponents() {
	const components3D = [
		LazyThrelteCanvas,
		LazyLiquidGlassScene,
		LazyParticleSystem
	];

	// Preload 3D components with slight delay
	setTimeout(() => {
		components3D.forEach(loader => {
			loader().catch(() => {
				// Silently handle preload failures
			});
		});
	}, 2000);
}

/**
 * Get component loading status
 */
export function getComponentLoadingStatus() {
	return {
		timestamp: new Date().toISOString(),
		// Add component loading metrics here
	};
}
