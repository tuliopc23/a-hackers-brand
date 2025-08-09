/**
 * Theme-Aware Border Radius Utility
 *
 * Provides automatic border radius selection based on current theme
 * without requiring manual variant selection in components.
 */
import type { SystemThemeType } from '../stores/theme.js';
export type RadiusSize = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full';
export type ComponentType = 'button' | 'card' | 'modal' | 'input' | 'avatar' | 'badge';
export type ComponentSize = 'sm' | 'md' | 'lg' | 'xl' | 'pill' | 'full';
/**
 * Get theme-specific border radius value
 */
export declare function getThemeRadius(theme: SystemThemeType, size: RadiusSize): string;
/**
 * Get semantic component radius (uses CSS custom properties)
 */
export declare function getComponentRadius(component: ComponentType, size: ComponentSize): string;
/**
 * Generate CSS custom properties for current theme
 */
export declare function generateRadiusCSSProperties(theme: SystemThemeType): Record<string, string>;
/**
 * Get Tailwind CSS class for theme-aware radius
 */
export declare function getRadiusClass(size: RadiusSize): string;
/**
 * Get component-specific Tailwind CSS class
 */
export declare function getComponentRadiusClass(component: ComponentType, size: ComponentSize): string;
/**
 * Theme-aware radius utilities for specific use cases
 */
export declare const radiusUtils: {
    /**
     * Get appropriate radius for buttons based on size
     */
    button: (size?: "sm" | "md" | "lg" | "xl") => string;
    /**
     * Get appropriate radius for cards based on size
     */
    card: (size?: "sm" | "md" | "lg" | "xl") => string;
    /**
     * Get appropriate radius for modals based on size
     */
    modal: (size?: "sm" | "md" | "lg" | "xl") => string;
    /**
     * Get appropriate radius for inputs based on size
     */
    input: (size?: "sm" | "md" | "lg" | "xl") => string;
    /**
     * Get appropriate radius for avatars based on size
     */
    avatar: (size?: "sm" | "md" | "lg" | "xl" | "full") => string;
    /**
     * Get appropriate radius for badges based on size
     */
    badge: (size?: "sm" | "md" | "lg" | "pill") => string;
};
/**
 * Motion-compatible radius values for animations
 */
export declare function getMotionRadius(theme: SystemThemeType, component: ComponentType, size: ComponentSize): string;
/**
 * Utility to convert CSS custom property to pixel value for JavaScript
 */
export declare function resolveRadiusValue(value: string, theme: SystemThemeType): string;
/**
 * Default radius configurations for common use cases
 */
export declare const defaultRadius: {
    readonly interactive: {
        readonly button: "var(--radius-md)";
        readonly link: "var(--radius-sm)";
        readonly tab: "var(--radius-md)";
    };
    readonly container: {
        readonly card: "var(--radius-xl)";
        readonly modal: "var(--radius-2xl)";
        readonly dialog: "var(--radius-2xl)";
        readonly popover: "var(--radius-lg)";
    };
    readonly form: {
        readonly input: "var(--radius-md)";
        readonly select: "var(--radius-md)";
        readonly textarea: "var(--radius-md)";
        readonly checkbox: "var(--radius-sm)";
    };
    readonly display: {
        readonly avatar: "var(--radius-md)";
        readonly badge: "var(--radius-sm)";
        readonly image: "var(--radius-lg)";
        readonly video: "var(--radius-lg)";
    };
};
export default radiusUtils;
