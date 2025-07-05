<script lang="ts">
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLCanvasElement> {
		variant?: 'classic' | 'hacker' | 'cyber' | 'liquid';
		speed?: 'slow' | 'normal' | 'fast';
		density?: 'low' | 'medium' | 'high';
		characters?: 'matrix' | 'binary' | 'hex' | 'code';
		glowEffect?: boolean;
		fadeEffect?: boolean;
		class?: string;
	}

	const {
		variant = 'classic',
		speed = 'normal',
		density = 'medium',
		characters = 'matrix',
		glowEffect = true,
		fadeEffect = true,
		class: className = '',
		...restProps
	}: Props = $props();

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let animationId: number;
	let drops: number[] = [];

	const variants = {
		classic: {
			primary: '#00ff41',
			secondary: '#008f11',
			background: 'rgba(0, 0, 0, 0.05)'
		},
		hacker: {
			primary: '#4ade80',
			secondary: '#22c55e',
			background: 'rgba(0, 0, 0, 0.05)'
		},
		cyber: {
			primary: '#00ffff',
			secondary: '#0088cc',
			background: 'rgba(0, 0, 20, 0.05)'
		},
		liquid: {
			primary: '#06b6d4',
			secondary: '#3b82f6',
			background: 'rgba(0, 0, 40, 0.03)'
		}
	};

	const characterSets = {
		matrix: 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		binary: '01',
		hex: '0123456789ABCDEF',
		code: '(){}<>[]|\\/-+=*&^%$#@!~`?:;.,\'"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
	};

	const speeds = {
		slow: 100,
		normal: 50,
		fast: 20
	};

	const densities = {
		low: 20,
		medium: 15,
		high: 10
	};

	const currentVariant = variants[variant];
	const currentCharacters = characterSets[characters];
	const currentSpeed = speeds[speed];
	const currentDensity = densities[density];

	const fontSize = 14;
	let columns = 0;

	const resizeCanvas = () => {
		if (!canvas) return;

		canvas.width = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;
		
		columns = Math.floor(canvas.width / fontSize);
		
		// Reset drops array
		drops = [];
		for (let x = 0; x < columns; x++) {
			drops[x] = Math.random() * canvas.height;
		}
	};

	const draw = () => {
		if (!ctx || !canvas) return;

		// Apply fade effect
		if (fadeEffect) {
			ctx.fillStyle = currentVariant.background;
			ctx.fillRect(0, 0, canvas.width, canvas.height);
		} else {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}

		// Set text properties
		ctx.font = `${fontSize}px monospace`;
		ctx.textAlign = 'center';

		// Enable glow effect
		if (glowEffect) {
			ctx.shadowColor = currentVariant.primary;
			ctx.shadowBlur = 10;
		}

		// Draw characters
		for (let i = 0; i < drops.length; i++) {
			// Random character
			const char = currentCharacters[Math.floor(Math.random() * currentCharacters.length)];
			
			// Primary color for leading character
			ctx.fillStyle = currentVariant.primary;
			ctx.fillText(char, i * fontSize + fontSize / 2, drops[i]);

			// Secondary color for trailing characters
			if (drops[i] > fontSize) {
				ctx.fillStyle = currentVariant.secondary;
				const trailChar = currentCharacters[Math.floor(Math.random() * currentCharacters.length)];
				ctx.fillText(trailChar, i * fontSize + fontSize / 2, drops[i] - fontSize);
			}

			// Reset drop when it reaches bottom or randomly
			if (drops[i] > canvas.height || Math.random() > 0.975) {
				drops[i] = 0;
			}

			// Move drop down
			drops[i] += fontSize;
		}
	};

	const animate = () => {
		draw();
		animationId = setTimeout(() => {
			requestAnimationFrame(animate);
		}, currentSpeed);
	};

	const startAnimation = () => {
		if (!canvas) return;
		
		ctx = canvas.getContext('2d')!;
		if (!ctx) return;

		resizeCanvas();
		animate();
	};

	const stopAnimation = () => {
		if (animationId) {
			clearTimeout(animationId);
		}
	};

	onMount(() => {
		startAnimation();

		// Handle resize
		const handleResize = () => {
			resizeCanvas();
		};

		window.addEventListener('resize', handleResize);

		return () => {
			stopAnimation();
			window.removeEventListener('resize', handleResize);
		};
	});

	// Expose control methods
	const start = () => startAnimation();
	const stop = () => stopAnimation();
	const restart = () => {
		stopAnimation();
		startAnimation();
	};
</script>

<canvas
	bind:this={canvas}
	class={cn(
		'w-full h-full bg-black',
		className
	)}
	{...restProps}
></canvas>

<style>
	canvas {
		display: block;
		image-rendering: pixelated;
		image-rendering: -moz-crisp-edges;
		image-rendering: crisp-edges;
	}
</style>