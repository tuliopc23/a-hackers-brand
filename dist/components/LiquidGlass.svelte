<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { gsap } from 'gsap';
	import { useReducedMotion, useEventListener } from '../motion';

	interface Props {
		// Props
		variant?: 'subtle' | 'medium' | 'heavy' | 'extreme' | 'terminal';
		effect?: 'jelly' | 'magnetic' | 'shimmer' | 'glow' | 'morph' | 'breathe' | 'ripple' | 'none';
		interactive?: boolean;
		animate?: boolean;
		customClass?: string;
		tag?: string;
		borderRadius?: string;
		blur?: string;
		opacity?: string;
		glow?: boolean;
		terminalGlow?: boolean;
		children?: import('svelte').Snippet;
		[key: string]: any;
	}

	const {
		variant = 'medium',
		effect = 'jelly',
		interactive = true,
		animate = true,
		customClass = '',
		tag = 'div',
		borderRadius = '',
		blur = '',
		opacity = '',
		glow = false,
		terminalGlow = false,
		children,
		...rest
	}: Props = $props();

	// Internal state
	let element: HTMLElement = $state()!;
	let isHovered = $state(false);
	let isPressed = $state(false);
	const rippleAnimation: gsap.core.Timeline | null = null;

	const dispatch = createEventDispatcher();

	// Check for reduced motion preference
	const prefersReducedMotion = useReducedMotion();
	const shouldAnimate = $derived(animate && !prefersReducedMotion);

	// Computed classes
	const baseClass = $derived(variant === 'terminal' ? 'liquid-terminal' : 'liquid-glass');
	const variantClass = $derived(variant !== 'terminal' && variant !== 'medium' ? `liquid-glass-${variant}` : '');
	const effectClass = $derived(effect !== 'none' ? `liquid-${effect}` : '');
	const glowClass = $derived(glow ? 'liquid-glow' : '');
	const terminalGlowClass = $derived(terminalGlow ? 'liquid-terminal-glow' : '');
	const interactiveClass = $derived(interactive ? 'cursor-pointer' : '');

	const allClasses = $derived(
		[baseClass, variantClass, effectClass, glowClass, terminalGlowClass, interactiveClass, customClass]
			.filter(Boolean)
			.join(' ')
	);

	// Custom styles
	const customStyles = $derived(
		[
			borderRadius ? `--liquid-radius-md: ${borderRadius}` : '',
			blur ? `--liquid-blur-md: ${blur}` : '',
			opacity ? `--liquid-glass-2: ${opacity}` : ''
		]
			.filter(Boolean)
			.join('; ')
	);

	// GSAP Animations
	$effect(() => {
		if (!element || !shouldAnimate) return;

		// Set up GSAP context for cleanup
		const ctx = gsap.context(() => {
			// Initial state
			gsap.set(element, {
				scale: 1,
				rotation: 0,
				transformOrigin: 'center center'
			});

			// Hover animations
			if (interactive) {
				setupInteractiveAnimations();
			}

			// Auto animations based on effect
			if (effect === 'morph' && !prefersReducedMotion) {
				setupMorphAnimation();
			} else if (effect === 'breathe' && !prefersReducedMotion) {
				setupBreatheAnimation();
			}
		}, element);

		return () => ctx.revert();
	});

	function setupInteractiveAnimations() {
		if (!element) return;

		const tl = gsap.timeline({ paused: true });

		// Adjust animations based on reduced motion preference
		const animationScale = prefersReducedMotion ? 0.5 : 1;
		const baseDuration = prefersReducedMotion ? 0.15 : 0.3;

		switch (effect) {
			case 'jelly':
				tl.to(element, {
					scale: 1 + 0.02 * animationScale,
					y: -2 * animationScale,
					borderRadius: prefersReducedMotion ? '16px' : '24px',
					filter: prefersReducedMotion ? 'brightness(1.02)' : 'brightness(1.05) saturate(1.1)',
					duration: baseDuration,
					ease: prefersReducedMotion ? 'power2.out' : 'back.out(1.7)'
				});
				break;

			case 'magnetic':
				tl.to(element, {
					y: -4 * animationScale,
					scale: 1 + 0.03 * animationScale,
					borderRadius: prefersReducedMotion ? '20px' : '28px',
					boxShadow: prefersReducedMotion
						? '0 8px 16px rgba(0, 0, 0, 0.1)'
						: '0 24px 48px rgba(0, 0, 0, 0.2), 0 12px 24px rgba(0, 0, 0, 0.15)',
					duration: baseDuration * 0.7,
					ease: 'power2.out'
				});
				break;

			case 'glow':
				tl.to(element, {
					y: -3 * animationScale,
					scale: 1 + 0.02 * animationScale,
					borderRadius: prefersReducedMotion ? '16px' : '24px',
					boxShadow: prefersReducedMotion
						? '0 8px 16px rgba(0, 0, 0, 0.1)'
						: '0 16px 32px rgba(0, 0, 0, 0.18), 0 0 30px rgba(0, 212, 170, 0.4), 0 0 60px rgba(0, 255, 255, 0.2)',
					duration: baseDuration,
					ease: 'power2.out'
				});
				break;
		}

		// Use effect helpers for event handling with automatic cleanup
		useEventListener(element, 'mouseenter', () => {
			isHovered = true;
			tl.play();
			dispatch('hover', { hovered: true });
		});

		useEventListener(element, 'mouseleave', () => {
			isHovered = false;
			tl.reverse();
			dispatch('hover', { hovered: false });
		});

		// Press animations with reduced motion support
		useEventListener(element, 'mousedown', () => {
			isPressed = true;
			const pressScale = prefersReducedMotion ? 0.99 : 0.98;
			const pressDuration = prefersReducedMotion ? 0.05 : 0.1;
			gsap.to(element, {
				scale: pressScale,
				y: prefersReducedMotion ? 0 : 1,
				duration: pressDuration,
				ease: 'power2.out'
			});
			dispatch('press', { pressed: true });
		});

		useEventListener(element, 'mouseup', () => {
			isPressed = false;
			const restoreScale = isHovered ? (prefersReducedMotion ? 1.01 : 1.02) : 1;
			const restoreY = isHovered ? (prefersReducedMotion ? -1 : -2) : 0;
			const restoreDuration = prefersReducedMotion ? 0.1 : 0.2;
			gsap.to(element, {
				scale: restoreScale,
				y: restoreY,
				duration: restoreDuration,
				ease: prefersReducedMotion ? 'power2.out' : 'back.out(1.7)'
			});
			dispatch('press', { pressed: false });
		});
	}

	function setupMorphAnimation() {
		if (!element) return;

		// Reduce intensity for reduced motion
		const morphIntensity = prefersReducedMotion ? 0.3 : 1;
		const morphDuration = prefersReducedMotion ? 3 : 2;

		gsap.to(element, {
			borderRadius: prefersReducedMotion ? '16px 12px 20px 18px' : '40px 24px 32px 48px',
			rotation: 0.5 * morphIntensity,
			scale: 1 + 0.02 * morphIntensity,
			duration: morphDuration,
			ease: 'sine.inOut',
			yoyo: true,
			repeat: -1,
			repeatDelay: prefersReducedMotion ? 1 : 0.5
		});
	}

	function setupBreatheAnimation() {
		if (!element) return;

		// Subtle breathing for reduced motion
		const breatheIntensity = prefersReducedMotion ? 0.5 : 1;
		const breatheDuration = prefersReducedMotion ? 3 : 2;

		gsap.to(element, {
			filter: prefersReducedMotion
				? 'blur(0.2px) saturate(1.02) brightness(1.01)'
				: 'blur(0.5px) saturate(1.1) brightness(1.05)',
			backdropFilter: prefersReducedMotion ? 'blur(8px) saturate(110%)' : 'blur(12px) saturate(200%)',
			duration: breatheDuration,
			ease: 'sine.inOut',
			yoyo: true,
			repeat: -1
		});
	}

	function createRipple(event: MouseEvent) {
		if (effect !== 'ripple' || !element) return;

		const rect = element.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		// Create ripple element
		const ripple = document.createElement('div');
		ripple.style.cssText = `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 10;
    `;

		element.appendChild(ripple);

		// Animate ripple
		gsap.to(ripple, {
			width: 300,
			height: 300,
			opacity: 0,
			duration: 0.6,
			ease: 'power2.out',
			onComplete: () => {
				ripple.remove();
			}
		});
	}

	// Event handlers
	function handleClick(event: MouseEvent) {
		if (effect === 'ripple') {
			createRipple(event);
		}
		dispatch('click', event);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			dispatch('click', event);
		}
	}
</script>

<svelte:element
	this={tag}
	bind:this={element}
	class={allClasses}
	style={customStyles}
	role={interactive ? 'button' : undefined}
	tabindex={interactive ? 0 : undefined}
	onclick={handleClick}
	onkeydown={(e) => e.key === 'Enter' && handleClick(e)}
	{...rest}
>
	<div class="liquid-content">
		{@render children?.()}
	</div>

	{#if variant === 'terminal' || glow}
		<div class="liquid-overlay"></div>
	{/if}
</svelte:element>

export default LiquidGlass;

<style>
	:global(.liquid-content) {
		position: relative;
		z-index: 3;
	}

	:global(.liquid-overlay) {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(0, 212, 170, 0.05) 100%);
		border-radius: inherit;
		pointer-events: none;
		z-index: 2;
	}
</style>
