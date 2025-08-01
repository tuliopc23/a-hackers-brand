<script lang="ts">
	import { cn } from '../utils/index.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	interface Props extends HTMLAttributes<HTMLSpanElement> {
		variant?: 'terminal' | 'bubbleTea';
		color?: 'pink' | 'purple' | 'blue' | 'cyan' | 'green' | 'yellow' | 'orange' | 'red' | 'matrix';
		intensity?: 'normal' | 'intense';
		animate?: boolean;
		pulse?: boolean;
		class?: string;
		children?: Snippet;
		text?: string;
	}

	const {
		variant = 'bubbleTea',
		color = 'pink',
		intensity = 'normal',
		animate = true,
		pulse = false,
		class: className = '',
		children,
		text,
		...restProps
	}: Props = $props();

	const getGlowClasses = () => {
		const baseClasses = 'font-mono transition-all duration-300';

		if (variant === 'terminal') {
			switch (color) {
				case 'matrix':
					return cn(
						baseClasses,
						'text-terminal-green',
						intensity === 'intense' ? 'glow-terminal-matrix-intense' : 'glow-terminal-matrix'
					);
				case 'cyan':
					return cn(
						baseClasses,
						'text-terminal-cyan',
						intensity === 'intense' ? 'glow-terminal-cyan-intense' : 'glow-terminal-cyan'
					);
				default:
					return cn(baseClasses, 'text-terminal-green', 'glow-terminal-matrix');
			}
		}

		// Bubble Tea variant
		const colorMap: Record<Exclude<typeof color, 'matrix'>, string> = {
			pink:
				intensity === 'intense'
					? 'text-bubble-tea-glow-pink glow-bubble-tea-pink-intense'
					: 'text-bubble-tea-glow-pink glow-bubble-tea-pink',
			purple:
				intensity === 'intense'
					? 'text-bubble-tea-glow-purple glow-bubble-tea-purple-intense'
					: 'text-bubble-tea-glow-purple glow-bubble-tea-purple',
			blue:
				intensity === 'intense'
					? 'text-bubble-tea-glow-blue glow-bubble-tea-blue-intense'
					: 'text-bubble-tea-glow-blue glow-bubble-tea-blue',
			cyan:
				intensity === 'intense'
					? 'text-bubble-tea-glow-cyan glow-bubble-tea-cyan-intense'
					: 'text-bubble-tea-glow-cyan glow-bubble-tea-cyan',
			green:
				intensity === 'intense'
					? 'text-bubble-tea-glow-green glow-bubble-tea-green-intense'
					: 'text-bubble-tea-glow-green glow-bubble-tea-green',
			yellow:
				intensity === 'intense'
					? 'text-bubble-tea-glow-yellow glow-bubble-tea-yellow-intense'
					: 'text-bubble-tea-glow-yellow glow-bubble-tea-yellow',
			orange:
				intensity === 'intense'
					? 'text-bubble-tea-glow-orange glow-bubble-tea-orange-intense'
					: 'text-bubble-tea-glow-orange glow-bubble-tea-orange',
			red:
				intensity === 'intense'
					? 'text-bubble-tea-glow-red glow-bubble-tea-red-intense'
					: 'text-bubble-tea-glow-red glow-bubble-tea-red'
		};

		// Handle matrix color for bubbleTea variant (fallback to pink)
		if (color === 'matrix') {
			return cn(baseClasses, colorMap.pink);
		}

		return cn(baseClasses, colorMap[color as Exclude<typeof color, 'matrix'>]);
	};

	const combinedClasses = cn(getGlowClasses(), animate && 'hover:scale-105', pulse && 'animate-pulse', className);
</script>

