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
		glowIntensity: number;
		position?: [number, number, number];
	}

	const { time, mouseX, mouseY, colorPrimary, colorSecondary, glowIntensity, position = [0, 0, 0] }: Props = $props();

	let sphereRef = $state<THREE.Mesh>();
	let material = $state<THREE.ShaderMaterial>();

	const vertexShader = `
		uniform float uTime;
		uniform vec2 uMouse;
		varying vec3 vPosition;
		varying vec3 vNormal;
		varying vec2 vUv;

		// Noise function
		vec3 mod289(vec3 x) {
			return x - floor(x * (1.0 / 289.0)) * 289.0;
		}

		vec4 mod289(vec4 x) {
			return x - floor(x * (1.0 / 289.0)) * 289.0;
		}

		vec4 permute(vec4 x) {
			return mod289(((x*34.0)+1.0)*x);
		}

		vec4 taylorInvSqrt(vec4 r) {
			return 1.79284291400159 - 0.85373472095314 * r;
		}

		float snoise(vec3 v) {
			const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
			const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

			vec3 i  = floor(v + dot(v, C.yyy) );
			vec3 x0 =   v - i + dot(i, C.xxx) ;

			vec3 g = step(x0.yzx, x0.xyz);
			vec3 l = 1.0 - g;
			vec3 i1 = min( g.xyz, l.zxy );
			vec3 i2 = max( g.xyz, l.zxy );

			vec3 x1 = x0 - i1 + C.xxx;
			vec3 x2 = x0 - i2 + C.yyy;
			vec3 x3 = x0 - D.yyy;

			i = mod289(i);
			vec4 p = permute( permute( permute(
						 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
					   + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
					   + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

			float n_ = 0.142857142857;
			vec3  ns = n_ * D.wyz - D.xzx;

			vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

			vec4 x_ = floor(j * ns.z);
			vec4 y_ = floor(j - 7.0 * x_ );

			vec4 x = x_ *ns.x + ns.yyyy;
			vec4 y = y_ *ns.x + ns.yyyy;
			vec4 h = 1.0 - abs(x) - abs(y);

			vec4 b0 = vec4( x.xy, y.xy );
			vec4 b1 = vec4( x.zw, y.zw );

			vec4 s0 = floor(b0)*2.0 + 1.0;
			vec4 s1 = floor(b1)*2.0 + 1.0;
			vec4 sh = -step(h, vec4(0.0));

			vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
			vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

			vec3 p0 = vec3(a0.xy,h.x);
			vec3 p1 = vec3(a0.zw,h.y);
			vec3 p2 = vec3(a1.xy,h.z);
			vec3 p3 = vec3(a1.zw,h.w);

			vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
			p0 *= norm.x;
			p1 *= norm.y;
			p2 *= norm.z;
			p3 *= norm.w;

			vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
			m = m * m;
			return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
										  dot(p2,x2), dot(p3,x3) ) );
		}

		void main() {
			vUv = uv;
			
			// Create liquid deformation
			vec3 pos = position;
			float noise1 = snoise(pos * 2.0 + uTime * 0.5) * 0.1;
			float noise2 = snoise(pos * 4.0 + uTime * 0.8) * 0.05;
			float noise3 = snoise(pos * 8.0 + uTime * 1.2) * 0.025;
			
			// Mouse interaction
			vec3 mouseInfluence = vec3(uMouse * 0.3, 0.0);
			float mouseDistance = length(pos.xy - mouseInfluence.xy);
			float mouseEffect = exp(-mouseDistance * 2.0) * 0.2;
			
			pos += normal * (noise1 + noise2 + noise3 + mouseEffect);
			
			vPosition = pos;
			vNormal = normalize(normalMatrix * normal);
			
			gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
		}
	`;

	const fragmentShader = `
		uniform float uTime;
		uniform vec2 uMouse;
		uniform vec3 uColorPrimary;
		uniform vec3 uColorSecondary;
		uniform float uGlowIntensity;
		
		varying vec3 vPosition;
		varying vec3 vNormal;
		varying vec2 vUv;

		void main() {
			vec3 viewDirection = normalize(cameraPosition - vPosition);
			float fresnel = pow(1.0 - dot(viewDirection, vNormal), 2.0);
			
			// Liquid glass effect
			float glassEffect = fresnel * 0.8 + 0.2;
			
			// Color mixing based on position and time
			float colorMix = sin(vPosition.y * 3.0 + uTime) * 0.5 + 0.5;
			vec3 liquidColor = mix(uColorPrimary, uColorSecondary, colorMix);
			
			// Add mouse interaction coloring
			vec2 mouseUV = vUv - uMouse * 0.5;
			float mouseDistance = length(mouseUV);
			float mouseGlow = exp(-mouseDistance * 5.0) * 0.5;
			
			// Combine effects
			vec3 finalColor = liquidColor * glassEffect + vec3(mouseGlow);
			float alpha = glassEffect * 0.7 + fresnel * 0.3;
			
			// Add glow intensity
			finalColor *= uGlowIntensity;
			
			gl_FragColor = vec4(finalColor, alpha);
		}
	`;

	onMount(() => {
		material = new THREE.ShaderMaterial({
			vertexShader,
			fragmentShader,
			uniforms: {
				uTime: { value: 0 },
				uMouse: { value: new THREE.Vector2(0, 0) },
				uColorPrimary: { value: new THREE.Color(colorPrimary) },
				uColorSecondary: { value: new THREE.Color(colorSecondary) },
				uGlowIntensity: { value: glowIntensity }
			},
			transparent: true,
			side: THREE.DoubleSide,
			blending: THREE.AdditiveBlending
		});
	});

	// Update uniforms reactively
	$effect(() => {
		if (material) {
			material.uniforms.uTime.value = time;
			material.uniforms.uMouse.value.set(mouseX, mouseY);
			material.uniforms.uColorPrimary.value.set(colorPrimary);
			material.uniforms.uColorSecondary.value.set(colorSecondary);
			material.uniforms.uGlowIntensity.value = glowIntensity;
		}
	});
</script>

<T.Mesh bind:ref={sphereRef} {position} castShadow receiveShadow>
	<T.IcosahedronGeometry args={[1, 64]} />
	{#if material}
		<T is={material} />
	{/if}
</T.Mesh>
