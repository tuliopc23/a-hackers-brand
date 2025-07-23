<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { magneticHover, springPop, jellyHover, useReducedMotion } from '$lib/motion';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		src?: string;
		alt?: string;
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
		fallback?: string;
		variant?: 'default' | 'glass' | 'terminal' | 'minimal';
		shape?: 'circle' | 'square' | 'rounded';
		status?: 'online' | 'offline' | 'away' | 'busy';
		showStatus?: boolean;
		interactive?: boolean;
		animate?: boolean;
		class?: string;
		children?: import('svelte').Snippet;
		onAvatarClick?: () => void;
	}

	const {
		src,
		alt = 'Avatar',
		size = 'md',
		fallback,
		variant = 'default',
		shape = 'circle',
		status,
		showStatus = false,
		interactive = false,
		animate = true,
		class: className = '',
		children,
		onAvatarClick,
		...restProps
	}: Props = $props();

	// Check for reduced motion preference
	const prefersReducedMotion = useReducedMotion();
	const shouldAnimate = $derived(animate && !prefersReducedMotion);

	// Image loading state
	let imageLoaded = $state(false);
	let imageError = $state(false);

	const sizes = {
		xs: 'w-6 h-6',
		sm: 'w-8 h-8',
		md: 'w-12 h-12',
		lg: 'w-16 h-16',
		xl: 'w-20 h-20',
		'2xl': 'w-24 h-24'
	};

	const textSizes = {
		xs: 'text-xs',
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-lg',
		xl: 'text-xl',
		'2xl': 'text-2xl'
	};

	const shapes = {
		circle: 'rounded-full',
		square: 'rounded-none',
		rounded: 'rounded-lg'
	};

	const variants = {
		default: 'bg-neutral-700 border border-neutral-600 text-neutral-100',
		glass: 'glass-medium border border-white/20 text-white backdrop-blur-lg',
		terminal: 'bg-terminal-bg border-2 border-terminal-green/30 text-terminal-green shadow-lg shadow-terminal-green/10',
		minimal: 'bg-neutral-800 border border-neutral-600 text-neutral-300'
	};

	const statusColors = {
		online: 'bg-green-400',
		offline: 'bg-neutral-500',
		away: 'bg-yellow-400',
		busy: 'bg-red-400'
	};

	const statusSizes = {
		xs: 'w-1.5 h-1.5',
		sm: 'w-2 h-2',
		md: 'w-2.5 h-2.5',
		lg: 'w-3 h-3',
		xl: 'w-3.5 h-3.5',
		'2xl': 'w-4 h-4'
	};

	const baseClasses =
		'relative flex items-center justify-center overflow-hidden transition-all duration-300 will-change-transform';
	const interactiveClasses = interactive ? 'cursor-pointer hover:shadow-lg' : '';
	const combinedClasses = cn(baseClasses, sizes[size], shapes[shape], variants[variant], interactiveClasses, className);

	// Generate initials from fallback text
	const initials = $derived(() => {
		if (!fallback) return '?';

		const words = fallback.trim().split(' ');
		if (words.length === 1) {
			return words[0].charAt(0).toUpperCase();
		}

		return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
	});

	const handleImageLoad = () => {
		imageLoaded = true;
		imageError = false;
	};

	const handleImageError = () => {
		imageError = true;
		imageLoaded = false;
	};

	const handleClick = () => {
		if (interactive) {
			onAvatarClick?.();
		}
	};

	const handleKeydown = (event: KeyboardEvent) => {
		if (interactive && (event.key === 'Enter' || event.key === ' ')) {
			event.preventDefault();
			handleClick();
		}
	};
</script>

