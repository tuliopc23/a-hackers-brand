<script lang="ts">
	import { T } from '@threlte/core';
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	interface Props {
		time: number;
		mouseX: number;
		mouseY: number;
		colorPrimary: string;
		colorSecondary: string;
		count?: number;
	}

	const {
		time,
		mouseX,
		mouseY,
		colorPrimary,
		colorSecondary,
		count = 1000
	}: Props = $props();

let particlesRef = $state<THREE.Points>();
let material = $state<THREE.ShaderMaterial>();
let geometry = $state<THREE.BufferGeometry>();

	const vertexShader = `
		uniform float uTime;
		uniform vec2 uMouse;
		uniform float uSize;
		
		attribute float aScale;
		attribute vec3 aRandomness;
		
		varying vec3 vColor;
		varying float vAlpha;

		void main() {
			// Base position with some randomness
			vec3 pos = position + aRandomness * 2.0;
			
			// Orbital motion
			float orbitRadius = length(pos.xz);
			float angle = atan(pos.z, pos.x) + uTime * 0.2 * (1.0 / (orbitRadius + 1.0));
			
			pos.x = cos(angle) * orbitRadius;
			pos.z = sin(angle) * orbitRadius;
			
			// Vertical wave motion
			pos.y += sin(uTime * 2.0 + orbitRadius * 3.0) * 0.5;
			
			// Mouse attraction
			vec3 mousePos = vec3(uMouse * 3.0, 0.0);
			vec3 toMouse = mousePos - pos;
			float mouseDistance = length(toMouse);
			float mouseForce = 1.0 / (mouseDistance * mouseDistance + 1.0) * 0.5;
			pos += normalize(toMouse) * mouseForce;
			
			// Color variation based on position
			float colorMix = (pos.y + 2.0) / 4.0;
			colorMix = clamp(colorMix, 0.0, 1.0);
			
			vColor = mix(vec3(0.0, 1.0, 0.25), vec3(0.0, 1.0, 1.0), colorMix);
			vAlpha = 1.0 - mouseDistance * 0.1;
			vAlpha = clamp(vAlpha, 0.1, 1.0);
			
			vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
			vec4 viewPosition = viewMatrix * modelPosition;
			vec4 projectedPosition = projectionMatrix * viewPosition;
			
			gl_Position = projectedPosition;
			gl_PointSize = uSize * aScale * (1.0 / -viewPosition.z);
		}
	`;

	const fragmentShader = `
		varying vec3 vColor;
		varying float vAlpha;

		void main() {
			// Create circular particles with soft edges
			vec2 center = gl_PointCoord - 0.5;
			float distance = length(center);
			
			if (distance > 0.5) discard;
			
			float alpha = (1.0 - distance * 2.0) * vAlpha;
			
			// Add glow effect
			float glow = exp(-distance * 4.0);
			vec3 finalColor = vColor * (0.5 + glow * 0.5);
			
			gl_FragColor = vec4(finalColor, alpha);
		}
	`;

	onMount(() => {
		// Create geometry
		geometry = new THREE.BufferGeometry();
		
		const positions = new Float32Array(count * 3);
		const scales = new Float32Array(count);
		const randomness = new Float32Array(count * 3);
		
		for (let i = 0; i < count; i++) {
			// Random spherical distribution
			const radius = Math.random() * 3 + 1;
			const theta = Math.random() * Math.PI * 2;
			const phi = Math.acos(1 - 2 * Math.random());
			
			positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
			positions[i * 3 + 1] = radius * Math.cos(phi);
			positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
			
			scales[i] = Math.random() * 0.5 + 0.5;
			
			randomness[i * 3] = (Math.random() - 0.5) * 0.5;
			randomness[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
			randomness[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
		}
		
		geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
		geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));
		geometry.setAttribute('aRandomness', new THREE.BufferAttribute(randomness, 3));
		
		// Create material
		material = new THREE.ShaderMaterial({
			vertexShader,
			fragmentShader,
			uniforms: {
				uTime: { value: 0 },
				uMouse: { value: new THREE.Vector2(0, 0) },
				uSize: { value: 8 }
			},
			transparent: true,
			blending: THREE.AdditiveBlending,
			depthWrite: false
		});
	});

	// Update uniforms reactively
	$effect(() => {
		if (material) {
			material.uniforms.uTime.value = time;
			material.uniforms.uMouse.value.set(mouseX, mouseY);
		}
	});
</script>

{#if geometry && material}
	<T.Points bind:ref={particlesRef}>
		<T is={geometry} />
		<T is={material} />
	</T.Points>
{/if}