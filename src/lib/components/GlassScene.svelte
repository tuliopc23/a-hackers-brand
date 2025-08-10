<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls, Edges, Environment } from '@threlte/extras';
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import LiquidGlassShader from './webgl/LiquidGlassShader.svelte';
	import LiquidParticleSystem from './webgl/LiquidParticleSystem.svelte';

	interface Props {
		autoRotate?: boolean;
		quality?: 'low' | 'medium' | 'high' | 'ultra';
		enableLiquidEffects?: boolean;
		enableParticles?: boolean;
		enableBloom?: boolean;
		theme?: 'terminal' | 'cyberpunk' | 'neural' | 'quantum';
	}

	const {
		quality = 'medium',
		enableLiquidEffects = true,
		enableParticles = true,
		theme = 'terminal'
	}: Props = $props();

	// Material configurations based on quality
	const qualitySettings = {
		low: {
			samples: 8,
			transmission: 0.8,
			roughness: 0.2,
			thickness: 1.0,
			particleCount: 300
		},
		medium: {
			samples: 16,
			transmission: 1.0,
			roughness: 0.1,
			thickness: 1.5,
			particleCount: 600
		},
		high: {
			samples: 32,
			transmission: 1.0,
			roughness: 0.05,
			thickness: 2.0,
			particleCount: 1000
		},
		ultra: {
			samples: 64,
			transmission: 1.0,
			roughness: 0.02,
			thickness: 3.0,
			particleCount: 1500
		}
	};

	// Theme configurations
	const themeConfig = {
		terminal: {
            primaryColor: 'var(--color-terminal-green)',
            secondaryColor: 'var(--color-terminal-cyan)',
            backgroundColor: 'color-mix(in srgb, var(--color-terminal-green) 10%, #000)',
			emissive: '#001a0f'
		},
		cyberpunk: {
            primaryColor: 'var(--color-terminal-pink)',
            secondaryColor: 'var(--color-terminal-cyan)',
            backgroundColor: 'color-mix(in srgb, var(--color-terminal-blue) 10%, #000015)',
			emissive: '#1a001a'
		},
		neural: {
            primaryColor: 'var(--color-bubble-tea-green)',
            secondaryColor: 'var(--color-terminal-green)',
            backgroundColor: 'color-mix(in srgb, var(--color-bubble-tea-green) 10%, #000)',
			emissive: '#0f1a0f'
		},
		quantum: {
            primaryColor: 'var(--color-bubble-tea-purple)',
            secondaryColor: 'var(--color-bubble-tea-orange)',
            backgroundColor: 'color-mix(in srgb, var(--color-bubble-tea-purple) 15%, #110011)',
			emissive: '#1a001a'
		}
	};

	const settings = qualitySettings[quality];
	const currentTheme = themeConfig[theme];

	const glassMaterial = {
		roughness: settings.roughness,
		metalness: 0,
		transmission: settings.transmission,
		thickness: settings.thickness,
		ior: 1.52, // Real glass IOR
		clearcoat: 1.0,
		clearcoatRoughness: 0.1,
		envMapIntensity: 1.5,
		transparent: true,
		opacity: 0.9
	};

	// Animation state
	let time = $state(0);
	let mainGroup = $state<THREE.Group>();
	const floatingGroups = $state<THREE.Group[]>([]);

	// Enhanced animation loop (manual since useFrame is not available)
	let animationId: number;
	const startAnimation = () => {
		const animate = () => {
			const delta = 0.016; // ~60fps
			time += delta;

			// Animate floating groups
			floatingGroups.forEach((group, index) => {
				if (group) {
					group.rotation.x += delta * 0.3;
					group.rotation.y += delta * 0.5;
					group.position.y = Math.sin(time + index) * 0.5;
				}
			});

			// Animate main group
			if (mainGroup) {
				mainGroup.rotation.y += delta * 0.1;
			}

			animationId = requestAnimationFrame(animate);
		};
		animate();
	};

	onMount(() => {
		startAnimation();

		// Performance optimizations
		if (typeof window !== 'undefined') {
			const canvas = document.querySelector('canvas');
			if (canvas) {
				canvas.style.willChange = 'transform';
			}
		}

		return () => {
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
		};
	});
</script>

<T.PerspectiveCamera makeDefault position={[10, 10, 15]} fov={30}>
	<OrbitControls enableZoom={true} enablePan={true} enableRotate={true} autoRotate={true} autoRotateSpeed={0.5} />
</T.PerspectiveCamera>

<T.AmbientLight intensity={0.8}></T.AmbientLight>
<T.DirectionalLight position={[5, 10, 8]} intensity={1.5} castShadow></T.DirectionalLight>

<!-- Environment and Lighting -->
<Environment path="/" files="city.hdr" background={false} />

<!-- Enhanced Lighting Setup -->
<T.PointLight position={[10, 10, 10]} intensity={2} color={currentTheme.primaryColor} castShadow></T.PointLight>
<T.PointLight position={[-10, -10, 10]} intensity={1.5} color={currentTheme.secondaryColor}></T.PointLight>
<T.SpotLight position={[0, 15, 0]} intensity={3} angle={Math.PI / 6} penumbra={0.5} castShadow color="#ffffff"
></T.SpotLight>

