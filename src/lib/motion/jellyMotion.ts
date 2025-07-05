/**
 * Jelly Motion System
 * Liquid, jelly-like animations with dynamic responsiveness
 */

import { DURATIONS, EASINGS, EASING_CSS, TRANSFORMS } from './tokens.js';
import type { TransitionConfig } from 'svelte/transition';

export interface JellyConfig {
	duration?: number;
	easing?: keyof typeof EASINGS;
	scale?: number;
	borderRadius?: string;
	blur?: number;
	elasticity?: number;
	responsiveness?: 'subtle' | 'medium' | 'strong';
}

export interface LiquidJellyConfig extends JellyConfig {
	liquidIntensity?: number;
	morphStrength?: number;
	flowDirection?: 'up' | 'down' | 'left' | 'right' | 'center';
}

/**
 * Jelly transition - creates a bouncy, elastic entrance/exit
 */
export function jelly(node: Element, config: JellyConfig = {}): TransitionConfig {
	const {
		duration = DURATIONS.moderate,
		easing = 'jelly',
		scale = TRANSFORMS.scale.jellyHover,
		borderRadius = TRANSFORMS.borderRadius.jelly,
		blur = 4,
		elasticity = 1.2,
		responsiveness = 'medium'
	} = config;

	const easingFunc = EASINGS[easing];
	const responsiveMultiplier = {
		subtle: 0.7,
		medium: 1.0,
		strong: 1.4
	}[responsiveness];

	return {
		duration: duration * responsiveMultiplier,
		easing: easingFunc,
		css: (t, u) => {
			const adjustedT = easingFunc(t);
			const elasticScale = 1 + (scale - 1) * adjustedT * elasticity;
			const morphRadius = parseFloat(borderRadius) * (1 + adjustedT * 0.3);
			const blurAmount = blur * u;
			
			return `
				transform: scale(${elasticScale}) translateZ(0);
				border-radius: ${morphRadius}px;
				filter: blur(${blurAmount}px);
				opacity: ${t};
				will-change: transform, border-radius, filter, opacity;
			`;
		}
	};
}

/**
 * Liquid jelly transition - more fluid, organic motion
 */
export function liquidJelly(node: Element, config: LiquidJellyConfig = {}): TransitionConfig {
	const {
		duration = DURATIONS.slow,
		easing = 'liquidJelly',
		scale = TRANSFORMS.scale.liquidExpand,
		borderRadius = TRANSFORMS.borderRadius.liquid,
		blur = 6,
		liquidIntensity = 1.0,
		morphStrength = 0.5,
		flowDirection = 'center'
	} = config;

	const easingFunc = EASINGS[easing];
	
	const flowTransforms = {
		up: 'translateY(-10px)',
		down: 'translateY(10px)',
		left: 'translateX(-10px)',
		right: 'translateX(10px)',
		center: 'translate(0, 0)'
	};

	return {
		duration,
		easing: easingFunc,
		css: (t, u) => {
			const adjustedT = easingFunc(t);
			
			// Create liquid-like scaling with asymmetric growth
			const scaleX = 1 + (scale - 1) * adjustedT * (1 + morphStrength * Math.sin(adjustedT * Math.PI));
			const scaleY = 1 + (scale - 1) * adjustedT * (1 + morphStrength * Math.cos(adjustedT * Math.PI * 0.7));
			
			// Dynamic border radius that morphs organically
			const baseRadius = parseFloat(borderRadius);
			const radiusVariation = morphStrength * 20 * Math.sin(adjustedT * Math.PI * 2);
			const morphedRadius = baseRadius + radiusVariation;
			
			// Liquid blur effect
			const liquidBlur = blur * u * liquidIntensity;
			
			// Flow translation
			const flowTransform = flowTransforms[flowDirection];
			const flowIntensity = (1 - adjustedT) * 0.3;
			
			return `
				transform: scale(${scaleX}, ${scaleY}) ${flowTransform} translateZ(0);
				border-radius: ${Math.max(4, morphedRadius)}px;
				filter: blur(${liquidBlur}px) saturate(${1 + adjustedT * 0.2});
				opacity: ${t};
				backdrop-filter: blur(${liquidBlur * 2}px);
				will-change: transform, border-radius, filter, opacity, backdrop-filter;
			`;
		}
	};
}

/**
 * Jelly hover action - adds dynamic jelly effects on hover
 */
