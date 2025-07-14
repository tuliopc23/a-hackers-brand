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

	let planeRef = $state<THREE.Mesh>();
	let material = $state<THREE.ShaderMaterial>();

	const vertexShader = `
		uniform float uTime;
		uniform vec2 uMouse;
		varying vec3 vPosition;
		varying vec3 vNormal;
		varying vec2 vUv;

		// Simplex noise
		vec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
		vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

		float snoise(vec3 v) {
			const vec2 C = vec2(1.0/6.0, 1.0/3.0);
			const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

			vec3 i  = floor(v + dot(v, C.yyy));
			vec3 x0 = v - i + dot(i, C.xxx);

			vec3 g = step(x0.yzx, x0.xyz);
			vec3 l = 1.0 - g;
			vec3 i1 = min(g.xyz, l.zxy);
			vec3 i2 = max(g.xyz, l.zxy);

			vec3 x1 = x0 - i1 + 1.0 * C.xxx;
			vec3 x2 = x0 - i2 + 2.0 * C.xxx;
			vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

			i = mod(i, 289.0);
			vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0))
					+ i.y + vec4(0.0, i1.y, i2.y, 1.0))
					+ i.x + vec4(0.0, i1.x, i2.x, 1.0));

			float n_ = 1.0/7.0;
			vec3 ns = n_ * D.wyz - D.xzx;

			vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

			vec4 x_ = floor(j * ns.z);
			vec4 y_ = floor(j - 7.0 * x_);

			vec4 x = x_ *ns.x + ns.yyyy;
			vec4 y = y_ *ns.x + ns.yyyy;
			vec4 h = 1.0 - abs(x) - abs(y);

			vec4 b0 = vec4(x.xy, y.xy);
			vec4 b1 = vec4(x.zw, y.zw);

			vec4 s0 = floor(b0)*2.0 + 1.0;
			vec4 s1 = floor(b1)*2.0 + 1.0;
			vec4 sh = -step(h, vec4(0.0));

			vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
			vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

			vec3 p0 = vec3(a0.xy, h.x);
			vec3 p1 = vec3(a0.zw, h.y);
			vec3 p2 = vec3(a1.xy, h.z);
			vec3 p3 = vec3(a1.zw, h.w);

			vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
			p0 *= norm.x;
			p1 *= norm.y;
			p2 *= norm.z;
			p3 *= norm.w;

			vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
			m = m * m;
			return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
		}

		void main() {
			vUv = uv;
			
			// Create liquid wave deformation
			vec3 pos = position;
			
			// Multiple wave layers
			float wave1 = snoise(vec3(pos.x * 2.0, pos.z * 2.0, uTime * 0.5)) * 0.3;
			float wave2 = snoise(vec3(pos.x * 4.0, pos.z * 4.0, uTime * 0.8)) * 0.15;
			float wave3 = snoise(vec3(pos.x * 8.0, pos.z * 8.0, uTime * 1.2)) * 0.075;
			
			// Mouse interaction ripples
			vec2 mousePos = uMouse * 2.0;
			float mouseDistance = length(pos.xz - mousePos);
			float ripple = sin(mouseDistance * 10.0 - uTime * 5.0) * exp(-mouseDistance * 2.0) * 0.2;
			
			// Combine all deformations
			pos.y += wave1 + wave2 + wave3 + ripple;
			
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
			float fresnel = pow(1.0 - dot(viewDirection, vNormal), 1.5);
			
			// Liquid surface effect with flowing colors
			float flowX = sin(vUv.x * 10.0 + uTime * 2.0) * 0.5 + 0.5;
			float flowY = cos(vUv.y * 8.0 + uTime * 1.5) * 0.5 + 0.5;
			float colorMix = (flowX + flowY) * 0.5;
			
			vec3 liquidColor = mix(uColorPrimary, uColorSecondary, colorMix);
			
			// Add mouse interaction glow
			vec2 mouseUV = vUv - uMouse * 0.5 - 0.5;
			float mouseDistance = length(mouseUV);
			float mouseGlow = exp(-mouseDistance * 3.0) * 0.8;
			
			// Create ripple effect from mouse
			float rippleEffect = sin(mouseDistance * 20.0 - uTime * 10.0) * exp(-mouseDistance * 5.0) * 0.3;
			
			// Combine all effects
			vec3 finalColor = liquidColor + vec3(mouseGlow + rippleEffect);
			finalColor *= fresnel * 0.8 + 0.2;
			
			// Add glow intensity
			finalColor *= uGlowIntensity;
			
			// Glass-like transparency
			float alpha = fresnel * 0.6 + 0.1;
			
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
			blending: THREE.AdditiveBlending,
			wireframe: false
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

<T.Mesh bind:ref={planeRef} {position} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
	<T.PlaneGeometry args={[4, 4, 128, 128]} />
	{#if material}
		<T is={material} />
	{/if}
</T.Mesh>
