/**
 * Motion System Tokens
 * Centralized animation constants for the Tulio Brand System
 */

export const DURATIONS = {
	instant: 0,
	fast: 150,
	moderate: 300,
	slow: 500,
	slowest: 800
} as const;

export const EASINGS = {
	glass: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
	liquid: 'cubic-bezier(0.23, 1, 0.32, 1)',
	spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
	terminal: 'cubic-bezier(0.4, 0, 0.2, 1)',
	elastic: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
	bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
} as const;

export const TRANSFORMS = {
	scale: {
		hover: 1.02,
		active: 0.98,
		press: 0.95
	},
	translate: {
		hover: -2,
		lift: -4,
		pop: -8
	}
} as const;

export const BLUR_LEVELS = {
	sm: 4,
	md: 8,
	lg: 16,
	xl: 24,
	'2xl': 40
} as const;

export const OPACITY_LEVELS = {
	subtle: 0.05,
	light: 0.1,
	medium: 0.15,
	strong: 0.2,
	bold: 0.25
} as const;
