import { DURATIONS, EASINGS, BLUR_LEVELS, OPACITY_LEVELS } from './tokens';
/**
 * Liquid blur transition with smooth backdrop-filter animation
 * Mimics liquid glass morphing effect
 */
export function liquidBlurTransition(
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
 * Liquid blur action for use with use: directive
 * Applies persistent liquid blur effect
 */
export function liquidBlur(
	node,
	{
		duration = DURATIONS.moderate,
		easing = EASINGS.liquid,
		blur = 'md',
		opacity = 'medium',
		scale = 1.02,
		intensity = 'medium'
	} = {}
) {
	const htmlNode = node;
	function applyLiquidBlur() {
		const effectiveOpacity = intensity || opacity;
		const blurValue = BLUR_LEVELS[blur] || 8;
		const opacityValue = OPACITY_LEVELS[effectiveOpacity] || 0.5;
		htmlNode.style.backdropFilter = `blur(${blurValue}px) saturate(180%)`;
		htmlNode.style.background = `rgba(255, 255, 255, ${opacityValue})`;
		htmlNode.style.borderColor = `rgba(255, 255, 255, ${opacityValue * 2})`;
		htmlNode.style.boxShadow = `
			0 8px 32px rgba(0, 0, 0, 0.12),
			0 0 32px rgba(255, 255, 255, ${opacityValue * 0.3})
		`;
		htmlNode.style.transition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
	}
	// Apply effect immediately
	applyLiquidBlur();
	return {
		update(newOptions) {
			const updated = { duration, easing, blur, opacity, scale, intensity, ...newOptions };
			({ duration, easing, blur, opacity, scale, intensity } = updated);
			applyLiquidBlur();
		},
		destroy() {
			// Reset styles
			htmlNode.style.backdropFilter = '';
			htmlNode.style.background = '';
			htmlNode.style.borderColor = '';
			htmlNode.style.boxShadow = '';
			htmlNode.style.transition = '';
		}
	};
}
/**
 * Reverse liquid blur transition for out animations
 */
export function liquidBlurOut(node, options = {}) {
	const transition = liquidBlurTransition(node, options);
	return {
		...transition,
		css: (t) => {
			// Reverse the progress for out transition
			const reverseT = 1 - t;
			return transition.css?.(reverseT) || '';
		}
	};
}
