import { DURATIONS, EASINGS, OPACITY_LEVELS } from './tokens';
/**
 * Glass fade transition with directional slide
 * Creates elegant glass panel sliding effects
 */
export function glassFade(node, { duration = DURATIONS.moderate, easing = (t) => t, opacity = 'medium', direction = 'up', distance = 20 } = {}) {
    const htmlNode = node;
    const initialStyle = getComputedStyle(htmlNode);
    const initialOpacity = parseFloat(initialStyle.opacity || '1');
    // Calculate transform values based on direction
    const getTransform = (progress) => {
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
        css: (t) => {
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
export function glassFadeOut(node, options = {}) {
    const transition = glassFade(node, options);
    return {
        ...transition,
        css: (t) => {
            // Reverse the progress and invert direction for out transition
            const reverseT = 1 - t;
            const reverseOptions = {
                ...options,
                direction: options.direction === 'up'
                    ? 'down'
                    : options.direction === 'down'
                        ? 'up'
                        : options.direction === 'left'
                            ? 'right'
                            : 'left'
            };
            const reverseTransition = glassFade(node, reverseOptions);
            return reverseTransition.css?.(reverseT, 1) || '';
        }
    };
}
