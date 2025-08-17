import type { SystemThemeType } from '../stores/theme.js';
export type ThemeAwareVariant = 'auto' | 'theme' | string;
/**
 * Get the current theme type from the theme store
 */
export declare function getCurrentTheme(): SystemThemeType;
/**
 * Check if the current theme is terminal
 */
export declare function isTerminalTheme(): boolean;
/**
 * Check if the current theme is bubble tea
 */
export declare function isBubbleTeaTheme(): boolean;
/**
 * Get theme-specific variant classes for buttons
 */
export declare function getThemeAwareButtonVariant(variant: ThemeAwareVariant): string;
/**
 * Get theme-specific variant classes for cards
 */
export declare function getThemeAwareCardVariant(variant: ThemeAwareVariant): string;
/**
 * Get theme-specific border radius classes
 */
export declare function getThemeAwareBorderRadius(variant: ThemeAwareVariant, size?: string): string;
/**
 * Get theme-specific input variant classes
 */
export declare function getThemeAwareInputVariant(variant: ThemeAwareVariant): string;
/**
 * Get theme-specific badge variant classes
 */
export declare function getThemeAwareBadgeVariant(variant: ThemeAwareVariant): string;
/**
 * Get theme-specific focus ring classes
 */
export declare function getThemeAwareFocusRing(): string;
/**
 * Get theme-specific text colors for different semantic meanings
 */
export declare function getThemeAwareTextColor(semantic?: 'primary' | 'secondary' | 'accent' | 'muted'): string;
/**
 * Reactive theme-aware variant resolver that works with Svelte's reactivity
 * Use this in components with $derived for automatic updates
 */
export declare function createThemeAwareVariant<T extends string>(explicitVariant: T | 'auto' | 'theme', variantMap: Record<SystemThemeType, T>, defaultVariant: T): {
    readonly variant: T;
};
