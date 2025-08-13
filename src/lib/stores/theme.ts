/**
 * Theme Store - Centralized theme management for A Hacker's Brand
 * Provides theme switching, persistence, and reactive theme configuration
 */

import { writable, derived, get } from 'svelte/store';

// Browser environment detection for SSR compatibility
const browser = typeof window !== 'undefined';

// Safe storage helpers for SSR compatibility
function safeGetItem(key: string): string | null {
    if (!browser || typeof localStorage === 'undefined') return null;
    try {
        return localStorage.getItem(key);
    } catch {
        return null;
    }
}

function safeSetItem(key: string, value: string): void {
    if (!browser || typeof localStorage === 'undefined') return;
    try {
        localStorage.setItem(key, value);
    } catch {
        // Silently fail if localStorage is not available
    }
}

function safeRemoveItem(key: string): void {
    if (!browser || typeof localStorage === 'undefined') return;
    try {
        localStorage.removeItem(key);
    } catch {
        // Silently fail if localStorage is not available
    }
}

// Theme Types
export type ThemeType = 'terminal' | 'bubbleTea' | 'auto';
export type SystemThemeType = 'terminal' | 'bubbleTea';
export type ContrastMode = 'normal' | 'high';

// Theme Colors Interface
interface ThemeColors {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    primaryAlt?: string;
    secondaryAlt?: string;
    accentAlt?: string;
    success: string;
    warning: string;
    error: string;
    info: string;
}

// Theme Configuration Interface
interface ThemeConfig {
    name: ThemeType;
    displayName: string;
    description: string;
    colors: ThemeColors;
    highContrastColors: ThemeColors;
}

// Theme Configurations
export const themeConfigs: Record<SystemThemeType, ThemeConfig> = {
    terminal: {
        name: 'terminal',
        displayName: 'Terminal',
        description: 'Hacker aesthetic with green matrix colors and sharp edges',
        colors: {
            primary: '#00ff41',
            secondary: '#00d4ff',
            accent: '#0066ff',
            background: '#000000',
            surface: '#111111',
            text: '#00ff41',
            success: '#00ff41',
            warning: '#ffaa00',
            error: '#ff0040',
            info: '#00d4ff'
        },
        highContrastColors: {
            primary: '#00ff88',
            secondary: '#00ffff',
            accent: '#0088ff',
            background: '#000000',
            surface: '#000000',
            text: '#ffffff',
            success: '#00ff88',
            warning: '#ffdd00',
            error: '#ff0066',
            info: '#00ffff'
        }
    },
    bubbleTea: {
        name: 'bubbleTea',
        displayName: 'Bubble Tea',
        description: 'Modern TUI with colorful gradients and rounded corners',
        colors: {
            primary: '#8b5cf6',
            secondary: '#f472b6',
            accent: '#06b6d4',
            background: '#1e1b4b',
            surface: '#312e81',
            text: '#c7d2fe',
            success: '#10b981',
            warning: '#f59e0b',
            error: '#ef4444',
            info: '#06b6d4'
        },
        highContrastColors: {
            primary: '#a855f7',
            secondary: '#f59e0b',
            accent: '#0ea5e9',
            background: '#0f0a19',
            surface: '#1e1b4b',
            text: '#ffffff',
            success: '#22c55e',
            warning: '#fbbf24',
            error: '#f87171',
            info: '#38bdf8'
        }
    }
};

// System Theme Detection
export function getSystemThemePreference(): SystemThemeType {
    if (!browser || typeof window === 'undefined' || !window.matchMedia) {
        return 'terminal'; // Default fallback
    }

    try {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const lightModeQuery = window.matchMedia('(prefers-color-scheme: light)');

        if (darkModeQuery.matches) return 'terminal';
        if (lightModeQuery.matches) return 'bubbleTea';
        
        return 'terminal'; // Default fallback
    } catch {
        return 'terminal';
    }
}

// Watch system theme preference changes
export function watchSystemThemePreference(callback: (theme: SystemThemeType) => void): () => void {
    if (!browser || typeof window === 'undefined' || !window.matchMedia) {
        return () => {}; // No-op cleanup function
    }

    try {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const lightModeQuery = window.matchMedia('(prefers-color-scheme: light)');

        const handleChange = () => {
            callback(getSystemThemePreference());
        };

        // Use modern addEventListener if available, fallback to legacy addListener
        if (darkModeQuery.addEventListener) {
            darkModeQuery.addEventListener('change', handleChange);
            lightModeQuery.addEventListener('change', handleChange);

            return () => {
                darkModeQuery.removeEventListener('change', handleChange);
                lightModeQuery.removeEventListener('change', handleChange);
            };
        } else {
            // Legacy support
            darkModeQuery.addListener(handleChange);
            lightModeQuery.addListener(handleChange);

            return () => {
                darkModeQuery.removeListener(handleChange);
                lightModeQuery.removeListener(handleChange);
            };
        }
    } catch {
        return () => {};
    }
}

// Helper Functions
export function isAutoTheme(theme: ThemeType): boolean {
    return theme === 'auto';
}

