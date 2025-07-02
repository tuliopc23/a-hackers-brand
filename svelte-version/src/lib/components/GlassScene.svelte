<script lang="ts">
	import { T, useThrelte } from '@threlte/core';
	import { OrbitControls, Edges, Environment } from '@threlte/extras';
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	interface Props {
		autoRotate?: boolean;
		quality?: 'low' | 'medium' | 'high';
	}

	let { autoRotate = true, quality = 'medium' }: Props = $props();

	// Material configurations based on quality
	const qualitySettings = {
		low: {
			samples: 8,
			transmission: 0.8,
			roughness: 0.2,
			thickness: 1.0
		},
		medium: {
			samples: 16,
			transmission: 1.0,
			roughness: 0.1,
			thickness: 1.5
		},
		high: {
			samples: 32,
			transmission: 1.0,
			roughness: 0.05,
			thickness: 2.0
		}
	};

	const settings = qualitySettings[quality];

	let glassMaterial = {
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
	let mainGroup: THREE.Group;
	let floatingGroups: THREE.Group[] = [];

	// Simple animation with CSS transforms
	let animationTime = $state(0);

	onMount(() => {
		const animate = () => {
			animationTime += 0.01;
			requestAnimationFrame(animate);
		};
		animate();
	});

	onMount(() => {
		// Performance optimizations
		if (typeof window !== 'undefined') {
			const canvas = document.querySelector('canvas');
			if (canvas) {
				canvas.style.willChange = 'transform';
			}
		}
	});
</script>

<T.PerspectiveCamera makeDefault position={[10, 10, 15]} fov={30}>
	<OrbitControls enableZoom={true} enablePan={true} enableRotate={true} autoRotate={true} autoRotateSpeed={0.5} />
</T.PerspectiveCamera>

<T.AmbientLight intensity={0.8} />
<T.DirectionalLight position={[5, 10, 8]} intensity={1.5} castShadow />

<!-- Environment and Lighting -->
<Environment path="/" files="city.hdr" background={false} />

<!-- Enhanced Lighting Setup -->
<T.PointLight position={[10, 10, 10]} intensity={2} color="#a7f3d0" castShadow />
<T.PointLight position={[-10, -10, 10]} intensity={1.5} color="#fde047" />
<T.SpotLight position={[0, 15, 0]} intensity={3} angle={Math.PI / 6} penumbra={0.5} castShadow color="#ffffff" />

<!-- Main Glass Formation -->
<T.Group bind:ref={mainGroup}>
	<!-- Central Glass Block -->
	<T.Mesh position={[0, 0, 0]} castShadow receiveShadow>
		<T.BoxGeometry args={[6, 6, 6]} />
		<T.MeshPhysicalMaterial {...glassMaterial} color="#a7f3d0" emissive="#001a0f" emissiveIntensity={0.1} />
		<Edges color="#a7f3d0" linewidth={2} threshold={15} />
	</T.Mesh>

	<!-- Inner Core -->
	<T.Mesh position={[0, 0, 0]}>
		<T.SphereGeometry args={[2, 32, 32]} />
		<T.MeshPhysicalMaterial
			{...glassMaterial}
			color="#00d4aa"
			transmission={0.95}
			thickness={0.5}
			emissive="#00d4aa"
			emissiveIntensity={0.05}
		/>
	</T.Mesh>
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

<!-- Particle System -->
<T.Points>
	<T.BufferGeometry>
		<!-- Will be populated via Three.js in onMount -->
	</T.BufferGeometry>
	<T.PointsMaterial color="#00d4aa" size={0.1} transparent opacity={0.6} sizeAttenuation />
</T.Points>

<!-- Ground Plane for Reflections -->
<T.Mesh position={[0, -8, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
	<T.PlaneGeometry args={[40, 40]} />
	<T.MeshPhysicalMaterial color="#000000" roughness={0.1} metalness={0.9} transparent opacity={0.3} />
</T.Mesh>
