<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { breathing, glassFade } from '$lib/motion';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		variant?: 'glass' | 'terminal' | 'liquid' | 'neon';
		type?: 'text' | 'avatar' | 'card' | 'button' | 'image' | 'paragraph';
		lines?: number;
		animated?: boolean;
		glow?: boolean;
		speed?: 'slow' | 'normal' | 'fast';
		class?: string;
		width?: string;
		height?: string;
		rounded?: boolean;
	}

	const {
		variant = 'glass',
		type = 'text',
		lines = 3,
		animated = true,
		glow = false,
		speed = 'normal',
		class: className = '',
		width,
		height,
		rounded = true,
		...restProps
	}: Props = $props();

	const variants = {
		glass: {
			bg: 'bg-gradient-to-r from-white/5 via-white/10 to-white/5',
			shimmer: 'from-transparent via-white/20 to-transparent',
			border: 'border-white/10',
			glow: 'shadow-[0_0_20px_rgba(255,255,255,0.2)]'
		},
		terminal: {
			bg: 'bg-gradient-to-r from-green-400/10 via-green-400/20 to-green-400/10',
			shimmer: 'from-transparent via-green-400/30 to-transparent',
			border: 'border-green-400/20',
			glow: 'shadow-[0_0_15px_rgba(74,222,128,0.4)]'
		},
		liquid: {
			bg: 'bg-gradient-to-r from-blue-500/10 via-purple-500/20 to-blue-500/10',
			shimmer: 'from-transparent via-white/30 to-transparent',
			border: 'border-white/20',
			glow: 'shadow-[0_0_25px_rgba(139,92,246,0.3)]'
		},
		neon: {
			bg: 'bg-gradient-to-r from-pink-500/10 via-pink-500/20 to-pink-500/10',
			shimmer: 'from-transparent via-pink-500/40 to-transparent',
			border: 'border-pink-500/30',
			glow: 'shadow-[0_0_20px_rgba(236,72,153,0.5)]'
		}
	};

	const speeds = {
		slow: 'duration-[3s]',
		normal: 'duration-[2s]',
		fast: 'duration-[1s]'
	};

	const types = {
		text: {
			width: 'w-full',
			height: 'h-4',
			spacing: 'space-y-3'
		},
		avatar: {
			width: 'w-12',
			height: 'h-12',
			rounded: 'rounded-full'
		},
		card: {
			width: 'w-full',
			height: 'h-48',
			rounded: 'rounded-2xl'
		},
		button: {
			width: 'w-24',
			height: 'h-10',
			rounded: 'rounded-xl'
		},
		image: {
			width: 'w-full',
			height: 'h-64',
			rounded: 'rounded-2xl'
		},
		paragraph: {
			width: 'w-full',
			height: 'h-3',
			spacing: 'space-y-2'
		}
	};

	const currentVariant = variants()[variant];
	const currentType = types()[type];
	const shimmerSpeed = speeds()[speed];

	// Generate line widths for text/paragraph types
	const lineWidths = $derived(
		type === 'text' || type === 'paragraph'
			? Array.from({ length: lines }, (_, i) => {
					if (i === lines - 1) return '60%'; // Last line shorter
					return `${85 + Math.floor(Math.random() * 15)}%`;
				})
			: []
	);
</script>

{#if type === 'text' || type === 'paragraph'}
	<div class={cn((currentType as any)?.spacing || '', className)} {...restProps}>
		{#each lineWidths as lineWidth, i (i)}
			<div
				class={cn(
					'relative overflow-hidden backdrop-blur-xl border',
					currentType.height,
					currentVariant.bg,
					currentVariant.border,
					glow && currentVariant.glow,
					rounded && 'rounded-lg',
					animated && 'transform-gpu will-change-transform'
				)}
				style:width="{width || lineWidth}"
				use:breathing={{ enabled: animated && variant === 'liquid', intensity: 0.02, speed: 3000 }}
				transition:glassFade={{ duration: 200, delay: i * 50 }}
			>
				{#if animated}
					<div
						class={cn('absolute inset-0 bg-gradient-to-r', currentVariant.shimmer, shimmerSpeed, 'animate-shimmer')}
					></div>
				{/if}
			</div>
		{/each}
	</div>
{:else}
	<div
		class={cn(
			'relative overflow-hidden backdrop-blur-xl border',
			currentType.width,
			currentType.height,
			currentVariant.bg,
			currentVariant.border,
			(currentType as any)?.rounded || (rounded ? 'rounded-lg' : ''),
			glow && currentVariant.glow,
			animated && 'transform-gpu will-change-transform',
			className
		)}
		style:width
		style:height
		use:breathing={{ enabled: animated && variant === 'liquid', intensity: 0.03, speed: 3000 }}
		transition:glassFade={{ duration: 200 }}
		{...restProps}
	>
		{#if animated}
			<div
				class={cn('absolute inset-0 bg-gradient-to-r', currentVariant.shimmer, shimmerSpeed, 'animate-shimmer')}
			></div>
		{/if}
	</div>
{/if}

<style>
	@keyframes shimmer {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}

	:global(.animate-shimmer) {
		animation: shimmer linear infinite;
	}
</style>
