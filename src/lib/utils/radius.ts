/**
 * Theme-Aware Border Radius Utility
 * 
 * Provides automatic border radius selection based on current theme
 * without requiring manual variant selection in components.
 */

import { borderRadius } from '../tokens/index.js';
import type { SystemThemeType } from '../stores/theme.js';

export type RadiusSize = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full';
export type ComponentType = 'button' | 'card' | 'modal' | 'input' | 'avatar' | 'badge';
export type ComponentSize = 'sm' | 'md' | 'lg' | 'xl' | 'pill' | 'full';

/**
 * Get theme-specific border radius value
 */
export function getThemeRadius(theme: SystemThemeType, size: RadiusSize): string {
    return borderRadius.themes[theme][size];
}

/**
 * Get semantic component radius (uses CSS custom properties)
 */
export function getComponentRadius(component: ComponentType, size: ComponentSize): string {
    const componentRadii = borderRadius.semantic[component];
    if (componentRadii && size in componentRadii) {
        return componentRadii[size as keyof typeof componentRadii];
    }

    // Fallback to base radius if component/size not found
    return `var(--radius-${size})`;
}

/**
 * Generate CSS custom properties for current theme
 */
export function generateRadiusCSSProperties(theme: SystemThemeType): Record<string, string> {
    const themeRadii = borderRadius.themes[theme];
    const properties: Record<string, string> = {};

    // Generate CSS custom properties for each radius size
    Object.entries(themeRadii).forEach(([size, value]) => {
        properties[`--radius-${size}`] = value;
    });

    return properties;
}

/**
 * Get Tailwind CSS class for theme-aware radius
 */
export function getRadiusClass(size: RadiusSize): string {
    return `radius-${size}`;
}

/**
 * Get component-specific Tailwind CSS class
 */
export function getComponentRadiusClass(component: ComponentType, size: ComponentSize): string {
    return `${component}-radius-${size}`;
}

/**
 * Theme-aware radius utilities for specific use cases
 */
export const radiusUtils = {
    /**
     * Get appropriate radius for buttons based on size
     */
    button: (size: 'sm' | 'md' | 'lg' | 'xl' = 'md') => getComponentRadius('button', size),

    /**
     * Get appropriate radius for cards based on size
     */
    card: (size: 'sm' | 'md' | 'lg' | 'xl' = 'md') => getComponentRadius('card', size),

    /**
     * Get appropriate radius for modals based on size
     */
    modal: (size: 'sm' | 'md' | 'lg' | 'xl' = 'md') => getComponentRadius('modal', size),

    /**
     * Get appropriate radius for inputs based on size
     */
    input: (size: 'sm' | 'md' | 'lg' | 'xl' = 'md') => getComponentRadius('input', size),

    /**
     * Get appropriate radius for avatars based on size
     */
    avatar: (size: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'md') => getComponentRadius('avatar', size),

    /**
     * Get appropriate radius for badges based on size
     */
    badge: (size: 'sm' | 'md' | 'lg' | 'pill' = 'md') => getComponentRadius('badge', size)
};

/**
 * Motion-compatible radius values for animations
 */
export function getMotionRadius(theme: SystemThemeType, component: ComponentType, size: ComponentSize): string {
    // For motion effects, we often want pixel values instead of CSS custom properties
    const themeRadii = borderRadius.themes[theme];

    // Map component sizes to radius sizes
    const sizeMap: Record<ComponentSize, RadiusSize> = {
        sm: component === 'card' ? 'lg' : 'sm',
        md: component === 'card' ? 'xl' : 'md',
        lg: component === 'card' ? '2xl' : 'lg',
        xl: component === 'card' ? '3xl' : 'xl',
        pill: 'full',
        full: 'full'
    };

    const radiusSize = sizeMap[size] || 'md';
    return themeRadii[radiusSize];
}

/**
 * Utility to convert CSS custom property to pixel value for JavaScript
 */
export function resolveRadiusValue(value: string, theme: SystemThemeType): string {
    if (value.startsWith('var(--radius-')) {
        const size = value.replace('var(--radius-', '').replace(')', '') as RadiusSize;
        return borderRadius.themes[theme][size];
    }
    return value;
}

/**
 * Default radius configurations for common use cases
 */
export const defaultRadius = {
    // Interactive elements
    interactive: {
        button: 'var(--radius-md)',
        link: 'var(--radius-sm)',
        tab: 'var(--radius-md)'
    },

    // Containers
    container: {
        card: 'var(--radius-xl)',
        modal: 'var(--radius-2xl)',
        dialog: 'var(--radius-2xl)',
        popover: 'var(--radius-lg)'
    },

    // Form elements
    form: {
        input: 'var(--radius-md)',
        select: 'var(--radius-md)',
        textarea: 'var(--radius-md)',
        checkbox: 'var(--radius-sm)'
    },

    // Display elements
    display: {
        avatar: 'var(--radius-md)',
        badge: 'var(--radius-sm)',
        image: 'var(--radius-lg)',
        video: 'var(--radius-lg)'
    }
} as const;

export default radiusUtils;