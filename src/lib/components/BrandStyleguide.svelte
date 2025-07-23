<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { magneticHover, springPop, jellyHover, useReducedMotion } from '$lib/motion';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		variant?: 'default' | 'glass' | 'terminal' | 'minimal';
		section?: 'colors' | 'typography' | 'components' | 'spacing' | 'all';
		interactive?: boolean;
		animate?: boolean;
		class?: string;
		children?: import('svelte').Snippet;
	}

	const {
		variant = 'glass',
		section = 'all',
		interactive = false,
		animate = true,
		class: className = '',
		children,
		...restProps
	}: Props = $props();

	// Check for reduced motion preference
	const prefersReducedMotion = useReducedMotion();
	const shouldAnimate = $derived(animate && !prefersReducedMotion);

	const variants = {
		default: 'bg-neutral-900/80 border border-neutral-700 text-neutral-100',
		glass: 'glass-medium border border-white/20 text-white backdrop-blur-lg',
		terminal: 'bg-terminal-bg border-2 border-terminal-green/30 text-terminal-green shadow-lg shadow-terminal-green/10',
		minimal: 'bg-transparent border border-neutral-600 text-neutral-300'
	};

	const baseClasses = 'rounded-2xl p-6 transition-all duration-300 will-change-transform';
	const interactiveClasses = interactive ? 'cursor-pointer hover:shadow-xl' : '';
	const combinedClasses = cn(baseClasses, variants[variant], interactiveClasses, className);

	// Brand colors
	const brandColors = [
		{ name: 'Terminal Green', value: '#30D158', class: 'bg-terminal-green' },
		{ name: 'Terminal Blue', value: '#007AFF', class: 'bg-terminal-blue' },
		{ name: 'Terminal Cyan', value: '#00C7BE', class: 'bg-terminal-cyan' },
		{ name: 'Terminal Purple', value: '#AF52DE', class: 'bg-terminal-purple' },
		{ name: 'Terminal Pink', value: '#FF2D92', class: 'bg-terminal-pink' },
		{ name: 'Terminal BG', value: '#1C1C1E', class: 'bg-terminal-bg' }
	];

	// Typography examples
	const typographyExamples = [
		{ name: 'Heading 1', class: 'text-4xl font-bold', text: 'The Future is Liquid' },
		{ name: 'Heading 2', class: 'text-3xl font-bold', text: 'Glass Morphism Design' },
		{ name: 'Heading 3', class: 'text-2xl font-semibold', text: 'Terminal Aesthetics' },
		{ name: 'Body Text', class: 'text-base', text: 'This is body text with optimal readability and spacing.' },
		{ name: 'Small Text', class: 'text-sm opacity-80', text: 'Small text for captions and metadata.' },
		{ name: 'Code', class: 'font-mono text-sm bg-white/10 px-2 py-1 rounded', text: 'const liquid = true;' }
	];

	// Spacing examples
	const spacingExamples = [
		{ name: 'xs', value: '0.25rem', class: 'w-1 h-4' },
		{ name: 'sm', value: '0.5rem', class: 'w-2 h-4' },
		{ name: 'md', value: '1rem', class: 'w-4 h-4' },
		{ name: 'lg', value: '1.5rem', class: 'w-6 h-4' },
		{ name: 'xl', value: '2rem', class: 'w-8 h-4' },
		{ name: '2xl', value: '3rem', class: 'w-12 h-4' }
	];

	const shouldShowSection = (sectionName: string) => {
		return section === 'all' || section === sectionName;
	};
</script>

