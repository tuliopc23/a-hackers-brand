<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { magneticHover, liquidBlur } from '$lib/motion';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		variant?: 'default' | 'glass' | 'glass-subtle' | 'glass-heavy' | 'terminal';
		blur?: 'sm' | 'md' | 'lg' | 'xl';
		interactive?: boolean;
		animate?: boolean;
		class?: string;
		children?: any;
	}

	const {
		variant = 'default',
		blur = 'md',
		interactive = false,
		animate = true,
		class: className = '',
		children,
		...restProps
	}: Props = $props();

	const variants = {
		default: 'bg-white/5 border border-white/10',
		glass: 'glass',
		'glass-subtle': 'glass-subtle',
		'glass-heavy': 'glass-heavy',
		terminal: 'terminal'
	};

	const blurLevels = {
		sm: 'backdrop-blur-sm',
		md: 'backdrop-blur-md',
		lg: 'backdrop-blur-lg',
		xl: 'backdrop-blur-xl'
	};

	const baseClasses = 'rounded-brand-lg p-6';
	const interactiveClasses = interactive ? 'cursor-pointer' : '';

	const combinedClasses = cn(
		baseClasses,
		variants[variant],
		variant.includes('glass') && blurLevels[blur],
		interactiveClasses,
		className
	);
</script>

{#if animate}
	{#if interactive}
		<div
			class={combinedClasses}
			role="button"
			tabindex="0"
			onkeydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					e.currentTarget.click();
				}
			}}
			use:magneticHover={{ enabled: true, strength: 0.2, scale: 1.02 }}
			in:liquidBlur={{ blur: blur, opacity: 'medium' }}
			{...restProps}
		>
			{#if children}
				{@render children()}
			{/if}
		</div>
	{:else}
		<div class={combinedClasses} in:liquidBlur={{ blur: blur, opacity: 'subtle' }} {...restProps}>
			{#if children}
				{@render children()}
			{/if}
		</div>
	{/if}
{:else if interactive}
	<div
		class={combinedClasses}
		role="button"
		tabindex="0"
		onkeydown={(e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				e.currentTarget.click();
			}
		}}
		use:magneticHover={{ enabled: true, strength: 0.2, scale: 1.02 }}
		{...restProps}
	>
		{#if children}
			{@render children()}
		{/if}
	</div>
{:else}
	<div class={combinedClasses} {...restProps}>
		{#if children}
			{@render children()}
		{/if}
	</div>
{/if}

<style>
	/* Card styles are now handled by the motion system */
	div[role='button'] {
		will-change: transform;
	}
</style>
