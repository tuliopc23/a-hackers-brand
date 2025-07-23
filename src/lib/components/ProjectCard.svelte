<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { magneticHover, springPop, jellyHover, useReducedMotion } from '$lib/motion';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		title: string;
		description: string;
		image?: string;
		tags?: string[];
		link?: string;
		variant?: 'default' | 'glass' | 'terminal' | 'minimal';
		interactive?: boolean;
		animate?: boolean;
		class?: string;
		children?: import('svelte').Snippet;
		onCardClick?: () => void;
	}

	const {
		title,
		description,
		image,
		tags = [],
		link,
		variant = 'glass',
		interactive = true,
		animate = true,
		class: className = '',
		children,
		onCardClick,
		...restProps
	}: Props = $props();

	// Check for reduced motion preference
	const prefersReducedMotion = useReducedMotion();
	const shouldAnimate = $derived(animate && !prefersReducedMotion);

	const variants = {
		default: 'bg-neutral-900/80 border border-neutral-700 text-neutral-100 hover:border-neutral-600',
		glass: 'glass-medium border border-white/20 text-white backdrop-blur-lg hover:border-white/30',
		terminal:
			'bg-terminal-bg border-2 border-terminal-green/30 text-terminal-green shadow-lg shadow-terminal-green/10 hover:border-terminal-green/50',
		minimal: 'bg-transparent border border-neutral-600 text-neutral-300 hover:border-neutral-500'
	};

	const baseClasses = 'rounded-2xl overflow-hidden transition-all duration-300 will-change-transform group';
	const interactiveClasses = interactive ? 'cursor-pointer hover:shadow-xl' : '';
	const combinedClasses = cn(baseClasses, variants[variant], interactiveClasses, className);

	const handleClick = () => {
		if (link) {
			window.open(link, '_blank', 'noopener,noreferrer');
		}
		onCardClick?.();
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
			duration: prefersReducedMotion ? 100 : 250,
			scale: prefersReducedMotion ? 1.01 : variant === 'glass' ? 1.03 : 1.02,
			borderRadius: '24px',
			responsiveness: prefersReducedMotion ? 'subtle' : 'medium'
		}}
		use:magneticHover={{
			enabled: shouldAnimate && interactive && variant !== 'terminal',
			strength: prefersReducedMotion ? 0.05 : 0.15,
			scale: prefersReducedMotion ? 1.005 : 1.01
		}}
		in:springPop={{
			duration: prefersReducedMotion ? 100 : 300,
			bounce: !prefersReducedMotion && variant === 'glass'
		}}
		onclick={interactive ? handleClick : undefined}
		onkeydown={interactive ? handleKeydown : undefined}
		tabindex={interactive ? 0 : undefined}
		role={interactive ? 'button' : undefined}
		aria-label={interactive ? `View project: ${title}` : undefined}
		{...restProps}
	>
		<!-- Image -->
		{#if image}
			<div class="relative h-48 overflow-hidden">
				<img
					src={image}
					alt={title}
					class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				></div>
			</div>
		{/if}

		<!-- Content -->
		<div class="p-6 space-y-4">
			<div class="space-y-2">
				<h3 class="text-xl font-bold leading-tight">{title}</h3>
				<p class="text-sm opacity-80 leading-relaxed">{description}</p>
			</div>

			<!-- Tags -->
			{#if tags.length > 0}
				<div class="flex flex-wrap gap-2">
					{#each tags as tag}
						<span class="px-2 py-1 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">
							{tag}
						</span>
					{/each}
				</div>
			{/if}

			<!-- Link indicator -->
			{#if link && interactive}
				<div class="flex items-center gap-2 text-sm opacity-60 group-hover:opacity-100 transition-opacity duration-200">
					<span>View Project</span>
					<svg
						class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
						/>
					</svg>
				</div>
			{/if}

			<!-- Children content -->
			{#if children}
				<div class="mt-4">
					{@render children()}
				</div>
			{/if}
		</div>
	</div>
{:else}
	<div
		class={combinedClasses}
		onclick={interactive ? handleClick : undefined}
		onkeydown={interactive ? handleKeydown : undefined}
		tabindex={interactive ? 0 : undefined}
		role={interactive ? 'button' : undefined}
		aria-label={interactive ? `View project: ${title}` : undefined}
		{...restProps}
	>
		<!-- Image -->
		{#if image}
			<div class="relative h-48 overflow-hidden">
				<img
					src={image}
					alt={title}
					class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				></div>
			</div>
		{/if}

		<!-- Content -->
		<div class="p-6 space-y-4">
			<div class="space-y-2">
				<h3 class="text-xl font-bold leading-tight">{title}</h3>
				<p class="text-sm opacity-80 leading-relaxed">{description}</p>
			</div>

			<!-- Tags -->
			{#if tags.length > 0}
				<div class="flex flex-wrap gap-2">
					{#each tags as tag}
						<span class="px-2 py-1 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">
							{tag}
						</span>
					{/each}
				</div>
			{/if}

			<!-- Link indicator -->
			{#if link && interactive}
				<div class="flex items-center gap-2 text-sm opacity-60 group-hover:opacity-100 transition-opacity duration-200">
					<span>View Project</span>
					<svg
						class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
						/>
					</svg>
				</div>
			{/if}

			<!-- Children content -->
			{#if children}
				<div class="mt-4">
					{@render children()}
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	div {
		will-change: transform, border-radius, filter, box-shadow;
		position: relative;
		/* Apple-style rounded corners with smooth transitions */
		transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	/* Interactive cards get enhanced hover states */
	div[role='button']:hover {
		transform: translateY(-2px);
	}

	/* Terminal variant glow effects */
	div:global([class*='terminal']) {
		text-shadow: 0 0 5px currentColor;
	}

	div:global([class*='terminal']):hover {
		box-shadow:
			0 0 30px rgba(48, 209, 88, 0.2),
			0 8px 32px rgba(0, 0, 0, 0.3);
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
			0 8px 25px rgba(0, 0, 0, 0.2);
		transform: translateY(-3px);
	}

	/* Smooth image transitions */
	img {
		transition: transform 300ms ease-out;
	}

	/* Tag hover effects */
	span {
		transition: all 200ms ease-out;
	}

	div:hover span {
		background: rgba(255, 255, 255, 0.15);
		border-color: rgba(255, 255, 255, 0.3);
	}
</style>
