<script lang="ts">
	import { T, useThrelte } from '@threlte/core';
	import { onMount, createEventDispatcher } from 'svelte';
	import * as THREE from 'three';

	interface Props {
		intensity?: number;
		frequency?: number;
		amplitude?: number;
		speed?: number;
		color?: string;
		opacity?: number;
		distortion?: number;
		refraction?: number;
		class?: string;
	}

	const {
		intensity = 1.0,
		frequency = 0.5,
		amplitude = 0.1,
		speed = 1.0,
		color = '#00d4aa',
		opacity = 0.8,
		distortion = 0.1,
		refraction = 1.45,
		class: className = ''
	}: Props = $props();

	const dispatch = createEventDispatcher();
	const { scene, renderer, camera } = useThrelte();

	let meshRef: THREE.Mesh;
	let materialRef: THREE.ShaderMaterial;
	let time = $state(0);

	// Vertex shader for liquid distortion
	const vertexShader = `
		uniform float uTime;
		uniform float uFrequency;
		uniform float uAmplitude;
		uniform float uSpeed;
		uniform float uDistortion;
		
		varying vec2 vUv;
		varying vec3 vPosition;
		varying vec3 vNormal;
		varying vec3 vWorldPosition;
		
		// Noise functions
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
			const vec2 C = vec2(1.0/6.0, 1.0/3.0);
			const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
			
			vec3 i = floor(v + dot(v, C.yyy));
			vec3 x0 = v - i + dot(i, C.xxx);
			
			vec3 g = step(x0.yzx, x0.xyz);
			vec3 l = 1.0 - g;
			vec3 i1 = min(g.xyz, l.zxy);
			vec3 i2 = max(g.xyz, l.zxy);
			
			vec3 x1 = x0 - i1 + C.xxx;
			vec3 x2 = x0 - i2 + C.yyy;
			vec3 x3 = x0 - D.yyy;
			
			i = mod289(i);
			vec4 p = permute(permute(permute(
				i.z + vec4(0.0, i1.z, i2.z, 1.0))
				+ i.y + vec4(0.0, i1.y, i2.y, 1.0))
				+ i.x + vec4(0.0, i1.x, i2.x, 1.0));
			
			float n_ = 0.142857142857;
			vec3 ns = n_ * D.wyz - D.xzx;
			
			vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
			
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
			vPosition = position;
			vNormal = normal;
			
			// Create liquid distortion
			float t = uTime * uSpeed;
			vec3 pos = position;
			
			// Multiple octaves of noise for complex liquid motion
			float noise1 = snoise(pos * uFrequency + vec3(t, 0.0, 0.0));
			float noise2 = snoise(pos * uFrequency * 2.0 + vec3(0.0, t * 1.3, 0.0));
			float noise3 = snoise(pos * uFrequency * 4.0 + vec3(0.0, 0.0, t * 0.7));
			
			// Combine noises for liquid flow
			vec3 displacement = vec3(
				noise1 * 0.5 + noise2 * 0.3 + noise3 * 0.2,
				noise2 * 0.4 + noise3 * 0.3 + noise1 * 0.3,
				noise3 * 0.6 + noise1 * 0.2 + noise2 * 0.2
			);
			
			pos += displacement * uAmplitude * uDistortion;
			
			// Calculate world position for fragment shader
			vec4 worldPosition = modelMatrix * vec4(pos, 1.0);
			vWorldPosition = worldPosition.xyz;
			
			gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
		}
	`;

	// Fragment shader for glass effect
	const fragmentShader = `
		uniform float uTime;
		uniform float uIntensity;
		uniform vec3 uColor;
		uniform float uOpacity;
		uniform float uRefraction;
		uniform float uSpeed;
		uniform sampler2D uTexture;
		
		varying vec2 vUv;
		varying vec3 vPosition;
		varying vec3 vNormal;
		varying vec3 vWorldPosition;
		
		// Fresnel calculation
		float fresnel(vec3 eyeVector, vec3 worldNormal, float power) {
			return pow(1.0 - max(dot(eyeVector, worldNormal), 0.0), power);
		}
		
		// Hash function for random values
		float hash(vec2 p) {
			return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
		}
		
		// Smooth noise
		float noise(vec2 p) {
			vec2 i = floor(p);
			vec2 f = fract(p);
			
			float a = hash(i);
			float b = hash(i + vec2(1.0, 0.0));
			float c = hash(i + vec2(0.0, 1.0));
			float d = hash(i + vec2(1.0, 1.0));
			
			vec2 u = f * f * (3.0 - 2.0 * f);
			
			return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
		}
		
		void main() {
			// Calculate view direction
			vec3 viewVector = normalize(cameraPosition - vWorldPosition);
			
			// Enhanced normal calculation with liquid distortion
			float t = uTime * uSpeed;
			vec3 normal = normalize(vNormal);
			
			// Add liquid-like normal perturbation
			float nx = noise(vUv * 10.0 + vec2(t * 0.1, 0.0)) * 0.1;
			float ny = noise(vUv * 10.0 + vec2(0.0, t * 0.15)) * 0.1;
			normal.xy += vec2(nx, ny);
			normal = normalize(normal);
			
			// Fresnel effect for glass-like appearance
			float fresnelValue = fresnel(viewVector, normal, 2.0);
			
			// Refraction distortion
			vec2 refractedUv = vUv + normal.xy * uRefraction * 0.1;
			
			// Color mixing with liquid flow
			vec3 liquidColor = uColor;
			
			// Add iridescence effect
			float iridescence = sin(dot(normal, viewVector) * 10.0 + t) * 0.5 + 0.5;
			liquidColor += vec3(iridescence * 0.3, iridescence * 0.2, iridescence * 0.4);
			
			// Caustic-like effect
			float caustic = noise(refractedUv * 20.0 + vec2(t * 0.3, t * 0.2));
			caustic = pow(caustic, 3.0) * 2.0;
			liquidColor += vec3(0.1, 0.3, 0.5) * caustic;
			
			// Depth-based opacity
			float depth = 1.0 - dot(viewVector, normal);
			float alpha = mix(uOpacity * 0.3, uOpacity, depth);
			
			// Final color composition
			vec3 finalColor = mix(liquidColor, liquidColor * 1.5, fresnelValue);
			finalColor *= uIntensity;
			
			gl_FragColor = vec4(finalColor, alpha);
		}
	`;

	// Create shader material
	const createShaderMaterial = () => {
		return new THREE.ShaderMaterial({
			uniforms: {
				uTime: { value: 0 },
				uFrequency: { value: frequency },
				uAmplitude: { value: amplitude },
				uSpeed: { value: speed },
				uIntensity: { value: intensity },
				uColor: { value: new THREE.Color(color) },
				uOpacity: { value: opacity },
				uDistortion: { value: distortion },
				uRefraction: { value: refraction }
			},
			vertexShader,
			fragmentShader,
			transparent: true,
			side: THREE.DoubleSide,
			blending: THREE.AdditiveBlending
		});
	};

	// Animation loop (manual since useFrame is not available)
	let animationId: number;
	const startAnimation = () => {
		const animate = () => {
			time += 0.016; // ~60fps
			if (materialRef) {
				materialRef.uniforms.uTime.value = time;
			}
			animationId = requestAnimationFrame(animate);
		};
		animate();
	};

	// Update uniforms when props change
	$effect(() => {
		if (materialRef) {
			materialRef.uniforms.uFrequency.value = frequency;
			materialRef.uniforms.uAmplitude.value = amplitude;
			materialRef.uniforms.uSpeed.value = speed;
			materialRef.uniforms.uIntensity.value = intensity;
			materialRef.uniforms.uColor.value.set(color);
			materialRef.uniforms.uOpacity.value = opacity;
			materialRef.uniforms.uDistortion.value = distortion;
			materialRef.uniforms.uRefraction.value = refraction;
		}
	});

	onMount(() => {
		materialRef = createShaderMaterial();
		startAnimation();
		
		// Dispatch ready event
		dispatch('ready', { material: materialRef });
		
		// Cleanup on unmount
		return () => {
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
		};
	});
</script>

<T.Mesh bind:ref={meshRef} class={className}>
	<T.IcosahedronGeometry args={[1, 4]} />
	<T.ShaderMaterial
		bind:ref={materialRef}
		uniforms={{
			uTime: { value: 0 },
			uFrequency: { value: frequency },
			uAmplitude: { value: amplitude },
			uSpeed: { value: speed },
			uIntensity: { value: intensity },
			uColor: { value: new THREE.Color(color) },
			uOpacity: { value: opacity },
			uDistortion: { value: distortion },
			uRefraction: { value: refraction }
		}}
		vertexShader={vertexShader}
		fragmentShader={fragmentShader}
		transparent={true}
		side={THREE.DoubleSide}
		blending={THREE.AdditiveBlending}
	/>
</T.Mesh>