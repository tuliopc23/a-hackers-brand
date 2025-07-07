<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { glassFade, springPop } from '$lib/motion';
	import { sizeOf } from '$lib/utils/bundle-size.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		open?: boolean;
		type?: 'info' | 'success' | 'warning' | 'error';
		variant?: 'default' | 'glass' | 'terminal';
		position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
		blur?: 'sm' | 'md' | 'lg' | 'xl';
		duration?: number | null;
		closable?: boolean;
		animate?: boolean;
		reduceMotion?: boolean;
		title?: string;
		description?: string;
		action?: { label: string; onClick: () => void };
		class?: string;
		children?: any;
		onOpenChange?: (open: boolean) => void;
	}

	let {
		open = false,
		type = 'info',
		variant = 'glass',
		position = 'top-right',
		blur = 'md',
		duration = 5000,
		closable = true,
		animate = true,
		reduceMotion = false,
		title,
		description,
		action,
		class: className = '',
		children,
		onOpenChange,
		...restProps
	}: Props = $props();

	let toastElement = $state<HTMLDivElement>();
	let timeoutId: NodeJS.Timeout | null = null;

	const types = {
		info: {
			icon: 'ℹ️',
			colors: 'border-blue-400/40 bg-blue-500/10 text-blue-200'
		},
		success: {
			icon: '✅',
			colors: 'border-green-400/40 bg-green-500/10 text-green-200'
		},
		warning: {
			icon: '⚠️',
			colors: 'border-yellow-400/40 bg-yellow-500/10 text-yellow-200'
		},
		error: {
			icon: '❌',
			colors: 'border-red-400/40 bg-red-500/10 text-red-200'
		}
	};

	const positions = {
		'top-left': 'top-4 left-4',
		'top-center': 'top-4 left-1/2 -translate-x-1/2',
		'top-right': 'top-4 right-4',
		'bottom-left': 'bottom-4 left-4',
		'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
		'bottom-right': 'bottom-4 right-4'
	};

	const variants = {
		default: 'bg-white/5 border border-white/10',
		glass: 'glass-subtle border',
		terminal: 'terminal'
	};

	const blurLevels = {
		sm: 'backdrop-blur-sm',
		md: 'backdrop-blur-md',
		lg: 'backdrop-blur-lg',
		xl: 'backdrop-blur-xl'
	};

	const toastClasses = cn(
		'fixed z-50 max-w-sm w-full rounded-brand-lg p-4 shadow-lg',
		'flex items-start gap-3 transition-all duration-300',
		positions[position],
		variants[variant],
		variant === 'glass' && blurLevels[blur],
		types[type].colors,
		className
	);

	function handleClose() {
		open = false;
		onOpenChange?.(false);
		if (timeoutId) {
			clearTimeout(timeoutId);
			timeoutId = null;
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && closable) {
			event.preventDefault();
			handleClose();
		}
	}

	function handleAction() {
		action?.onClick();
		handleClose();
	}

	$effect(() => {
		if (open && duration !== null && duration > 0) {
			timeoutId = setTimeout(() => {
				handleClose();
			}, duration);
		}

		return () => {
			if (timeoutId) {
				clearTimeout(timeoutId);
				timeoutId = null;
			}
		};
	});

	$effect(() => {
		if (open) {
			document.addEventListener('keydown', handleKeydown);
			return () => document.removeEventListener('keydown', handleKeydown);
		}
	});

	// Track bundle size
	$effect(() => {
		sizeOf('Toast', 'small');
	});
</script>

{#if open}
	<div
		bind:this={toastElement}
		class={toastClasses}
		role="alert"
		aria-live="polite"
		aria-atomic="true"
		tabindex="-1"
		in:glassFade={{
			direction: position.includes('top') ? 'down' : 'up',
			distance: 20,
			duration: animate && !reduceMotion ? 300 : 0
		}}
		out:glassFade={{
			direction: position.includes('top') ? 'up' : 'down',
			distance: 20,
			duration: animate && !reduceMotion ? 200 : 0
		}}
		{...restProps}
	>
		<!-- Icon -->
		<div class="flex-shrink-0 text-lg" aria-hidden="true">
			{types[type].icon}
		</div>

		<!-- Content -->
		<div class="flex-1 min-w-0">
			{#if title}
				<h4 class="font-semibold text-sm text-white mb-1">
					{title}
				</h4>
			{/if}

			{#if description}
				<p class="text-sm text-white/80">
					{description}
				</p>
			{:else if children}
				<div class="text-sm text-white/80">
					{@render children()}
				</div>
			{/if}

			{#if action}
				<button
					class="mt-2 text-sm font-medium text-white hover:text-white/80 focus:outline-none focus:underline transition-colors duration-150"
					onclick={handleAction}
					use:springPop={animate && !reduceMotion ? { scale: 0.98, duration: 100 } : undefined}
				>
					{action.label}
				</button>
			{/if}
		</div>

		<!-- Close button -->
		{#if closable}
			<button
				class="flex-shrink-0 text-white/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 rounded transition-all duration-150"
				onclick={handleClose}
				aria-label="Close notification"
				use:springPop={animate && !reduceMotion ? { scale: 0.9, duration: 100 } : undefined}
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		{/if}
	</div>
{/if}

<style>
	div[role='alert'] {
		will-change: transform, opacity;
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none;
			animation: none;
			will-change: auto;
		}
	}
</style>
