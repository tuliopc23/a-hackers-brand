/**
 * A Hacker's Brand - Utility Functions
 * Barrel export for all utility functions
 */

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines clsx and tailwind-merge for optimal className handling
 * @param {...any} inputs - Class names to merge
 * @returns {string} Merged class names
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

// Re-export other utilities
export * from './lazy.js';
export * from './search.js';
export * from './responsive.js';
export * from './bundle-size.js'; 