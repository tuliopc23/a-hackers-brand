<script lang="ts">
	import { Canvas, T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import { onMount } from 'svelte';

	interface Props {
		class?: string;
		width?: number;
		height?: number;
	}

	const { class: className = '', width = 800, height = 600 }: Props = $props();

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div class={`threlte-canvas ${className}`}>
		<Canvas>
			<OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />

			<!-- Ambient light -->
			<T.AmbientLight intensity={0.5} />

			<!-- Directional light -->
			<T.DirectionalLight position={[10, 10, 5]} intensity={1} />

			<!-- Mesh with a simple geometry -->
			<T.Mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
				<T.BoxGeometry args={[2, 2, 2]} />
                <T.MeshStandardMaterial color="var(--color-terminal-green)" transparent={true} opacity={0.8} metalness={0.5} roughness={0.2} />
			</T.Mesh>

			<!-- Floating spheres -->
			<T.Mesh position={[3, 1, 0]}>
				<T.SphereGeometry args={[0.5, 32, 32]} />
                <T.MeshStandardMaterial color="var(--color-bubble-tea-purple)" transparent={true} opacity={0.7} metalness={0.3} roughness={0.4} />
			</T.Mesh>

			<T.Mesh position={[-3, -1, 0]}>
				<T.SphereGeometry args={[0.7, 32, 32]} />
                <T.MeshStandardMaterial color="var(--color-terminal-cyan)" transparent={true} opacity={0.6} metalness={0.4} roughness={0.3} />
			</T.Mesh>
		</Canvas>
	</div>
{:else}
	<div class={`threlte-canvas-loading ${className}`} style="min-height: {height}px;">
		<div class="loading-content">
			<div class="animate-spin w-8 h-8 border-2 border-terminal-green border-t-transparent rounded-full"></div>
			<span class="text-terminal-green font-mono">Loading 3D Scene...</span>
		</div>
	</div>
{/if}

<style>
	.threlte-canvas {
		width: 100%;
		height: 100%;
		border-radius: 12px;
		overflow: hidden;
		background: rgba(0, 0, 0, 0.3);
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(0, 212, 170, 0.2);
	}

	.threlte-canvas-loading {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 12px;
		background: rgba(0, 0, 0, 0.3);
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(0, 212, 170, 0.2);
	}

	.loading-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
	}
</style>
