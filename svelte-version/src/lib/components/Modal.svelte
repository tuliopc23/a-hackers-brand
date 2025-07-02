<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { liquidBlur, glassFade } from '$lib/motion';
	import { sizeOf } from '$lib/utils/bundle-size.js';
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		open?: boolean;
		size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
		variant?: 'default' | 'glass' | 'terminal';
		blur?: 'sm' | 'md' | 'lg' | 'xl';
		closeOnOutsideClick?: boolean;
		closeOnEscape?: boolean;
		animate?: boolean;
		reduceMotion?: boolean;
		class?: string;
		children?: any;
		onClose?: () => void;
	}

	let {
		open = false,
		size = 'md',
		variant = 'glass',
		blur = 'xl',
		closeOnOutsideClick = true,
		closeOnEscape = true,
		animate = true,
		reduceMotion = false,
		class: className = '',
		children,
		onClose,
		...restProps
	}: Props = $props();

	let modalElement: HTMLDivElement;
	let previousActiveElement: Element | null = null;

	const sizes = {
		sm: 'max-w-sm',
		md: 'max-w-md',
		lg: 'max-w-lg',
		xl: 'max-w-xl',
		full: 'max-w-full mx-4'
	};

	const variants = {
		default: 'bg-white/5 border border-white/10',
		glass: 'glass-heavy',
		terminal: 'terminal'
	};

	const blurLevels = {
		sm: 'backdrop-blur-sm',
		md: 'backdrop-blur-md',
		lg: 'backdrop-blur-lg',
		xl: 'backdrop-blur-xl'
	};

	const overlayClasses = cn(
		'fixed inset-0 z-50 flex items-center justify-center p-4',
		variant === 'glass' ? `bg-black/30 ${blurLevels[blur]}` : 'bg-black/50'
	);

	const modalClasses = cn(
		'relative w-full rounded-brand-lg p-6 shadow-2xl',
		'focus:outline-none',
		sizes[size],
		variants[variant],
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

			// Focus modal
			if (modalElement) {
				modalElement.focus();
			}

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
		on:click={handleOverlayClick}
		in:glassFade={{ direction: 'center', duration: animate && !reduceMotion ? 200 : 0 }}
		out:glassFade={{ direction: 'center', duration: animate && !reduceMotion ? 150 : 0 }}
	>
		<div
			bind:this={modalElement}
			class={modalClasses}
			tabindex="-1"
			use:liquidBlur={animate && !reduceMotion ? { blur: blur, opacity: 'heavy' } : undefined}
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
