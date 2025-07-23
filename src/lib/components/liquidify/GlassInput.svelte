<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { Snippet } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	interface Props {
		variant?: 'default' | 'search' | 'password' | 'email';
		leftIcon?: Snippet;
		rightIcon?: Snippet;
		clearable?: boolean;
		error?: boolean;
		helperText?: string;
		placeholder?: string;
		value?: string;
		disabled?: boolean;
		class?: string;
		type?: string;
	}

	const {
variant = 'default',
		leftIcon,
		rightIcon,
		clearable = false,
		error = false,
		helperText = '',
		placeholder = '',
		value = $bindable(''),
		disabled = false,
		class: className = '',
		type = 'text',
		...restProps
	
}: Props = $props();

	const dispatch = createEventDispatcher();

	let inputRef: HTMLInputElement;
	let focused = $state(false);

	const variantClasses = {
		default: 'text-white placeholder:text-white/50',
		search: 'text-white placeholder:text-white/50 pl-10',
		password: 'text-white placeholder:text-white/50',
		email: 'text-white placeholder:text-white/50'
	};

	const handleFocus = () => {
		focused = true;
		dispatch('focus');
	};

	const handleBlur = () => {
		focused = false;
		dispatch('blur');
	};

	const handleClear = () => {
		if (inputRef) {
			inputRef.value = '';
			inputRef.dispatchEvent(new Event('input', { bubbles: true }));
			inputRef.focus();
		}
		dispatch('clear');
	};

	// Glass ripple effect on focus
	let rippleRef: HTMLDivElement;
	const createFocusRipple = () => {
		const ripple = document.createElement('div');
		ripple.className = 'absolute inset-0 rounded-[inherit] border-2 border-blue-400/50 scale-95 opacity-0';
		ripple.style.animation = 'focus-ripple 0.3s ease-out forwards';

		rippleRef.appendChild(ripple);

		setTimeout(() => {
			ripple.remove();
		}, 300);
	};

	$effect(() => {
		if (focused) {
			createFocusRipple();
		}
	});
</script>

<div class={cn('relative', className)}>
	<!-- Input container -->
	<div
		class={cn(
			'relative overflow-hidden rounded-lg backdrop-blur-md transition-all duration-300 ease-out',
			'bg-white/10 border border-white/20',
			'hover:bg-white/12 hover:border-white/30',
			focused && 'bg-white/15 border-blue-400/50 shadow-lg shadow-blue-500/20',
			error && 'border-red-400/50 bg-red-500/10',
			disabled && 'opacity-50 cursor-not-allowed'
		)}
	>
		<!-- Ripple container -->
		<div bind:this={rippleRef} class="absolute inset-0 pointer-events-none"></div>

		<!-- Glass effect overlay -->
		<div
			class={cn(
				'absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300',
				'bg-gradient-to-r from-transparent via-white/5 to-transparent',
				focused && 'opacity-100'
			)}
		></div>

		<!-- Input wrapper -->
		<div class="relative flex items-center">
			<!-- Left icon -->
			{#if leftIcon}
				<div class="absolute left-3 z-10 text-white/70">
					{@render leftIcon()}
				</div>
			{/if}

			<!-- Search icon for search variant -->
			{#if variant === 'search'}
				<div class="absolute left-3 z-10 text-white/70">
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</div>
			{/if}

			<!-- Input -->
			<input
				bind:this={inputRef}
				bind:value={value}
				{...restProps}
				{type}
				{placeholder}
				{disabled}
				class={cn(
					'w-full h-12 px-4 bg-transparent border-none outline-none',
					'font-mono text-sm transition-all duration-200',
					leftIcon && 'pl-10',
					variant === 'search' && 'pl-10',
					(clearable && value) || rightIcon ? 'pr-10' : 'pr-4',
					variantClasses[variant]
				)}
				onfocus={handleFocus}
				onblur={handleBlur}
				oninput={(e) => dispatch('input', e)}
			/>

			<!-- Clear button -->
			{#if clearable && value && !disabled}
				<button
					type="button"
					class="absolute right-3 z-10 text-white/50 hover:text-white/80 transition-colors duration-200"
					onclick={handleClear}
					onkeydown={(e) => e.key === 'Enter' && handleClear()}
					aria-label="Clear input"
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			{:else if rightIcon}
				<div class="absolute right-3 z-10 text-white/70">
					{@render rightIcon()}
				</div>
			{/if}
		</div>
	</div>

	<!-- Helper text -->
	{#if helperText}
		<p class={cn('mt-2 text-xs transition-colors duration-200', error ? 'text-red-400' : 'text-white/60')}>
			{helperText}
		</p>
	{/if}
</div>

<style>
	@keyframes focus-ripple {
		to {
			transform: scale(1);
			opacity: 1;
		}
	}
</style>
