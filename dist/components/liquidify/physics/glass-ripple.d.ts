export interface RippleConfig {
	color?: string;
	duration?: number;
	size?: number;
	opacity?: number;
}
export declare function createGlassRipple(
	element: HTMLElement,
	x: number,
	y: number,
	config?: RippleConfig
): HTMLDivElement;
export declare function glassRipple(
	node: HTMLElement,
	config?: RippleConfig
): {
	destroy(): void;
	update(newConfig: RippleConfig): void;
};
export declare function addRippleToElement(
	element: HTMLElement,
	config?: RippleConfig
): {
	destroy(): void;
	update(newConfig: RippleConfig): void;
};
