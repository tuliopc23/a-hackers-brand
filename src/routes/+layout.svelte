<script>
	import '../app.css';
	import '../hooks.client.js'; // Initialize web vitals tracking
	import { lazy } from '$lib/utils/lazy.js';
	import { dev } from '$app/environment';

	// Critical components: preload immediately
	import { PerformanceDashboard } from '$lib/components';

	// Non-critical components: lazy load
	const lazyPerfOverlay = lazy(() => import('$lib/components/PerfOverlay.svelte'));

	// Only show PerfOverlay in development
	$: showPerfOverlay = dev && lazyPerfOverlay.component;
</script>

<slot />

<!-- Critical: Global Performance Dashboard (always loaded) -->
<PerformanceDashboard />

<!-- Non-critical: Performance Overlay (lazy loaded, dev only) -->
{#if dev}
	{#if lazyPerfOverlay.loading}
		<!-- Optional: Show loading state for overlay -->
		<div class="fixed bottom-4 left-4 p-2 bg-black/20 rounded text-xs text-white/60">Loading perf overlay...</div>
	{:else if lazyPerfOverlay.error}
		<!-- Optional: Show error state -->
		<div class="fixed bottom-4 left-4 p-2 bg-red-500/20 rounded text-xs text-red-400">
			Error loading perf overlay: {lazyPerfOverlay.error}
		</div>
	{:else if showPerfOverlay}
		<svelte:component this={lazyPerfOverlay.component} />
	{/if}
{/if}
