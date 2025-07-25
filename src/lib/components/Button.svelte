<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { magneticHover, springPop, jellyHover, liquidResponsive, useReducedMotion } from '$lib/motion';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'glass-dark' | 'terminal' | 'liquid';
		size?: 'sm' | 'md' | 'lg' | 'xl';
		loading?: boolean;
		icon?: boolean;
		animate?: boolean;
		jelly?: boolean;
		liquid?: boolean;
		'aria-label'?: string;
		'aria-describedby'?: string;
		class?: string;
		children?: import('svelte').Snippet;
	}

	const {
		variant = 'default',
		size = 'md',
		loading = false,
		icon = false,
		animate = true,
		jelly = true,
		liquid = false,
		class: className = '',
		children,
		disabled = false,
		'aria-label': ariaLabel,
		'aria-describedby': ariaDescribedBy,
		...restProps
	}: Props = $props();

	// Check for reduced motion preference
	const prefersReducedMotion = useReducedMotion();
	const shouldAnimate = $derived(animate && !prefersReducedMotion);

	const variants = {
		default:
			'bg-gradient-to-r from-terminal-blue to-terminal-cyan hover:from-terminal-blue/90 hover:to-terminal-cyan/90 text-white shadow-lg hover:shadow-xl border border-white/10',
		secondary:
			'bg-gradient-to-r from-terminal-purple to-terminal-pink hover:from-terminal-purple/90 hover:to-terminal-pink/90 text-white shadow-lg hover:shadow-xl border border-white/10',
		outline:
			'border-2 border-terminal-green text-terminal-green hover:bg-terminal-green/10 hover:border-terminal-green/80 backdrop-blur-sm',
		ghost: 'hover:bg-terminal-green/10 text-terminal-green hover:text-terminal-green/90 backdrop-blur-sm',
		glass: 'glass-medium glass-shimmer hover:glass-heavy text-white border border-white/20 shadow-2xl',
		'glass-dark':
			'glass-heavy border-terminal-green/30 hover:border-terminal-green/60 text-terminal-green shadow-2xl backdrop-blur-xl',
		terminal:
			'bg-terminal-bg border-2 border-terminal-green text-terminal-green font-mono hover:bg-terminal-green/5 hover:border-terminal-green/80 shadow-lg hover:shadow-terminal-green/20',
		liquid:
			'bg-gradient-to-br from-terminal-cyan/20 via-terminal-blue/20 to-terminal-purple/20 border border-white/30 text-white backdrop-blur-lg hover:from-terminal-cyan/30 hover:via-terminal-blue/30 hover:to-terminal-purple/30'
	};

	const sizes = {
		sm: 'px-4 py-2 text-sm rounded-lg',
		md: 'px-6 py-3 text-base rounded-xl',
		lg: 'px-8 py-4 text-lg rounded-2xl',
		xl: 'px-10 py-5 text-xl rounded-3xl'
	};

	const baseClasses =
		'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-50 disabled:pointer-events-none will-change-transform';

	const iconClasses = icon ? 'aspect-square !p-0' : '';

	const combinedClasses = cn(
		baseClasses,
		variants[variant],
		sizes[size],
		iconClasses,
		loading && 'cursor-wait',
		className
	);
</script>

