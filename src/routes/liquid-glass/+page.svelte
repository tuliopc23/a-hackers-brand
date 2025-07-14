<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import LiquidGlassShowcase from '$lib/components/LiquidGlassShowcase.svelte';

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Liquid Glass System - A Hacker's Brand</title>
	<meta
		name="description"
		content="Experience Apple's WWDC 2025 Liquid Glass aesthetics blended with hacker terminal themes in our comprehensive design system."
	/>
	<meta property="og:title" content="Liquid Glass System - A Hacker's Brand" />
	<meta property="og:description" content="Apple WWDC 2025 Liquid Glass meets Hacker Aesthetics" />
	<meta property="og:type" content="website" />
</svelte:head>

{#if mounted}
	<LiquidGlassShowcase />
{:else}
	<div class="loading-container">
		<div class="loading-spinner"></div>
		<p>Loading Liquid Glass System...</p>
	</div>
{/if}

<style>
	.loading-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%);
		color: #f5f5f7;
	}

	.loading-spinner {
		width: 40px;
		height: 40px;
		border: 3px solid rgba(0, 212, 170, 0.3);
		border-top: 3px solid #00d4aa;
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin-bottom: 1rem;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
