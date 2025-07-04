<script lang="ts">
	import { onMount } from 'svelte';
	import { Canvas } from '@threlte/core';
	import { OrbitControls, Environment } from '@threlte/extras';
	import { brandColors } from '../../tokens';
	import LiquidSphere from './LiquidSphere.svelte';
	import LiquidPlane from './LiquidPlane.svelte';
	import ParticleSystem from './ParticleSystem.svelte';

	interface Props {
		variant?: 'sphere' | 'plane' | 'particles' | 'combined';
		animated?: boolean;
		interactive?: boolean;
		glowIntensity?: number;
		liquidSpeed?: number;
		colorPrimary?: string;
		colorSecondary?: string;
		environmentPreset?: 'city' | 'forest' | 'night' | 'studio';
		class?: string;
	}

	const {
		variant = 'combined',
		animated = true,
		interactive = true,
		glowIntensity = 1.0,
		liquidSpeed = 1.0,
		colorPrimary = brandColors.terminal.green,
		colorSecondary = brandColors.terminal.cyan,
		environmentPreset = 'night',
		class: className = ''
	}: Props = $props();

	let canvasRef: HTMLElement;
	let mouseX = $state(0);
	let mouseY = $state(0);
	let time = $state(0);

	onMount(() => {
		// Start animation loop
		if (animated) {
			const animate = () => {
				time += 0.016 * liquidSpeed; // 60fps
				requestAnimationFrame(animate);
			};
			animate();
		}

		// Mouse tracking for interactive effects
		if (interactive && canvasRef) {
			const handleMouseMove = (e: MouseEvent) => {
				const rect = canvasRef.getBoundingClientRect();
				mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
				mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
			};

			canvasRef.addEventListener('mousemove', handleMouseMove);
			
			return () => {
				canvasRef.removeEventListener('mousemove', handleMouseMove);
			};
		}
	});
</script>

<div
	bind:this={canvasRef}
	class="liquid-glass-scene {className}"
	style="
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		border-radius: 16px;
		background: linear-gradient(135deg, 
			rgba(0, 0, 0, 0.9) 0%, 
			rgba(26, 26, 46, 0.8) 50%, 
			rgba(22, 33, 62, 0.7) 100%
		);
	"
>
	<Canvas
		shadows
		dpr={[1, 2]}
		colorManagement
		camera={{
			position: [0, 0, 5],
			fov: 45,
			near: 0.1,
			far: 1000
		}}
		style="width: 100%; height: 100%;"
	>
		<!-- Environment and Lighting -->
		<Environment preset={environmentPreset} />
		
		<!-- Ambient light for glass effects -->
		<ambientLight intensity={0.3} />
		
		<!-- Point light for liquid highlights -->
		<pointLight 
			position={[5, 5, 5]} 
			intensity={glowIntensity} 
			color={colorPrimary}
			castShadow
		/>
		
		<!-- Rim light for glass edges -->
		<pointLight 
			position={[-5, -5, 5]} 
			intensity={glowIntensity * 0.7} 
			color={colorSecondary}
		/>

		<!-- Interactive camera controls -->
		{#if interactive}
			<OrbitControls 
				enableDamping
				dampingFactor={0.05}
				enableZoom={true}
				enablePan={false}
				maxPolarAngle={Math.PI / 2}
				minDistance={2}
				maxDistance={10}
			/>
		{/if}

		<!-- Liquid Glass Components -->
		{#if variant === 'sphere' || variant === 'combined'}
			<LiquidSphere 
				{time}
				{mouseX}
				{mouseY}
				{colorPrimary}
				{colorSecondary}
				{glowIntensity}
				position={variant === 'combined' ? [0, 1, 0] : [0, 0, 0]}
			/>
		{/if}

		{#if variant === 'plane' || variant === 'combined'}
			<LiquidPlane 
				{time}
				{mouseX}
				{mouseY}
				{colorPrimary}
				{colorSecondary}
				{glowIntensity}
				position={variant === 'combined' ? [0, -1.5, 0] : [0, 0, 0]}
			/>
		{/if}

		{#if variant === 'particles' || variant === 'combined'}
			<ParticleSystem 
				{time}
				{mouseX}
				{mouseY}
				{colorPrimary}
				{colorSecondary}
				count={variant === 'combined' ? 500 : 1000}
			/>
		{/if}
	</Canvas>

	<!-- HUD Overlay -->
	<div class="hud-overlay" style="
		position: absolute;
		top: 20px;
		left: 20px;
		right: 20px;
		pointer-events: none;
		color: {colorPrimary};
		font-family: 'PP Supply Mono', monospace;
		font-size: 12px;
		text-shadow: 0 0 10px {colorPrimary};
		z-index: 10;
	">
		<div style="display: flex; justify-content: space-between; align-items: flex-start;">
			<div>
				<div>LIQUID GLASS SYSTEM</div>
				<div style="opacity: 0.7; margin-top: 4px;">
					Mode: {variant.toUpperCase()}
				</div>
				<div style="opacity: 0.7; margin-top: 2px;">
					FPS: {Math.round(60 * liquidSpeed)}
				</div>
			</div>
			
			<div style="text-align: right;">
				<div>WebGL Active</div>
				<div style="opacity: 0.7; margin-top: 4px;">
					Glow: {Math.round(glowIntensity * 100)}%
				</div>
				{#if interactive}
					<div style="opacity: 0.7; margin-top: 2px;">
						Interactive Mode
					</div>
				{/if}
			</div>
		</div>
	</div>

	<!-- Performance indicator -->
	<div class="performance-indicator" style="
		position: absolute;
		bottom: 20px;
		right: 20px;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: {colorPrimary};
		box-shadow: 0 0 10px {colorPrimary};
		animation: pulse 2s ease-in-out infinite;
		pointer-events: none;
		z-index: 10;
	"></div>
</div>

<style>
	@keyframes pulse {
		0%, 100% { opacity: 1; transform: scale(1); }
		50% { opacity: 0.6; transform: scale(1.2); }
	}

	.liquid-glass-scene {
		box-shadow: 
			0 8px 32px rgba(0, 0, 0, 0.3),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
	}

	.liquid-glass-scene:hover .hud-overlay {
		opacity: 1;
		transition: opacity 0.3s ease;
	}

	.hud-overlay {
		opacity: 0.8;
		transition: opacity 0.3s ease;
	}
</style>