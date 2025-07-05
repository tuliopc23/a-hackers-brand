<script lang="ts">
	import { T, useThrelte } from '@threlte/core';
	import { onMount, createEventDispatcher } from 'svelte';
	import * as THREE from 'three';

	interface Props {
		particleCount?: number;
		size?: number;
		speed?: number;
		color?: string;
		opacity?: number;
		flowPattern?: 'orbital' | 'turbulent' | 'wave' | 'spiral';
		interactive?: boolean;
		class?: string;
	}

	const {
		particleCount = 1000,
		size = 0.02,
		speed = 1.0,
		color = '#00d4aa',
		opacity = 0.8,
		flowPattern = 'turbulent',
		interactive = true,
		class: className = ''
	}: Props = $props();

	const dispatch = createEventDispatcher();
	const { scene, renderer, camera } = useThrelte();

	let particleSystemRef = $state<THREE.Points>();
	let materialRef = $state<THREE.ShaderMaterial>();
	let geometryRef = $state<THREE.BufferGeometry>();
	let time = $state(0);
	let mousePosition = $state({ x: 0, y: 0 });

	// Particle vertex shader
	const vertexShader = `
		uniform float uTime;
		uniform float uSize;
		uniform float uSpeed;
		uniform vec2 uMouse;
		uniform float uInteractive;
		uniform float uFlowPattern;
		
		attribute float aScale;
		attribute float aPhase;
		attribute vec3 aVelocity;
		attribute float aLife;
		
		varying float vAlpha;
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
			float t = uTime * uSpeed;
			vec3 pos = position;
			
			// Flow patterns
			if (uFlowPattern < 0.5) { // Orbital
				float radius = length(pos.xz);
				float angle = atan(pos.z, pos.x) + t * 0.5;
				pos.x = cos(angle) * radius;
				pos.z = sin(angle) * radius;
				pos.y += sin(t + aPhase) * 0.2;
			}
			else if (uFlowPattern < 1.5) { // Turbulent
				vec3 noise = vec3(
					snoise(pos * 2.0 + vec3(t, 0.0, 0.0)),
					snoise(pos * 2.0 + vec3(0.0, t, 0.0)),
					snoise(pos * 2.0 + vec3(0.0, 0.0, t))
				);
				pos += noise * 0.3;
			}
			else if (uFlowPattern < 2.5) { // Wave
				pos.y += sin(pos.x * 4.0 + t) * sin(pos.z * 4.0 + t) * 0.1;
				pos.x += cos(t + aPhase) * 0.1;
				pos.z += sin(t + aPhase * 1.3) * 0.1;
			}
			else { // Spiral
				float spiralT = t + aPhase;
				pos.x += cos(spiralT) * 0.1;
				pos.z += sin(spiralT) * 0.1;
				pos.y += spiralT * 0.05;
			}
			
			// Interactive mouse influence
			if (uInteractive > 0.5) {
				vec2 mouseForce = uMouse - pos.xy;
				float mouseDistance = length(mouseForce);
				if (mouseDistance < 2.0) {
					vec2 force = normalize(mouseForce) * (2.0 - mouseDistance) * 0.1;
					pos.xy += force;
				}
			}
			
			// Life cycle
			vAlpha = aLife;
			
			vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
			gl_Position = projectionMatrix * mvPosition;
			gl_PointSize = uSize * aScale * (300.0 / -mvPosition.z);
		}
	`;

	// Particle fragment shader
	const fragmentShader = `
		uniform vec3 uColor;
		uniform float uOpacity;
		uniform float uTime;
		
		varying float vAlpha;
		
		void main() {
			// Circular particle shape
			vec2 center = gl_PointCoord - vec2(0.5);
			float dist = length(center);
			
			if (dist > 0.5) discard;
			
			// Soft edges
			float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
			alpha *= vAlpha * uOpacity;
			
			// Pulsing effect
			alpha *= 0.8 + 0.2 * sin(uTime * 3.0);
			
			// Color variation
			vec3 color = uColor;
			color += vec3(0.1, 0.2, 0.3) * sin(uTime + gl_PointCoord.x * 10.0);
			
			gl_FragColor = vec4(color, alpha);
		}
	`;

	// Create particle geometry
	const createParticleGeometry = () => {
		const geometry = new THREE.BufferGeometry();
		
		const positions = new Float32Array(particleCount * 3);
		const scales = new Float32Array(particleCount);
		const phases = new Float32Array(particleCount);
		const velocities = new Float32Array(particleCount * 3);
		const lives = new Float32Array(particleCount);
		
		for (let i = 0; i < particleCount; i++) {
			// Random sphere distribution
			const radius = Math.random() * 2;
			const theta = Math.random() * Math.PI * 2;
			const phi = Math.acos(Math.random() * 2 - 1);
			
			positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
			positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
			positions[i * 3 + 2] = radius * Math.cos(phi);
			
			scales[i] = Math.random() * 0.5 + 0.5;
			phases[i] = Math.random() * Math.PI * 2;
			
			velocities[i * 3] = (Math.random() - 0.5) * 0.02;
			velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
			velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
			
			lives[i] = Math.random();
		}
		
		geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
		geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));
		geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
		geometry.setAttribute('aVelocity', new THREE.BufferAttribute(velocities, 3));
		geometry.setAttribute('aLife', new THREE.BufferAttribute(lives, 1));
		
		return geometry;
	};

	// Create shader material
	const createShaderMaterial = () => {
		return new THREE.ShaderMaterial({
			uniforms: {
				uTime: { value: 0 },
				uSize: { value: size * 100 },
				uSpeed: { value: speed },
				uColor: { value: new THREE.Color(color) },
				uOpacity: { value: opacity },
				uMouse: { value: new THREE.Vector2() },
				uInteractive: { value: interactive ? 1.0 : 0.0 },
				uFlowPattern: { value: getFlowPatternValue() }
			},
			vertexShader,
			fragmentShader,
			transparent: true,
			blending: THREE.AdditiveBlending,
			depthWrite: false
		});
	};

	const getFlowPatternValue = () => {
		switch (flowPattern) {
			case 'orbital': return 0.0;
			case 'turbulent': return 1.0;
			case 'wave': return 2.0;
			case 'spiral': return 3.0;
			default: return 1.0;
		}
	};

	// Handle mouse movement
	const handleMouseMove = (event: MouseEvent) => {
		if (!interactive || !materialRef) return;
		
		const rect = renderer.domElement.getBoundingClientRect();
		const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
		const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
		
		mousePosition = { x, y };
		materialRef.uniforms.uMouse.value.set(x, y);
	};

	// Animation loop (manual since useFrame is not available)
	let animationId: number;
	const startAnimation = () => {
		const animate = () => {
			const delta = 0.016; // ~60fps
			time += delta;
			
			if (materialRef) {
				materialRef.uniforms.uTime.value = time;
			}
			
			if (geometryRef) {
				// Update particle life cycles
				const lives = geometryRef.attributes.aLife.array as Float32Array;
				for (let i = 0; i < lives.length; i++) {
					lives[i] -= delta * 0.1;
					if (lives[i] <= 0) {
						lives[i] = 1.0;
					}
				}
				geometryRef.attributes.aLife.needsUpdate = true;
			}
			
			animationId = requestAnimationFrame(animate);
		};
		animate();
	};

	// Update uniforms when props change
	$effect(() => {
		if (materialRef) {
			materialRef.uniforms.uSize.value = size * 100;
			materialRef.uniforms.uSpeed.value = speed;
			materialRef.uniforms.uColor.value.set(color);
			materialRef.uniforms.uOpacity.value = opacity;
			materialRef.uniforms.uInteractive.value = interactive ? 1.0 : 0.0;
			materialRef.uniforms.uFlowPattern.value = getFlowPatternValue();
		}
	});

	onMount(() => {
		geometryRef = createParticleGeometry();
		materialRef = createShaderMaterial();
		startAnimation();
		
		// Add mouse listener for interactivity
		if (interactive) {
			renderer.domElement.addEventListener('mousemove', handleMouseMove);
		}
		
		dispatch('ready', { 
			geometry: geometryRef, 
			material: materialRef 
		});
		
		return () => {
			if (interactive) {
				renderer.domElement.removeEventListener('mousemove', handleMouseMove);
			}
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
		};
	});
</script>

<T.Points bind:ref={particleSystemRef} class={className}>
	<T.BufferGeometry bind:ref={geometryRef} />
	<T.ShaderMaterial
		bind:ref={materialRef}
		uniforms={{
			uTime: { value: 0 },
			uSize: { value: size * 100 },
			uSpeed: { value: speed },
			uColor: { value: new THREE.Color(color) },
			uOpacity: { value: opacity },
			uMouse: { value: new THREE.Vector2() },
			uInteractive: { value: interactive ? 1.0 : 0.0 },
			uFlowPattern: { value: getFlowPatternValue() }
		}}
		vertexShader={vertexShader}
		fragmentShader={fragmentShader}
		transparent={true}
		blending={THREE.AdditiveBlending}
		depthWrite={false}
	/>
</T.Points>