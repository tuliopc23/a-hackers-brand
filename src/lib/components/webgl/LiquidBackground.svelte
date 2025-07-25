<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { cn } from '$lib/utils.js';

	interface Props {
		intensity?: number;
		speed?: number;
		colors?: string[];
		interactive?: boolean;
		pattern?: 'waves' | 'ripples' | 'distortion' | 'plasma';
		quality?: 'low' | 'medium' | 'high';
		class?: string;
	}

	const {
		intensity = 1.0,
		speed = 1.0,
		colors = ['#00d4aa', '#0099ff', '#6600ff'],
		interactive = true,
		pattern = 'waves',
		quality = 'medium',
		class: className = ''
	}: Props = $props();

	const dispatch = createEventDispatcher();

	let canvasRef = $state<HTMLCanvasElement>();
	let gl: WebGLRenderingContext;
	let program: WebGLProgram;
	let animationId: number;
	let time = 0;
	let mousePosition = { x: 0.5, y: 0.5 };

	// Vertex shader (simple screen quad)
	const vertexShaderSource = `
		attribute vec2 a_position;
		varying vec2 v_uv;
		
		void main() {
			v_uv = a_position * 0.5 + 0.5;
			gl_Position = vec4(a_position, 0.0, 1.0);
		}
	`;

	// Fragment shader for liquid effects
	const fragmentShaderSource = `
		precision mediump float;
		
		uniform float u_time;
		uniform float u_intensity;
		uniform float u_speed;
		uniform vec2 u_resolution;
		uniform vec2 u_mouse;
		uniform vec3 u_color1;
		uniform vec3 u_color2;
		uniform vec3 u_color3;
		uniform float u_pattern;
		uniform float u_interactive;
		
		varying vec2 v_uv;
		
		// Hash function for randomness
		float hash(vec2 p) {
			return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
		}
		
		// Noise function
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
		
		// Fractal noise
		float fbm(vec2 p) {
			float value = 0.0;
			float amplitude = 0.5;
			float frequency = 1.0;
			
			for (int i = 0; i < 4; i++) {
				value += amplitude * noise(p * frequency);
				amplitude *= 0.5;
				frequency *= 2.0;
			}
			
			return value;
		}
		
		// Wave pattern
		float waves(vec2 p, float t) {
			float wave1 = sin(p.x * 6.0 + t * 2.0) * 0.5;
			float wave2 = sin(p.y * 4.0 + t * 1.5) * 0.3;
			float wave3 = sin((p.x + p.y) * 3.0 + t * 1.8) * 0.2;
			return wave1 + wave2 + wave3;
		}
		
		// Ripple pattern
		float ripples(vec2 p, float t) {
			vec2 center1 = vec2(0.3, 0.7);
			vec2 center2 = vec2(0.7, 0.3);
			vec2 center3 = u_mouse;
			
			float dist1 = length(p - center1);
			float dist2 = length(p - center2);
			float dist3 = length(p - center3);
			
			float ripple1 = sin(dist1 * 20.0 - t * 3.0) * exp(-dist1 * 2.0);
			float ripple2 = sin(dist2 * 15.0 - t * 2.5) * exp(-dist2 * 1.5);
			float ripple3 = sin(dist3 * 25.0 - t * 4.0) * exp(-dist3 * 3.0) * u_interactive;
			
			return (ripple1 + ripple2 + ripple3) * 0.3;
		}
		
		// Distortion pattern
		float distortion(vec2 p, float t) {
			vec2 distort = vec2(
				fbm(p * 3.0 + vec2(t * 0.1, 0.0)),
				fbm(p * 3.0 + vec2(0.0, t * 0.12))
			);
			
			vec2 distortedP = p + distort * 0.1;
			return fbm(distortedP * 2.0 + vec2(t * 0.05, t * 0.07));
		}
		
		// Plasma pattern
		float plasma(vec2 p, float t) {
			float plasma1 = sin(p.x * 10.0 + t);
			float plasma2 = sin(p.y * 8.0 + t * 1.3);
			float plasma3 = sin((p.x + p.y) * 6.0 + t * 0.8);
			float plasma4 = sin(length(p - 0.5) * 12.0 + t * 1.5);
			
			return (plasma1 + plasma2 + plasma3 + plasma4) * 0.25;
		}
		
		void main() {
			vec2 uv = v_uv;
			float t = u_time * u_speed;
			
			float pattern_value;
			
			// Select pattern
			if (u_pattern < 0.5) {
				pattern_value = waves(uv, t);
			} else if (u_pattern < 1.5) {
				pattern_value = ripples(uv, t);
			} else if (u_pattern < 2.5) {
				pattern_value = distortion(uv, t);
			} else {
				pattern_value = plasma(uv, t);
			}
			
			// Apply intensity
			pattern_value *= u_intensity;
			
			// Color mixing
			float colorMix1 = sin(pattern_value * 3.14159 + t) * 0.5 + 0.5;
			float colorMix2 = cos(pattern_value * 2.0 + t * 1.2) * 0.5 + 0.5;
			float colorMix3 = sin(pattern_value * 1.5 + t * 0.8) * 0.5 + 0.5;
			
			vec3 color = mix(u_color1, u_color2, colorMix1);
			color = mix(color, u_color3, colorMix2 * 0.6);
			
			// Add some brightness variation
			color *= 0.8 + 0.4 * colorMix3;
			
			// Subtle vignette
			float vignette = 1.0 - length(uv - 0.5) * 0.8;
			color *= vignette;
			
			gl_FragColor = vec4(color, 0.9);
		}
	`;

	// Create shader
	const createShader = (gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null => {
		const shader = gl.createShader(type);
		if (!shader) return null;

		gl.shaderSource(shader, source);
		gl.compileShader(shader);

		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			// Shader compilation failed - integrate proper error handling
			gl.deleteShader(shader);
			return null;
		}

		return shader;
	};

	// Create program
	const createProgram = (gl: WebGLRenderingContext): WebGLProgram | null => {
		const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
		const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

		if (!vertexShader || !fragmentShader) return null;

		const program = gl.createProgram();
		if (!program) return null;

		gl.attachShader(program, vertexShader);
		gl.attachShader(program, fragmentShader);
		gl.linkProgram(program);

		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			// Program linking failed - integrate proper error handling
			return null;
		}

		return program;
	};

	// Setup WebGL
	const setupWebGL = () => {
		gl = canvasRef.getContext('webgl')!;
		if (!gl) {
			// WebGL not supported - fallback to canvas or other implementation
			return false;
		}

		program = createProgram(gl)!;
		if (!program) return false;

		// Create geometry (screen quad)
		const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);

		const positionBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

		const positionAttribute = gl.getAttribLocation(program, 'a_position');
		gl.enableVertexAttribArray(positionAttribute);
		gl.vertexAttribPointer(positionAttribute, 2, gl.FLOAT, false, 0, 0);

		return true;
	};

	// Convert color hex to RGB
	const hexToRgb = (hex: string): [number, number, number] => {
		const r = parseInt(hex.slice(1, 3), 16) / 255;
		const g = parseInt(hex.slice(3, 5), 16) / 255;
		const b = parseInt(hex.slice(5, 7), 16) / 255;
		return [r, g, b];
	};

	// Get pattern value
	const getPatternValue = () => {
		switch (pattern) {
			case 'waves':
				return 0.0;
			case 'ripples':
				return 1.0;
			case 'distortion':
				return 2.0;
			case 'plasma':
				return 3.0;
			default:
				return 0.0;
		}
	};

	// Render loop
	const render = () => {
		if (!gl || !program) return;

		time += 0.016; // Roughly 60fps

		// Set viewport
		gl.viewport(0, 0, canvasRef.width, canvasRef.height);
		gl.clear(gl.COLOR_BUFFER_BIT);

		// Use program
		gl.useProgram(program);

		// Set uniforms
		gl.uniform1f(gl.getUniformLocation(program, 'u_time'), time);
		gl.uniform1f(gl.getUniformLocation(program, 'u_intensity'), intensity);
		gl.uniform1f(gl.getUniformLocation(program, 'u_speed'), speed);
		gl.uniform2f(gl.getUniformLocation(program, 'u_resolution'), canvasRef.width, canvasRef.height);
		gl.uniform2f(gl.getUniformLocation(program, 'u_mouse'), mousePosition.x, mousePosition.y);
		gl.uniform1f(gl.getUniformLocation(program, 'u_pattern'), getPatternValue());
		gl.uniform1f(gl.getUniformLocation(program, 'u_interactive'), interactive ? 1.0 : 0.0);

		// Set color uniforms
		const [r1, g1, b1] = hexToRgb(colors[0]);
		const [r2, g2, b2] = hexToRgb(colors[1]);
		const [r3, g3, b3] = hexToRgb(colors[2]);

		gl.uniform3f(gl.getUniformLocation(program, 'u_color1'), r1, g1, b1);
		gl.uniform3f(gl.getUniformLocation(program, 'u_color2'), r2, g2, b2);
		gl.uniform3f(gl.getUniformLocation(program, 'u_color3'), r3, g3, b3);

		// Draw
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

		animationId = requestAnimationFrame(render);
	};

	// Handle mouse movement
	const handleMouseMove = (event: MouseEvent) => {
		if (!interactive) return;

		const rect = canvasRef.getBoundingClientRect();
		mousePosition = {
			x: (event.clientX - rect.left) / rect.width,
			y: 1.0 - (event.clientY - rect.top) / rect.height
		};
	};

	// Resize canvas
	const resizeCanvas = () => {
		if (!canvasRef) return;

		const { width, height } = canvasRef.getBoundingClientRect();
		const pixelRatio = window.devicePixelRatio || 1;

		const qualityMultiplier = quality === 'low' ? 0.5 : quality === 'medium' ? 0.75 : 1.0;

		canvasRef.width = width * pixelRatio * qualityMultiplier;
		canvasRef.height = height * pixelRatio * qualityMultiplier;

		canvasRef.style.width = `${width}px`;
		canvasRef.style.height = `${height}px`;
	};

	onMount(() => {
		resizeCanvas();

		if (setupWebGL()) {
			render();
			dispatch('ready', { gl, program });
		}

		window.addEventListener('resize', resizeCanvas);

		return () => {
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
			window.removeEventListener('resize', resizeCanvas);
		};
	});
</script>

<canvas
	bind:this={canvasRef}
	class={cn('absolute inset-0 pointer-events-none', className)}
	onmousemove={handleMouseMove}
	style="z-index: -1;"
></canvas>

<style>
	canvas {
		image-rendering: optimizeSpeed;
		image-rendering: -moz-crisp-edges;
		image-rendering: -webkit-optimize-contrast;
		image-rendering: optimize-contrast;
	}
</style>
