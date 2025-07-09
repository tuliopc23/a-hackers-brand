import { DURATIONS, EASINGS, OPACITY_LEVELS } from './tokens.js';

import type { TransitionConfig } from 'svelte/transition';

export interface GlassFadeOptions {
	duration?: number;
	easing?: (t: number) => number;
	opacity?: keyof typeof OPACITY_LEVELS;
	direction?: 'up' | 'down' | 'left' | 'right' | 'center';
	distance?: number;
	delay?: number;
}

/**
 * Glass fade transition with directional slide
 * Creates elegant glass panel sliding effects
 */
export function glassFade(
	node: Element,
	{
		duration = DURATIONS.moderate,
		easing = (t: number) => t,
		opacity = 'medium',
		direction = 'up',
		distance = 20
	}: GlassFadeOptions = {}
): TransitionConfig {
	const htmlNode = node as HTMLElement;
	const initialStyle = getComputedStyle(htmlNode);
	const initialOpacity = parseFloat(initialStyle.opacity || '1');

	// Calculate transform values based on direction
	const getTransform = (progress: number) => {
		const moveDistance = distance * (1 - progress);

		switch (direction) {
			case 'up':
				return `translateY(${moveDistance}px)`;
			case 'down':
				return `translateY(-${moveDistance}px)`;
			case 'left':
				return `translateX(${moveDistance}px)`;
			case 'right':
				return `translateX(-${moveDistance}px)`;
			case 'center':
				return `scale(${0.8 + 0.2 * progress})`;
			default:
				return `translateY(${moveDistance}px)`;
		}
	};

	return {
		duration,
		easing,
		css: (t: number) => {
			const currentOpacity = initialOpacity * t;
			const glassOpacity = OPACITY_LEVELS[opacity] * t;
			const transform = getTransform(t);

			return `
				opacity: ${currentOpacity};
				transform: ${transform};
				background: rgba(255, 255, 255, ${glassOpacity});
				backdrop-filter: blur(${8 * t}px) saturate(${100 + t * 50}%);
				border-color: rgba(255, 255, 255, ${glassOpacity * 2});
				box-shadow: 
					0 ${4 * t}px ${12 * t}px rgba(0, 0, 0, ${0.08 * t}),
					0 ${2 * t}px ${4 * t}px rgba(0, 0, 0, ${0.04 * t});
			`;
		}
	};
}

/**
 * Glass fade out transition
 */
export function glassFadeOut(node: Element, options: GlassFadeOptions = {}): TransitionConfig {
	const transition = glassFade(node, options);

	return {
		...transition,
		css: (t: number) => {
			// Reverse the progress and invert direction for out transition
			const reverseT = 1 - t;
			const reverseOptions: GlassFadeOptions = {
				...options,
				direction:
					options.direction === 'up'
						? ('down' as const)
						: options.direction === 'down'
							? ('up' as const)
							: options.direction === 'left'
								? ('right' as const)
								: ('left' as const)
			};

			const reverseTransition = glassFade(node, reverseOptions);
			return reverseTransition.css?.(reverseT, 1) || '';
		}
	};
}
