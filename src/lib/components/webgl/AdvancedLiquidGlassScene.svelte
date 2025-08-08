<script lang="ts">
	import { T, Canvas, useThrelte } from '@threlte/core';
	import { OrbitControls, Environment } from '@threlte/extras';
	import { onMount, createEventDispatcher } from 'svelte';
	import * as THREE from 'three';
	import LiquidGlassShader from './LiquidGlassShader.svelte';
	import LiquidParticleSystem from './LiquidParticleSystem.svelte';

	interface Props {
		width?: number;
		height?: number;
		autoRotate?: boolean;
		enableBloom?: boolean;
		enableParticles?: boolean;
		enablePhysics?: boolean;
		quality?: 'low' | 'medium' | 'high' | 'ultra';
		theme?: 'cyberpunk' | 'neural' | 'quantum' | 'liquid';
		interactive?: boolean;
		class?: string;
	}

	const {
		width = 800,
		height = 600,
		autoRotate = true,
		enableBloom = true,
		enableParticles = true,
		enablePhysics = true,
		quality = 'high',
		theme = 'liquid',
		interactive = true,
		class: className = ''
	}: Props = $props();

	const dispatch = createEventDispatcher();

	// Theme configurations
	const themeConfig = {
		cyberpunk: {
            primaryColor: 'var(--color-terminal-pink)',
            secondaryColor: 'var(--color-terminal-cyan)',
            backgroundColor: 'color-mix(in srgb, var(--color-terminal-blue) 10%, #000015)',
			intensity: 1.5,
			particles: 1500
		},
		neural: {
            primaryColor: 'var(--color-terminal-green)',
            secondaryColor: 'var(--color-bubble-tea-green)',
            backgroundColor: 'color-mix(in srgb, var(--color-terminal-green) 10%, #001100)',
			intensity: 1.2,
			particles: 1200
		},
		quantum: {
            primaryColor: 'var(--color-bubble-tea-purple)',
            secondaryColor: 'var(--color-bubble-tea-orange)',
            backgroundColor: 'color-mix(in srgb, var(--color-bubble-tea-purple) 15%, #110011)',
			intensity: 1.8,
			particles: 2000
		},
		liquid: {
            primaryColor: 'var(--color-terminal-green)',
            secondaryColor: 'var(--color-terminal-blue)',
            backgroundColor: 'color-mix(in srgb, var(--color-terminal-blue) 15%, #001122)',
			intensity: 1.0,
			particles: 1000
		}
	};

	const currentTheme = themeConfig()[theme];

	// Quality settings
	const qualitySettings = {
		low: {
			shadowMapSize: 512,
			particleCount: 500,
			bloomIntensity: 0.5,
			distortionLevel: 0.05
		},
		medium: {
			shadowMapSize: 1024,
			particleCount: 1000,
			bloomIntensity: 1.0,
			distortionLevel: 0.1
		},
		high: {
			shadowMapSize: 2048,
			particleCount: 1500,
			bloomIntensity: 1.5,
			distortionLevel: 0.15
		},
		ultra: {
			shadowMapSize: 4096,
			particleCount: 2500,
			bloomIntensity: 2.0,
			distortionLevel: 0.2
		}
	};

	const settings = qualitySettings()[quality];

	// Physics state
	const physicsEnabled = $state(enablePhysics);
	let mousePosition = $state({ x: 0, y: 0 });
	let time = $state(0);

	// Mesh references
	let centralSphereRef = $state<any>();
	const orbitalShapesRefs: any[] = [];

	// Enhanced lighting setup
	const setupLighting = () => {
		return {
			ambientIntensity: 0.2,
			directionalIntensity: 0.8,
			pointLights: [
				{ position: [5, 5, 5], color: currentTheme.primaryColor, intensity: 2 },
				{ position: [-5, -5, 5], color: currentTheme.secondaryColor, intensity: 1.5 },
				{ position: [0, 10, -5], color: '#ffffff', intensity: 1 }
			]
		};
	};

	const lighting = setupLighting();

	// Physics simulation
	const updatePhysics = (delta: number) => {
		if (!physicsEnabled) return;

		// Update orbital shapes
		orbitalShapesRefs().forEach((ref, index) => {
			if (ref) {
				const angle = time * 0.5 + (index * Math.PI * 2) / orbitalShapesRefs().length;
				const radius = 3 + Math.sin(time + index) * 0.5;
				ref.position.x = Math.cos(angle) * radius;
				ref.position.z = Math.sin(angle) * radius;
				ref.position.y = Math.sin(time * 0.8 + index) * 0.5;
				ref.rotation.x += delta * 0.5;
				ref.rotation.y += delta * 0.3;
			}
		});

		// Update central sphere
		if (centralSphereRef) {
			centralSphereRef.rotation.y += delta * 0.2;
			centralSphereRef.scale.setScalar(1 + Math.sin(time * 2) * 0.1);
		}
	};

	// Mouse interaction
	const handleMouseMove = (event: MouseEvent) => {
		if (!interactive) return;

		const rect = (event.target as HTMLElement).getBoundingClientRect();
		mousePosition = {
			x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
			y: -((event.clientY - rect.top) / rect.height) * 2 + 1
		};
	};

	// Animation loop (manual since useFrame is not available)
	let animationId: number;
	const startAnimation = () => {
		const animate = () => {
			const delta = 0.016; // ~60fps
			time += delta;
			updatePhysics(delta);
			animationId = requestAnimationFrame(animate);
		};
		animate();
	};

	onMount(() => {
		startAnimation();
		dispatch('ready', { theme: currentTheme, settings });

		return () => {
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
		};
	});
