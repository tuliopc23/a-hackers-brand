/**
 * A Hacker's Brand - Responsive Utilities
 * Utilities for handling responsive design and breakpoints
 */

/**
 * Breakpoint definitions matching Tailwind CSS defaults
 */
export const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
};

/**
 * Creates a responsive utility for handling different breakpoints
 * @param {Object} values - Object with breakpoint keys and values
 * @returns {string} CSS classes for responsive behavior
 */
export function responsive(values) {
    if (typeof values === 'string') {
        return values;
    }

    let classes = [];

    // Base value (no prefix)
    if (values.base) {
        classes.push(values.base);
    }

    // Responsive values
    Object.entries(values).forEach(([breakpoint, value]) => {
        if (breakpoint !== 'base' && value) {
            classes.push(`${breakpoint}:${value}`);
        }
    });

    return classes.join(' ');
}

/**
 * Media query helper for JavaScript
 * @param {string} breakpoint - Breakpoint name
 * @returns {MediaQueryList} Media query list object
 */
export function mediaQuery(breakpoint) {
    if (typeof window === 'undefined') {
        return { matches: false, addEventListener: () => { }, removeEventListener: () => { } };
    }

    const bp = breakpoints[breakpoint];
    if (!bp) {
        throw new Error(`Unknown breakpoint: ${breakpoint}`);
    }

    return window.matchMedia(`(min-width: ${bp})`);
}

/**
 * Hook for reactive breakpoint detection
 * @param {string} breakpoint - Breakpoint to watch
 * @returns {boolean} Whether the breakpoint matches
 */
export function useBreakpoint(breakpoint) {
    if (typeof window === 'undefined') {
        return false;
    }

    const mq = mediaQuery(breakpoint);
    let matches = $state(mq.matches);

    $effect(() => {
        const handler = (e) => {
            matches = e.matches;
        };

        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    });

    return matches;
}

/**
 * Get current active breakpoint
 * @returns {string} Current breakpoint name
 */
export function getCurrentBreakpoint() {
    if (typeof window === 'undefined') {
        return 'base';
    }

    const width = window.innerWidth;

    if (width >= 1536) return '2xl';
    if (width >= 1280) return 'xl';
    if (width >= 1024) return 'lg';
    if (width >= 768) return 'md';
    if (width >= 640) return 'sm';

    return 'base';
} 