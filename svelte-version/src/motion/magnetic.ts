import { writable } from 'svelte/store';

// Spring physics configuration
interface SpringConfig {
	stiffness: number;
	damping: number;
	mass: number;
}

// Magnetic effect options
export interface MagneticOptions {
	intensity?: number;
	maxDistance?: number;
	spring?: Partial<SpringConfig>;
}

// Position interface
interface Position {
	x: number;
	y: number;
}

// Spring animation function
export function spring(initialValue: number, config: SpringConfig = { stiffness: 0.15, damping: 0.8, mass: 1 }) {
	const { subscribe, set, update } = writable(initialValue);

	let currentValue = initialValue;
	let targetValue = initialValue;
	let velocity = 0;
	let animationId: number | null = null;

	const animate = () => {
		const stiffness = config.stiffness;
		const damping = config.damping;
		const mass = config.mass;

		const force = -stiffness * (currentValue - targetValue);
		const dampingForce = -damping * velocity;
		const acceleration = (force + dampingForce) / mass;

		velocity += acceleration;
		currentValue += velocity;

		set(currentValue);

		// Continue animation if not settled
		if (Math.abs(velocity) > 0.01 || Math.abs(currentValue - targetValue) > 0.01) {
			animationId = requestAnimationFrame(animate);
		} else {
			animationId = null;
		}
	};

	return {
		subscribe,
		set: (value: number) => {
			targetValue = value;
			if (!animationId) {
				animationId = requestAnimationFrame(animate);
			}
		},
		update: (fn: (value: number) => number) => {
			targetValue = fn(targetValue);
			if (!animationId) {
				animationId = requestAnimationFrame(animate);
			}
		}
	};
}

// Calculate pointer proximity and magnetic force
export function calculatePointerProximity(
	event: MouseEvent,
	element: HTMLElement,
	options: MagneticOptions = {}
): Position {
	const { intensity = 0.5, maxDistance = 100 } = options;

	const rect = element.getBoundingClientRect();
	const elementCenterX = rect.left + rect.width / 2;
	const elementCenterY = rect.top + rect.height / 2;

	// Calculate distance from pointer to element center
	const deltaX = event.clientX - elementCenterX;
	const deltaY = event.clientY - elementCenterY;
	const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

	// Apply magnetic force based on distance (inverse relationship)
	let forceMultiplier = 0;
	if (distance < maxDistance) {
		forceMultiplier = (1 - distance / maxDistance) * intensity;
	}

	return {
		x: deltaX * forceMultiplier * 0.3, // Scale down for smoother effect
		y: deltaY * forceMultiplier * 0.3
	};
}

// Create magnetic effect store
export function createMagneticEffect(options: MagneticOptions = {}) {
	const springConfig: SpringConfig = {
		stiffness: 0.15,
		damping: 0.8,
		mass: 1,
		...options.spring
	};

	const x = spring(0, springConfig);
	const y = spring(0, springConfig);

	const handleMouseMove = (event: MouseEvent, element: HTMLElement) => {
		const position = calculatePointerProximity(event, element, options);
		x.set(position.x);
		y.set(position.y);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return {
		x: { subscribe: x.subscribe },
		y: { subscribe: y.subscribe },
		handleMouseMove,
		handleMouseLeave
	};
}

// Utility function for magnetic hover effect
export function magneticHover(node: HTMLElement, options: MagneticOptions = {}) {
	const magnetic = createMagneticEffect(options);

	let unsubscribeX: (() => void) | undefined;
	let unsubscribeY: (() => void) | undefined;

	const handleMouseMove = (event: MouseEvent) => {
		magnetic.handleMouseMove(event, node);
	};

	const handleMouseLeave = () => {
		magnetic.handleMouseLeave();
	};

	// Subscribe to position changes and apply transforms
	unsubscribeX = magnetic.x.subscribe((x) => {
		node.style.transform = `translate3d(${x}px, ${node.style.transform.match(/translate3d\([^,]+,\s*([^,]+)/)?.[1] || 0}, 0)`;
	});

	unsubscribeY = magnetic.y.subscribe((y) => {
		const currentX = node.style.transform.match(/translate3d\(([^,]+)/)?.[1] || '0px';
		node.style.transform = `translate3d(${currentX}, ${y}px, 0)`;
	});

	// Add event listeners
	node.addEventListener('mousemove', handleMouseMove);
	node.addEventListener('mouseleave', handleMouseLeave);

	return {
		destroy() {
			node.removeEventListener('mousemove', handleMouseMove);
			node.removeEventListener('mouseleave', handleMouseLeave);
			unsubscribeX?.();
			unsubscribeY?.();
		},
		update(newOptions: MagneticOptions) {
			// Update options if needed
			Object.assign(options, newOptions);
		}
	};
}
