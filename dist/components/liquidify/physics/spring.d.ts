export interface SpringConfig {
	tension: number;
	friction: number;
	mass?: number;
	velocity?: number;
	precision?: number;
}
export declare const SPRING_PRESETS: {
	readonly noWobble: {
		readonly tension: 170;
		readonly friction: 26;
	};
	readonly gentle: {
		readonly tension: 120;
		readonly friction: 14;
	};
	readonly wobbly: {
		readonly tension: 180;
		readonly friction: 12;
	};
	readonly stiff: {
		readonly tension: 210;
		readonly friction: 20;
	};
	readonly slow: {
		readonly tension: 280;
		readonly friction: 60;
	};
	readonly molasses: {
		readonly tension: 280;
		readonly friction: 120;
	};
};
export declare class SpringPhysics {
	private position;
	private velocity;
	private tension;
	private friction;
	private mass;
	private precision;
	constructor(config: SpringConfig);
	update(target: number, deltaTime: number): number;
	setPosition(position: number): void;
	setVelocity(velocity: number): void;
	isSettled(target: number): boolean;
}
export declare class Spring2D {
	private springX;
	private springY;
	constructor(config: SpringConfig);
	update(
		target: {
			x: number;
			y: number;
		},
		deltaTime: number
	): {
		x: number;
		y: number;
	};
	setPosition(position: { x: number; y: number }): void;
	setVelocity(velocity: { x: number; y: number }): void;
	isSettled(target: { x: number; y: number }): boolean;
}
export declare function springAnimation(
	node: HTMLElement,
	config?: {
		spring: SpringConfig;
		target?: {
			x: number;
			y: number;
		};
	}
): {
	update(newConfig: typeof config): void;
	destroy(): void;
};
