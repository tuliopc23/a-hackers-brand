<script lang="ts">
	import { cn } from '../utils.js';
	import { liquidBlur, glassFade } from '../motion';
	import { sizeOf } from '../utils/bundle-size.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLSpanElement> {
		variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
		size?: 'sm' | 'md' | 'lg';
		glass?: boolean;
		blur?: 'sm' | 'md' | 'lg' | 'xl';
		interactive?: boolean;
		animate?: boolean;
		reduceMotion?: boolean;
		class?: string;
		children?: any;
	}

	const {
		variant = 'default',
		size = 'md',
		glass = true,
		blur = 'md',
		interactive = false,
		animate = true,
		reduceMotion = false,
		class: className = '',
		children,
		...restProps
	}: Props = $props();

	const variants = {
		default: 'bg-white/10 text-white border-white/20',
		primary: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
		secondary: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
		accent: 'bg-red-500/20 text-red-300 border-red-400/30',
		success: 'bg-green-500/20 text-green-300 border-green-400/30',
		warning: 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30',
		error: 'bg-red-600/20 text-red-300 border-red-500/30'
	};

	const sizes = {
		sm: 'px-2 py-1 text-xs font-medium',
		md: 'px-3 py-1.5 text-sm font-medium',
		lg: 'px-4 py-2 text-base font-medium'
	};

	const blurLevels = {
		sm: 'backdrop-blur-sm',
		md: 'backdrop-blur-md',
		lg: 'backdrop-blur-lg',
		xl: 'backdrop-blur-xl'
	};

	const baseClasses = 'inline-flex items-center justify-center rounded-full border transition-all duration-200';
	const glassClasses = glass ? `glass-subtle ${blurLevels[blur]}` : '';
	const interactiveClasses = interactive
		? 'cursor-pointer hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent'
		: '';

	const combinedClasses = cn(baseClasses, variants[variant], sizes[size], glassClasses, interactiveClasses, className);

	function handleKeydown(event: KeyboardEvent) {
		if (interactive && (event.key === 'Enter' || event.key === ' ')) {
			event.preventDefault();
			event.currentTarget.dispatchEvent(new CustomEvent('click', { bubbles: true }));
		}
	}

	// Track bundle size
	$effect(() => {
		sizeOf('Badge', 'small');
	});
</script>

{#if animate && !reduceMotion}
	{#if interactive}
		<button
			class={combinedClasses}
			type="button"
			aria-label={restProps['aria-label'] || `${variant} badge`}
			onkeydown={handleKeydown}
			use:liquidBlur={{ blur: blur, opacity: 'subtle' }}
			{...restProps}
		>
			{#if children}
				{@render children()}
			{/if}
		</button>
	{:else}
		<span
			class={combinedClasses}
			role="status"
			aria-label={restProps['aria-label'] || `${variant} badge`}
			in:glassFade={{ direction: 'up', distance: 10 }}
			{...restProps}
		>
			{#if children}
				{@render children()}
			{/if}
		</span>
	{/if}
{:else}
	{#if interactive}
		<button
			class={combinedClasses}
			type="button"
			aria-label={restProps['aria-label'] || `${variant} badge`}
			onkeydown={handleKeydown}
			{...restProps}
		>
			{#if children}
				{@render children()}
			{/if}
		</button>
	{:else}
		<span
			class={combinedClasses}
			role="status"
			aria-label={restProps['aria-label'] || `${variant} badge`}
			{...restProps}
		>
			{#if children}
				{@render children()}
			{/if}
		</span>
	{/if}
{/if}

<style>
	button {
		will-change: transform;
	}

	@media (prefers-reduced-motion: reduce) {
		button, span {
			transition: none;
			animation: none;
		}
	}
</style>
