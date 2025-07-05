<script lang="ts">
	import { cn } from '../utils.js';
	import { glassFade, liquidBlur, magneticHover } from '../motion';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends HTMLInputAttributes {
		variant?: 'default' | 'glass' | 'terminal' | 'liquid';
		size?: 'sm' | 'md' | 'lg';
		label?: string;
		error?: string;
		icon?: any;
		children?: any;
		animate?: boolean;
		liquid?: boolean;
		magnetic?: boolean;
		jelly?: boolean;
		glow?: boolean;
		class?: string;
	}

	const {
		variant = 'default',
		size = 'md',
		label = '',
		error = '',
		icon = null,
		animate = true,
		liquid = false,
		magnetic = false,
		jelly = false,
		glow = false,
		class: className = '',
		id = '',
		children,
		...restProps
	}: Props = $props();

	const variants = {
		default: 'bg-white/5 border border-white/20 focus:border-brand-primary',
		glass: 'glass border-white/30 focus:border-terminal-green/50 focus:shadow-lg',
		terminal: 'bg-terminal-bg border border-terminal-green/20 focus:border-terminal-green text-terminal-fg font-mono',
		liquid: 'bg-gradient-to-r from-white/5 to-white/10 border border-white/20 focus:border-brand-primary focus:bg-gradient-to-r focus:from-white/10 focus:to-white/15'
	};

	const sizes = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2 text-base',
		lg: 'px-5 py-3 text-lg'
	};

	const baseClasses = 'w-full rounded-brand outline-none placeholder:text-white/40 transition-all duration-300';
	const errorClasses = error ? 'border-red-500 focus:border-red-500' : '';
	const iconClasses = icon || children?.icon ? 'pl-10' : '';
	const glowClasses = glow ? 'focus:shadow-lg focus:shadow-brand-primary/20' : '';
	const liquidClasses = liquid ? 'backdrop-blur-md' : '';

	const combinedClasses = cn(
		baseClasses, 
		variants[variant], 
		sizes[size], 
		errorClasses, 
		iconClasses, 
		glowClasses,
		liquidClasses,
		className
	);

	const uniqueId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
</script>

<div class="relative">
	{#if label}
		<label for={uniqueId} class="block text-sm font-medium text-white/80 mb-2">
			{label}
		</label>
	{/if}

	<div class="relative">
		{#if icon}
			<div class="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
				{@render icon()}
			</div>
		{:else if children?.icon}
			<div class="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
				{@render children.icon()}
			</div>
		{/if}

		{#if animate && liquid}
			<input
				{id}
				class={combinedClasses}
				in:liquidBlur={{ duration: 300, blur: 'sm', scale: 0.98 }}
				use:magneticHover={magnetic ? { strength: 0.1, distance: 50 } : undefined}
				use:jellyHover={jelly ? { intensity: 0.05, speed: 200 } : undefined}
				{...restProps}
			/>
		{:else if animate}
			<input
				{id}
				class={combinedClasses}
				in:glassFade={{ duration: 200, direction: 'up', distance: 5, opacity: 'light' }}
				use:magneticHover={magnetic ? { strength: 0.1, distance: 50 } : undefined}
				use:jellyHover={jelly ? { intensity: 0.05, speed: 200 } : undefined}
				{...restProps}
			/>
		{:else}
			<input 
				{id} 
				class={combinedClasses} 
				use:magneticHover={magnetic ? { strength: 0.1, distance: 50 } : undefined}
				use:jellyHover={jelly ? { intensity: 0.05, speed: 200 } : undefined}
				{...restProps} 
			/>
		{/if}
	</div>

	{#if error}
		<p class="mt-1 text-sm text-red-400" role="alert">
			{error}
		</p>
	{/if}
</div>

<style>
	input:focus {
		box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
		transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	input:global(.glass):focus {
		-webkit-backdrop-filter: blur(16px) saturate(200%);
		        backdrop-filter: blur(16px) saturate(200%);
		transition: -webkit-backdrop-filter 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
		transition: backdrop-filter 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
		transition: backdrop-filter 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94), -webkit-backdrop-filter 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	input:global(.terminal) {
		caret-color: var(--terminal-green);
	}

	/* Liquid input effects */
	input:focus {
		transform: translateY(-1px);
	}

	input:global(.backdrop-blur-md):focus {
		-webkit-backdrop-filter: blur(12px) saturate(150%);
		        backdrop-filter: blur(12px) saturate(150%);
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
	}

	/* Enhanced hover states */
	input:hover:not(:focus) {
		border-color: rgba(255, 255, 255, 0.3);
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
	}

	/* Jelly physics simulation */
	input:global(.jelly-hover):hover {
		transform: scale(1.01) translateY(-1px);
		transition: transform 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	/* Magnetic attraction visual feedback */
	input:global(.magnetic):hover {
		box-shadow: 0 4px 20px rgba(139, 92, 246, 0.15);
	}
</style>
