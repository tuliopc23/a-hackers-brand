import { writable } from 'svelte/store';

export interface Vector2D {
	x: number;
	y: number;
}

export interface MagneticConfig {
	strength?: number;
	radius?: number;
	ease?: string;
	duration?: number;
}

export function createMagneticHover(config: MagneticConfig = {}) {
	const { strength = 0.3, radius = 100, ease = 'cubic-bezier(0.23, 1, 0.32, 1)', duration = 400 } = config;

	const transform = writable('translate(0px, 0px)');
	let element: HTMLElement | null = null;

	const handleMouseMove = (e: MouseEvent) => {
		if (!element) return;

		const rect = element.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		const deltaX = e.clientX - centerX;
		const deltaY = e.clientY - centerY;
		const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

		if (distance < radius) {
			const factor = (radius - distance) / radius;
			const moveX = deltaX * strength * factor;
			const moveY = deltaY * strength * factor;

			transform.set(`translate(${moveX}px, ${moveY}px)`);
		} else {
			transform.set('translate(0px, 0px)');
		}
	};

	const handleMouseLeave = () => {
		transform.set('translate(0px, 0px)');
	};

	const bind = (node: HTMLElement) => {
		element = node;
		node.style.transition = `transform ${duration}ms ${ease}`;

		node.addEventListener('mousemove', handleMouseMove);
		node.addEventListener('mouseleave', handleMouseLeave);

		return {
			destroy() {
				node.removeEventListener('mousemove', handleMouseMove);
				node.removeEventListener('mouseleave', handleMouseLeave);
			}
		};
	};

	return {
		transform,
		bind,
		handleMouseMove,
		handleMouseLeave
	};
}

// Action for use with Svelte's use: directive
export function magneticHover(node: HTMLElement, config: MagneticConfig = {}) {
	const magnetic = createMagneticHover(config);

	const unsubscribe = magnetic.transform.subscribe((transformValue) => {
		node.style.transform = transformValue;
	});

	node.addEventListener('mousemove', magnetic.handleMouseMove);
	node.addEventListener('mouseleave', magnetic.handleMouseLeave);

	return {
		destroy() {
			unsubscribe();
			node.removeEventListener('mousemove', magnetic.handleMouseMove);
			node.removeEventListener('mouseleave', magnetic.handleMouseLeave);
		},
		update(newConfig: MagneticConfig) {
			// Handle config updates if needed
		}
	};
}
