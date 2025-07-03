<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { magneticHover, springPop } from '$lib/motion';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'glass-dark';
		size?: 'sm' | 'md' | 'lg' | 'xl';
		loading?: boolean;
		icon?: boolean;
		animate?: boolean;
		class?: string;
		children?: any;
	}

	const {
		variant = 'default',
		size = 'md',
		loading = false,
		icon = false,
		animate = true,
		class: className = '',
		children,
		disabled = false,
		...restProps
	}: Props = $props();

	const variants = {
		default: 'bg-brand-primary hover:bg-brand-primary/90 text-white',
		secondary: 'bg-brand-secondary hover:bg-brand-secondary/90 text-white',
		outline: 'border border-brand-primary text-brand-primary hover:bg-brand-primary/10',
		ghost: 'hover:bg-brand-primary/10 text-brand-primary',
		glass: 'glass glass-shimmer hover:glass-glow text-white',
		'glass-dark': 'glass-heavy border-terminal-green/20 hover:border-terminal-green/40 text-terminal-green'
	};

	const sizes = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2 text-base',
		lg: 'px-6 py-3 text-lg',
		xl: 'px-8 py-4 text-xl'
	};

	const baseClasses =
		'inline-flex items-center justify-center gap-2 rounded-brand font-medium focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

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

{#if animate}
	<button
		class={combinedClasses}
		{disabled}
		aria-busy={loading}
		use:magneticHover={{ enabled: !disabled && !loading, strength: 0.15, scale: 1.02 }}
		in:springPop={{ duration: 200, bounce: variant.includes('glass') }}
		{...restProps}
	>
		{#if loading}
			<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
		{/if}

		{#if children}
			{@render children()}
		{/if}
	</button>
{:else}
	<button
		class={combinedClasses}
		{disabled}
		aria-busy={loading}
		use:magneticHover={{ enabled: !disabled && !loading, strength: 0.15, scale: 1.02 }}
		{...restProps}
	>
		{#if loading}
			<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
		{/if}

		{#if children}
			{@render children()}
		{/if}
	</button>
{/if}

<style>
	button {
		/* Button styles are now handled by the motion system */
		will-change: transform;
		position: relative;
		overflow: hidden;
	}

	/* Keep the glass shimmer effect for glass variants */
	button:global(.glass)::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
		transition: left 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
		pointer-events: none;
	}

	button:global(.glass):hover::before {
		left: 100%;
	}
</style>
