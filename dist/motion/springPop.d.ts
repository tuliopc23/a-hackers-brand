export interface SpringPopOptions {
	duration?: number;
	easing?: (t: number) => number;
	scale?: number;
	rotation?: number;
	bounce?: boolean;
	stagger?: number;
}
/**
 * Spring pop transition with elastic bounce effect
 * Creates playful spring-loaded animations
 */
export declare function springPop(
	node: Element,
	{ duration, easing, scale, rotation, bounce, stagger }?: SpringPopOptions
): {
	duration: number;
	easing: (t: number) => number;
	css: (t: number) => string;
};
/**
 * Spring pop out transition
 */
export declare function springPopOut(
	node: Element,
	options?: SpringPopOptions
): {
	css: (t: number) => string;
	duration: number;
	easing: (t: number) => number;
};
/**
 * Staggered spring pop for multiple elements
 */
export declare function createStaggeredSpringPop(baseDelay?: number): (
	node: Element,
	options?: SpringPopOptions
) => {
	duration: number;
	easing: (t: number) => number;
	css: (t: number) => string;
};
/**
 * Chain spring pop animations for sequential reveals
 */
export declare function chainSpringPop(
	nodes: Element[],
	options?: SpringPopOptions,
	chainDelay?: number
): {
	duration: number;
	easing: (t: number) => number;
	css: (t: number) => string;
}[];
