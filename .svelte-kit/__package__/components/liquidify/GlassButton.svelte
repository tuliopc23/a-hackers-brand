<script lang="ts">
	import { cn } from '../../utils.js';
	import type { Snippet } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	interface Props {
		variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive';
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		loading?: boolean;
		disabled?: boolean;
		leftIcon?: Snippet;
		rightIcon?: Snippet;
		class?: string;
		children?: Snippet;
		onclick?: () => void;
	}

	const {
		variant = 'primary',
		size = 'md',
		loading = false,
		disabled = false,
		leftIcon,
		rightIcon,
		class: className = '',
		children,
		onclick,
		...restProps
	}: Props = $props();

	const dispatch = createEventDispatcher();

	const variantClasses = {
		primary:
			'bg-gradient-to-r from-blue-600/80 to-blue-500/80 border-blue-400/30 text-white shadow-blue-500/25 hover:from-blue-500/90 hover:to-blue-400/90 hover:shadow-blue-400/40',
		secondary: 'bg-white/10 border-white/20 text-white hover:bg-white/15 hover:border-white/30',
		tertiary: 'bg-white/5 border-white/10 text-white/90 hover:bg-white/10 hover:text-white',
		ghost: 'bg-transparent border-transparent text-white/80 hover:bg-white/5 hover:text-white',
		destructive:
			'bg-gradient-to-r from-red-600/80 to-red-500/80 border-red-400/30 text-white shadow-red-500/25 hover:from-red-500/90 hover:to-red-400/90'
	};

	const sizeClasses = {
		xs: 'h-7 px-3 text-xs gap-1.5 rounded-md',
		sm: 'h-8 px-3 text-sm gap-2 rounded-lg',
		md: 'h-10 px-4 text-sm gap-2 rounded-lg',
		lg: 'h-11 px-5 text-base gap-2.5 rounded-xl',
		xl: 'h-13 px-6 text-lg gap-3 rounded-xl'
	};

	let buttonRef: HTMLButtonElement;
	let rippleRef: HTMLDivElement;

	// Magnetic hover effect
	const handleMouseMove = (e: MouseEvent) => {
		if (disabled || loading) return;

		const rect = buttonRef.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		const deltaX = (e.clientX - centerX) * 0.1;
		const deltaY = (e.clientY - centerY) * 0.1;

		buttonRef.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.02)`;
	};

	const handleMouseLeave = () => {
		if (disabled || loading) return;
		buttonRef.style.transform = 'translate(0, 0) scale(1)';
	};

	// Glass ripple effect
	const handleClick = (e: MouseEvent) => {
		if (disabled || loading) return;

		const rect = buttonRef.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const ripple = document.createElement('div');
		ripple.className = 'absolute pointer-events-none rounded-full bg-white/30 transform scale-0 animate-ping';
		ripple.style.left = `${x - 10}px`;
		ripple.style.top = `${y - 10}px`;
		ripple.style.width = '20px';
		ripple.style.height = '20px';
		ripple.style.animation = 'glass-ripple 0.6s ease-out forwards';

		rippleRef.appendChild(ripple);

		setTimeout(() => {
			ripple.remove();
		}, 600);

		onclick?.();
		dispatch('click', e);
	};
</script>

<button
	bind:this={buttonRef}
	{...restProps}
	{disabled}
	class={cn(
		// Base styles
		'relative inline-flex items-center justify-center font-medium transition-all duration-300 ease-out',
		'backdrop-blur-md border transform-gpu will-change-transform',
		'focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-black/50',
		'active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
		// Glass effects
		'before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-b before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100',
		'after:absolute after:inset-0 after:rounded-[inherit] after:shadow-inner after:shadow-white/10',
		// Variant styles
		variantClasses()[variant],
		// Size styles
		sizeClasses()[size],
		// Loading state
		loading && 'cursor-wait',
		className
	)}
	onmousemove={handleMouseMove}
	onmouseleave={handleMouseLeave}
	onclick={handleClick}
	onkeydown={(e) => e.key === 'Enter' && handleClick(e)}
>
	<!-- Ripple container -->
	<div bind:this={rippleRef} class="absolute inset-0 rounded-[inherit] overflow-hidden"></div>

	<!-- Content -->
	<div class="relative flex items-center gap-2">
		{#if loading}
			<div class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
		{:else if leftIcon}
			<div class="flex-shrink-0">
				{@render leftIcon()}
			</div>
		{/if}

		{#if children}
			{@render children()}
		{/if}

		{#if rightIcon && !loading}
			<div class="flex-shrink-0">
				{@render rightIcon()}
			</div>
		{/if}
	</div>
</button>

<style>
	@keyframes glass-ripple {
		to {
			transform: scale(4);
			opacity: 0;
		}
	}

	button {
		box-shadow:
			0 1px 3px rgba(0, 0, 0, 0.12),
			0 4px 8px rgba(0, 0, 0, 0.08),
			0 0 0 1px rgba(255, 255, 255, 0.05) inset;
	}

	button:hover {
		box-shadow:
			0 4px 12px rgba(0, 0, 0, 0.15),
			0 8px 20px rgba(0, 0, 0, 0.1),
			0 0 0 1px rgba(255, 255, 255, 0.1) inset;
	}
</style>