{#if shouldAnimate}
	<div
		class={combinedClasses}
		use:jellyHover={{
			enabled: shouldAnimate && interactive,
			duration: prefersReducedMotion ? 100 : 200,
			scale: prefersReducedMotion ? 1.01 : 1.02,
			borderRadius: '24px',
			responsiveness: prefersReducedMotion ? 'subtle' : 'medium'
		}}
		use:magneticHover={{
			enabled: shouldAnimate && interactive && variant !== 'terminal',
			strength: prefersReducedMotion ? 0.05 : 0.1,
			scale: prefersReducedMotion ? 1.005 : 1.01
		}}
		in:springPop={{
			duration: prefersReducedMotion ? 100 : 300,
			bounce: !prefersReducedMotion && variant === 'glass'
		}}
		{...restProps}
	>
		<div class="space-y-8">
			<!-- Header -->
			<div class="space-y-2">
				<h1 class="text-3xl font-bold">A Hacker's Brand Styleguide</h1>
				<p class="opacity-80">Liquid glass aesthetics meet terminal culture</p>
			</div>

			<!-- Colors Section -->
			{#if shouldShowSection('colors')}
				<section class="space-y-4">
					<h2 class="text-2xl font-semibold border-b border-current/20 pb-2">Brand Colors</h2>
					<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
						{#each brandColors as color}
							<div class="space-y-2">
								<div class="w-full h-16 rounded-lg {color.class} border border-white/20"></div>
								<div class="space-y-1">
									<div class="font-medium text-sm">{color.name}</div>
									<div class="font-mono text-xs opacity-60">{color.value}</div>
								</div>
							</div>
						{/each}
					</div>
				</section>
			{/if}

			<!-- Typography Section -->
			{#if shouldShowSection('typography')}
				<section class="space-y-4">
					<h2 class="text-2xl font-semibold border-b border-current/20 pb-2">Typography</h2>
					<div class="space-y-4">
						{#each typographyExamples as example}
							<div class="space-y-2">
								<div class="text-sm opacity-60 font-medium">{example.name}</div>
								<div class={example.class}>{example.text}</div>
							</div>
						{/each}
					</div>
				</section>
			{/if}

			<!-- Spacing Section -->
			{#if shouldShowSection('spacing')}
				<section class="space-y-4">
					<h2 class="text-2xl font-semibold border-b border-current/20 pb-2">Spacing Scale</h2>
					<div class="space-y-3">
						{#each spacingExamples as spacing}
							<div class="flex items-center gap-4">
								<div class="w-12 text-sm font-mono">{spacing.name}</div>
								<div class="bg-terminal-cyan {spacing.class} rounded"></div>
								<div class="text-sm opacity-60">{spacing.value}</div>
							</div>
						{/each}
					</div>
				</section>
			{/if}

			<!-- Components Section -->
			{#if shouldShowSection('components')}
				<section class="space-y-4">
					<h2 class="text-2xl font-semibold border-b border-current/20 pb-2">Component Variants</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<!-- Glass Variant -->
						<div class="space-y-3">
							<h3 class="text-lg font-medium">Glass Morphism</h3>
							<div class="glass-medium border border-white/20 p-4 rounded-lg backdrop-blur-lg">
								<div class="text-sm">Glass component with blur and transparency</div>
							</div>
						</div>

						<!-- Terminal Variant -->
						<div class="space-y-3">
							<h3 class="text-lg font-medium">Terminal Style</h3>
							<div
								class="bg-terminal-bg border-2 border-terminal-green/30 p-4 rounded-lg text-terminal-green font-mono"
							>
								<div class="text-sm">$ echo "Terminal aesthetic"</div>
							</div>
						</div>

						<!-- Minimal Variant -->
						<div class="space-y-3">
							<h3 class="text-lg font-medium">Minimal</h3>
							<div class="bg-transparent border border-neutral-600 p-4 rounded-lg">
								<div class="text-sm">Clean minimal design</div>
							</div>
						</div>

						<!-- Default Variant -->
						<div class="space-y-3">
							<h3 class="text-lg font-medium">Default</h3>
							<div class="bg-neutral-900/80 border border-neutral-700 p-4 rounded-lg">
								<div class="text-sm">Standard component styling</div>
							</div>
						</div>
					</div>
				</section>
			{/if}

			<!-- Design Principles -->
			{#if section === 'all'}
				<section class="space-y-4">
					<h2 class="text-2xl font-semibold border-b border-current/20 pb-2">Design Principles</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div class="space-y-2">
							<h3 class="text-lg font-medium text-terminal-cyan">Liquid Glass</h3>
							<p class="text-sm opacity-80">
								Translucent surfaces with depth and blur effects that create a sense of floating elements.
							</p>
						</div>
						<div class="space-y-2">
							<h3 class="text-lg font-medium text-terminal-green">Terminal Culture</h3>
							<p class="text-sm opacity-80">
								Monospace fonts, green text, and command-line aesthetics for that authentic hacker feel.
							</p>
						</div>
						<div class="space-y-2">
							<h3 class="text-lg font-medium text-terminal-purple">Smooth Animations</h3>
							<p class="text-sm opacity-80">
								Fluid transitions and micro-interactions that respect user preferences for reduced motion.
							</p>
						</div>
						<div class="space-y-2">
							<h3 class="text-lg font-medium text-terminal-pink">Accessibility First</h3>
							<p class="text-sm opacity-80">
								High contrast ratios, keyboard navigation, and screen reader support built into every component.
							</p>
						</div>
					</div>
				</section>
			{/if}

			<!-- Children content -->
			{#if children}
				<div class="mt-6 pt-6 border-t border-current/20">
					{@render children()}
				</div>
			{/if}
		</div>
	</div>
{:else}
	<div class={combinedClasses} {...restProps}>
		<div class="space-y-8">
			<!-- Header -->
			<div class="space-y-2">
				<h1 class="text-3xl font-bold">A Hacker's Brand Styleguide</h1>
				<p class="opacity-80">Liquid glass aesthetics meet terminal culture</p>
			</div>

			<!-- Colors Section -->
			{#if shouldShowSection('colors')}
				<section class="space-y-4">
					<h2 class="text-2xl font-semibold border-b border-current/20 pb-2">Brand Colors</h2>
					<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
						{#each brandColors as color}
							<div class="space-y-2">
								<div class="w-full h-16 rounded-lg {color.class} border border-white/20"></div>
								<div class="space-y-1">
									<div class="font-medium text-sm">{color.name}</div>
									<div class="font-mono text-xs opacity-60">{color.value}</div>
								</div>
							</div>
						{/each}
					</div>
				</section>
			{/if}

			<!-- Typography Section -->
			{#if shouldShowSection('typography')}
				<section class="space-y-4">
					<h2 class="text-2xl font-semibold border-b border-current/20 pb-2">Typography</h2>
					<div class="space-y-4">
						{#each typographyExamples as example}
							<div class="space-y-2">
								<div class="text-sm opacity-60 font-medium">{example.name}</div>
								<div class={example.class}>{example.text}</div>
							</div>
						{/each}
					</div>
				</section>
			{/if}

			<!-- Spacing Section -->
			{#if shouldShowSection('spacing')}
				<section class="space-y-4">
					<h2 class="text-2xl font-semibold border-b border-current/20 pb-2">Spacing Scale</h2>
					<div class="space-y-3">
						{#each spacingExamples as spacing}
							<div class="flex items-center gap-4">
								<div class="w-12 text-sm font-mono">{spacing.name}</div>
								<div class="bg-terminal-cyan {spacing.class} rounded"></div>
								<div class="text-sm opacity-60">{spacing.value}</div>
							</div>
						{/each}
					</div>
				</section>
			{/if}

			<!-- Components Section -->
			{#if shouldShowSection('components')}
				<section class="space-y-4">
					<h2 class="text-2xl font-semibold border-b border-current/20 pb-2">Component Variants</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<!-- Glass Variant -->
						<div class="space-y-3">
							<h3 class="text-lg font-medium">Glass Morphism</h3>
							<div class="glass-medium border border-white/20 p-4 rounded-lg backdrop-blur-lg">
								<div class="text-sm">Glass component with blur and transparency</div>
							</div>
						</div>

						<!-- Terminal Variant -->
						<div class="space-y-3">
							<h3 class="text-lg font-medium">Terminal Style</h3>
							<div
								class="bg-terminal-bg border-2 border-terminal-green/30 p-4 rounded-lg text-terminal-green font-mono"
							>
								<div class="text-sm">$ echo "Terminal aesthetic"</div>
							</div>
						</div>

						<!-- Minimal Variant -->
						<div class="space-y-3">
							<h3 class="text-lg font-medium">Minimal</h3>
							<div class="bg-transparent border border-neutral-600 p-4 rounded-lg">
								<div class="text-sm">Clean minimal design</div>
							</div>
						</div>

						<!-- Default Variant -->
						<div class="space-y-3">
							<h3 class="text-lg font-medium">Default</h3>
							<div class="bg-neutral-900/80 border border-neutral-700 p-4 rounded-lg">
								<div class="text-sm">Standard component styling</div>
							</div>
						</div>
					</div>
				</section>
			{/if}

			<!-- Design Principles -->
			{#if section === 'all'}
				<section class="space-y-4">
					<h2 class="text-2xl font-semibold border-b border-current/20 pb-2">Design Principles</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div class="space-y-2">
							<h3 class="text-lg font-medium text-terminal-cyan">Liquid Glass</h3>
							<p class="text-sm opacity-80">
								Translucent surfaces with depth and blur effects that create a sense of floating elements.
							</p>
						</div>
						<div class="space-y-2">
							<h3 class="text-lg font-medium text-terminal-green">Terminal Culture</h3>
							<p class="text-sm opacity-80">
								Monospace fonts, green text, and command-line aesthetics for that authentic hacker feel.
							</p>
						</div>
						<div class="space-y-2">
							<h3 class="text-lg font-medium text-terminal-purple">Smooth Animations</h3>
							<p class="text-sm opacity-80">
								Fluid transitions and micro-interactions that respect user preferences for reduced motion.
							</p>
						</div>
						<div class="space-y-2">
							<h3 class="text-lg font-medium text-terminal-pink">Accessibility First</h3>
							<p class="text-sm opacity-80">
								High contrast ratios, keyboard navigation, and screen reader support built into every component.
							</p>
						</div>
					</div>
				</section>
			{/if}

			<!-- Children content -->
			{#if children}
				<div class="mt-6 pt-6 border-t border-current/20">
					{@render children()}
				</div>
			{/if}
		</div>
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

	/* Section spacing */
	section {
		scroll-margin-top: 2rem;
	}

	/* Color swatch hover effects */
	section div:global([class*='bg-terminal']) {
		transition: transform 200ms ease-out;
	}

	section div:global([class*='bg-terminal']):hover {
		transform: scale(1.05);
	}

	/* Typography examples styling */
	section div:global([class*='font-mono']) {
		letter-spacing: 0.05em;
	}

	/* Spacing visualization */
	section div:global([class*='bg-terminal-cyan']) {
		transition: all 200ms ease-out;
	}

	section div:global([class*='bg-terminal-cyan']):hover {
		background-color: rgba(0, 199, 190, 0.8);
	}
</style>
