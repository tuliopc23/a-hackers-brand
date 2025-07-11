<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { liquidBlur, springPop } from '$lib/motion';
	import { brandColors } from '$lib/tokens';
	import { createEventDispatcher, onMount } from 'svelte';
	import { X } from 'lucide-svelte';
	import { fly, fade } from 'svelte/transition';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		open?: boolean;
		position?: 'left' | 'right' | 'top' | 'bottom';
		size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
		variant?: 'glass' | 'terminal' | 'liquid';
		overlay?: boolean;
		closeOnOutsideClick?: boolean;
		closeOnEscape?: boolean;
		showCloseButton?: boolean;
		persistent?: boolean;
		class?: string;
	}

	let {
		open = $bindable(false),
		position = 'right',
		size = 'md',
		variant = 'glass',
		overlay = true,
		closeOnOutsideClick = true,
		closeOnEscape = true,
		showCloseButton = true,
		persistent = false,
		class: className = '',
		...restProps
	}: Props = $props();

	const dispatch = createEventDispatcher();

	let drawerElement: HTMLDivElement;
	let contentElement: HTMLDivElement;

	const sizes = {
		sm: {
			left: 'w-64',
			right: 'w-64',
			top: 'h-48',
			bottom: 'h-48'
		},
		md: {
			left: 'w-80',
			right: 'w-80',
			top: 'h-64',
			bottom: 'h-64'
		},
		lg: {
			left: 'w-96',
			right: 'w-96',
			top: 'h-80',
			bottom: 'h-80'
		},
		xl: {
			left: 'w-[32rem]',
			right: 'w-[32rem]',
			top: 'h-96',
			bottom: 'h-96'
		},
		full: {
			left: 'w-full',
			right: 'w-full',
			top: 'h-full',
			bottom: 'h-full'
		}
	};

	const variants = {
		glass: {
			drawer: 'bg-black/20 border-white/10 backdrop-blur-xl text-white',
			overlay: 'bg-black/50',
			closeButton: 'bg-white/10 border-white/20 text-white hover:bg-white/15'
		},
		terminal: {
			drawer: 'bg-black/90 border-terminal-green/30 text-terminal-green',
			overlay: 'bg-black/70',
			closeButton: 'bg-terminal-green/20 border-terminal-green/40 text-terminal-green hover:bg-terminal-green/30'
		},
		liquid: {
			drawer: 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-white/10 backdrop-blur-xl text-white',
			overlay: 'bg-black/50',
			closeButton:
				'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-white/20 text-white hover:from-blue-500/30 hover:to-purple-500/30'
		}
	};

	const currentVariant = variants[variant];
	const currentSize = sizes[size][position];

	// Position-specific classes
	const positionClasses = {
		left: 'left-0 top-0 h-full border-r',
		right: 'right-0 top-0 h-full border-l',
		top: 'top-0 left-0 w-full border-b',
		bottom: 'bottom-0 left-0 w-full border-t'
	};

	// Transition configuration for different positions
	const getTransitionConfig = () => {
		const baseConfig = { duration: 300 };

		switch (position) {
			case 'left':
				return { ...baseConfig, x: -400 };
			case 'right':
				return { ...baseConfig, x: 400 };
			case 'top':
				return { ...baseConfig, y: -400 };
			case 'bottom':
				return { ...baseConfig, y: 400 };
			default:
				return { ...baseConfig, x: 400 };
		}
	};

	function closeDrawer() {
		if (!persistent) {
			open = false;
			dispatch('close');
		}
	}

	function handleOverlayClick() {
		if (closeOnOutsideClick) {
			closeDrawer();
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && closeOnEscape && open) {
			closeDrawer();
		}
	}

	function handleClickOutside(event: Event) {
		if (closeOnOutsideClick && open && contentElement && !contentElement.contains(event.target as Node)) {
			closeDrawer();
		}
	}

	onMount(() => {
		if (closeOnEscape) {
			document.addEventListener('keydown', handleKeydown);
		}

		if (closeOnOutsideClick) {
			document.addEventListener('click', handleClickOutside);
		}

		return () => {
			document.removeEventListener('keydown', handleKeydown);
			document.removeEventListener('click', handleClickOutside);
		};
	});

	// Focus management
	$effect(() => {
		if (open && contentElement) {
			// Focus the first focusable element or the drawer itself
			const focusableElements = contentElement.querySelectorAll(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			);

			if (focusableElements.length > 0) {
				(focusableElements[0] as HTMLElement).focus();
			} else {
				contentElement.focus();
			}
		}
	});
</script>

{#if open}
	<!-- Overlay -->
	{#if overlay}
		<div
			class={cn('fixed inset-0 z-40', currentVariant.overlay)}
			onclick={handleOverlayClick}
			transition:fade={{ duration: 200 }}
			role="presentation"
		></div>
	{/if}

	<!-- Drawer -->
	<div
		bind:this={drawerElement}
		class={cn('fixed z-50 flex flex-col', positionClasses[position], currentSize, currentVariant.drawer, className)}
		transition:fly={getTransitionConfig()}
		use:liquidBlur={{ intensity: 'medium' }}
		role="dialog"
		aria-modal="true"
		aria-labelledby="drawer-title"
		{...restProps}
	>
		<div bind:this={contentElement} class="flex flex-col h-full focus:outline-none" tabindex="-1">
			<!-- Header -->
			<div class="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0">
				<div class="flex-1">
					<slot name="header">
						<h2 id="drawer-title" class="text-lg font-semibold">
							<slot name="title">Drawer</slot>
						</h2>
					</slot>
				</div>

				{#if showCloseButton && !persistent}
					<button
						onclick={closeDrawer}
						class={cn('p-2 rounded-lg border transition-colors ml-4', currentVariant.closeButton)}
						title="Close drawer"
						aria-label="Close drawer"
					>
						<X size={16} />
					</button>
				{/if}
			</div>

			<!-- Content -->
			<div class="flex-1 overflow-y-auto p-4">
				<slot {open} close={closeDrawer}></slot>
			</div>

			<!-- Footer -->
			{#if $$slots.footer}
				<div class="p-4 border-t border-white/10 flex-shrink-0">
					<slot name="footer" {open} close={closeDrawer}></slot>
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	/* Custom scrollbar for content */
	.overflow-y-auto {
		scrollbar-width: thin;
		scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
	}

	.overflow-y-auto::-webkit-scrollbar {
		width: 6px;
	}

	.overflow-y-auto::-webkit-scrollbar-track {
		background: transparent;
	}

	.overflow-y-auto::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.2);
		border-radius: 3px;
	}

	.overflow-y-auto::-webkit-scrollbar-thumb:hover {
		background: rgba(255, 255, 255, 0.3);
	}

	/* Ensure drawer content is properly contained */
	[role='dialog'] {
		will-change: transform;
	}

	/* Focus styles */
	button:focus-visible {
		outline: 2px solid rgba(59, 130, 246, 0.5);
		outline-offset: 2px;
	}

	/* Animation performance */
	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none !important;
			animation: none !important;
		}
	}
</style>