export function getThemeDisplayInfo(userTheme: ThemeType, resolvedTheme: SystemThemeType): {
    displayName: string;
    description: string;
    isAuto: boolean;
} {
    if (isAutoTheme(userTheme)) {
        const resolvedConfig = themeConfigs[resolvedTheme];
        return {
            displayName: `Auto (${resolvedConfig.displayName})`,
            description: `Automatically follows system preference. Currently: ${resolvedConfig.displayName}`,
            isAuto: true
        };
    }

    const config = themeConfigs[userTheme as SystemThemeType];
    return {
        displayName: config.displayName,
        description: config.description,
        isAuto: false
    };
}

// Theme Store
const createThemeStore = () => {
    const initialUserTheme = safeGetItem('ahb-theme') as ThemeType || 'auto';
    const { subscribe, set, update } = writable<SystemThemeType>(
        isAutoTheme(initialUserTheme) ? getSystemThemePreference() : initialUserTheme as SystemThemeType
    );

    let systemThemeWatcher: (() => void) | null = null;

    const updateTheme = (userTheme: ThemeType) => {
        const resolved = isAutoTheme(userTheme) ? getSystemThemePreference() : userTheme as SystemThemeType;
        set(resolved);
        safeSetItem('ahb-theme', userTheme);

        // Set up or tear down system theme watcher
        if (isAutoTheme(userTheme)) {
            if (!systemThemeWatcher) {
                systemThemeWatcher = watchSystemThemePreference((systemTheme) => {
                    set(systemTheme);
                });
            }
        } else {
            if (systemThemeWatcher) {
                systemThemeWatcher();
                systemThemeWatcher = null;
            }
        }
    };

    // Initialize system theme watcher if needed
    if (isAutoTheme(initialUserTheme)) {
        systemThemeWatcher = watchSystemThemePreference((systemTheme) => {
            set(systemTheme);
        });
    }

    return {
        subscribe,
        getUserTheme: (): ThemeType => safeGetItem('ahb-theme') as ThemeType || 'auto',
        set: (theme: ThemeType) => updateTheme(theme),
        toggle: () => {
            const current = get({ subscribe });
            const newTheme = current === 'terminal' ? 'bubbleTea' : 'terminal';
            updateTheme(newTheme);
        },
        setTerminal: () => updateTheme('terminal'),
        setBubbleTea: () => updateTheme('bubbleTea'),
        setAuto: () => updateTheme('auto'),
        reset: () => {
            safeRemoveItem('ahb-theme');
            updateTheme('auto');
        }
    };
};

export const theme = createThemeStore();

// Contrast Mode Store
const createContrastModeStore = () => {
    const initial = safeGetItem('ahb-contrast-mode') as ContrastMode || 'normal';
    const { subscribe, set } = writable<ContrastMode>(initial);

    return {
        subscribe,
        set: (mode: ContrastMode) => {
            set(mode);
            safeSetItem('ahb-contrast-mode', mode);
        },
        toggle: () => {
            const current = get({ subscribe });
            const newMode = current === 'normal' ? 'high' : 'normal';
            set(newMode);
            safeSetItem('ahb-contrast-mode', newMode);
        },
        setNormal: () => {
            set('normal');
            safeSetItem('ahb-contrast-mode', 'normal');
        },
        setHigh: () => {
            set('high');
            safeSetItem('ahb-contrast-mode', 'high');
        },
        reset: () => {
            safeRemoveItem('ahb-contrast-mode');
            set('normal');
        }
    };
};

export const contrastMode = createContrastModeStore();

// Theme Configuration Derived Store
export const themeConfig = derived(
    [theme, contrastMode],
    ([$theme, $contrastMode]) => {
        const config = themeConfigs[$theme];
        const userTheme = theme.getUserTheme();
        const currentColors = $contrastMode === 'high' ? config.highContrastColors : config.colors;

        return {
            ...config,
            currentColors,
            userTheme,
            resolvedTheme: $theme
        };
    }
);

// CSS Properties Generation
export function getThemeCSSProperties(themeType: SystemThemeType, contrast: ContrastMode = 'normal'): Record<string, string> {
    const config = themeConfigs[themeType];
    const colors = contrast === 'high' ? config.highContrastColors : config.colors;

    return {
        '--color-primary': colors.primary,
        '--color-secondary': colors.secondary,
        '--color-accent': colors.accent,
        '--color-background': colors.background,
        '--color-surface': colors.surface,
        '--color-text': colors.text,
        '--color-success': colors.success,
        '--color-warning': colors.warning,
        '--color-error': colors.error,
        '--color-info': colors.info,
        ...(colors.primaryAlt && { '--color-primary-alt': colors.primaryAlt }),
        ...(colors.secondaryAlt && { '--color-secondary-alt': colors.secondaryAlt }),
        ...(colors.accentAlt && { '--color-accent-alt': colors.accentAlt })
    };
}

// Export storage helpers for external use
export { safeGetItem, safeSetItem, safeRemoveItem };
