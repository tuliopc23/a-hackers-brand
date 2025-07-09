import { DURATIONS, EASINGS, BLUR_LEVELS, OPACITY_LEVELS } from './tokens.js';
/**
 * Liquid blur transition with smooth backdrop-filter animation
 * Mimics liquid glass morphing effect
 */
export function liquidBlur(
	node,
	{ duration = DURATIONS.moderate, easing = EASINGS.liquid, blur = 'md', opacity = 'medium', scale = 1.02 } = {}
) {
	const htmlNode = node;
	const initialStyle = getComputedStyle(htmlNode);
	const initialBlur = parseFloat((initialStyle.backdropFilter || '').match(/blur\((\d+)px\)/)?.[1] || '0');
	const initialOpacity = parseFloat(initialStyle.opacity || '1');
	const initialScale = parseFloat((initialStyle.transform || '').match(/scale\(([^)]+)\)/)?.[1] || '1');
	return {
		duration,
		easing,
		css: (t) => {
			const currentBlur = initialBlur + (BLUR_LEVELS[blur] - initialBlur) * t;
			const currentOpacity = initialOpacity + (OPACITY_LEVELS[opacity] - initialOpacity) * t;
			const currentScale = initialScale + (scale - initialScale) * t;
			return `
				backdrop-filter: blur(${currentBlur}px) saturate(${100 + t * 80}%);
				opacity: ${currentOpacity};
				transform: scale(${currentScale});
				background: rgba(255, 255, 255, ${OPACITY_LEVELS[opacity] * t});
				border-color: rgba(255, 255, 255, ${OPACITY_LEVELS[opacity] * 2 * t});
				box-shadow: 
					0 ${4 + t * 8}px ${16 + t * 16}px rgba(0, 0, 0, ${0.1 + t * 0.1}),
					0 0 ${20 * t}px rgba(255, 255, 255, ${0.2 * t});
			`;
		}
	};
}
/**
 * Reverse liquid blur transition for out animations
 */
export function liquidBlurOut(node, options = {}) {
	const transition = liquidBlur(node, options);
	return {
		...transition,
		css: (t) => {
			// Reverse the progress for out transition
			const reverseT = 1 - t;
			return transition.css(reverseT);
		}
	};
}
