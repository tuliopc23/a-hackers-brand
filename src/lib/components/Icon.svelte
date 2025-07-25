<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { ComponentType } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLElement> {
		icon: ComponentType;
		size?: number | string;
		variant?: 'default' | 'terminal' | 'glass' | 'neon' | 'success' | 'warning' | 'error';
		glow?: boolean;
		animate?: boolean;
		magnetic?: boolean;
		class?: string;
	}

	const {
		icon,
		size = 20,
		variant = 'default',
		glow = false,
		animate = false,
		magnetic = false,
		class: className = '',
		...restProps
	}: Props = $props();

	const variants = {
		default: 'text-white/80',
		terminal: 'text-terminal-green',
		glass: 'text-blue-300',
		neon: 'text-cyan-400',
		success: 'text-green-400',
		warning: 'text-yellow-400',
		error: 'text-red-400'
	};

	const glowStyles = {
		default: 'drop-shadow-lg',
		terminal: 'drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]',
		glass: 'drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]',
		neon: 'drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]',
		success: 'drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]',
		warning: 'drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]',
		error: 'drop-shadow-[0_0_8px_rgba(248,113,113,0.5)]'
	};

	const SvelteComponent = $derived(icon);
</script>

<SvelteComponent
	{size}
	class={cn(
		variants()[variant],
		glow && glowStyles()[variant],
		animate && 'transition-all duration-300 ease-out',
		magnetic && 'hover:scale-110',
		className
	)}
	{...restProps}
/>

<style>
	:global(.icon-magnetic) {
		transition: transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}

	:global(.icon-magnetic:hover) {
		transform: scale(1.1);
	}
</style>
