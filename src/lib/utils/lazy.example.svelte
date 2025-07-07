<!-- Example usage of the lazy() helper -->
<script>
	import { lazy } from './lazy.js';

	// Example 1: Basic lazy loading
	const LazyHeavyComponent = lazy(() => import('../components/ThrelteCanvas.svelte'));

	// Example 2: Lazy load with intersection observer for viewport loading
	const LazyOffscreenComponent = lazy(() => import('../components/GlassScene.svelte'));

	// Example 3: Conditional lazy loading based on feature flags
	const LazyFeatureComponent = lazy(() => import('../components/TerminalOrbit.svelte'));

	let showFeature = false;
	let elementRef;
	let isInViewport = false;

	// Intersection observer for viewport-based loading
	import { onMount } from 'svelte';

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			isInViewport = entries[0].isIntersecting;
		});

		if (elementRef) {
			observer.observe(elementRef);
		}

		return () => observer.disconnect();
	});
</script>

<!-- Example 1: Basic lazy loading with loading states -->
<section>
	<h2>Basic Lazy Loading</h2>
	{#if LazyHeavyComponent.loading}
		<div class="loading-placeholder">Loading heavy component...</div>
	{:else if LazyHeavyComponent.error}
		<div class="error-placeholder">
			Error: {LazyHeavyComponent.error}
		</div>
	{:else if LazyHeavyComponent.component}
		<svelte:component this={LazyHeavyComponent.component} />
	{/if}
</section>

<!-- Example 2: Viewport-based lazy loading -->
<section bind:this={elementRef}>
	<h2>Viewport-based Lazy Loading</h2>
	{#if isInViewport}
		{#if LazyOffscreenComponent.loading}
			<div class="loading-placeholder">Loading when in viewport...</div>
		{:else if LazyOffscreenComponent.component}
			<svelte:component this={LazyOffscreenComponent.component} />
		{/if}
	{:else}
		<div class="placeholder">Scroll to load this component</div>
	{/if}
</section>

<!-- Example 3: Feature flag based lazy loading -->
<section>
	<h2>Feature-based Lazy Loading</h2>
	<button onclick={() => (showFeature = !showFeature)}> Toggle Feature </button>

	{#if showFeature}
		{#if LazyFeatureComponent.loading}
			<div class="loading-placeholder">Loading feature component...</div>
		{:else if LazyFeatureComponent.error}
			<div class="error-placeholder">
				Error: {LazyFeatureComponent.error}
			</div>
		{:else if LazyFeatureComponent.component}
			<svelte:component this={LazyFeatureComponent.component} />
		{/if}
	{/if}
</section>

<style>
	.loading-placeholder {
		padding: 2rem;
		text-align: center;
		background: rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		color: #666;
	}

	.error-placeholder {
		padding: 2rem;
		text-align: center;
		background: rgba(255, 0, 0, 0.1);
		border-radius: 8px;
		color: #c00;
	}

	.placeholder {
		padding: 2rem;
		text-align: center;
		background: rgba(0, 0, 0, 0.05);
		border-radius: 8px;
		color: #999;
	}
</style>
