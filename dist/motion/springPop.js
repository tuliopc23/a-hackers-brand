import { DURATIONS, EASINGS, TRANSFORMS } from './tokens.js';
/**
 * Spring pop transition with elastic bounce effect
 * Creates playful spring-loaded animations
 */
export function springPop(
	node,
	{ duration = DURATIONS.moderate, easing = EASINGS.spring, scale = 1.1, rotation = 0, bounce = true, stagger = 0 } = {}
) {
	const htmlNode = node;
	const initialStyle = getComputedStyle(htmlNode);
	const initialOpacity = parseFloat(initialStyle.opacity || '1');
	const initialScale = parseFloat(initialStyle.transform.match(/scale\(([^)]+)\)/)?.[1] || '1');
	// Add stagger delay if specified
	const totalDuration = duration + stagger;
	return {
		duration: totalDuration,
		easing,
		css: (t) => {
			// Apply stagger delay
			const progress = Math.max(0, Math.min(1, (t * totalDuration - stagger) / duration));
			if (progress <= 0) {
				return `
					opacity: 0;
					transform: scale(0.8) rotate(0deg);
				`;
			}
			let currentScale;
			let currentRotation;
			if (bounce && progress > 0) {
				// Create bouncy effect using elastic easing
				const bounceT = progress;
				const elasticEase =
					bounceT === 0
						? 0
						: bounceT === 1
							? 1
							: Math.pow(2, -10 * bounceT) * Math.sin(((bounceT - 0.1) * (2 * Math.PI)) / 0.4) + 1;
				currentScale = initialScale + (scale - initialScale) * elasticEase;
				currentRotation = rotation * elasticEase;
			} else {
				// Simple linear interpolation without bounce
				currentScale = initialScale + (scale - initialScale) * progress;
				currentRotation = rotation * progress;
			}
			const currentOpacity = initialOpacity * progress;
			return `
				opacity: ${currentOpacity};
				transform: scale(${currentScale}) rotate(${currentRotation}deg);
				transform-origin: center center;
			`;
		}
	};
}
/**
 * Spring pop out transition
 */
export function springPopOut(node, options = {}) {
	const { stagger = 0, ...restOptions } = options;
	const transition = springPop(node, { ...restOptions, stagger: 0 });
	return {
		...transition,
		css: (t) => {
			// Reverse the progress for out transition
			const reverseT = 1 - t;
			return transition.css(reverseT);
		}
	};
}
/**
 * Staggered spring pop for multiple elements
 */
export function createStaggeredSpringPop(baseDelay = 50) {
	return (node, options = {}) => {
		// Get the element's index for stagger calculation
		const parent = node.parentElement;
		const siblings = parent ? Array.from(parent.children) : [node];
		const index = siblings.indexOf(node);
		return springPop(node, {
			...options,
			stagger: index * baseDelay
		});
	};
}
/**
 * Chain spring pop animations for sequential reveals
 */
export function chainSpringPop(nodes, options = {}, chainDelay = 100) {
	return nodes.map((node, index) =>
		springPop(node, {
			...options,
			stagger: index * chainDelay
		})
	);
}
