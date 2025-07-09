export interface SpringConfig {
	tension: number;
	friction: number;
	mass?: number;
	velocity?: number;
	precision?: number;
}

export const SPRING_PRESETS = {
	noWobble: { tension: 170, friction: 26 },
	gentle: { tension: 120, friction: 14 },
	wobbly: { tension: 180, friction: 12 },
	stiff: { tension: 210, friction: 20 },
	slow: { tension: 280, friction: 60 },
	molasses: { tension: 280, friction: 120 }
} as const;

export class SpringPhysics {
	private position: number = 0;
	private velocity: number;
	private tension: number;
	private friction: number;
	private mass: number;
	private precision: number;

	constructor(config: SpringConfig) {
		this.tension = config.tension;
		this.friction = config.friction;
		this.mass = config.mass ?? 1;
		this.velocity = config.velocity ?? 0;
		this.precision = config.precision ?? 0.01;
	}

	update(target: number, deltaTime: number): number {
		const force = -this.tension * (this.position - target);
		const damping = -this.friction * this.velocity;
		const acceleration = (force + damping) / this.mass;

		this.velocity += acceleration * deltaTime;
		this.position += this.velocity * deltaTime;

		return this.position;
	}

	setPosition(position: number): void {
		this.position = position;
	}

	setVelocity(velocity: number): void {
		this.velocity = velocity;
	}

	isSettled(target: number): boolean {
		return Math.abs(this.position - target) < this.precision && Math.abs(this.velocity) < this.precision;
	}
}

export class Spring2D {
	private springX: SpringPhysics;
	private springY: SpringPhysics;

	constructor(config: SpringConfig) {
		this.springX = new SpringPhysics(config);
		this.springY = new SpringPhysics(config);
	}

	update(target: { x: number; y: number }, deltaTime: number): { x: number; y: number } {
		return {
			x: this.springX.update(target.x, deltaTime),
			y: this.springY.update(target.y, deltaTime)
		};
	}

	setPosition(position: { x: number; y: number }): void {
		this.springX.setPosition(position.x);
		this.springY.setPosition(position.y);
	}

	setVelocity(velocity: { x: number; y: number }): void {
		this.springX.setVelocity(velocity.x);
		this.springY.setVelocity(velocity.y);
	}

	isSettled(target: { x: number; y: number }): boolean {
		return this.springX.isSettled(target.x) && this.springY.isSettled(target.y);
	}
}

// Svelte action for spring animations
export function springAnimation(
	node: HTMLElement,
	config: { spring: SpringConfig; target?: { x: number; y: number } } = { spring: SPRING_PRESETS.gentle }
) {
	const spring = new Spring2D(config.spring);
	let animationId: number;
	let lastTime = performance.now();

	const animate = (currentTime: number) => {
		const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
		lastTime = currentTime;

		if (config.target) {
			const position = spring.update(config.target, deltaTime);
			node.style.transform = `translate(${position.x}px, ${position.y}px)`;

			if (!spring.isSettled(config.target)) {
				animationId = requestAnimationFrame(animate);
			}
		}
	};

	return {
		update(newConfig: typeof config) {
			config = newConfig;
			if (config.target) {
				animationId = requestAnimationFrame(animate);
			}
		},
		destroy() {
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
		}
	};
}