<span class={combinedClasses} {...restProps}>
	{#if children}
		{@render children()}
	{:else if text}
		{text}
	{/if}
</span>

<style>
	/* Terminal Theme Glow Effects using CSS text-shadow */
	:global(.glow-terminal-matrix) {
		text-shadow:
			0 0 5px rgba(0, 255, 65, 0.8),
			0 0 10px rgba(0, 255, 65, 0.6),
			0 0 15px rgba(0, 255, 65, 0.4);
	}

	:global(.glow-terminal-matrix-intense) {
		text-shadow:
			0 0 5px rgba(0, 255, 65, 1),
			0 0 10px rgba(0, 255, 65, 0.8),
			0 0 20px rgba(0, 255, 65, 0.6),
			0 0 30px rgba(0, 255, 65, 0.4),
			0 0 40px rgba(0, 255, 65, 0.2);
	}

	:global(.glow-terminal-cyan) {
		text-shadow:
			0 0 5px rgba(0, 255, 255, 0.8),
			0 0 10px rgba(0, 255, 255, 0.6),
			0 0 15px rgba(0, 255, 255, 0.4);
	}

	:global(.glow-terminal-cyan-intense) {
		text-shadow:
			0 0 5px rgba(0, 255, 255, 1),
			0 0 10px rgba(0, 255, 255, 0.8),
			0 0 20px rgba(0, 255, 255, 0.6),
			0 0 30px rgba(0, 255, 255, 0.4),
			0 0 40px rgba(0, 255, 255, 0.2);
	}

	/* Bubble Tea Theme Glow Effects using CSS text-shadow */
	:global(.glow-bubble-tea-pink) {
		text-shadow:
			0 0 5px rgba(255, 133, 179, 0.8),
			0 0 10px rgba(255, 133, 179, 0.6),
			0 0 15px rgba(255, 133, 179, 0.4);
	}

	:global(.glow-bubble-tea-pink-intense) {
		text-shadow:
			0 0 5px rgba(255, 133, 179, 1),
			0 0 10px rgba(255, 133, 179, 0.8),
			0 0 20px rgba(255, 133, 179, 0.6),
			0 0 30px rgba(255, 133, 179, 0.4),
			0 0 40px rgba(255, 133, 179, 0.2);
	}

	:global(.glow-bubble-tea-purple) {
		text-shadow:
			0 0 5px rgba(214, 102, 255, 0.8),
			0 0 10px rgba(214, 102, 255, 0.6),
			0 0 15px rgba(214, 102, 255, 0.4);
	}

	:global(.glow-bubble-tea-purple-intense) {
		text-shadow:
			0 0 5px rgba(214, 102, 255, 1),
			0 0 10px rgba(214, 102, 255, 0.8),
			0 0 20px rgba(214, 102, 255, 0.6),
			0 0 30px rgba(214, 102, 255, 0.4),
			0 0 40px rgba(214, 102, 255, 0.2);
	}

	:global(.glow-bubble-tea-blue) {
		text-shadow:
			0 0 5px rgba(102, 195, 255, 0.8),
			0 0 10px rgba(102, 195, 255, 0.6),
			0 0 15px rgba(102, 195, 255, 0.4);
	}

	:global(.glow-bubble-tea-blue-intense) {
		text-shadow:
			0 0 5px rgba(102, 195, 255, 1),
			0 0 10px rgba(102, 195, 255, 0.8),
			0 0 20px rgba(102, 195, 255, 0.6),
			0 0 30px rgba(102, 195, 255, 0.4),
			0 0 40px rgba(102, 195, 255, 0.2);
	}

	:global(.glow-bubble-tea-cyan) {
		text-shadow:
			0 0 5px rgba(102, 230, 234, 0.8),
			0 0 10px rgba(102, 230, 234, 0.6),
			0 0 15px rgba(102, 230, 234, 0.4);
	}

	:global(.glow-bubble-tea-cyan-intense) {
		text-shadow:
			0 0 5px rgba(102, 230, 234, 1),
			0 0 10px rgba(102, 230, 234, 0.8),
			0 0 20px rgba(102, 230, 234, 0.6),
			0 0 30px rgba(102, 230, 234, 0.4),
			0 0 40px rgba(102, 230, 234, 0.2);
	}

	:global(.glow-bubble-tea-green) {
		text-shadow:
			0 0 5px rgba(133, 217, 155, 0.8),
			0 0 10px rgba(133, 217, 155, 0.6),
			0 0 15px rgba(133, 217, 155, 0.4);
	}

	:global(.glow-bubble-tea-green-intense) {
		text-shadow:
			0 0 5px rgba(133, 217, 155, 1),
			0 0 10px rgba(133, 217, 155, 0.8),
			0 0 20px rgba(133, 217, 155, 0.6),
			0 0 30px rgba(133, 217, 155, 0.4),
			0 0 40px rgba(133, 217, 155, 0.2);
	}

	:global(.glow-bubble-tea-yellow) {
		text-shadow:
			0 0 5px rgba(255, 229, 102, 0.8),
			0 0 10px rgba(255, 229, 102, 0.6),
			0 0 15px rgba(255, 229, 102, 0.4);
	}

	:global(.glow-bubble-tea-yellow-intense) {
		text-shadow:
			0 0 5px rgba(255, 229, 102, 1),
			0 0 10px rgba(255, 229, 102, 0.8),
			0 0 20px rgba(255, 229, 102, 0.6),
			0 0 30px rgba(255, 229, 102, 0.4),
			0 0 40px rgba(255, 229, 102, 0.2);
	}

	:global(.glow-bubble-tea-orange) {
		text-shadow:
			0 0 5px rgba(255, 173, 102, 0.8),
			0 0 10px rgba(255, 173, 102, 0.6),
			0 0 15px rgba(255, 173, 102, 0.4);
	}

	:global(.glow-bubble-tea-orange-intense) {
		text-shadow:
			0 0 5px rgba(255, 173, 102, 1),
			0 0 10px rgba(255, 173, 102, 0.8),
			0 0 20px rgba(255, 173, 102, 0.6),
			0 0 30px rgba(255, 173, 102, 0.4),
			0 0 40px rgba(255, 173, 102, 0.2);
	}

	:global(.glow-bubble-tea-red) {
		text-shadow:
			0 0 5px rgba(255, 133, 133, 0.8),
			0 0 10px rgba(255, 133, 133, 0.6),
			0 0 15px rgba(255, 133, 133, 0.4);
	}

	:global(.glow-bubble-tea-red-intense) {
		text-shadow:
			0 0 5px rgba(255, 133, 133, 1),
			0 0 10px rgba(255, 133, 133, 0.8),
			0 0 20px rgba(255, 133, 133, 0.6),
			0 0 30px rgba(255, 133, 133, 0.4),
			0 0 40px rgba(255, 133, 133, 0.2);
	}

	/* Hover effects */
	span:hover {
		filter: brightness(1.1);
		transform: scale(1.02);
	}

	/* Pulse animation for special effects */
	span:global(.animate-pulse) {
		animation: glow-pulse 2s ease-in-out infinite;
	}

	@keyframes glow-pulse {
		0%,
		100% {
			opacity: 1;
			filter: brightness(1);
		}
		50% {
			opacity: 0.8;
			filter: brightness(1.4);
		}
	}

	/* Smooth transitions for animations */
	span {
		transition:
			transform 0.2s ease-out,
			filter 0.2s ease-out;
	}
</style>
