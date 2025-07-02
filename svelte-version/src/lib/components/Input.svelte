<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { glassFade } from '$lib/motion';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends HTMLInputAttributes {
		variant?: 'default' | 'glass' | 'terminal';
		size?: 'sm' | 'md' | 'lg';
		label?: string;
		error?: string;
		icon?: any;
		children?: any;
		animate?: boolean;
		class?: string;
	}

	let {
		variant = 'default',
		size = 'md',
		label = '',
		error = '',
		icon = null,
		animate = true,
		class: className = '',
		id = '',
		children,
		...restProps
	}: Props = $props();

	const variants = {
		default: 'bg-white/5 border border-white/20 focus:border-brand-primary',
		glass: 'glass border-white/30 focus:border-terminal-green/50 focus:shadow-lg',
		terminal: 'bg-terminal-bg border border-terminal-green/20 focus:border-terminal-green text-terminal-fg font-mono'
	};

	const sizes = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2 text-base',
		lg: 'px-5 py-3 text-lg'
	};

	const baseClasses = 'w-full rounded-brand outline-none placeholder:text-white/40';
	const errorClasses = error ? 'border-red-500 focus:border-red-500' : '';
	const iconClasses = icon || children?.icon ? 'pl-10' : '';

	const combinedClasses = cn(baseClasses, variants[variant], sizes[size], errorClasses, iconClasses, className);

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

		{#if animate}
			<input
				{id}
				class={combinedClasses}
				in:glassFade={{ duration: 200, direction: 'up', distance: 5, opacity: 'light' }}
				{...restProps}
			/>
		{:else}
			<input {id} class={combinedClasses} {...restProps} />
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
		backdrop-filter: blur(16px) saturate(200%);
		transition: backdrop-filter 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	input:global(.terminal) {
		caret-color: var(--terminal-green);
	}
</style>
