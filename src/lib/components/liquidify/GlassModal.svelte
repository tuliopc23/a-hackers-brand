<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { Snippet } from 'svelte';
	import { createEventDispatcher, onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	interface Props {
		isOpen: boolean;
		title?: string;
		titleClassName?: string;
		contentClassName?: string;
		class?: string;
		children?: Snippet;
		onClose?: () => void;
	}

	let {
		isOpen = $bindable(false),
		title,
		titleClassName = '',
		contentClassName = '',
		class: className = '',
		children,
		onClose
	}: Props = $props();

	const dispatch = createEventDispatcher();

	let modalRef = $state<HTMLDivElement>();
	let backdropRef = $state<HTMLDivElement>();

	const handleClose = () => {
		isOpen = false;
		onClose?.();
		dispatch('close');
	};

	const handleBackdropClick = (e: MouseEvent) => {
		if (e.target === backdropRef) {
			handleClose();
		}
	};

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Escape' && isOpen) {
			handleClose();
		}
	};

	onMount(() => {
		const handleGlobalKeydown = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isOpen) {
				handleClose();
			}
		};

		document.addEventListener('keydown', handleGlobalKeydown);

		return () => {
			document.removeEventListener('keydown', handleGlobalKeydown);
		};
	});

	// Lock body scroll when modal is open
	$effect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

{#if isOpen}
	<!-- Backdrop -->
	<div
		bind:this={backdropRef}
		class="fixed inset-0 z-50 flex items-center justify-center p-4"
		onclick={handleBackdropClick}
		onkeydown={(e) => e.key === 'Enter' && handleBackdropClick(e)}
		role="presentation"
		aria-hidden="true"
		transition:fade={{ duration: 300 }}
	>
		<!-- Backdrop blur -->
		<div class="absolute inset-0 bg-black/50 backdrop-blur-md" transition:fade={{ duration: 300 }}></div>

		<!-- Modal container -->
		<div
			bind:this={modalRef}
			class={cn(
				'relative w-full max-w-lg max-h-[90vh] overflow-hidden',
				'bg-white/10 backdrop-blur-xl border border-white/20',
				'rounded-2xl shadow-2xl shadow-black/25',
				'transform-gpu will-change-transform',
				className
			)}
			role="dialog"
			aria-modal="true"
			aria-labelledby={title ? 'modal-title' : undefined}
			tabindex="-1"
			transition:fly={{ y: 50, duration: 300, opacity: 0 }}
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.key === 'Escape' && handleClose()}
		>
			<!-- Glass effect overlay -->
			<div
				class="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/10 to-transparent pointer-events-none"
			></div>
			<div class="absolute inset-0 rounded-[inherit] shadow-inner shadow-white/10 pointer-events-none"></div>

			<!-- Header -->
			{#if title}
				<div class="relative z-10 flex items-center justify-between p-6 border-b border-white/10">
					<h3 id="modal-title" class={cn('text-lg font-semibold text-white font-mono', titleClassName)}>
						{title}
					</h3>

					<button
						type="button"
						class="text-white/60 hover:text-white/90 transition-colors duration-200 p-1 rounded-lg hover:bg-white/10"
						onclick={handleClose}
						aria-label="Close modal"
					>
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			{/if}

			<!-- Content -->
			<div class={cn('relative z-10 p-6 overflow-y-auto', !title && 'pt-8', contentClassName)}>
				{#if children}
					{@render children()}
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	/* Custom scrollbar for modal content */
	div::-webkit-scrollbar {
		width: 6px;
	}

	div::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.05);
		border-radius: 3px;
	}

	div::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.2);
		border-radius: 3px;
	}

	div::-webkit-scrollbar-thumb:hover {
		background: rgba(255, 255, 255, 0.3);
	}
</style>
