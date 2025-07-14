<!--
 * Motion Example Component
 * Demonstrates proper Svelte 5 motion patterns with effects, runes, and cleanup
 -->
<script lang="ts">
	import {
		springPop,
		glassFade,
		jellyHover,
		magneticHover,
		useReducedMotion,
		useEventListener,
		useAnimationFrame,
		toEffect,
		createMotionState,
		useDebouncedEffect
	} from '$lib/motion';
	import { threlteConfig, saveThrelteConfig } from '$lib/stores/threlte.js';

	interface Props {
		variant?: 'spring' | 'glass' | 'jelly' | 'magnetic';
		interactive?: boolean;
		autoAnimate?: boolean;
		class?: string;
		children?: any;
	}

	const {
		variant = 'spring',
		interactive = true,
		autoAnimate = false,
		class: className = '',
		children
	}: Props = $props();

	// Motion state using runes
	let element = $state<HTMLDivElement>();
	let isVisible = $state(false);
	let animationProgress = $state(0);

	// Motion configuration state
	const motionState = createMotionState({
		scale: 1,
		rotation: 0,
		opacity: 1
	});

	// Check for reduced motion preference
	const prefersReducedMotion = useReducedMotion();
	const shouldAnimate = $derived(interactive && !prefersReducedMotion);

	// Example of converting store subscription to work with effects
	$effect(() => {
		return toEffect(threlteConfig, (config) => {
			// React to threlte config changes
			// Config updated silently

			// Save config changes
			saveThrelteConfig(config);

			// Return cleanup function if needed
			return () => {
				// Cleanup logic here
			};
		});
	});

	// Animation frame example
	const { start: startAnimation, stop: stopAnimation } = useAnimationFrame(
		(time) => {
			if (!autoAnimate || !shouldAnimate) return false;

			// Update animation progress
			animationProgress = (Math.sin(time * 0.003) + 1) / 2;

			// Update motion state
			motionState.update((current) => ({
				...current,
				scale: 1 + animationProgress * 0.05,
				rotation: animationProgress * 2
			}));

			// Continue animation
			return true;
		},
		$state(autoAnimate && shouldAnimate)
	);

	// Debounced effect example
	useDebouncedEffect(() => {
		if (element && isVisible) {
			// Element became visible with debounce
		}
	}, 300);

	// Event handling with automatic cleanup
	$effect(() => {
		if (!element || !interactive) return;

		// Use the event listener helper for automatic cleanup
		useEventListener(element, 'mouseenter', () => {
			isVisible = true;
		});

		useEventListener(element, 'mouseleave', () => {
			isVisible = false;
		});

		useEventListener(element, 'click', (event) => {
			if (!shouldAnimate) return;

			// Trigger click animation
			motionState.update((current) => ({
				...current,
				scale: 0.95
			}));

			// Reset after animation
			setTimeout(() => {
				motionState.update((current) => ({
					...current,
					scale: 1
				}));
			}, 150);
		});
	});

	// Reactive motion styles
	const motionStyles = $derived(() => {
		const { scale, rotation, opacity } = motionState.current;
		const duration = prefersReducedMotion ? '100ms' : '300ms';

		return `
			transform: scale(${scale}) rotate(${rotation}deg);
			opacity: ${opacity};
			transition: transform ${duration} ease-out, opacity ${duration} ease-out;
			will-change: transform, opacity;
		`;
	});

	// Motion directive configuration
	const motionDirectives = $derived(() => {
		const baseDuration = prefersReducedMotion ? 150 : 300;

		switch (variant) {
			case 'spring':
				return {
					in: springPop,
					options: {
						duration: baseDuration,
						bounce: !prefersReducedMotion
					}
				};
			case 'glass':
				return {
					in: glassFade,
					options: {
						duration: baseDuration,
						direction: 'up' as const,
						distance: prefersReducedMotion ? 10 : 20
					}
				};
			case 'jelly':
				return {
					action: jellyHover,
					options: {
						enabled: shouldAnimate,
						duration: baseDuration,
						scale: prefersReducedMotion ? 1.02 : 1.05,
						responsiveness: prefersReducedMotion ? 'subtle' : ('medium' as const)
					}
				};
			case 'magnetic':
				return {
					action: magneticHover,
					options: {
						enabled: shouldAnimate,
						duration: baseDuration,
						strength: prefersReducedMotion ? 0.1 : 0.3,
						scale: prefersReducedMotion ? 1.01 : 1.03
					}
				};
			default:
				return { in: springPop, options: { duration: baseDuration } };
		}
	});

	// Classes with motion-aware styling
	const classes = $derived(() => {
		const base = 'motion-example rounded-lg p-6 border transition-colors duration-300';
		const interactive = shouldAnimate ? 'cursor-pointer hover:border-blue-400' : '';
		const reduced = prefersReducedMotion ? 'motion-reduce' : '';

		return [base, interactive, reduced, className].filter(Boolean).join(' ');
	});
