<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { magneticHover, springPop, jellyHover, useReducedMotion } from '$lib/motion';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		command: string;
		output?: string;
		status?: 'success' | 'error' | 'pending';
		showPrompt?: boolean;
		variant?: 'default' | 'glass' | 'terminal' | 'minimal';
		animate?: boolean;
		class?: string;
		children?: import('svelte').Snippet;
	}

	const {
		command,
		output = '',
		status = 'success',
		showPrompt = true,
		variant = 'terminal',
		animate = true,
		class: className = '',
		children,
		...restProps
	}: Props = $props();

	// Check for reduced motion preference
	const prefersReducedMotion = useReducedMotion();
	const shouldAnimate = $derived(animate && !prefersReducedMotion);

	const variants = {
		default: 'bg-neutral-900/80 border border-neutral-700 text-neutral-100',
		glass: 'glass-medium border border-white/20 text-white backdrop-blur-lg',
		terminal:
			'bg-terminal-bg border-2 border-terminal-green/30 text-terminal-green font-mono shadow-lg shadow-terminal-green/10',
		minimal: 'bg-transparent border border-neutral-600 text-neutral-300'
	};

	const statusColors = {
		success: 'text-terminal-green',
		error: 'text-red-400',
		pending: 'text-yellow-400'
	};

	const baseClasses = 'rounded-lg p-4 transition-all duration-300 will-change-transform';
	const combinedClasses = cn(baseClasses, variants[variant], className);
</script>

{#if shouldAnimate}
	<div
		class={combinedClasses}
		use:jellyHover={{
			enabled: shouldAnimate,
			duration: prefersReducedMotion ? 100 : 200,
			scale: prefersReducedMotion ? 1.01 : 1.02,
			borderRadius: '12px',
			responsiveness: prefersReducedMotion ? 'subtle' : 'medium'
		}}
		use:magneticHover={{
			enabled: shouldAnimate && variant !== 'terminal',
			strength: prefersReducedMotion ? 0.05 : 0.1,
			scale: prefersReducedMotion ? 1.005 : 1.01
		}}
		in:springPop={{
			duration: prefersReducedMotion ? 100 : 300,
			bounce: !prefersReducedMotion && variant === 'glass'
		}}
		{...restProps}
	>
		<div class="space-y-2">
			<!-- Command Line -->
			<div class="flex items-center gap-2">
				{#if showPrompt}
					<span class={cn('font-mono text-sm', statusColors[status])}>$</span>
				{/if}
				<code class="font-mono text-sm flex-1">{command}</code>
				{#if status === 'pending'}
					<div class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" role="status">
						<span class="sr-only">Command pending</span>
					</div>
				{/if}
			</div>

			<!-- Output -->
			{#if output}
				<div class="pl-4 border-l-2 border-neutral-600">
					<pre class="font-mono text-sm whitespace-pre-wrap text-neutral-300">{output}</pre>
				</div>
			{/if}

			<!-- Children content -->
			{#if children}
				<div class="mt-3">
					{@render children()}
				</div>
			{/if}
		</div>
	</div>
{:else}
	<div class={combinedClasses} {...restProps}>
		<div class="space-y-2">
			<!-- Command Line -->
			<div class="flex items-center gap-2">
				{#if showPrompt}
					<span class={cn('font-mono text-sm', statusColors[status])}>$</span>
				{/if}
				<code class="font-mono text-sm flex-1">{command}</code>
				{#if status === 'pending'}
					<div class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" role="status">
						<span class="sr-only">Command pending</span>
					</div>
				{/if}
			</div>

			<!-- Output -->
			{#if output}
				<div class="pl-4 border-l-2 border-neutral-600">
					<pre class="font-mono text-sm whitespace-pre-wrap text-neutral-300">{output}</pre>
				</div>
			{/if}

			<!-- Children content -->
			{#if children}
				<div class="mt-3">
					{@render children()}
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	div {
		will-change: transform, border-radius, filter;
		position: relative;
		/* Apple-style rounded corners with smooth transitions */
		transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	/* Terminal variant glow effects */
	div:global([class*='terminal']) {
		text-shadow: 0 0 5px currentColor;
	}

	div:global([class*='terminal']):hover {
		box-shadow:
			0 0 20px rgba(48, 209, 88, 0.2),
			inset 0 0 20px rgba(48, 209, 88, 0.05);
	}

	/* Glass morphism enhancements */
	div:global(.glass-medium) {
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
	}

	/* Enhanced focus states */
	div:focus-visible {
		outline: none;
		box-shadow:
			0 0 0 2px rgba(0, 255, 255, 0.6),
			0 0 20px rgba(0, 255, 255, 0.3);
	}
</style>
