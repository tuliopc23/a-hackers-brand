<script lang="ts">
	import { cn } from '../utils.js';
	import { onMount } from 'svelte';
	import { magneticHover, breathing, jellyHover } from '../motion';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLElement> {
		text: string;
		variant?: 'macintosh' | 'dos' | 'amiga' | 'commodore' | 'atari' | 'crt' | 'phosphor' | 'matrix' | 'cyberpunk' | 'vaporwave' | 'neon' | 'hologram' | 'glitch' | 'terminal';
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
		animated?: boolean;
		typewriter?: boolean;
		scanlines?: boolean;
		glow?: boolean;
		flicker?: boolean;
		chromatic?: boolean;
		breathing?: boolean;
		class?: string;
		element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
	}

	const {
		text,
		variant = 'macintosh',
		size = 'md',
		animated = true,
		typewriter = false,
		scanlines = true,
		glow = true,
		flicker = false,
		chromatic = false,
		breathing: breathingProp = false,
		class: className = '',
		element = 'p',
		...restProps
	}: Props = $props();

	let displayText = $state('');
	let showCursor = $state(true);
	let typewriterIndex = $state(0);

	// Variant configurations with retro computer inspiration
	const variants = {
		macintosh: {
			color: 'text-black',
			bg: 'bg-gray-200',
			font: 'font-mono',
			shadow: 'drop-shadow-none',
			filter: 'contrast(1.25) brightness(1.1)',
			border: 'border-2 border-black rounded-lg'
		},
		dos: {
			color: 'text-green-400',
			bg: 'bg-black',
			font: 'font-mono',
			shadow: 'drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]',
			filter: 'contrast(1.5)',
			border: 'border border-green-400/30'
		},
		amiga: {
			color: 'text-orange-400',
			bg: 'bg-gradient-to-b from-blue-900 to-blue-800',
			font: 'font-mono',
			shadow: 'drop-shadow-[0_0_12px_rgba(251,146,60,0.9)]',
			filter: 'contrast(1.4) saturate(1.5)',
			border: 'border border-orange-400/40'
		},
		commodore: {
			color: 'text-blue-300',
			bg: 'bg-blue-950',
			font: 'font-mono',
			shadow: 'drop-shadow-[0_0_10px_rgba(147,197,253,0.7)]',
			filter: 'contrast(1.3)',
			border: 'border border-blue-300/30'
		},
		atari: {
			color: 'text-yellow-300',
			bg: 'bg-gradient-to-b from-red-900 to-orange-900',
			font: 'font-mono',
			shadow: 'drop-shadow-[0_0_15px_rgba(253,224,71,0.8)]',
			filter: 'contrast(1.6) saturate(1.2)',
			border: 'border border-yellow-300/40'
		},
		crt: {
			color: 'text-green-300',
			bg: 'bg-black',
			font: 'font-mono',
			shadow: 'drop-shadow-[0_0_20px_rgba(134,239,172,1)]',
			filter: 'contrast(2) brightness(1.2)',
			border: 'border border-green-300/50 rounded-xl'
		},
		phosphor: {
			color: 'text-green-400',
			bg: 'bg-gray-900',
			font: 'font-mono',
			shadow: 'drop-shadow-[0_0_25px_rgba(74,222,128,1)]',
			filter: 'contrast(1.8) brightness(1.3)',
			border: 'border-2 border-green-400/60'
		},
		matrix: {
			color: 'text-green-500',
			bg: 'bg-black',
			font: 'font-mono',
			shadow: 'drop-shadow-[0_0_30px_rgba(34,197,94,1)]',
			filter: 'contrast(2) brightness(1.4) hue-rotate(15deg)',
			border: 'border border-green-500/70'
		},
		cyberpunk: {
			color: 'text-cyan-400',
			bg: 'bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900',
			font: 'font-mono',
			shadow: 'drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]',
			filter: 'contrast(1.5) saturate(2) hue-rotate(15deg)',
			border: 'border border-cyan-400/50 rounded-2xl'
		},
		vaporwave: {
			color: 'text-pink-300',
			bg: 'bg-gradient-to-br from-purple-800 via-pink-700 to-cyan-600',
			font: 'font-mono',
			shadow: 'drop-shadow-[0_0_25px_rgba(249,168,212,0.9)]',
			filter: 'contrast(1.2) saturate(1.8) hue-rotate(330deg)',
			border: 'border border-pink-300/60 rounded-3xl'
		},
		neon: {
			color: 'text-cyan-400',
			bg: 'bg-black',
			font: 'font-mono',
			shadow: 'drop-shadow-[0_0_15px_rgba(34,211,238,0.9)]',
			filter: 'contrast(1.4) saturate(1.8)',
			border: 'border border-cyan-400/50'
		},
		hologram: {
			color: 'text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text',
			bg: 'bg-black',
			font: 'font-mono',
			shadow: 'drop-shadow-none',
			filter: 'contrast(1.2) saturate(1.5)',
			border: 'border border-purple-400/40'
		},
		glitch: {
			color: 'text-red-400',
			bg: 'bg-black',
			font: 'font-mono',
			shadow: 'drop-shadow-[0_0_10px_rgba(248,113,113,0.8)]',
			filter: 'contrast(1.6)',
			border: 'border border-red-400/50'
		},
		terminal: {
			color: 'text-green-400',
			bg: 'bg-gray-900',
			font: 'font-mono',
			shadow: 'drop-shadow-[0_0_8px_rgba(74,222,128,0.7)]',
			filter: 'contrast(1.3)',
			border: 'border border-green-400/40'
		}
	};

	const sizes = {
		xs: 'text-xs',
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-lg',
		xl: 'text-xl',
		'2xl': 'text-2xl',
		'3xl': 'text-3xl'
	};

	const currentVariant = variants[variant];

	// Typewriter effect
	onMount(() => {
		if (typewriter) {
			const typewriterInterval = setInterval(() => {
				if (typewriterIndex < text.length) {
					displayText = text.slice(0, typewriterIndex + 1);
					typewriterIndex++;
				} else {
					clearInterval(typewriterInterval);
				}
			}, 50 + Math.random() * 100); // Variable typing speed

			// Cursor blink
			const cursorInterval = setInterval(() => {
				showCursor = !showCursor;
			}, 500);

			return () => {
				clearInterval(typewriterInterval);
				clearInterval(cursorInterval);
			};
		} else {
			displayText = text;
		}
	});

	const combinedClasses = cn(
		'relative inline-block transition-all duration-300',
		currentVariant.font,
		currentVariant.color,
		sizes[size],
		glow && currentVariant.shadow,
		animated && 'transform-gpu will-change-transform',
		scanlines && 'retro-scanlines',
		flicker && 'retro-flicker',
		chromatic && 'retro-chromatic',
		className
	);

	const containerClasses = cn(
		'relative inline-block p-4 overflow-hidden',
		currentVariant.bg,
		currentVariant.border,
		animated && 'transition-all duration-500'
	);

	// Component renderer function
	function renderElement() {
		// This function is not used in Svelte 5 - remove or comment out
		// The actual rendering happens in the template below
		return null;
	}