export function jellyHover(node: Element, config: JellyConfig = {}) {
	const {
		duration = DURATIONS.fast,
		scale = TRANSFORMS.scale.jellyHover,
		borderRadius = TRANSFORMS.borderRadius.hover,
		responsiveness = 'medium'
	} = config;

	const responsiveScale = {
		subtle: 0.3,
		medium: 0.5,
		strong: 0.8
	}[responsiveness];

	let isHovering = false;
	let animationFrame: number;

	function updateTransform(progress: number) {
		const currentScale = 1 + (scale - 1) * progress * responsiveScale;
		const currentRadius = parseFloat(borderRadius) * (1 + progress * 0.2);
		
		node.style.transform = `scale(${currentScale}) translateZ(0)`;
		node.style.borderRadius = `${currentRadius}px`;
		node.style.transition = `transform ${duration}ms ${EASING_CSS.jelly}, border-radius ${duration}ms ${EASING_CSS.jelly}`;
	}

	function handleMouseEnter() {
		isHovering = true;
		updateTransform(1);
	}

	function handleMouseLeave() {
		isHovering = false;
		updateTransform(0);
	}

	function handleMouseMove(event: MouseEvent) {
		if (!isHovering) return;
		
		const rect = node.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		
		const deltaX = (event.clientX - centerX) / rect.width;
		const deltaY = (event.clientY - centerY) / rect.height;
		
		// Create subtle skew based on mouse position
		const skewX = deltaX * 2 * responsiveScale;
		const skewY = deltaY * 2 * responsiveScale;
		
		cancelAnimationFrame(animationFrame);
		animationFrame = requestAnimationFrame(() => {
			if (isHovering) {
				const currentScale = 1 + (scale - 1) * responsiveScale;
				node.style.transform = `scale(${currentScale}) skew(${skewX}deg, ${skewY}deg) translateZ(0)`;
			}
		});
	}

	node.addEventListener('mouseenter', handleMouseEnter);
	node.addEventListener('mouseleave', handleMouseLeave);
	node.addEventListener('mousemove', handleMouseMove);

	return {
		destroy() {
			node.removeEventListener('mouseenter', handleMouseEnter);
			node.removeEventListener('mouseleave', handleMouseLeave);
			node.removeEventListener('mousemove', handleMouseMove);
			cancelAnimationFrame(animationFrame);
		}
	};
}

/**
 * Liquid responsiveness action - makes elements respond like liquid to interactions
 */
export function liquidResponsive(node: Element, config: LiquidJellyConfig = {}) {
	const {
		duration = DURATIONS.fast,
		liquidIntensity = 1.0,
		morphStrength = 0.3,
		responsiveness = 'medium'
	} = config;

	const intensityMultiplier = {
		subtle: 0.5,
		medium: 1.0,
		strong: 1.5
	}[responsiveness];

	let isPressed = false;
	let animationFrame: number;

	function morphElement(intensity: number, mouseX?: number, mouseY?: number) {
		const rect = node.getBoundingClientRect();
		
		// Base liquid transformation
		const scaleVariation = 1 + intensity * morphStrength * intensityMultiplier;
		let transform = `scale(${scaleVariation}) translateZ(0)`;
		
		// Mouse-based morphing
		if (mouseX !== undefined && mouseY !== undefined) {
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;
			
			const deltaX = (mouseX - centerX) / rect.width;
			const deltaY = (mouseY - centerY) / rect.height;
			
			const skewX = deltaX * intensity * 3 * intensityMultiplier;
			const skewY = deltaY * intensity * 3 * intensityMultiplier;
			
			transform += ` skew(${skewX}deg, ${skewY}deg)`;
		}
		
		// Dynamic border radius
		const baseRadius = 8; // Default radius
		const radiusVariation = intensity * 10 * intensityMultiplier;
		const newRadius = baseRadius + radiusVariation;
		
		node.style.transform = transform;
		node.style.borderRadius = `${newRadius}px`;
		node.style.transition = `transform ${duration}ms ${EASING_CSS.liquidJelly}, border-radius ${duration}ms ${EASING_CSS.liquidJelly}`;
	}

	function handleMouseDown(event: MouseEvent) {
		isPressed = true;
		morphElement(liquidIntensity * 1.5, event.clientX, event.clientY);
	}

	function handleMouseUp() {
		isPressed = false;
		morphElement(0);
	}

	function handleMouseMove(event: MouseEvent) {
		if (!isPressed) return;
		
		cancelAnimationFrame(animationFrame);
		animationFrame = requestAnimationFrame(() => {
			morphElement(liquidIntensity, event.clientX, event.clientY);
		});
	}

	function handleMouseLeave() {
		isPressed = false;
		morphElement(0);
	}

	node.addEventListener('mousedown', handleMouseDown);
	node.addEventListener('mouseup', handleMouseUp);
	node.addEventListener('mousemove', handleMouseMove);
	node.addEventListener('mouseleave', handleMouseLeave);

	return {
		destroy() {
			node.removeEventListener('mousedown', handleMouseDown);
			node.removeEventListener('mouseup', handleMouseUp);
			node.removeEventListener('mousemove', handleMouseMove);
			node.removeEventListener('mouseleave', handleMouseLeave);
			cancelAnimationFrame(animationFrame);
		}
	};
}

/**
 * Breathing animation - subtle liquid breathing effect
 */
export function breathing(node: Element, config: { intensity?: number; speed?: number } = {}) {
	const { intensity = 0.02, speed = 3000 } = config;
	
	let animationId: number;
	const startTime = Date.now();
	
	function animate() {
		const elapsed = Date.now() - startTime;
		const progress = (elapsed % speed) / speed;
		const breathe = Math.sin(progress * Math.PI * 2) * intensity;
		
		const scale = 1 + breathe;
		const radiusVariation = breathe * 5;
		
		node.style.transform = `scale(${scale}) translateZ(0)`;
		node.style.borderRadius = `${8 + radiusVariation}px`;
		
		animationId = requestAnimationFrame(animate);
	}
	
	animate();
	
	return {
		destroy() {
			cancelAnimationFrame(animationId);
		}
	};
}