/**
 * Motion System Tokens
 * Centralized animation constants for the Tulio Brand System
 */
export declare const DURATIONS: {
	readonly instant: 0;
	readonly fast: 150;
	readonly moderate: 300;
	readonly slow: 500;
	readonly slowest: 800;
};
export declare const EASING_CSS: {
	readonly glass: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
	readonly liquid: 'cubic-bezier(0.23, 1, 0.32, 1)';
	readonly spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)';
	readonly terminal: 'cubic-bezier(0.4, 0, 0.2, 1)';
	readonly elastic: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)';
	readonly bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';
	readonly jelly: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)';
	readonly jellyBounce: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)';
	readonly liquidJelly: 'cubic-bezier(0.34, 1.56, 0.64, 1)';
};
export declare const EASINGS: {
	readonly glass: (t: number) => number;
	readonly liquid: (t: number) => number;
	readonly spring: (t: number) => number;
	readonly terminal: (t: number) => number;
	readonly elastic: (t: number) => number;
	readonly bounce: (t: number) => number;
	readonly jelly: (t: number) => number;
	readonly liquidJelly: (t: number) => number;
};
export declare const TRANSFORMS: {
	readonly scale: {
		readonly hover: 1.02;
		readonly active: 0.98;
		readonly press: 0.95;
		readonly jellyHover: 1.05;
		readonly jellyPress: 0.92;
		readonly liquidExpand: 1.08;
	};
	readonly translate: {
		readonly hover: -2;
		readonly lift: -4;
		readonly pop: -8;
		readonly jellyBounce: -6;
		readonly liquidFloat: -3;
	};
	readonly borderRadius: {
		readonly normal: '8px';
		readonly hover: '12px';
		readonly active: '16px';
		readonly jelly: '20px';
		readonly liquid: '24px';
		readonly blob: '50%';
	};
};
export declare const BLUR_LEVELS: {
	readonly sm: 4;
	readonly md: 8;
	readonly lg: 16;
	readonly xl: 24;
	readonly '2xl': 40;
};
export declare const OPACITY_LEVELS: {
	readonly subtle: 0.05;
	readonly light: 0.1;
	readonly medium: 0.15;
	readonly strong: 0.2;
	readonly bold: 0.25;
};