</script>

<!-- Motion example element with proper directive usage -->
{#if variant === 'jelly'}
	<div
		bind:this={element}
		class={classes()}
		style={motionStyles()}
		use:jellyHover={motionDirectives().options}
		role="button"
		tabindex="0"
		aria-label="Motion example with jelly effect"
	>
		{#if children}
			{@render children()}
		{:else}
			<div class="text-center">
				<h3 class="text-lg font-semibold mb-2">Jelly Motion</h3>
				<p class="text-sm text-gray-600">Hover for jelly effect</p>
				{#if prefersReducedMotion}
					<p class="text-xs text-amber-600 mt-2">Reduced motion detected</p>
				{/if}
			</div>
		{/if}
	</div>
{:else if variant === 'magnetic'}
	<div
		bind:this={element}
		class={classes()}
		style={motionStyles()}
		use:magneticHover={motionDirectives().options}
		role="button"
		tabindex="0"
		aria-label="Motion example with magnetic effect"
	>
		{#if children}
			{@render children()}
		{:else}
			<div class="text-center">
				<h3 class="text-lg font-semibold mb-2">Magnetic Motion</h3>
				<p class="text-sm text-gray-600">Hover for magnetic attraction</p>
				{#if prefersReducedMotion}
					<p class="text-xs text-amber-600 mt-2">Reduced motion detected</p>
				{/if}
			</div>
		{/if}
	</div>
{:else}
	<div
		bind:this={element}
		class={classes()}
		style={motionStyles()}
		in:springPop={motionDirectives().options}
		role="button"
		tabindex="0"
		aria-label="Motion example with {variant} effect"
	>
		{#if children}
			{@render children()}
		{:else}
			<div class="text-center">
				<h3 class="text-lg font-semibold mb-2">{variant} Motion</h3>
				<p class="text-sm text-gray-600">Interactive motion example</p>
				{#if autoAnimate}
					<p class="text-xs text-blue-600 mt-1">Auto-animating: {Math.round(animationProgress * 100)}%</p>
				{/if}
				{#if prefersReducedMotion}
					<p class="text-xs text-amber-600 mt-2">Reduced motion detected</p>
				{/if}
			</div>
		{/if}
	</div>
{/if}

<style>
	.motion-example {
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(10px);
		min-height: 120px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.motion-example:hover {
		background: rgba(255, 255, 255, 0.15);
	}

	/* Reduced motion styles */
	.motion-reduce {
		transition-duration: 0.1s !important;
	}

	@media (prefers-reduced-motion: reduce) {
		.motion-example {
			transform: none !important;
			transition-duration: 0.1s !important;
		}
	}

	/* Focus styles for accessibility */
	.motion-example:focus-visible {
		outline: 2px solid #3b82f6;
		outline-offset: 2px;
	}
</style>
