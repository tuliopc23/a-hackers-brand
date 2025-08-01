/**
 * Theme-aware component utilities
 * Provides automatic theme detection and variant selection for components
 */
import { themeConfig } from '../stores/theme.js';
import { get } from 'svelte/store';
import type { SystemThemeType } from '../stores/theme.js';

export type ThemeAwareVariant = 'auto' | 'theme' | string;

/**
 * Get the current theme type from the theme store
 */
export function getCurrentTheme(): SystemThemeType {
    const config = get(themeConfig);
    return config.resolvedTheme;
}

/**
 * Check if the current theme is terminal
 */
export function isTerminalTheme(): boolean {
    return getCurrentTheme() === 'terminal';
}

/**
 * Check if the current theme is bubble tea
 */
export function isBubbleTeaTheme(): boolean {
    return getCurrentTheme() === 'bubbleTea';
}

/**
 * Get theme-specific variant classes for buttons
 */
export function getThemeAwareButtonVariant(variant: ThemeAwareVariant): string {
    if (variant !== 'auto' && variant !== 'theme') {
        return variant; // Return explicit variant as-is
    }

    const theme = getCurrentTheme();

    switch (theme) {
        case 'terminal':
            return 'bg-gradient-to-r from-terminal-blue to-terminal-cyan hover:from-terminal-blue/90 hover:to-terminal-cyan/90 text-white shadow-lg hover:shadow-xl border border-white/10';
        case 'bubbleTea':
            return 'bg-gradient-to-r from-bubble-tea-pink to-bubble-tea-purple hover:from-bubble-tea-glow-pink hover:to-bubble-tea-glow-purple text-white shadow-bubble-tea-pink-glow hover:shadow-bubble-tea-purple-intense border border-bubble-tea-purple/20 rounded-bubble-tea backdrop-blur-sm font-mono';
        default:
            return 'bg-gradient-to-r from-terminal-blue to-terminal-cyan hover:from-terminal-blue/90 hover:to-terminal-cyan/90 text-white shadow-lg hover:shadow-xl border border-white/10';
    }
}

/**
 * Get theme-specific variant classes for cards
 */
export function getThemeAwareCardVariant(variant: ThemeAwareVariant): string {
    if (variant !== 'auto' && variant !== 'theme') {
        return variant; // Return explicit variant as-is
    }

    const theme = getCurrentTheme();

    switch (theme) {
        case 'terminal':
            return 'bg-terminal-bg border-2 border-terminal-green/30 shadow-lg shadow-terminal-green/10 hover:border-terminal-green/50 hover:shadow-terminal-green/20';
        case 'bubbleTea':
            return 'bg-gradient-to-br from-bubble-tea-pink/10 to-bubble-tea-purple/10 border border-bubble-tea-purple/30 shadow-bubble-tea-purple-glow hover:border-bubble-tea-glow-purple/50 hover:shadow-bubble-tea-purple-intense backdrop-blur-sm rounded-bubble-tea-lg font-mono';
        default:
            return 'glass-subtle border border-white/20 shadow-lg hover:shadow-xl';
    }
}

/**
 * Get theme-specific border radius classes
 */
export function getThemeAwareBorderRadius(variant: ThemeAwareVariant, size?: string): string {
    if (variant !== 'auto' && variant !== 'theme') {
        return ''; // Let component handle explicit variants
    }

    const theme = getCurrentTheme();

    if (theme === 'bubbleTea') {
        if (size) {
            const radiusMap = {
                sm: 'rounded-bubble-tea-sm',
                md: 'rounded-bubble-tea',
                lg: 'rounded-bubble-tea-lg',
                xl: 'rounded-bubble-tea-xl'
            };
            return radiusMap[size as keyof typeof radiusMap] || 'rounded-bubble-tea';
        }
        return 'rounded-bubble-tea';
    }

    return ''; // Default to component's default radius
}

/**
 * Get theme-specific input variant classes
 */
export function getThemeAwareInputVariant(variant: ThemeAwareVariant): string {
    if (variant !== 'auto' && variant !== 'theme') {
        return variant; // Return explicit variant as-is
    }

    const theme = getCurrentTheme();

    switch (theme) {
        case 'terminal':
            return 'bg-terminal-bg border-2 border-terminal-green/30 text-terminal-green placeholder:text-terminal-green/50 focus:border-terminal-green focus:ring-terminal-green/20';
        case 'bubbleTea':
            return 'bg-gradient-to-r from-bubble-tea-pink/5 to-bubble-tea-purple/5 border-2 border-bubble-tea-purple/30 text-bubble-tea-purple placeholder:text-bubble-tea-purple/50 focus:border-bubble-tea-purple focus:ring-bubble-tea-purple/20 rounded-bubble-tea backdrop-blur-sm';
        default:
            return 'bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/10 backdrop-blur-sm';
    }
}

/**
 * Get theme-specific badge variant classes
 */
export function getThemeAwareBadgeVariant(variant: ThemeAwareVariant): string {
    if (variant !== 'auto' && variant !== 'theme') {
        return variant; // Return explicit variant as-is
    }

    const theme = getCurrentTheme();

    switch (theme) {
        case 'terminal':
            return 'bg-terminal-green/20 text-terminal-green border border-terminal-green/30 font-mono';
        case 'bubbleTea':
            return 'bg-gradient-to-r from-bubble-tea-pink/20 to-bubble-tea-purple/20 text-bubble-tea-purple border border-bubble-tea-purple/30 rounded-bubble-tea-sm font-mono';
        default:
            return 'bg-white/20 text-white border border-white/30';
    }
}

/**
 * Get theme-specific focus ring classes
 */
export function getThemeAwareFocusRing(): string {
    const theme = getCurrentTheme();

    switch (theme) {
        case 'terminal':
            return 'focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';
        case 'bubbleTea':
            return 'focus-visible:ring-2 focus-visible:ring-bubble-tea-purple focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';
        default:
            return 'focus-visible:ring-2 focus-visible:ring-terminal-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';
    }
}

/**
 * Get theme-specific text colors for different semantic meanings
 */
export function getThemeAwareTextColor(semantic: 'primary' | 'secondary' | 'accent' | 'muted' = 'primary'): string {
    const theme = getCurrentTheme();

    const colorMap = {
        terminal: {
            primary: 'text-terminal-green',
            secondary: 'text-terminal-cyan',
            accent: 'text-terminal-blue',
            muted: 'text-terminal-green/70'
        },
        bubbleTea: {
            primary: 'text-bubble-tea-purple',
            secondary: 'text-bubble-tea-pink',
            accent: 'text-bubble-tea-blue',
            muted: 'text-bubble-tea-purple/70'
        }
    };

    return colorMap[theme]?.[semantic] || 'text-white';
}

/**
 * Reactive theme-aware variant resolver that works with Svelte's reactivity
 * Use this in components with $derived for automatic updates
 */
export function createThemeAwareVariant<T extends string>(
    explicitVariant: T | 'auto' | 'theme',
    variantMap: Record<SystemThemeType, T>,
    defaultVariant: T
) {
    return {
        get variant() {
            if (explicitVariant !== 'auto' && explicitVariant !== 'theme') {
                return explicitVariant;
            }

            const theme = getCurrentTheme();
            return variantMap[theme] || defaultVariant;
        }
    };
}