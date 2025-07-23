<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { glassFade, springPop, jellyHover, useReducedMotion } from '$lib/motion';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		open?: boolean;
		position?: 'left' | 'right' | 'top' | 'bottom';
		size?: 'sm' | 'md' | 'lg';
		variant?: 'default' | 'glass' | 'terminal' | 'minimal';
		closeOnOutsideClick?: boolean;
		closeOnEscape?: boolean;
		animate?: boolean;
		class?: string;
		children?: import('svelte').Snippet;
		onClose?: () => void;
	}

	const {
		open = false,
		position = 'right',
		size = 'md',
		variant = 'glass',
		closeOnOutsideClick = true,
		closeOnEscape = true,
		animate = true,
		class: className = '',
		children,
		onClose,
		...restProps
	}: Props = $props();

	// Check for reduced motion preference
	const prefersReducedMotion = useReducedMotion();
	const shouldAnimate = $derived(animate && !prefersReducedMotion);

	const variants = {
		default: 'bg-neutral-900/95 border border-neutral-700 text-neutral-100',
		glass: 'glass-heavy border border-white/30 text-white backdrop-blur-xl',
		terminal: 'bg-terminal-bg border-2 border-terminal-green/30 text-terminal-green shadow-lg shadow-terminal-green/10',
		minimal: 'bg-white/5 border border-white/10 text-white backdrop-blur-sm'
	};

	const sizes = {
		sm: '320px',
		md: '400px',
		lg: '500px'
	};

	const positions = {
		left: 'left-0 top-0 h-full',
		right: 'right-0 top-0 h-full',
		top: 'top-0 left-0 w-full',
		bottom: 'bottom-0 left-0 w-full'
	};

	const transforms = {
		left: open ? 'translateX(0)' : 'translateX(-100%)',
		right: open ? 'translateX(0)' : 'translateX(100%)',
		top: open ? 'translateY(0)' : 'translateY(-100%)',
		bottom: open ? 'translateY(0)' : 'translateY(100%)'
	};

	const sizeStyle = $derived(() => {
		if (position === 'left' || position === 'right') {
			return `width: ${sizes[size]};`;
		} else {
			return `height: ${sizes[size]};`;
		}
	});

	const baseClasses = 'fixed z-50 transition-transform duration-300 will-change-transform';
	const combinedClasses = cn(baseClasses, variants[variant], positions[position], className);

	// Handle escape key
	const handleKeydown = (event: KeyboardEvent) => {
		if (closeOnEscape && event.key === 'Escape' && open) {
			onClose?.();
		}
	};

	// Handle outside click
	const handleOverlayClick = () => {
		if (closeOnOutsideClick) {
			onClose?.();
		}
	};
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<!-- Overlay -->
	<div
		class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
		onclick={handleOverlayClick}
		role="button"
		tabindex="-1"
		aria-label="Close drawer"
		onkeydown={(e) => e.key === 'Enter' && handleOverlayClick()}
	></div>

	<!-- Drawer -->
	{#if shouldAnimate}
		<div
			class={combinedClasses}
			style="{sizeStyle} transform: {transforms[position]};"
			use:jellyHover={{
				enabled: shouldAnimate,
				duration: prefersReducedMotion ? 100 : 200,
				scale: prefersReducedMotion ? 1.005 : 1.01,
				borderRadius: '16px',
				responsiveness: prefersReducedMotion ? 'subtle' : 'medium'
			}}
			in:glassFade={{
				duration: prefersReducedMotion ? 150 : 300,
				direction: position === 'left' ? 'left' : position === 'right' ? 'right' : position === 'top' ? 'up' : 'down',
				distance: 20
			}}
			role="dialog"
			aria-modal="true"
			aria-labelledby="drawer-title"
			{...restProps}
		>
			<div class="h-full overflow-y-auto p-6">
				{#if children}
					{@render children()}
				{/if}
			</div>
		</div>
	{:else}
		<div
			class={combinedClasses}
			style="{sizeStyle} transform: {transforms[position]};"
			role="dialog"
			aria-modal="true"
			aria-labelledby="drawer-title"
			{...restProps}
		>
			<div class="h-full overflow-y-auto p-6">
				{#if children}
					{@render children()}
				{/if}
			</div>
		</div>
	{/if}
{/if}

<style>
	div {
		will-change: transform, opacity, filter;
		/* Apple-style rounded corners with smooth transitions */
		transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	/* Terminal variant glow effects */
	div:global([class*='terminal']) {
		text-shadow: 0 0 5px currentColor;
	}

	div:global([class*='terminal']):hover {
		box-shadow:
			0 0 30px rgba(48, 209, 88, 0.2),
			inset 0 0 20px rgba(48, 209, 88, 0.05);
	}

	/* Glass morphism enhancements */
	div:global(.glass-heavy) {
		backdrop-filter: blur(20px) saturate(180%);
		-webkit-backdrop-filter: blur(20px) saturate(180%);
	}

	/* Enhanced focus states */
	div:focus-visible {
		outline: none;
		box-shadow:
			0 0 0 2px rgba(0, 255, 255, 0.6),
			0 0 20px rgba(0, 255, 255, 0.3);
	}

	/* Smooth scrolling for content */
	div:global(.overflow-y-auto) {
		scrollbar-width: thin;
		scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
	}

	div:global(.overflow-y-auto)::-webkit-scrollbar {
		width: 6px;
	}

	div:global(.overflow-y-auto)::-webkit-scrollbar-track {
		background: transparent;
	}

	div:global(.overflow-y-auto)::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.3);
		border-radius: 3px;
	}

	div:global(.overflow-y-auto)::-webkit-scrollbar-thumb:hover {
		background: rgba(255, 255, 255, 0.5);
	}
</style>
