<script lang="ts">
	import { onMount } from 'svelte';
	import { lazyWithRetry, preload } from '$lib/utils/lazy.js';

	interface Props {
		class?: string;
		width?: number;
		height?: number;
		scene?: 'glass' | 'terminal' | 'default';
		enable3D?: boolean;
		quality?: 'low' | 'medium' | 'high';
		autoRotate?: boolean;
	}

	const {
		class: className = '',
		width = 800,
		height = 600,
		scene = 'terminal',
		enable3D = false,
		quality = 'medium',
		autoRotate = true
	}: Props = $props();

	let canvasContainer = $state<HTMLDivElement>();
	let ThrelteComponent = $state<any>(null);
	let loading = $state(true);
	let error = $state<string | null>(null);
	let isInViewport = $state(false);

	onMount(() => {
		if (!enable3D) {
			loading = false;
			return;
		}

		// Intersection Observer for lazy loading
		const observer = new IntersectionObserver(
			(entries: IntersectionObserverEntry[]) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !ThrelteComponent) {
						isInViewport = true;
						loadThrelteScene();
						observer.unobserve(entry.target);
					}
				});
			},
			{
				root: null,
				rootMargin: '50px',
				threshold: 0.1
			}
		);

		if (canvasContainer) {
			observer.observe(canvasContainer);
		}

		return () => {
			observer.disconnect();
		};
	});

	async function loadThrelteScene() {
		try {
			let module;
			switch (scene) {
				case 'glass':
					module = await import('./GlassScene.svelte');
					break;
				case 'terminal':
					module = await import('./TerminalOrbit.svelte');
					break;
				default:
					module = await import('./ThrelteCanvas.svelte');
					break;
			}
			ThrelteComponent = module.default;
			loading = false;
		} catch (err) {
			error = `Failed to load 3D Scene: ${err}`;
			loading = false;
		}
	}
</script>

<div bind:this={canvasContainer} class={`threlte-canvas-container ${className}`} style="min-height: {height}px;">
	{#if !enable3D}
		<div class="threlte-canvas-disabled">
			<div class="disabled-content">
				<div class="text-terminal-green font-mono">3D Scene Disabled</div>
				<span class="text-white/60 text-sm">Enable in Performance Overlay</span>
			</div>
		</div>
	{:else if loading}
		<div class="threlte-canvas-loading">
			<div class="loading-content">
				<div class="animate-spin w-8 h-8 border-2 border-terminal-green border-t-transparent rounded-full"></div>
				<span class="text-terminal-green font-mono">Loading 3D Scene...</span>
			</div>
		</div>
	{:else if error}
		<div class="threlte-canvas-loading">
			<div class="loading-content">
				<div class="text-red-400 font-mono">{error}</div>
			</div>
		</div>
	{:else if ThrelteComponent}
		{#if scene === 'glass' || scene === 'terminal'}
			{#await import('@threlte/core') then { Canvas }}
				<div class="threlte-canvas">
					<Canvas>
						<ThrelteComponent />
					</Canvas>
				</div>
			{/await}
		{:else}
			<ThrelteComponent class="threlte-canvas" {width} {height} />
		{/if}
	{/if}
</div>

<style>
	.threlte-canvas-container {
		width: 100%;
		height: 100%;
	}

	.threlte-canvas {
		width: 100%;
		height: 100%;
		border-radius: 12px;
		overflow: hidden;
		background: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(0, 212, 170, 0.2);
	}

	.threlte-canvas-loading {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 12px;
		background: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(0, 212, 170, 0.2);
		height: 100%;
	}

	.threlte-canvas-disabled {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 12px;
		background: rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		height: 100%;
	}

	.loading-content,
	.disabled-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
	}

	.text-terminal-green {
		color: #00d4aa;
	}

	.text-red-400 {
		color: #f87171;
	}

	.text-white\/60 {
		color: rgba(255, 255, 255, 0.6);
	}
</style>
