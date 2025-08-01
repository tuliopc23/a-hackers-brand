<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { MatrixRain } from '$lib/components';
	
	let { children } = $props();
	
	// Show matrix rain effect on home page only
	const showMatrixRain = $derived($page.url.pathname === '/');
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="min-h-screen bg-black text-white">
	{#if showMatrixRain}
		<div class="fixed inset-0 z-0">
			<MatrixRain />
		</div>
	{/if}
	
	<div class="relative z-10">
		{@render children()}
	</div>
</div>

<style>
	:global(html) {
		font-family: 'Inter', system-ui, sans-serif;
		background-color: black;
		color: white;
	}
	
	:global(code, pre) {
		font-family: 'JetBrains Mono', 'Consolas', 'Monaco', monospace;
	}
	
	:global(::selection) {
		background-color: #00ff00;
		color: black;
	}
	
	:global(::-webkit-scrollbar) {
		width: 8px;
		height: 8px;
	}
	
	:global(::-webkit-scrollbar-track) {
		background: rgba(0, 255, 0, 0.1);
	}
	
	:global(::-webkit-scrollbar-thumb) {
		background: rgba(0, 255, 0, 0.5);
		border-radius: 4px;
	}
	
	:global(::-webkit-scrollbar-thumb:hover) {
		background: rgba(0, 255, 0, 0.7);
	}
</style>