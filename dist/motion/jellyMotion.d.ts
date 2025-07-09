/**
 * Jelly Motion System
 * Liquid, jelly-like animations with dynamic responsiveness
 */
import { EASINGS } from './tokens.js';
import type { TransitionConfig } from 'svelte/transition';
export interface JellyConfig {
	duration?: number;
	easing?: keyof typeof EASINGS;
	scale?: number;
	borderRadius?: string;
	blur?: number;
	elasticity?: number;
	responsiveness?: 'subtle' | 'medium' | 'strong';
}
export interface LiquidJellyConfig extends JellyConfig {
	liquidIntensity?: number;
	morphStrength?: number;
	flowDirection?: 'up' | 'down' | 'left' | 'right' | 'center';
}
/**
 * Jelly transition - creates a bouncy, elastic entrance/exit
 */
export declare function jelly(node: Element, config?: JellyConfig): TransitionConfig;
/**
 * Liquid jelly transition - more fluid, organic motion
 */
export declare function liquidJelly(node: Element, config?: LiquidJellyConfig): TransitionConfig;
/**
 * Jelly hover action - adds dynamic jelly effects on hover
 */
export declare function jellyHover(
	node: Element,
	config?: JellyConfig
): {
	destroy(): void;
};
/**
 * Liquid responsiveness action - makes elements respond like liquid to interactions
 */
export declare function liquidResponsive(
	node: Element,
	config?: LiquidJellyConfig
): {
	destroy(): void;
};
/**
 * Breathing animation - subtle liquid breathing effect
 */
export declare function breathing(
	node: Element,
	config?: {
		intensity?: number;
		speed?: number;
	}
): {
	destroy(): void;
};