{#if shouldAnimate}
	<div
		class={combinedClasses}
		use:jellyHover={{
			enabled: shouldAnimate && interactive,
			duration: prefersReducedMotion ? 100 : 200,
			scale: prefersReducedMotion ? 1.02 : variant === 'glass' ? 1.05 : 1.03,
			borderRadius: shape === 'circle' ? '50%' : shape === 'rounded' ? '12px' : '0px',
			responsiveness: prefersReducedMotion ? 'subtle' : 'medium'
		}}
		use:magneticHover={{
			enabled: shouldAnimate && interactive && variant !== 'terminal',
			strength: prefersReducedMotion ? 0.05 : 0.1,
			scale: prefersReducedMotion ? 1.01 : 1.02
		}}
		in:springPop={{
			duration: prefersReducedMotion ? 100 : 300,
			bounce: !prefersReducedMotion && variant === 'glass'
		}}
		onclick={interactive ? handleClick : undefined}
		onkeydown={interactive ? handleKeydown : undefined}
		tabindex={interactive ? 0 : undefined}
		role={interactive ? 'button' : 'img'}
		aria-label={interactive ? `Avatar for ${alt}` : alt}
		{...restProps}
	>
		{#if src && !imageError}
			<img
				{src}
				{alt}
				class="w-full h-full object-cover transition-opacity duration-300 {imageLoaded ? 'opacity-100' : 'opacity-0'}"
				onload={handleImageLoad}
				onerror={handleImageError}
			/>
		{/if}

		{#if !src || imageError || !imageLoaded}
			<div class="flex items-center justify-center w-full h-full {textSizes[size]} font-medium">
				{initials}
			</div>
		{/if}

		<!-- Status Indicator -->
		{#if showStatus && status}
			<div
				class="absolute -bottom-0.5 -right-0.5 {statusSizes[size]} {statusColors[
					status
				]} rounded-full border-2 border-current"
			></div>
		{/if}

		<!-- Children content overlay -->
		{#if children}
			<div class="absolute inset-0 flex items-center justify-center">
				{@render children()}
			</div>
		{/if}
	</div>
{:else}
	<div
		class={combinedClasses}
		onclick={interactive ? handleClick : undefined}
		onkeydown={interactive ? handleKeydown : undefined}
		tabindex={interactive ? 0 : undefined}
		role={interactive ? 'button' : 'img'}
		aria-label={interactive ? `Avatar for ${alt}` : alt}
		{...restProps}
	>
		{#if src && !imageError}
			<img
				{src}
				{alt}
				class="w-full h-full object-cover transition-opacity duration-300 {imageLoaded ? 'opacity-100' : 'opacity-0'}"
				onload={handleImageLoad}
				onerror={handleImageError}
			/>
		{/if}

		{#if !src || imageError || !imageLoaded}
			<div class="flex items-center justify-center w-full h-full {textSizes[size]} font-medium">
				{initials}
			</div>
		{/if}

		<!-- Status Indicator -->
		{#if showStatus && status}
			<div
				class="absolute -bottom-0.5 -right-0.5 {statusSizes[size]} {statusColors[
					status
				]} rounded-full border-2 border-current"
			></div>
		{/if}

		<!-- Children content overlay -->
		{#if children}
			<div class="absolute inset-0 flex items-center justify-center">
				{@render children()}
			</div>
		{/if}
	</div>
{/if}

<style>
	div {
		will-change: transform, border-radius, filter, box-shadow;
		position: relative;
		/* Apple-style rounded corners with smooth transitions */
		transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	/* Interactive avatars get enhanced hover states */
	div[role='button']:hover {
		transform: translateY(-1px);
	}

	/* Terminal variant glow effects */
	div:global([class*='terminal']) {
		text-shadow: 0 0 5px currentColor;
	}

	div:global([class*='terminal']):hover {
		box-shadow:
			0 0 20px rgba(48, 209, 88, 0.3),
			0 4px 12px rgba(0, 0, 0, 0.2);
	}

	/* Glass morphism enhancements */
	div:global(.glass-medium) {
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
	}

	/* Enhanced focus states */
	div[role='button']:focus-visible {
		outline: none;
		box-shadow:
			0 0 0 2px rgba(0, 255, 255, 0.6),
			0 0 20px rgba(0, 255, 255, 0.3),
			0 4px 12px rgba(0, 0, 0, 0.2);
		transform: translateY(-2px);
	}

	/* Smooth image loading */
	img {
		transition: opacity 300ms ease-out;
	}

	/* Status indicator pulse animation */
	div:global([class*='bg-green-400']) {
		animation: status-pulse 2s ease-in-out infinite;
	}

	@keyframes status-pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.7;
		}
	}

	/* Hover effects for interactive avatars */
	div[role='button']:hover img {
		transform: scale(1.05);
	}

	/* Fallback text styling */
	div:global([class*='font-medium']) {
		letter-spacing: 0.05em;
	}
</style>
