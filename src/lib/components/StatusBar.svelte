<script lang="ts">
	import { cn } from '../utils/index.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import { onMount } from 'svelte';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		status?: string;
		encoding?: string;
		position?: string;
		lineNumber?: number;
		columnNumber?: number;
		fileType?: string;
		variant?: 'terminal' | 'bubbleTea' | 'glass';
		size?: 'sm' | 'md';
		indicators?: { label: string; value: string; type?: 'normal' | 'warning' | 'error' | 'success' }[];
		class?: string;
		children?: any;
		/**
		 * Whether to automatically manage body padding for fixed positioning.
		 * When true, adds CSS custom property --status-bar-height to root for layout coordination.
		 * Default: true
		 */
		autoLayout?: boolean;
	}

	const {
		status = 'Ready',
		encoding = 'UTF-8',
		position = '1:1',
		lineNumber = 1,
		columnNumber = 1,
		fileType = 'TypeScript',
		variant = 'bubbleTea',
		size = 'md',
		indicators = [],
		class: className = '',
		children,
		autoLayout = true,
		...restProps
	}: Props = $props();

	let statusBarElement: HTMLDivElement;

	// Manage layout coordination via CSS custom properties
	onMount(() => {
		if (autoLayout && statusBarElement) {
			const updateLayout = () => {
				const height = statusBarElement.offsetHeight;
				document.documentElement.style.setProperty('--status-bar-height', `${height}px`);
			};

			// Set initial height
			updateLayout();

			// Update on resize
			const resizeObserver = new ResizeObserver(updateLayout);
			resizeObserver.observe(statusBarElement);

			return () => {
				resizeObserver.disconnect();
				document.documentElement.style.removeProperty('--status-bar-height');
			};
		}
	});

	const variants = {
		terminal: {
			background: 'bg-terminal-bg border-terminal-green/30',
			text: 'text-terminal-green',
			accent: 'text-terminal-cyan',
			separator: 'border-terminal-green/20'
		},
		bubbleTea: {
			background:
				'bg-gradient-to-r from-bubble-tea-pink/10 to-bubble-tea-purple/10 border-bubble-tea-purple/30 shadow-bubble-tea-purple-glow',
			text: 'text-bubble-tea-glow-purple font-mono',
			accent: 'text-bubble-tea-glow-pink font-mono',
			separator: 'border-bubble-tea-purple/20'
		},
		glass: {
			background: 'glass-subtle border-white/20',
			text: 'text-white/90',
			accent: 'text-white/70',
			separator: 'border-white/10'
		}
	};

	const sizes = {
		sm: 'px-3 py-1 text-xs',
		md: 'px-4 py-2 text-sm'
	};

	const getIndicatorColor = (type?: string) => {
		switch (type) {
			case 'error':
				return variant === 'bubbleTea' ? 'text-bubble-tea-red' : 'text-red-400';
			case 'warning':
				return variant === 'bubbleTea' ? 'text-bubble-tea-yellow' : 'text-yellow-400';
			case 'success':
				return variant === 'bubbleTea' ? 'text-bubble-tea-green' : 'text-green-400';
			default:
				return variants[variant].text;
		}
	};

	const currentVariant = variants[variant];

	const baseClasses = cn(
		'fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t backdrop-blur-sm',
		variant === 'bubbleTea' ? 'rounded-t-bubble-tea' : 'rounded-t-lg',
		variant === 'bubbleTea' ? 'status-bar-bubble-tea' : '',
		currentVariant.background,
		sizes[size]
	);

	const combinedClasses = cn(baseClasses, className);
</script>

<div bind:this={statusBarElement} class={combinedClasses} role="status" aria-live="polite" {...restProps}>
	<!-- Left section: Status and file info -->
	<div class="flex items-center gap-4">
		<div class="flex items-center gap-2">
			<span class={cn('font-medium', currentVariant.text)}>{status}</span>
			{#if fileType}
				<span class={cn('text-xs', currentVariant.accent)}>•</span>
				<span class={cn('text-xs', currentVariant.accent)}>{fileType}</span>
			{/if}
		</div>

		{#if indicators.length > 0}
			<div class={cn('hidden sm:flex items-center gap-3 border-l pl-4', currentVariant.separator)}>
				{#each indicators as indicator}
					<div class="flex items-center gap-1">
						<span class={cn('text-xs font-medium', getIndicatorColor(indicator.type))}>
							{indicator.label}:
						</span>
						<span class={cn('text-xs', currentVariant.text)}>
							{indicator.value}
						</span>
					</div>
				{/each}
			</div>
		{/if}
	</div>

	<!-- Right section: Position and encoding -->
	<div class="flex items-center gap-4">
		<div class="hidden md:flex items-center gap-2">
			<span class={cn('text-xs', currentVariant.accent)}>Line {lineNumber}, Col {columnNumber}</span>
			<span class={cn('text-xs', currentVariant.accent)}>•</span>
			<span class={cn('text-xs', currentVariant.accent)}>{encoding}</span>
		</div>

		<!-- Mobile view - just position -->
		<div class="md:hidden">
			<span class={cn('text-xs', currentVariant.accent)}>{position}</span>
		</div>

		{#if children}
			<div class={cn('border-l pl-4', currentVariant.separator)}>
				{@render children()}
			</div>
		{/if}
	</div>
</div>

<style>
	/* Component-scoped bubble tea animation */
	:global(.status-bar-bubble-tea) {
		animation: bubble-tea-pulse 3s ease-in-out infinite;
	}

	@keyframes bubble-tea-pulse {
		0%,
		100% {
			filter: brightness(1) saturate(1);
		}
		50% {
			filter: brightness(1.05) saturate(1.1);
		}
	}

	/* CSS custom property for layout coordination */
	:root {
		--status-bar-height: 2.5rem; /* Default fallback */
	}
</style>
