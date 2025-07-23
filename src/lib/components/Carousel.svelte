<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { magneticHover, springPop, jellyHover, useReducedMotion } from '$lib/motion';
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface CarouselItem {
		id: string | number;
		content: any;
		image?: string;
		title?: string;
		description?: string;
	}

	interface Props extends HTMLAttributes<HTMLDivElement> {
		items: CarouselItem[];
		currentIndex?: number;
		autoPlay?: boolean;
		autoPlayInterval?: number;
		variant?: 'default' | 'glass' | 'terminal' | 'minimal';
		showDots?: boolean;
		showArrows?: boolean;
		animate?: boolean;
		class?: string;
		children?: import('svelte').Snippet;
		onSlideChange?: (index: number) => void;
	}

	const {
		items = [],
		currentIndex = 0,
		autoPlay = false,
		autoPlayInterval = 3000,
		variant = 'glass',
		showDots = true,
		showArrows = true,
		animate = true,
		class: className = '',
		children,
		onSlideChange,
		...restProps
	}: Props = $props();

	// Check for reduced motion preference
	const prefersReducedMotion = useReducedMotion();
	const shouldAnimate = $derived(animate && !prefersReducedMotion);

	let activeIndex = $state(currentIndex);
	let autoPlayTimer: NodeJS.Timeout | null = null;

	const variants = {
		default: 'bg-neutral-900/80 border border-neutral-700 text-neutral-100',
		glass: 'glass-medium border border-white/20 text-white backdrop-blur-lg',
		terminal: 'bg-terminal-bg border-2 border-terminal-green/30 text-terminal-green shadow-lg shadow-terminal-green/10',
		minimal: 'bg-transparent border border-neutral-600 text-neutral-300'
	};

	const baseClasses = 'relative rounded-2xl overflow-hidden transition-all duration-300 will-change-transform';
	const combinedClasses = cn(baseClasses, variants[variant], className);

	const goToSlide = (index: number) => {
		if (index >= 0 && index < items.length) {
			activeIndex = index;
			onSlideChange?.(index);
		}
	};

	const nextSlide = () => {
		goToSlide((activeIndex + 1) % items.length);
	};

	const prevSlide = () => {
		goToSlide(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
	};

	const startAutoPlay = () => {
		if (autoPlay && items.length > 1) {
			autoPlayTimer = setInterval(nextSlide, autoPlayInterval);
		}
	};

	const stopAutoPlay = () => {
		if (autoPlayTimer) {
			clearInterval(autoPlayTimer);
			autoPlayTimer = null;
		}
	};

	onMount(() => {
		startAutoPlay();
		return () => stopAutoPlay();
	});

	// Handle keyboard navigation
	const handleKeydown = (event: KeyboardEvent) => {
		switch (event.key) {
			case 'ArrowLeft':
				event.preventDefault();
				prevSlide();
				break;
			case 'ArrowRight':
				event.preventDefault();
				nextSlide();
				break;
		}
	};
</script>

{#if shouldAnimate}
	<div
		class={combinedClasses}
		use:jellyHover={{
			enabled: shouldAnimate,
			duration: prefersReducedMotion ? 100 : 200,
			scale: prefersReducedMotion ? 1.01 : 1.02,
			borderRadius: '24px',
			responsiveness: prefersReducedMotion ? 'subtle' : 'medium'
		}}
		use:magneticHover={{
			enabled: shouldAnimate && variant !== 'terminal',
			strength: prefersReducedMotion ? 0.05 : 0.1,
			scale: prefersReducedMotion ? 1.005 : 1.01
		}}
		in:springPop={{
			duration: prefersReducedMotion ? 100 : 300,
			bounce: !prefersReducedMotion && variant === 'glass'
		}}
		onmouseenter={stopAutoPlay}
		onmouseleave={startAutoPlay}
		onkeydown={handleKeydown}
		tabindex="0"
		role="region"
		aria-label="Image carousel"
		{...restProps}
	>
		<!-- Carousel Content -->
		<div class="relative h-64 md:h-80 lg:h-96">
			{#each items as item, index}
				<div
					class="absolute inset-0 transition-opacity duration-500 {index === activeIndex ? 'opacity-100' : 'opacity-0'}"
					aria-hidden={index !== activeIndex}
				>
					{#if item.image}
						<img src={item.image} alt={item.title || `Slide ${index + 1}`} class="w-full h-full object-cover" />
					{/if}

					{#if item.title || item.description}
						<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
							{#if item.title}
								<h3 class="text-xl font-bold text-white mb-2">{item.title}</h3>
							{/if}
							{#if item.description}
								<p class="text-white/80">{item.description}</p>
							{/if}
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Navigation Arrows -->
		{#if showArrows && items.length > 1}
			<button
				class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 flex items-center justify-center"
				onclick={prevSlide}
				aria-label="Previous slide"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
			</button>

			<button
				class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 flex items-center justify-center"
				onclick={nextSlide}
				aria-label="Next slide"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		{/if}

		<!-- Dots Indicator -->
		{#if showDots && items.length > 1}
			<div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
				{#each items as _, index}
					<button
						class="w-3 h-3 rounded-full transition-all duration-200 {index === activeIndex
							? 'bg-white'
							: 'bg-white/50 hover:bg-white/70'}"
						onclick={() => goToSlide(index)}
						aria-label="Go to slide {index + 1}"
					></button>
				{/each}
			</div>
		{/if}

		<!-- Children content -->
		{#if children}
			<div class="absolute inset-0 flex items-center justify-center">
				{@render children()}
			</div>
		{/if}
	</div>
{:else}
	<div
		class={combinedClasses}
		onkeydown={handleKeydown}
		tabindex="0"
		role="region"
		aria-label="Image carousel"
		{...restProps}
	>
		<!-- Carousel Content -->
		<div class="relative h-64 md:h-80 lg:h-96">
			{#each items as item, index}
				<div
					class="absolute inset-0 transition-opacity duration-500 {index === activeIndex ? 'opacity-100' : 'opacity-0'}"
					aria-hidden={index !== activeIndex}
				>
					{#if item.image}
						<img src={item.image} alt={item.title || `Slide ${index + 1}`} class="w-full h-full object-cover" />
					{/if}

					{#if item.title || item.description}
						<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
							{#if item.title}
								<h3 class="text-xl font-bold text-white mb-2">{item.title}</h3>
							{/if}
							{#if item.description}
								<p class="text-white/80">{item.description}</p>
							{/if}
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Navigation Arrows -->
		{#if showArrows && items.length > 1}
			<button
				class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 flex items-center justify-center"
				onclick={prevSlide}
				aria-label="Previous slide"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
			</button>

			<button
				class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 flex items-center justify-center"
				onclick={nextSlide}
				aria-label="Next slide"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		{/if}

		<!-- Dots Indicator -->
		{#if showDots && items.length > 1}
			<div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
				{#each items as _, index}
					<button
						class="w-3 h-3 rounded-full transition-all duration-200 {index === activeIndex
							? 'bg-white'
							: 'bg-white/50 hover:bg-white/70'}"
						onclick={() => goToSlide(index)}
						aria-label="Go to slide {index + 1}"
					></button>
				{/each}
			</div>
		{/if}

		<!-- Children content -->
		{#if children}
			<div class="absolute inset-0 flex items-center justify-center">
				{@render children()}
			</div>
		{/if}
	</div>
{/if}

<style>
	div {
		will-change: transform, border-radius, filter;
		position: relative;
		/* Apple-style rounded corners with smooth transitions */
		transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	/* Terminal variant glow effects */
	div:global([class*='terminal']) {
		text-shadow: 0 0 5px currentColor;
	}

	div:global([class*='terminal']):hover {
		box-shadow:
			0 0 20px rgba(48, 209, 88, 0.2),
			inset 0 0 20px rgba(48, 209, 88, 0.05);
	}

	/* Glass morphism enhancements */
	div:global(.glass-medium) {
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
	}

	/* Enhanced focus states */
	div:focus-visible {
		outline: none;
		box-shadow:
			0 0 0 2px rgba(0, 255, 255, 0.6),
			0 0 20px rgba(0, 255, 255, 0.3);
	}

	/* Smooth image transitions */
	img {
		transition: transform 300ms ease-out;
	}

	div:hover img {
		transform: scale(1.05);
	}
</style>
