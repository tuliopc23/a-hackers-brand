<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { gsap } from 'gsap';

	interface Props {
		// Props
		variant?: 'subtle' | 'medium' | 'heavy' | 'extreme' | 'terminal' | 'fluid';
		effect?:
			| 'jelly'
			| 'magnetic'
			| 'shimmer'
			| 'glow'
			| 'morph'
			| 'breathe'
			| 'ripple'
			| 'liquid-morph'
			| 'apple-fluid'
			| 'none';
		interactive?: boolean;
		animate?: boolean;
		customClass?: string;
		tag?: string;
		borderRadius?: string;
		blur?: string;
		opacity?: string;
		glow?: boolean;
		terminalGlow?: boolean;
		fluidMorphing?: boolean;
		appleStyle?: boolean;
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
		fluidMorphing = false,
		appleStyle = true,
		children,
		...rest
	}: Props = $props();

	// Internal state
	let element: HTMLElement = $state()!;
	let isHovered = false;
	let isPressed = false;
	let morphTimeline: gsap.core.Timeline | null = null;
	let fluidTimeline: gsap.core.Timeline | null = null;

	const dispatch = createEventDispatcher();

	// Computed classes
	const baseClass = $derived(variant === 'terminal' ? 'liquid-terminal-advanced' : 'liquid-glass-advanced');
	const variantClass = $derived(variant !== 'terminal' && variant !== 'medium' ? `liquid-glass-${variant}` : '');
	const effectClass = $derived(effect !== 'none' ? `liquid-${effect}` : '');
	const glowClass = $derived(glow ? 'liquid-glow-advanced' : '');
	const terminalGlowClass = $derived(terminalGlow ? 'liquid-terminal-glow-advanced' : '');
	const interactiveClass = $derived(interactive ? 'cursor-pointer' : '');
	const appleClass = $derived(appleStyle ? 'apple-liquid-style' : '');

	const allClasses = $derived(
		[baseClass, variantClass, effectClass, glowClass, terminalGlowClass, interactiveClass, appleClass, customClass]
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

	// Advanced GSAP Animations
	onMount(() => {
		if (!element || !animate) return;

		const ctx = gsap.context(() => {
			// Initial state with Apple-style properties
			gsap.set(element, {
				scale: 1,
				rotation: 0,
				transformOrigin: 'center center',
				borderRadius: '16px',
				filter: 'blur(0px) saturate(1) brightness(1)'
			});

			// Interactive animations
			if (interactive) {
				setupAdvancedInteractions();
			}

			// Auto animations based on effect
			if (effect === 'liquid-morph') {
				setupLiquidMorphAnimation();
			} else if (effect === 'apple-fluid') {
				setupAppleFluidAnimation();
			} else if (fluidMorphing) {
				setupFluidMorphing();
			}
		}, element);

		return () => ctx.revert();
	});

	function setupAdvancedInteractions() {
		if (!element) return;

		const hoverTl = gsap.timeline({ paused: true });
		const pressTl = gsap.timeline({ paused: true });

		switch (effect) {
			case 'jelly':
				hoverTl
					.to(element, {
						scale: 1.03,
						y: -3,
						borderRadius: '24px',
						filter: 'blur(0px) saturate(1.15) brightness(1.08)',
						backdropFilter: 'blur(12px) saturate(200%)',
						duration: 0.4,
						ease: 'back.out(1.7)'
					})
					.to(
						element,
						{
							borderRadius: '20px',
							duration: 0.2,
							ease: 'power2.inOut'
						},
						'-=0.1'
					);
				break;

			case 'liquid-morph':
				hoverTl
					.to(element, {
						scale: 1.05,
						y: -4,
						borderRadius: '32px 16px 28px 20px',
						filter: 'blur(0px) saturate(1.2) brightness(1.1)',
						rotation: 1,
						duration: 0.6,
						ease: 'elastic.out(1, 0.5)'
					})
					.to(
						element,
						{
							borderRadius: '20px 24px 18px 26px',
							rotation: -0.5,
							duration: 0.4,
							ease: 'sine.inOut'
						},
						'-=0.2'
					);
				break;

			case 'apple-fluid':
				hoverTl
					.to(element, {
						scale: 1.04,
						y: -5,
						borderRadius: '40px',
						filter: 'blur(0px) saturate(1.25) brightness(1.12)',
						backdropFilter: 'blur(16px) saturate(220%)',
						boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25), 0 0 40px rgba(0, 212, 170, 0.3)',
						duration: 0.5,
						ease: 'power3.out'
					})
					.to(
						element,
						{
							borderRadius: '28px',
							duration: 0.3,
							ease: 'sine.inOut',
							yoyo: true,
							repeat: 1
						},
						'-=0.2'
					);
				break;

			case 'magnetic':
				hoverTl.to(element, {
					y: -6,
					scale: 1.04,
					borderRadius: '32px',
					filter: 'blur(0px) saturate(1.1) brightness(1.05)',
					boxShadow: '0 24px 48px rgba(0, 0, 0, 0.2), 0 12px 24px rgba(0, 0, 0, 0.15)',
					duration: 0.3,
					ease: 'power2.out'
				});
				break;

			case 'glow':
				hoverTl.to(element, {
					y: -4,
					scale: 1.03,
					borderRadius: '28px',
					filter: 'blur(0px) saturate(1.2) brightness(1.1)',
					boxShadow:
						'0 16px 32px rgba(0, 0, 0, 0.18), 0 0 30px rgba(0, 212, 170, 0.4), 0 0 60px rgba(0, 255, 255, 0.2)',
					duration: 0.4,
					ease: 'power2.out'
				});
				break;
		}

		// Press animation
		pressTl.to(element, {
			scale: 0.97,
			y: 1,
			borderRadius: '12px',
			filter: 'blur(0px) saturate(0.9) brightness(0.95)',
			duration: 0.1,
			ease: 'power2.out'
		});

		// Event listeners
		element.addEventListener('mouseenter', () => {
			isHovered = true;
			hoverTl.play();
			dispatch('hover', { hovered: true });
		});

		element.addEventListener('mouseleave', () => {
			isHovered = false;
			hoverTl.reverse();
			dispatch('hover', { hovered: false });
		});

		element.addEventListener('mousedown', () => {
			isPressed = true;
			pressTl.play();
			dispatch('press', { pressed: true });
		});

		element.addEventListener('mouseup', () => {
			isPressed = false;
			pressTl.reverse();
			dispatch('press', { pressed: false });
		});
	}

	function setupLiquidMorphAnimation() {
		if (!element) return;

		morphTimeline = gsap.timeline({ repeat: -1, yoyo: true });

		morphTimeline
			.to(element, {
				borderRadius: '40px 20px 35px 25px',
				rotation: 2,
				scale: 1.02,
				filter: 'blur(0.5px) saturate(1.1)',
				duration: 3,
				ease: 'sine.inOut'
			})
			.to(element, {
				borderRadius: '25px 45px 20px 40px',
				rotation: -1.5,
				scale: 1.01,
				filter: 'blur(0px) saturate(1.05)',
				duration: 2.5,
				ease: 'sine.inOut'
			})
			.to(element, {
				borderRadius: '35px 30px 45px 15px',
				rotation: 1,
				scale: 1.03,
				filter: 'blur(0.3px) saturate(1.15)',
				duration: 2.8,
				ease: 'sine.inOut'
			});
	}

	function setupAppleFluidAnimation() {
		if (!element) return;

		fluidTimeline = gsap.timeline({ repeat: -1 });

		fluidTimeline
			.to(element, {
				borderRadius: '50px',
				filter: 'blur(0px) saturate(1.2) brightness(1.05)',
				backdropFilter: 'blur(14px) saturate(200%)',
				duration: 4,
				ease: 'sine.inOut'
			})
			.to(element, {
				borderRadius: '16px',
				filter: 'blur(0px) saturate(1) brightness(1)',
				backdropFilter: 'blur(8px) saturate(180%)',
				duration: 4,
				ease: 'sine.inOut'
			})
			.to(element, {
				borderRadius: '32px',
				filter: 'blur(0px) saturate(1.1) brightness(1.03)',
				backdropFilter: 'blur(12px) saturate(190%)',
				duration: 3,
				ease: 'sine.inOut'
			});
	}

	function setupFluidMorphing() {
		if (!element) return;

		const fluidMorph = gsap.timeline({ repeat: -1, yoyo: true });

		fluidMorph
			.to(element, {
				borderRadius: '60px 20px 40px 30px',
				scale: 1.02,
				rotation: 0.5,
				filter: 'blur(0px) saturate(1.15) brightness(1.05)',
				duration: 5,
				ease: 'power1.inOut'
			})
			.to(element, {
				borderRadius: '20px 50px 25px 45px',
				scale: 1.01,
				rotation: -0.3,
				filter: 'blur(0px) saturate(1.05) brightness(1.02)',
				duration: 4,
				ease: 'power1.inOut'
			});
	}

	function createAdvancedRipple(event: MouseEvent) {
		if (effect !== 'ripple' || !element) return;

		const rect = element.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		// Create multiple ripple layers for depth
		for (let i = 0; i < 3; i++) {
			const ripple = document.createElement('div');
			const delay = i * 0.1;
			const scale = 1 + i * 0.3;

			ripple.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: radial-gradient(circle, 
          rgba(255, 255, 255, ${0.4 - i * 0.1}) 0%, 
          rgba(0, 212, 170, ${0.2 - i * 0.05}) 30%,
          transparent 70%);
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 10 - i;
      `;

			element.appendChild(ripple);

			gsap.to(ripple, {
				width: 300 * scale,
				height: 300 * scale,
				opacity: 0,
				duration: 0.8 + delay,
				delay: delay,
				ease: 'power2.out',
				onComplete: () => ripple.remove()
			});
		}
	}

	// Event handlers
	function handleClick(event: MouseEvent) {
		if (effect === 'ripple') {
			createAdvancedRipple(event);
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
	<div class="liquid-content-advanced">
		{@render children?.()}
	</div>

	{#if variant === 'terminal' || glow || appleStyle}
		<div class="liquid-overlay-advanced"></div>
	{/if}

	{#if appleStyle}
		<div class="apple-highlight"></div>
	{/if}
</svelte:element>

export default LiquidGlassAdvanced;

<style>
	:global(.liquid-content-advanced) {
		position: relative;
		z-index: 3;
	}

	:global(.liquid-overlay-advanced) {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, transparent 40%, rgba(0, 212, 170, 0.08) 100%);
		border-radius: inherit;
		pointer-events: none;
		z-index: 2;
		opacity: 0.8;
	}

	:global(.apple-highlight) {
		position: absolute;
		top: 1px;
		left: 1px;
		right: 1px;
		height: 40%;
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%);
		border-radius: inherit;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		pointer-events: none;
		z-index: 2;
	}

	:global(.liquid-glass-advanced) {
		position: relative;
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(12px) saturate(180%);
		-webkit-backdrop-filter: blur(12px) saturate(180%);
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: 16px;
		box-shadow:
			0 8px 16px rgba(0, 0, 0, 0.15),
			0 4px 8px rgba(0, 0, 0, 0.1),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
		transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
		will-change: transform, border-radius, filter, backdrop-filter;
		overflow: hidden;
	}

	:global(.liquid-terminal-advanced) {
		position: relative;
		background: linear-gradient(135deg, rgba(29, 29, 31, 0.85) 0%, rgba(29, 29, 31, 0.95) 100%);
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		border: 1px solid rgba(0, 212, 170, 0.3);
		border-radius: 20px;
		box-shadow:
			0 8px 16px rgba(0, 0, 0, 0.4),
			0 0 20px rgba(0, 212, 170, 0.15),
			inset 0 1px 0 rgba(0, 212, 170, 0.1);
		transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
		will-change: transform, border-radius, filter, backdrop-filter;
		overflow: hidden;
	}

	:global(.apple-liquid-style) {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(20px) saturate(200%);
		-webkit-backdrop-filter: blur(20px) saturate(200%);
		border: 1px solid rgba(255, 255, 255, 0.15);
		box-shadow:
			0 8px 32px rgba(0, 0, 0, 0.12),
			0 1px 2px rgba(0, 0, 0, 0.08),
			inset 0 1px 0 rgba(255, 255, 255, 0.15),
			inset 0 -1px 0 rgba(0, 0, 0, 0.05);
	}

	:global(.liquid-glow-advanced:hover) {
		box-shadow:
			0 16px 32px rgba(0, 0, 0, 0.18),
			0 0 30px rgba(0, 212, 170, 0.4),
			0 0 60px rgba(0, 255, 255, 0.2),
			inset 0 1px 0 rgba(255, 255, 255, 0.2);
		border-color: rgba(0, 212, 170, 0.6);
	}

	:global(.liquid-terminal-glow-advanced) {
		animation: terminal-glow-pulse-advanced 3s ease-in-out infinite;
	}

	@keyframes terminal-glow-pulse-advanced {
		0%,
		100% {
			box-shadow:
				0 8px 16px rgba(0, 0, 0, 0.4),
				0 0 20px rgba(0, 212, 170, 0.15),
				inset 0 1px 0 rgba(0, 212, 170, 0.1);
		}
		50% {
			box-shadow:
				0 8px 16px rgba(0, 0, 0, 0.4),
				0 0 30px rgba(0, 212, 170, 0.25),
				inset 0 1px 0 rgba(0, 212, 170, 0.15);
		}
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		:global(.liquid-glass-advanced),
		:global(.liquid-terminal-advanced) {
			backdrop-filter: blur(8px) saturate(160%);
			-webkit-backdrop-filter: blur(8px) saturate(160%);
		}
	}

	/* Accessibility */
	@media (prefers-reduced-motion: reduce) {
		:global(.liquid-terminal-glow-advanced) {
			animation: none;
		}
	}
</style>