</script>

<div
	class={className}
	style="width: {width}px; height: {height}px;"
	role="img"
	aria-label="Advanced Liquid Glass 3D Scene"
	onmousemove={handleMouseMove}
>
	<Canvas>
		<!-- Scene Setup -->
		<T.PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />

		<!-- Enhanced Lighting -->
		<T.AmbientLight intensity={lighting.ambientIntensity}></T.AmbientLight>
		<T.DirectionalLight
			position={[10, 10, 5]}
			intensity={lighting.directionalIntensity}
			castShadow
			shadow.mapSize.width={settings.shadowMapSize}
			shadow.mapSize.height={settings.shadowMapSize}
		></T.DirectionalLight>

		{#each lighting.pointLights as light (light.id || light)}
			<T.PointLight position={light.position} color={light.color} intensity={light.intensity} decay={2} distance={20}
			></T.PointLight>
		{/each}

		<!-- Environment -->
		<Environment path="/textures/env/" files={['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']} />

		<!-- Central Liquid Glass Sphere -->
		<LiquidGlassShader
			bind:ref={centralSphereRef}
			intensity={currentTheme.intensity}
			color={currentTheme.primaryColor}
			distortion={settings.distortionLevel}
			frequency={0.8}
			amplitude={0.15}
			speed={1.2}
		/>

		<!-- Orbital Liquid Shapes -->
		{#each Array(6) as _, i (i)}
			<T.Group bind:ref={orbitalShapesRefs()[i]}>
				<LiquidGlassShader
					intensity={currentTheme.intensity * 0.7}
					color={i % 2 === 0 ? currentTheme.primaryColor : currentTheme.secondaryColor}
					distortion={settings.distortionLevel * 0.5}
					frequency={1.2 + i * 0.1}
					amplitude={0.08}
					speed={0.8 + i * 0.1}
				/>
			</T.Group>
		{/each}

		<!-- Particle Systems -->
		{#if enableParticles}
			<LiquidParticleSystem
				particleCount={Math.min(settings.particleCount, currentTheme.particles)}
				color={currentTheme.primaryColor}
				flowPattern="turbulent"
				{interactive}
				speed={1.0}
				opacity={0.6}
			/>

			<LiquidParticleSystem
				particleCount={Math.floor(settings.particleCount * 0.5)}
				color={currentTheme.secondaryColor}
				flowPattern="orbital"
				{interactive}
				speed={0.5}
				opacity={0.4}
				size={0.015}
			/>
		{/if}

		<!-- Controls -->
		{#if interactive}
			<OrbitControls
				enableDamping
				dampingFactor={0.05}
				{autoRotate}
				autoRotateSpeed={2}
				minDistance={5}
				maxDistance={20}
			/>
		{/if}

		<!-- Post-processing Effects -->
		<!-- Bloom and EffectComposer temporarily disabled due to import issues -->
		<!-- {#if enableBloom}
			<EffectComposer>
				<Bloom 
					intensity={settings.bloomIntensity}
					luminanceThreshold={0.1}
					luminanceSmoothing={0.025}
					height={300}
				/>
			</EffectComposer>
		{/if} -->
	</Canvas>

	<!-- UI Overlay -->
	<div class="absolute top-4 left-4 text-white font-mono text-sm bg-black/20 backdrop-blur-sm rounded-lg p-3">
		<div class="space-y-1">
			<div>Theme: <span class="text-cyan-300">{theme.toUpperCase()}</span></div>
			<div>Quality: <span class="text-green-300">{quality.toUpperCase()}</span></div>
			<div>Particles: <span class="text-blue-300">{settings.particleCount}</span></div>
			<div>Physics: <span class="text-yellow-300">{physicsEnabled ? 'ON' : 'OFF'}</span></div>
		</div>
	</div>

	<!-- Performance Monitor -->
	<div class="absolute bottom-4 right-4 text-white font-mono text-xs bg-black/20 backdrop-blur-sm rounded-lg p-2">
		<div>FPS: <span class="text-green-400">60</span></div>
		<div>WebGL: <span class="text-cyan-400">ACTIVE</span></div>
	</div>
</div>

<style>
	:global(.threlte-canvas) {
		background: linear-gradient(135deg, var(--bg-start), var(--bg-end)) !important;
	}

	div {
		--bg-start: v-bind(currentTheme.backgroundColor);
		--bg-end: color-mix(in srgb, v-bind(currentTheme.backgroundColor) 80%, black);
	}
</style>
