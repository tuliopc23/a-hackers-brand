<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { gsap } from 'gsap';

	// Props
	export let variant: 'subtle' | 'medium' | 'heavy' | 'extreme' | 'terminal' = 'medium';
	export let effect: 'jelly' | 'magnetic' | 'shimmer' | 'glow' | 'morph' | 'breathe' | 'ripple' | 'none' = 'jelly';
	export let interactive: boolean = true;
	export let animate: boolean = true;
	export let customClass: string = '';
	export let tag: string = 'div';
	export let borderRadius: string = '';
	export let blur: string = '';
	export let opacity: string = '';
	export let glow: boolean = false;
	export let terminalGlow: boolean = false;

	// Internal state
	let element: HTMLElement;
	let isHovered = false;
	let isPressed = false;
	let rippleAnimation: gsap.core.Timeline | null = null;

	const dispatch = createEventDispatcher();

	// Computed classes
	$: baseClass = variant === 'terminal' ? 'liquid-terminal' : 'liquid-glass';
	$: variantClass = variant !== 'terminal' && variant !== 'medium' ? `liquid-glass-${variant}` : '';
	$: effectClass = effect !== 'none' ? `liquid-${effect}` : '';
	$: glowClass = glow ? 'liquid-glow' : '';
	$: terminalGlowClass = terminalGlow ? 'liquid-terminal-glow' : '';
	$: interactiveClass = interactive ? 'cursor-pointer' : '';

	$: allClasses = [baseClass, variantClass, effectClass, glowClass, terminalGlowClass, interactiveClass, customClass]
		.filter(Boolean)
		.join(' ');

	// Custom styles
	$: customStyles = [
		borderRadius ? `--liquid-radius-md: ${borderRadius}` : '',
		blur ? `--liquid-blur-md: ${blur}` : '',
		opacity ? `--liquid-glass-2: ${opacity}` : ''
	]
		.filter(Boolean)
		.join('; ');

	// GSAP Animations
	onMount(() => {
		if (!element || !animate) return;

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
			if (effect === 'morph') {
				setupMorphAnimation();
			} else if (effect === 'breathe') {
				setupBreatheAnimation();
			}
		}, element);

		return () => ctx.revert();
	});

	function setupInteractiveAnimations() {
		if (!element) return;

		const tl = gsap.timeline({ paused: true });

		switch (effect) {
			case 'jelly':
				tl.to(element, {
					scale: 1.02,
					y: -2,
					borderRadius: '24px',
					filter: 'brightness(1.05) saturate(1.1)',
					duration: 0.3,
					ease: 'back.out(1.7)'
				});
				break;

			case 'magnetic':
				tl.to(element, {
					y: -4,
					scale: 1.03,
					borderRadius: '28px',
					boxShadow: '0 24px 48px rgba(0, 0, 0, 0.2), 0 12px 24px rgba(0, 0, 0, 0.15)',
					duration: 0.2,
					ease: 'power2.out'
				});
				break;

			case 'glow':
				tl.to(element, {
					y: -3,
					scale: 1.02,
					borderRadius: '24px',
					boxShadow:
						'0 16px 32px rgba(0, 0, 0, 0.18), 0 0 30px rgba(0, 212, 170, 0.4), 0 0 60px rgba(0, 255, 255, 0.2)',
					duration: 0.3,
					ease: 'power2.out'
				});
				break;
		}

		// Store timeline for hover events
		element.addEventListener('mouseenter', () => {
			isHovered = true;
			tl.play();
			dispatch('hover', { hovered: true });
		});

		element.addEventListener('mouseleave', () => {
			isHovered = false;
			tl.reverse();
			dispatch('hover', { hovered: false });
		});

		// Press animations
		element.addEventListener('mousedown', () => {
			isPressed = true;
			gsap.to(element, {
				scale: 0.98,
				y: 1,
				duration: 0.1,
				ease: 'power2.out'
			});
			dispatch('press', { pressed: true });
		});

		element.addEventListener('mouseup', () => {
			isPressed = false;
			gsap.to(element, {
				scale: isHovered ? 1.02 : 1,
				y: isHovered ? -2 : 0,
				duration: 0.2,
				ease: 'back.out(1.7)'
			});
			dispatch('press', { pressed: false });
		});
	}

	function setupMorphAnimation() {
		if (!element) return;

		gsap.to(element, {
			borderRadius: '40px 24px 32px 48px',
			rotation: 0.5,
			scale: 1.02,
			duration: 2,
			ease: 'sine.inOut',
			yoyo: true,
			repeat: -1,
			repeatDelay: 0.5
		});
	}

	function setupBreatheAnimation() {
		if (!element) return;

		gsap.to(element, {
			filter: 'blur(0.5px) saturate(1.1) brightness(1.05)',
			backdropFilter: 'blur(12px) saturate(200%)',
			duration: 2,
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
	on:click={handleClick}
	on:keydown={handleKeydown}
	{...$$restProps}
>
	<div class="liquid-content">
		<slot />
	</div>

	{#if variant === 'terminal' || glow}
		<div class="liquid-overlay"></div>
	{/if}
</svelte:element>

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
