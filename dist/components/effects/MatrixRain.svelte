<script lang="ts">
	import { onMount } from 'svelte';
	import { cn } from '../../utils.js';

	interface Props {
		class?: string;
		fontSize?: number;
		color?: string;
		speed?: number;
		density?: number;
		opacity?: number;
		characters?: string;
		glitchEffect?: boolean;
	}

	const {
		class: className = '',
		fontSize = 14,
		color = '#00ff88',
		speed = 1,
		density = 0.98,
		opacity = 1,
		characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン',
		glitchEffect = false
	}: Props = $props();

	let canvasRef: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let animationId: number;
	let columns: number[] = [];
	let glitchColumns: boolean[] = [];

	const initMatrix = () => {
		if (!canvasRef) return;

		ctx = canvasRef.getContext('2d')!;
		
		// Set canvas size
		canvasRef.width = canvasRef.offsetWidth;
		canvasRef.height = canvasRef.offsetHeight;

		// Calculate columns
		const columnCount = Math.floor(canvasRef.width / fontSize);
		columns = Array(columnCount).fill(0);
		glitchColumns = Array(columnCount).fill(false);
	};

	const drawMatrix = () => {
		if (!ctx || !canvasRef) return;

		// Fade effect
		ctx.fillStyle = `rgba(0, 0, 0, ${density})`;
		ctx.fillRect(0, 0, canvasRef.width, canvasRef.height);

		// Matrix characters
		ctx.fillStyle = color;
		ctx.font = `${fontSize}px 'PP Supply Mono', monospace`;
		ctx.globalAlpha = opacity;

		for (let i = 0; i < columns.length; i++) {
			// Random character
			const char = characters[Math.floor(Math.random() * characters.length)];
			
			// Apply glitch effect randomly
			if (glitchEffect && Math.random() < 0.01) {
				glitchColumns[i] = !glitchColumns[i];
			}

			// Glitch styling
			if (glitchColumns[i]) {
				ctx.fillStyle = '#ff0080';
				ctx.shadowColor = '#ff0080';
				ctx.shadowBlur = 10;
			} else {
				ctx.fillStyle = color;
				ctx.shadowColor = color;
				ctx.shadowBlur = 5;
			}

			// Draw character
			ctx.fillText(char, i * fontSize, columns[i] * fontSize);

			// Reset column when it reaches bottom
			if (columns[i] * fontSize > canvasRef.height && Math.random() > density) {
				columns[i] = 0;
				glitchColumns[i] = false;
			}

			// Move column down
			columns[i] += speed;
		}

		// Reset shadow
		ctx.shadowBlur = 0;
		ctx.globalAlpha = 1;

		animationId = requestAnimationFrame(drawMatrix);
	};

	const handleResize = () => {
		initMatrix();
	};

	onMount(() => {
		initMatrix();
		drawMatrix();

		window.addEventListener('resize', handleResize);

		return () => {
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<svelte:window on:resize={handleResize} />

<canvas
	bind:this={canvasRef}
	class={cn('absolute inset-0 pointer-events-none', className)}
	style="z-index: -1;"
></canvas>