<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { onMount } from 'svelte';

	interface Props {
		text: string;
		class?: string;
		intensity?: 'low' | 'medium' | 'high' | 'extreme';
		continuous?: boolean;
		trigger?: boolean;
		speed?: number;
		colors?: string[];
	}

	const {
		text,
		class: className = '',
		intensity = 'medium',
		continuous = false,
		trigger = false,
		speed = 0.1,
		colors = ['#ff0000', '#00ffff', '#ff00ff']
	}: Props = $props();

	let glitchRef: HTMLSpanElement;
	let isGlitching = $state(false);
	let glitchInterval: number;

	const intensityConfig = {
		low: {
			duration: 200,
			frequency: 3000,
			distortion: 2,
			layers: 2
		},
		medium: {
			duration: 400,
			frequency: 2000,
			distortion: 4,
			layers: 3
		},
		high: {
			duration: 600,
			frequency: 1000,
			distortion: 8,
			layers: 4
		},
		extreme: {
			duration: 1000,
			frequency: 500,
			distortion: 16,
			layers: 6
		}
	};

	const config = intensityConfig[intensity];

	const triggerGlitch = () => {
		if (isGlitching) return;
		
		isGlitching = true;
		
		if (glitchRef) {
			glitchRef.style.animation = `
				glitch-skew ${config.duration}ms ease-in-out,
				glitch-color ${config.duration}ms linear
			`;
		}

		setTimeout(() => {
			isGlitching = false;
			if (glitchRef) {
				glitchRef.style.animation = '';
			}
		}, config.duration);
	};

	const startContinuous = () => {
		if (continuous) {
			glitchInterval = setInterval(() => {
				if (Math.random() < 0.3) {
					triggerGlitch();
				}
			}, config.frequency);
		}
	};

	const stopContinuous = () => {
		if (glitchInterval) {
			clearInterval(glitchInterval);
		}
	};

	// React to trigger prop changes
	$effect(() => {
		if (trigger) {
			triggerGlitch();
		}
	});

	onMount(() => {
		if (continuous) {
			startContinuous();
		}

		return () => {
			stopContinuous();
		};
	});

	// Generate random glitched characters
	const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';
	const getGlitchedText = (originalText: string, intensity: number) => {
		return originalText
			.split('')
			.map(char => {
				if (Math.random() < intensity / 100) {
					return glitchChars[Math.floor(Math.random() * glitchChars.length)];
				}
				return char;
			})
			.join('');
	};
</script>

<span
	bind:this={glitchRef}
	class={cn(
		'relative inline-block font-mono',
		isGlitching && 'glitching',
		className
	)}
	data-text={text}
	style="
		--glitch-color-1: {colors[0] || '#ff0000'};
		--glitch-color-2: {colors[1] || '#00ffff'};
		--glitch-color-3: {colors[2] || '#ff00ff'};
		--glitch-distortion: {config.distortion}px;
	"
>
	{#if isGlitching && intensity === 'extreme'}
		{getGlitchedText(text, 20)}
	{:else}
		{text}
	{/if}
</span>

<style>
	.glitching {
		animation: glitch-skew 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
	}

	.glitching::before,
	.glitching::after {
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	.glitching::before {
		animation: glitch-anim 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
		color: var(--glitch-color-1);
		z-index: -1;
		clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
	}

	.glitching::after {
		animation: glitch-anim2 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
		color: var(--glitch-color-2);
		z-index: -2;
		clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
	}

	@keyframes glitch-anim {
		0% {
			clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
			transform: translate(calc(var(--glitch-distortion) * -1px));
		}
		2% {
			clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		4% {
			clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
			transform: translate(calc(var(--glitch-distortion) * -1px));
		}
		6% {
			clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		8% {
			clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
			transform: translate(calc(var(--glitch-distortion) * -1px));
		}
		10% {
			clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		12% {
			clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
			transform: translate(calc(var(--glitch-distortion) * -1px));
		}
		14% {
			clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		16% {
			clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
			transform: translate(calc(var(--glitch-distortion) * -1px));
		}
		18% {
			clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		20% {
			clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
			transform: translate(calc(var(--glitch-distortion) * -1px));
		}
		21.9% {
			opacity: 1;
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		22% {
			opacity: 0;
			transform: translate(0);
		}
		100% {
			opacity: 0;
			transform: translate(0);
		}
	}

	@keyframes glitch-anim2 {
		0% {
			clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		3% {
			clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		5% {
			clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		7% {
			clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		9% {
			clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		11% {
			clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		13% {
			clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		15% {
			clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		17% {
			clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		19% {
			clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		20% {
			clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		21.9% {
			opacity: 1;
			transform: translate(calc(var(--glitch-distortion) * 1px));
		}
		22% {
			opacity: 0;
			transform: translate(0);
		}
		100% {
			opacity: 0;
			transform: translate(0);
		}
	}

	@keyframes glitch-skew {
		0% {
			transform: skew(0deg);
			filter: hue-rotate(0deg);
		}
		10% {
			transform: skew(-2deg);
			filter: hue-rotate(90deg);
		}
		20% {
			transform: skew(2deg);
			filter: hue-rotate(180deg);
		}
		30% {
			transform: skew(-1deg);
			filter: hue-rotate(270deg);
		}
		40% {
			transform: skew(1deg);
			filter: hue-rotate(360deg);
		}
		50% {
			transform: skew(0deg);
			filter: hue-rotate(45deg);
		}
		60% {
			transform: skew(-1deg);
			filter: hue-rotate(135deg);
		}
		70% {
			transform: skew(2deg);
			filter: hue-rotate(225deg);
		}
		80% {
			transform: skew(-2deg);
			filter: hue-rotate(315deg);
		}
		90% {
			transform: skew(1deg);
			filter: hue-rotate(405deg);
		}
		100% {
			transform: skew(0deg);
			filter: hue-rotate(0deg);
		}
	}

	@keyframes glitch-color {
		0%, 100% {
			color: currentColor;
		}
		20% {
			color: var(--glitch-color-1);
		}
		40% {
			color: var(--glitch-color-2);
		}
		60% {
			color: var(--glitch-color-3);
		}
		80% {
			color: var(--glitch-color-1);
		}
	}
</style>