<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { liquidBlur, glassFade, springPop, magneticHover, breathing as breathingMotion } from '$lib/motion';
	import { sizeOf } from '$lib/utils/bundle-size.js';
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		open?: boolean;
		size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
		variant?: 'glass' | 'terminal' | 'liquid' | 'neon';
		blur?: 'sm' | 'md' | 'lg' | 'xl';
		closeOnOutsideClick?: boolean;
		closeOnEscape?: boolean;
		animate?: boolean;
		jelly?: boolean;
		glow?: boolean;
		breathing?: boolean;
		reduceMotion?: boolean;
		class?: string;
		children?: any;
		onClose?: () => void;
	}

	const {
		open = false,
		size = 'md',
		variant = 'glass',
		blur = 'xl',
		closeOnOutsideClick = true,
		closeOnEscape = true,
		animate = true,
		jelly = true,
		glow = false,
		breathing = false,
		reduceMotion = false,
		class: className = '',
		children,
		onClose,
		...restProps
	}: Props = $props();

	let modalElement = $state<HTMLDivElement>();
	let previousActiveElement: Element | null = null;

	const sizes = {
		sm: 'max-w-sm',
		md: 'max-w-md',
		lg: 'max-w-lg',
		xl: 'max-w-xl',
		full: 'max-w-full mx-4'
	};

	const variants = {
		glass: {
			bg: 'bg-white/10 border-white/20',
			overlay: 'bg-black/30',
			glow: 'shadow-[0_0_60px_rgba(255,255,255,0.2)]'
		},
		terminal: {
			bg: 'bg-gray-900/95 border-green-400/30',
			overlay: 'bg-black/70',
			glow: 'shadow-[0_0_40px_rgba(74,222,128,0.4)]'
		},
		liquid: {
			bg: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-white/30',
			overlay: 'bg-gradient-to-br from-black/40 via-blue-900/20 to-black/40',
			glow: 'shadow-[0_0_80px_rgba(139,92,246,0.4)]'
		},
		neon: {
			bg: 'bg-black/90 border-pink-500/40',
			overlay: 'bg-black/60',
			glow: 'shadow-[0_0_50px_rgba(236,72,153,0.6)]'
		}
	};

	const blurLevels = {
		sm: 'backdrop-blur-sm',
		md: 'backdrop-blur-md',
		lg: 'backdrop-blur-lg',
		xl: 'backdrop-blur-xl'
	};

	const currentVariant = variants[variant];

	const overlayClasses = cn(
		'fixed inset-0 z-50 flex items-center justify-center p-4',
		currentVariant.overlay,
		blurLevels[blur]
	);

	const modalClasses = cn(
		'relative w-full rounded-2xl p-6 backdrop-blur-xl border transition-all duration-300',
		'transform-gpu will-change-transform',
		sizes[size],
		currentVariant.bg,
		glow && currentVariant.glow,
		className
	);

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && closeOnEscape) {
			event.preventDefault();
			handleClose();
		}

		// Trap focus within modal
		if (event.key === 'Tab') {
			trapFocus(event);
		}
	}

	function handleOverlayClick(event: MouseEvent) {
		if (closeOnOutsideClick && event.target === event.currentTarget) {
			handleClose();
		}
	}

	function handleClose() {
		if (onClose) {
			onClose();
		}
	}

	function trapFocus(event: KeyboardEvent) {
		if (!modalElement) return;

		const focusableElements = modalElement.querySelectorAll(
			'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
		);
		const firstElement = focusableElements[0] as HTMLElement;
		const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

		if (event.shiftKey) {
			if (document.activeElement === firstElement) {
				lastElement.focus();
				event.preventDefault();
			}
		} else {
			if (document.activeElement === lastElement) {
				firstElement.focus();
				event.preventDefault();
			}
		}
	}

	$effect(() => {
		if (open) {
			// Store previously focused element
			previousActiveElement = document.activeElement;

			// Focus first focusable element in modal
			setTimeout(() => {
				if (modalElement) {
					const focusableElements = modalElement.querySelectorAll(
						'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
					);
					const firstElement = focusableElements[0] as HTMLElement;
					if (firstElement) {
						firstElement.focus();
					}
				}
			}, 100);

			// Prevent body scroll
			document.body.style.overflow = 'hidden';

			// Add escape listener
			document.addEventListener('keydown', handleKeydown);
		} else {
			// Restore body scroll
			document.body.style.overflow = '';

			// Remove escape listener
			document.removeEventListener('keydown', handleKeydown);

			// Restore focus
			if (previousActiveElement && previousActiveElement instanceof HTMLElement) {
				previousActiveElement.focus();
			}
		}

		return () => {
			document.body.style.overflow = '';
			document.removeEventListener('keydown', handleKeydown);
		};
	});

	// Track bundle size
	$effect(() => {
		sizeOf('Modal', 'medium');
	});
</script>

{#if open}
	<div
		class={overlayClasses}
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-title"
		tabindex={-1}
		onclick={handleOverlayClick}
		onkeydown={(e) => e.key === 'Escape' && handleClose()}
		in:glassFade={{ duration: animate && !reduceMotion ? 300 : 0 }}
		out:glassFade={{ duration: animate && !reduceMotion ? 200 : 0 }}
	>
		<div
			bind:this={modalElement}
			class={modalClasses}
			in:springPop={{ scale: 0.8, duration: animate && !reduceMotion ? 400 : 0, delay: 100 }}
			out:springPop={{ scale: 0.95, duration: animate && !reduceMotion ? 200 : 0 }}
			use:jellyHover={{ 
				enabled: jelly && animate && !reduceMotion, 
				scale: 1.001, 
				duration: 300,
				borderRadius: '16px'
			}}
			use:breathingMotion={{ 
				enabled: breathing && animate && !reduceMotion, 
				intensity: 0.01, 
				speed: 4000 
			}}
			{...restProps}
		>
			{#if children}
				{@render children()}
			{/if}
		</div>
	</div>
{/if}

<style>
	div[role='dialog'] {
		backdrop-filter: blur(8px);
	}

	@media (prefers-reduced-motion: reduce) {
		div {
			transition: none;
			animation: none;
		}
	}
</style>