{#if shouldAnimate}
	<button
		class={combinedClasses}
		{disabled}
		aria-label={ariaLabel}
		aria-describedby={ariaDescribedBy}
		aria-busy={loading}
		use:jellyHover={{
			enabled: !disabled && !loading && jelly && shouldAnimate,
			duration: prefersReducedMotion ? 100 : 200,
			scale: prefersReducedMotion ? 1.02 : variant === 'liquid' ? 1.08 : 1.05,
			borderRadius: variant === 'liquid' ? '24px' : '16px',
			responsiveness: prefersReducedMotion ? 'subtle' : 'strong'
		}}
		use:liquidResponsive={{
			enabled: !disabled && !loading && liquid && shouldAnimate,
			liquidIntensity: prefersReducedMotion ? 0.5 : 1.2,
			morphStrength: prefersReducedMotion ? 0.1 : 0.4,
			flowDirection: 'center'
		}}
		use:magneticHover={{
			enabled: !disabled && !loading && !jelly && !liquid && shouldAnimate,
			strength: prefersReducedMotion ? 0.05 : 0.15,
			scale: prefersReducedMotion ? 1.01 : 1.02
		}}
		in:springPop={{
			duration: prefersReducedMotion ? 100 : 200,
			bounce: !prefersReducedMotion && (variant.includes('glass') || variant === 'liquid')
		}}
		onclick={(e) => e.stopPropagation()}
		onkeydown={(e) => e.key === 'Enter' && e.currentTarget.click()}
		{...restProps}
	>
		{#if loading}
			<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" role="status">
				<span class="sr-only">Loading...</span>
			</div>
		{/if}

		{#if children}
			{@render children()}
		{/if}
	</button>
{:else}
	<button
		class={combinedClasses}
		{disabled}
		aria-label={ariaLabel}
		aria-describedby={ariaDescribedBy}
		aria-busy={loading}
		use:jellyHover={{
			enabled: !disabled && !loading && jelly && shouldAnimate,
			duration: prefersReducedMotion ? 100 : 200,
			scale: prefersReducedMotion ? 1.02 : variant === 'liquid' ? 1.08 : 1.05,
			borderRadius: variant === 'liquid' ? '24px' : '16px',
			responsiveness: prefersReducedMotion ? 'subtle' : 'strong'
		}}
		use:liquidResponsive={{
			enabled: !disabled && !loading && liquid && shouldAnimate,
			liquidIntensity: prefersReducedMotion ? 0.5 : 1.2,
			morphStrength: prefersReducedMotion ? 0.1 : 0.4,
			flowDirection: 'center'
		}}
		use:magneticHover={{
			enabled: !disabled && !loading && !jelly && !liquid && shouldAnimate,
			strength: prefersReducedMotion ? 0.05 : 0.15,
			scale: prefersReducedMotion ? 1.01 : 1.02
		}}
		{...restProps}
	>
		{#if loading}
			<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" role="status">
				<span class="sr-only">Loading...</span>
			</div>
		{/if}

		{#if children}
			{@render children()}
		{/if}
	</button>
{/if}

<style>
	button {
		will-change: transform, border-radius, filter;
		position: relative;
		overflow: hidden;
		/* Apple-style rounded corners with smooth transitions */
		transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	/* Enhanced glass shimmer effect */
	button:global(.glass-shimmer)::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), rgba(0, 255, 255, 0.2), transparent);
		transition: left 600ms cubic-bezier(0.34, 1.56, 0.64, 1);
		pointer-events: none;
		z-index: 1;
	}

	button:global(.glass-shimmer):hover::before {
		left: 100%;
	}

	/* Terminal glow effect */
	button:global(.shadow-terminal-green\/20) {
		box-shadow: 0 0 20px rgba(48, 209, 88, 0.2);
	}

	button:global(.shadow-terminal-green\/20):hover {
		box-shadow: 0 0 30px rgba(48, 209, 88, 0.4);
	}

	/* Liquid variant breathing animation */
	button:global([class*='liquid']) {
		animation: liquid-breathe 4s ease-in-out infinite;
	}

	@keyframes liquid-breathe {
		0%,
		100% {
			filter: blur(0px) saturate(1);
			border-radius: inherit;
		}
		50% {
			filter: blur(0.5px) saturate(1.1);
			border-radius: calc(var(--radius) * 1.2);
		}
	}

	/* Dynamic focus states with Apple-style glow */
	button:focus-visible {
		outline: none;
		box-shadow:
			0 0 0 2px rgba(0, 255, 255, 0.6),
			0 0 20px rgba(0, 255, 255, 0.3),
			0 4px 12px rgba(0, 0, 0, 0.2);
		transform: translateY(-1px);
	}

	/* Terminal variant special effects */
	button:global([class*='terminal']) {
		text-shadow: 0 0 5px currentColor;
		font-family: 'PP Supply Mono', monospace;
	}

	button:global([class*='terminal']):hover {
		text-shadow: 0 0 10px currentColor;
		box-shadow:
			0 0 20px rgba(48, 209, 88, 0.3),
			inset 0 0 20px rgba(48, 209, 88, 0.1);
	}
</style>
