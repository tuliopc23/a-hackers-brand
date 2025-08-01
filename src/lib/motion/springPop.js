import { DURATIONS, EASINGS, TRANSFORMS } from './tokens';
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
/**
 * Spring pop action for use with use: directive
 * Provides interactive spring animations on user interactions
 */
export function springPopAction(
	node,
	{
		enabled = true,
		trigger = 'hover',
		duration = DURATIONS.moderate,
		easing = EASINGS.spring,
		scale = 1.05,
		rotation = 0,
		bounce = true,
		stagger = 0,
		delay = 0
	} = {}
) {
	if (!enabled) {
		return {
			destroy() {}
		};
	}
	let isAnimating = false;
	const animationId = null;
	let timeoutId = null;
	const originalTransform = node.style.transform;
	const originalTransition = node.style.transition;
	// Set up transition
	node.style.transition = `transform ${duration}ms ${easing.name || 'ease-out'}`;
	node.style.transformOrigin = 'center center';
	function animate(direction) {
		if (isAnimating) return;
		isAnimating = true;
		// Clear any existing timeout
		if (timeoutId) {
			clearTimeout(timeoutId);
			timeoutId = null;
		}
		// Apply delay if specified
		const executeAnimation = () => {
			if (direction === 'in') {
				const scaleValue = bounce ? scale * 1.1 : scale;
				node.style.transform = `scale(${scaleValue}) rotate(${rotation}deg)`;
				if (bounce) {
					// Create bounce effect
					setTimeout(() => {
						node.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
					}, duration * 0.3);
				}
			} else {
				node.style.transform = originalTransform;
			}
		};
		if (delay > 0) {
			timeoutId = setTimeout(executeAnimation, delay);
		} else {
			executeAnimation();
		}
		// Reset animation state
		setTimeout(() => {
			isAnimating = false;
		}, duration + delay);
	}
	function handleInteraction(event) {
		if (event.type === 'mouseenter' || event.type === 'focusin') {
			animate('in');
		} else if (event.type === 'mouseleave' || event.type === 'focusout') {
			animate('out');
		} else if (event.type === 'click') {
			animate('in');
			setTimeout(() => animate('out'), duration * 0.5);
		}
	}
	// Add event listeners based on trigger
	if (trigger === 'hover') {
		node.addEventListener('mouseenter', handleInteraction);
		node.addEventListener('mouseleave', handleInteraction);
	} else if (trigger === 'click') {
		node.addEventListener('click', handleInteraction);
	} else if (trigger === 'focus') {
		node.addEventListener('focusin', handleInteraction);
		node.addEventListener('focusout', handleInteraction);
	}
	return {
		update(newOptions) {
			// Update options
			if (newOptions.enabled !== undefined) enabled = newOptions.enabled;
			if (newOptions.trigger !== undefined) trigger = newOptions.trigger;
			if (newOptions.duration !== undefined) duration = newOptions.duration;
			if (newOptions.scale !== undefined) scale = newOptions.scale;
			if (newOptions.rotation !== undefined) rotation = newOptions.rotation;
			if (newOptions.bounce !== undefined) bounce = newOptions.bounce;
			if (newOptions.delay !== undefined) delay = newOptions.delay;
			// Update transition
			node.style.transition = `transform ${duration}ms ${easing.name || 'ease-out'}`;
		},
		destroy() {
			// Clean up
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
			// Remove event listeners
			node.removeEventListener('mouseenter', handleInteraction);
			node.removeEventListener('mouseleave', handleInteraction);
			node.removeEventListener('click', handleInteraction);
			node.removeEventListener('focusin', handleInteraction);
			node.removeEventListener('focusout', handleInteraction);
			// Reset styles
			node.style.transform = originalTransform;
			node.style.transition = originalTransition;
		}
	};
}