<!-- Main Glass Formation -->
<T.Group bind:ref={mainGroup}>
	{#if enableLiquidEffects}
		<!-- Advanced Liquid Glass Core -->
		<LiquidGlassShader
			intensity={1.5}
			color={currentTheme.primaryColor}
			distortion={0.15}
			frequency={0.8}
			amplitude={0.2}
			speed={1.0}
		/>

		<!-- Surrounding Liquid Shapes -->
		{#each Array(4) as _, i (i)}
			<T.Group
				position={[Math.cos((i * Math.PI) / 2) * 5, Math.sin((i * Math.PI) / 4) * 2, Math.sin((i * Math.PI) / 2) * 5]}
			>
				<LiquidGlassShader
					intensity={1.0}
					color={i % 2 === 0 ? currentTheme.primaryColor : currentTheme.secondaryColor}
					distortion={0.1}
					frequency={1.2 + i * 0.1}
					amplitude={0.12}
					speed={0.8 + i * 0.1}
				/>
			</T.Group>
		{/each}
	{:else}
		<!-- Fallback Standard Glass -->
		<T.Mesh position={[0, 0, 0]} castShadow receiveShadow>
			<T.BoxGeometry args={[6, 6, 6]} />
			<T.MeshPhysicalMaterial
				{...glassMaterial}
				color={currentTheme.primaryColor}
				emissive={currentTheme.emissive}
				emissiveIntensity={0.1}
			/>
			<Edges color={currentTheme.primaryColor} linewidth={2} threshold={15} />
		</T.Mesh>

		<T.Mesh position={[0, 0, 0]}>
			<T.SphereGeometry args={[2, 32, 32]} />
			<T.MeshPhysicalMaterial
				{...glassMaterial}
				color={currentTheme.secondaryColor}
				transmission={0.95}
				thickness={0.5}
				emissive={currentTheme.secondaryColor}
				emissiveIntensity={0.05}
			/>
		</T.Mesh>
	{/if}
</T.Group>

<!-- Floating Glass Constellation -->
<T.Group bind:ref={floatingGroups[0]} position={[8, 3, -2]}>
	<T.Mesh rotation={[0.4, 0.6, -0.2]} castShadow>
		<T.OctahedronGeometry args={[2, 2]} />
		<T.MeshPhysicalMaterial {...glassMaterial} color="#fde047" emissive="#2a1a00" emissiveIntensity={0.08} />
		<Edges color="#fde047" linewidth={1.5} />
	</T.Mesh>
</T.Group>

<T.Group bind:ref={floatingGroups[1]} position={[-7, -2, 4]}>
	<T.Mesh rotation={[-0.3, -0.5, 0.3]} castShadow>
		<T.IcosahedronGeometry args={[2.5, 1]} />
		<T.MeshPhysicalMaterial {...glassMaterial} color="#a5b4fc" emissive="#0a0a2a" emissiveIntensity={0.06} />
		<Edges color="#a5b4fc" linewidth={1.5} />
	</T.Mesh>
</T.Group>

<T.Group bind:ref={floatingGroups[2]} position={[3, -5, -6]}>
	<T.Mesh rotation={[0.8, -0.2, 0.5]} castShadow>
		<T.TetrahedronGeometry args={[3, 2]} />
		<T.MeshPhysicalMaterial {...glassMaterial} color="#06b6d4" emissive="#001a2a" emissiveIntensity={0.07} />
		<Edges color="#06b6d4" linewidth={1.5} />
	</T.Mesh>
</T.Group>

<!-- Advanced Particle Systems -->
{#if enableParticles}
	<LiquidParticleSystem
		particleCount={settings.particleCount}
		color={currentTheme.primaryColor}
		flowPattern="turbulent"
		interactive={true}
		speed={1.0}
		opacity={0.6}
	/>

	<LiquidParticleSystem
		particleCount={Math.floor(settings.particleCount * 0.5)}
		color={currentTheme.secondaryColor}
		flowPattern="orbital"
		interactive={true}
		speed={0.5}
		opacity={0.4}
		size={0.015}
	/>
{/if}

<!-- Ground Plane for Reflections -->
<T.Mesh position={[0, -8, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
	<T.PlaneGeometry args={[40, 40]} />
	<T.MeshPhysicalMaterial color="#000000" roughness={0.1} metalness={0.9} transparent opacity={0.3} />
</T.Mesh>

<!-- Post-processing Effects -->
<!-- Bloom and EffectComposer temporarily disabled due to import issues -->
<!-- {#if enableBloom}
	<EffectComposer>
		<Bloom 
			intensity={quality === 'ultra' ? 2.0 : quality === 'high' ? 1.5 : 1.0}
			luminanceThreshold={0.1}
			luminanceSmoothing={0.025}
			height={300}
		/>
	</EffectComposer>
{/if} -->