</script>

{#if element === 'h1'}
	<h1 
		class={containerClasses}
		use:jellyHover={{ enabled: animated, duration: 300, scale: 1.02, borderRadius: '12px' }}
		use:breathing={{ enabled: breathingProp, intensity: 0.01, speed: 3000 }}
		{...restProps}
	>
		<span 
			class={combinedClasses}
			style="filter: {currentVariant.filter}"
		>
			{typewriter ? displayText : text}
			{#if typewriter && showCursor}
				<span class="animate-pulse">|</span>
			{/if}
		</span>
		
		{#if scanlines}
			<div class="retro-scanlines-overlay"></div>
		{/if}
		
		{#if variant === 'crt'}
			<div class="crt-bezel"></div>
		{/if}
	</h1>
{:else if element === 'h2'}
	<h2 
		class={containerClasses}
		use:jellyHover={{ enabled: animated, duration: 300, scale: 1.02, borderRadius: '12px' }}
		use:breathing={{ enabled: breathingProp, intensity: 0.01, speed: 3000 }}
		{...restProps}
	>
		<span 
			class={combinedClasses}
			style="filter: {currentVariant.filter}"
		>
			{typewriter ? displayText : text}
			{#if typewriter && showCursor}
				<span class="animate-pulse">|</span>
			{/if}
		</span>
		
		{#if scanlines}
			<div class="retro-scanlines-overlay"></div>
		{/if}
		
		{#if variant === 'crt'}
			<div class="crt-bezel"></div>
		{/if}
	</h2>
{:else if element === 'h3'}
	<h3 
		class={containerClasses}
		use:jellyHover={{ enabled: animated, duration: 300, scale: 1.02, borderRadius: '12px' }}
		use:breathing={{ enabled: breathingProp, intensity: 0.01, speed: 3000 }}
		{...restProps}
	>
		<span 
			class={combinedClasses}
			style="filter: {currentVariant.filter}"
		>
			{typewriter ? displayText : text}
			{#if typewriter && showCursor}
				<span class="animate-pulse">|</span>
			{/if}
		</span>
		
		{#if scanlines}
			<div class="retro-scanlines-overlay"></div>
		{/if}
		
		{#if variant === 'crt'}
			<div class="crt-bezel"></div>
		{/if}
	</h3>
{:else if element === 'span'}
	<span 
		class={containerClasses}
		use:jellyHover={{ enabled: animated, duration: 300, scale: 1.02, borderRadius: '12px' }}
		use:breathing={{ enabled: breathingProp, intensity: 0.01, speed: 3000 }}
		{...restProps}
	>
		<span 
			class={combinedClasses}
			style="filter: {currentVariant.filter}"
		>
			{typewriter ? displayText : text}
			{#if typewriter && showCursor}
				<span class="animate-pulse">|</span>
			{/if}
		</span>
		
		{#if scanlines}
			<div class="retro-scanlines-overlay"></div>
		{/if}
		
		{#if variant === 'crt'}
			<div class="crt-bezel"></div>
		{/if}
	</span>
{:else if element === 'div'}
	<div 
		class={containerClasses}
		use:jellyHover={{ enabled: animated, duration: 300, scale: 1.02, borderRadius: '12px' }}
		use:breathing={{ enabled: breathingProp, intensity: 0.01, speed: 3000 }}
		{...restProps}
	>
		<span 
			class={combinedClasses}
			style="filter: {currentVariant.filter}"
		>
			{typewriter ? displayText : text}
			{#if typewriter && showCursor}
				<span class="animate-pulse">|</span>
			{/if}
		</span>
		
		{#if scanlines}
			<div class="retro-scanlines-overlay"></div>
		{/if}
		
		{#if variant === 'crt'}
			<div class="crt-bezel"></div>
		{/if}
	</div>
{:else}
	<div 
		class={containerClasses}
		use:jellyHover={{ enabled: animated, duration: 300, scale: 1.02, borderRadius: '12px' }}
		use:breathing={{ enabled: breathingProp, intensity: 0.01, speed: 3000 }}
		{...restProps}
	>
		<span 
			class={combinedClasses}
			style="filter: {currentVariant.filter}"
		>
			{typewriter ? displayText : text}
			{#if typewriter && showCursor}
				<span class="animate-pulse">|</span>
			{/if}
		</span>
		
		{#if scanlines}
			<div class="retro-scanlines-overlay"></div>
		{/if}
		
		{#if variant === 'crt'}
			<div class="crt-bezel"></div>
		{/if}
	</div>
{/if}

<style>
	/* Retro Scanlines Effect */
	.retro-scanlines-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		pointer-events: none;
		background: linear-gradient(
			transparent 50%,
			rgba(0, 0, 0, 0.03) 50%
		);
		background-size: 100% 4px;
		animation: scanlines-move 0.1s linear infinite;
	}

	@keyframes scanlines-move {
		0% { transform: translateY(0); }
		100% { transform: translateY(4px); }
	}

	/* CRT Monitor Bezel Effect */
	.crt-bezel {
		position: absolute;
		inset: 0;
		border: 8px solid #2a2a2a;
		border-radius: 20px;
		pointer-events: none;
		box-shadow: 
			inset 0 0 20px rgba(0, 0, 0, 0.8),
			inset 0 0 40px rgba(0, 0, 0, 0.4),
			0 0 30px rgba(0, 0, 0, 0.6);
	}

	.crt-bezel::before {
		content: '';
		position: absolute;
		top: -4px;
		left: -4px;
		right: -4px;
		bottom: -4px;
		border: 2px solid #1a1a1a;
		border-radius: 24px;
		box-shadow: 
			0 0 20px rgba(0, 0, 0, 0.9),
			inset 0 0 10px rgba(255, 255, 255, 0.1);
	}

	/* Retro Flicker Effect */
	.retro-flicker {
		animation: retro-flicker 0.15s ease-in-out infinite alternate;
	}

	@keyframes retro-flicker {
		0% {
			opacity: 1;
			text-shadow: inherit;
		}
		2% {
			opacity: 0.98;
			text-shadow: inherit;
		}
		4% {
			opacity: 0.92;
			text-shadow: none;
		}
		8% {
			opacity: 1;
			text-shadow: inherit;
		}
		70% {
			opacity: 0.99;
			text-shadow: inherit;
		}
		100% {
			opacity: 1;
			text-shadow: inherit;
		}
	}

	/* Chromatic Aberration Effect */
	.retro-chromatic {
		position: relative;
	}

	.retro-chromatic::before,
	.retro-chromatic::after {
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	.retro-chromatic::before {
		color: #ff0000;
		transform: translateX(-2px);
		opacity: 0.8;
		mix-blend-mode: screen;
	}

	.retro-chromatic::after {
		color: #00ffff;
		transform: translateX(2px);
		opacity: 0.8;
		mix-blend-mode: screen;
	}

	/* Vintage Macintosh styling */
	:global(.bg-gray-200) {
		background: linear-gradient(135deg, #f0f0f0 0%, #d0d0d0 100%);
		box-shadow: 
			inset 2px 2px 4px rgba(255, 255, 255, 0.8),
			inset -2px -2px 4px rgba(0, 0, 0, 0.2);
	}

	/* Enhanced glow effects for different variants */
	:global(.drop-shadow-\[0_0_8px_rgba\(74\,222\,128\,0\.8\)\]) {
		filter: drop-shadow(0 0 8px rgba(74, 222, 128, 0.8)) drop-shadow(0 0 16px rgba(74, 222, 128, 0.4));
	}

	:global(.drop-shadow-\[0_0_20px_rgba\(134\,239\,172\,1\)\]) {
		filter: drop-shadow(0 0 20px rgba(134, 239, 172, 1)) drop-shadow(0 0 40px rgba(134, 239, 172, 0.5));
		animation: phosphor-pulse 2s ease-in-out infinite alternate;
	}

	@keyframes phosphor-pulse {
		0% {
			filter: drop-shadow(0 0 20px rgba(134, 239, 172, 1)) drop-shadow(0 0 40px rgba(134, 239, 172, 0.5));
		}
		100% {
			filter: drop-shadow(0 0 25px rgba(134, 239, 172, 1)) drop-shadow(0 0 50px rgba(134, 239, 172, 0.7));
		}
	}

	/* Matrix variant rain effect */
	:global(.text-green-500) {
		position: relative;
		animation: matrix-glow 3s ease-in-out infinite alternate;
	}

	@keyframes matrix-glow {
		0% {
			text-shadow: 0 0 5px #22c55e, 0 0 10px #22c55e, 0 0 20px #22c55e;
		}
		100% {
			text-shadow: 0 0 10px #22c55e, 0 0 20px #22c55e, 0 0 40px #22c55e;
		}
	}

	/* Cyberpunk neon effects */
	:global(.text-cyan-400) {
		animation: cyberpunk-flicker 4s ease-in-out infinite;
	}

	@keyframes cyberpunk-flicker {
		0%, 100% {
			text-shadow: 
				0 0 5px #22d3ee,
				0 0 10px #22d3ee,
				0 0 20px #22d3ee,
				0 0 40px #22d3ee;
		}
		50% {
			text-shadow: 
				0 0 2px #22d3ee,
				0 0 5px #22d3ee,
				0 0 10px #22d3ee,
				0 0 20px #22d3ee;
		}
	}

	/* Vaporwave aesthetics */
	:global(.text-pink-300) {
		animation: vaporwave-shift 6s ease-in-out infinite;
	}

	@keyframes vaporwave-shift {
		0%, 100% {
			text-shadow: 
				0 0 10px #f9a8d4,
				0 0 20px #f9a8d4,
				0 0 30px #f9a8d4;
			filter: hue-rotate(0deg);
		}
		33% {
			text-shadow: 
				0 0 10px #a78bfa,
				0 0 20px #a78bfa,
				0 0 30px #a78bfa;
			filter: hue-rotate(60deg);
		}
		66% {
			text-shadow: 
				0 0 10px #34d399,
				0 0 20px #34d399,
				0 0 30px #34d399;
			filter: hue-rotate(120deg);
		}
	}

	/* Responsive design for retro effects */
	@media (max-width: 640px) {
		.retro-scanlines-overlay {
			background-size: 100% 2px;
		}
		
		.crt-bezel {
			border-width: 4px;
			border-radius: 12px;
		}
		
		.retro-chromatic::before,
		.retro-chromatic::after {
			transform: translateX(-1px);
		}
		
		.retro-chromatic::after {
			transform: translateX(1px);
		}
	}

	/* High contrast mode support */
	@media (prefers-contrast: high) {
		.retro-scanlines-overlay {
			background: linear-gradient(
				transparent 50%,
				rgba(0, 0, 0, 0.1) 50%
			);
		}
	}

	/* Reduced motion support */
	@media (prefers-reduced-motion: reduce) {
		.retro-flicker,
		.retro-scanlines-overlay,
		:global(.text-green-500),
		:global(.text-cyan-400),
		:global(.text-pink-300) {
			animation: none;
		}
	}
</style>