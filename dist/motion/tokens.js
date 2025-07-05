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
};
// CSS easing strings for style attributes
export const EASING_CSS = {
    glass: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    liquid: 'cubic-bezier(0.23, 1, 0.32, 1)',
    spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    terminal: 'cubic-bezier(0.4, 0, 0.2, 1)',
    elastic: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
    bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    jelly: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    liquidJelly: 'cubic-bezier(0.23, 1, 0.32, 1.6)'
};
export const EASING_CSS = {
    glass: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    liquid: 'cubic-bezier(0.23, 1, 0.32, 1)',
    spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    terminal: 'cubic-bezier(0.4, 0, 0.2, 1)',
    elastic: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
    bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    jelly: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    liquidJelly: 'cubic-bezier(0.23, 1, 0.32, 1.6)'
};
// Easing functions for Svelte transitions
export const EASINGS = {
    glass: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    liquid: (t) => 1 + (--t) * t * t * t * t,
    spring: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    terminal: (t) => t * t * (3 - 2 * t),
    elastic: (t) => t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t - 0.1) * (2 * Math.PI) / 0.4) + 1,
    bounce: (t) => {
        if (t < 1 / 2.75) {
            return 7.5625 * t * t;
        }
        else if (t < 2 / 2.75) {
            return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
        }
        else if (t < 2.5 / 2.75) {
            return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
        }
        else {
            return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
        }
    }
};
export const TRANSFORMS = {
    scale: {
        hover: 1.02,
        active: 0.98,
        press: 0.95,
        jellyHover: 1.05,
        liquidExpand: 1.08
    },
    translate: {
        hover: -2,
        lift: -4,
        pop: -8
    },
    borderRadius: {
        jelly: '12',
        liquid: '16',
        hover: '8'
    }
};
export const BLUR_LEVELS = {
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
    '2xl': 40
};
export const OPACITY_LEVELS = {
    subtle: 0.05,
    light: 0.1,
    medium: 0.15,
    strong: 0.2,
    bold: 0.25
};
