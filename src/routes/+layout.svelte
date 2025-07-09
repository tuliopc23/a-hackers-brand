<script>
	import '../app.css';
	import '../hooks.client.js'; // Initialize web vitals tracking
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';

	// Critical components: preload immediately
	import { PerformanceDashboard } from '$lib/components';

	// Non-critical components: lazy load
	let PerfOverlay = $state(null);
	let loading = $state(true);
	let error = $state(null);

	// Svelte 5 children prop
	let { children } = $props();

	onMount(async () => {
		if (!dev) {
			loading = false;
			return;
		}

		try {
			const module = await import('$lib/components/PerfOverlay.svelte');
			PerfOverlay = module.default;
			loading = false;
		} catch (err) {
			error = err instanceof Error ? err.message : 'Failed to load component';
			loading = false;
		}
	});
</script>

{@render children()}

<!-- Critical: Global Performance Dashboard (always loaded) -->
<PerformanceDashboard />

<!-- Non-critical: Performance Overlay (lazy loaded, dev only) -->
{#if dev}
	{#if loading}
		<!-- Optional: Show loading state for overlay -->
		<div class="fixed bottom-4 left-4 p-2 bg-black/20 rounded text-xs text-white/60">Loading perf overlay...</div>
	{:else if error}
		<!-- Optional: Show error state -->
		<div class="fixed bottom-4 left-4 p-2 bg-red-500/20 rounded text-xs text-red-400">
			Error loading perf overlay: {error}
		</div>
	{:else if PerfOverlay}
		<svelte:component this={PerfOverlay} />
	{/if}
{/if}
