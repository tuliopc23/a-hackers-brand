export interface RippleConfig {
	color?: string;
	duration?: number;
	size?: number;
	opacity?: number;
}

export function createGlassRipple(
	element: HTMLElement,
	x: number,
	y: number,
	config: RippleConfig = {}
): HTMLDivElement {
	const { color = 'rgba(255, 255, 255, 0.4)', duration = 600, size = 20, opacity = 0.6 } = config;

	const ripple = document.createElement('div');
	ripple.className = 'glass-ripple';

	// Set initial styles
	Object.assign(ripple.style, {
		position: 'absolute',
		left: `${x - size / 2}px`,
		top: `${y - size / 2}px`,
		width: `${size}px`,
		height: `${size}px`,
		borderRadius: '50%',
		background: color,
		transform: 'scale(0)',
		opacity: opacity.toString(),
		pointerEvents: 'none',
		zIndex: '1000'
	});

	// Add to element
	element.appendChild(ripple);

	// Animate
	const animation = ripple.animate(
		[
			{
				transform: 'scale(0)',
				opacity: opacity
			},
			{
				transform: 'scale(4)',
				opacity: 0
			}
		],
		{
			duration,
			easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
		}
	);

	// Cleanup
	animation.addEventListener('finish', () => {
		ripple.remove();
	});

	return ripple;
}

// Svelte action for glass ripple effect
export function glassRipple(node: HTMLElement, config: RippleConfig = {}) {
	const handleClick = (e: MouseEvent) => {
		const rect = node.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		createGlassRipple(node, x, y, config);
	};

	node.addEventListener('click', handleClick);

	// Ensure the element has relative positioning for absolute ripples
	if (getComputedStyle(node).position === 'static') {
		node.style.position = 'relative';
	}

	// Ensure overflow is hidden to contain ripples
	node.style.overflow = 'hidden';

	return {
		destroy() {
			node.removeEventListener('click', handleClick);
		},
		update(newConfig: RippleConfig) {
			// Handle config updates if needed
		}
	};
}

// Utility to create ripple on any element
export function addRippleToElement(element: HTMLElement, config?: RippleConfig) {
	return glassRipple(element, config);
}
