import { writable } from 'svelte/store';
import { borderRadius } from '../tokens/index.js';

// Browser detection - safely handle SSR/client environments
const browser = typeof window !== 'undefined';

// Simple localStorage operations with essential error handling
function safeGetItem(key: string): string | null {
    if (!browser) return null;

    try {
        return localStorage.getItem(key);
    } catch {
        return null;
    }
}

function safeSetItem(key: string, value: string): void {
    if (!browser) return;

    try {
        localStorage.setItem(key, value);
    } catch (error) {
        console.warn(`Failed to save ${key} to localStorage:`, error);
    }
}

function safeRemoveItem(key: string): void {
    if (!browser) return;

    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.warn(`Failed to remove ${key} from localStorage:`, error);
    }
}

export type ThemeType = 'terminal' | 'bubbleTea' | 'auto';
export type SystemThemeType = 'terminal' | 'bubbleTea';
export type ContrastMode = 'normal' | 'high';

interface ThemeColors {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    // Additional colors for better accessibility
    primaryAlt?: string;  // High contrast variant
    secondaryAlt?: string; // High contrast variant
    accentAlt?: string;   // High contrast variant
    success: string;
    warning: string;
    error: string;
    info: string;
}

interface ThemeConfig {
    name: ThemeType;
    displayName: string;
    description: string;
    colors: ThemeColors;
    highContrastColors: ThemeColors;
}

// Base colors that are WCAG AA compliant
const baseColors = {
    bubbleTea: {
        // Core colors - enhanced for better contrast
        primary: '#ff85b3',      // Lighter pink for better contrast (was #ff6b9d)
        secondary: '#d666ff',    // Lighter purple for better contrast (was #c44af2)
        accent: '#66c3ff',       // Lighter blue for better contrast (was #4fa8ff)
        background: '#1a1a2e',   // Dark blue-gray background
        surface: '#16213e',      // Darker surface
        text: '#ffffff',         // White text
        // Semantic colors
        success: '#6bcf7f',      // Green
        warning: '#ffd23a',      // Yellow
        error: '#ff8585',        // Light red for better contrast
        info: '#4dd8da'          // Cyan
    },
    terminal: {
        primary: '#00ff41',      // Terminal green
        secondary: '#00ffff',    // Cyan
        accent: '#66b3ff',       // Lighter blue for better contrast
        background: '#0a0a0f',   // Very dark background
        surface: '#1a1a2e',     // Dark surface
        text: '#ffffff',         // White text
        success: '#00ff88',      // Bright green
        warning: '#ffcc00',      // Yellow
        error: '#ff6666',        // Light red
        info: '#00ffff'          // Cyan
    }
};

export const themeConfigs: Record<SystemThemeType, ThemeConfig> = {
    terminal: {
        name: 'terminal',
        displayName: 'Terminal',
        description: 'Hacker aesthetic with green matrix colors and sharp edges',
        colors: baseColors.terminal,
        highContrastColors: {
            ...baseColors.terminal,
            // Enhanced for high contrast mode
            primary: '#33ff66',      // Brighter green
            secondary: '#33ffff',    // Brighter cyan
            accent: '#80ccff',       // Even lighter blue
            success: '#40ff99',      // Brighter green
            warning: '#ffdd33',      // Brighter yellow
            error: '#ff8080',        // Brighter red
            info: '#40ffff'          // Brighter cyan
        }
    },
    bubbleTea: {
        name: 'bubbleTea',
        displayName: 'Bubble Tea',
        description: 'Modern TUI with colorful gradients and rounded corners',
        colors: baseColors.bubbleTea,
        highContrastColors: {
            ...baseColors.bubbleTea,
            // Enhanced for high contrast mode
            primary: '#ff99c7',      // Even lighter pink
            secondary: '#e099ff',    // Even lighter purple
            accent: '#80d4ff',       // Even lighter blue
            success: '#80dd99',      // Brighter green
            warning: '#ffe066',      // Brighter yellow
            error: '#ff9999',        // Brighter red
            info: '#66e6ea'          // Brighter cyan
        }
    }
};

// Create the theme store with auto-switching support
function createThemeStore() {
    // Get initial theme from localStorage or default to auto
    const getInitialTheme = (): ThemeType => {
        if (!browser) return 'terminal';

        const stored = safeGetItem('ahb-theme');
        if (stored === 'terminal' || stored === 'bubbleTea' || stored === 'auto') {
            return stored;
        }

        return 'auto'; // Default to auto mode for better UX
    };

    // Get the resolved theme (auto -> actual system theme)
    const getResolvedTheme = (theme: ThemeType): SystemThemeType => {
        if (theme === 'auto') {
            return getSystemThemePreference();
        }
        return theme as SystemThemeType;
    };

    // Get initial theme once and reuse it
    const initialTheme = getInitialTheme();
    let currentUserTheme = initialTheme;

    // Store the actual resolved theme that's applied
    const { subscribe, set, update } = writable<SystemThemeType>(getResolvedTheme(initialTheme), (set) => {
        let cleanupSystemWatcher: (() => void) | null = null;

        // Apply the resolved theme to DOM
        const applyTheme = (resolvedTheme: SystemThemeType) => {
            if (browser) {
                const classList = document.documentElement.classList;
                classList.remove('theme-terminal', 'theme-bubble-tea');
                const themeClass = `theme-${resolvedTheme === 'bubbleTea' ? 'bubble-tea' : resolvedTheme}`;
                classList.add(themeClass);

                // Apply CSS custom properties for current theme
                const cssProperties = getThemeCSSProperties(resolvedTheme);
                Object.entries(cssProperties).forEach(([property, value]) => {
                    document.documentElement.style.setProperty(property, value);
                });
            }
            set(resolvedTheme);
        };

        // Initialize theme on first subscription (page load)
        applyTheme(getResolvedTheme(initialTheme));

        // Set up system theme watcher if in auto mode
        if (initialTheme === 'auto' && browser) {
            cleanupSystemWatcher = watchSystemThemePreference((systemTheme) => {
                if (currentUserTheme === 'auto') {
                    applyTheme(systemTheme);
                }
            });
        }

        // Return cleanup function
        return () => {
            if (cleanupSystemWatcher) {
                cleanupSystemWatcher();
            }
        };
    });

    // Expose both user preference and resolved theme
    const store = {
        subscribe,
        getUserTheme: () => currentUserTheme,
        set: (theme: ThemeType) => {
            currentUserTheme = theme;
            const resolvedTheme = getResolvedTheme(theme);

            if (browser) {
                safeSetItem('ahb-theme', theme);

                // Apply resolved theme to DOM
                document.documentElement.classList.remove('theme-terminal', 'theme-bubble-tea');
                document.documentElement.classList.add(`theme-${resolvedTheme === 'bubbleTea' ? 'bubble-tea' : resolvedTheme}`);

                // Apply CSS custom properties for current theme
                const cssProperties = getThemeCSSProperties(resolvedTheme);
                Object.entries(cssProperties).forEach(([property, value]) => {
                    document.documentElement.style.setProperty(property, value);
                });

                // Set up or remove system watcher based on theme
                if (theme === 'auto') {
                    // Set up system preference watching
                    const cleanup = watchSystemThemePreference((systemTheme) => {
                        if (currentUserTheme === 'auto') {
                            document.documentElement.classList.remove('theme-terminal', 'theme-bubble-tea');
                            document.documentElement.classList.add(`theme-${systemTheme === 'bubbleTea' ? 'bubble-tea' : systemTheme}`);

                            // Apply CSS properties for new system theme
                            const systemCssProperties = getThemeCSSProperties(systemTheme);
                            Object.entries(systemCssProperties).forEach(([property, value]) => {
                                document.documentElement.style.setProperty(property, value);
                            });

                            set(systemTheme);
                        }
                    });
                    // Store cleanup function for later use
                    (store as any)._systemWatcherCleanup = cleanup;
                } else {
                    // Clean up system watcher if switching away from auto
                    if ((store as any)._systemWatcherCleanup) {
                        (store as any)._systemWatcherCleanup();
                        (store as any)._systemWatcherCleanup = null;
                    }
                }
            }
            set(resolvedTheme);
        },
        toggle: () => {
            // Cycle through: terminal -> bubbleTea -> auto -> terminal
            const themeOrder: ThemeType[] = ['terminal', 'bubbleTea', 'auto'];
            const currentIndex = themeOrder.indexOf(currentUserTheme);
            const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];
            store.set(nextTheme);
        },
        setTerminal: () => store.set('terminal'),
        setBubbleTea: () => store.set('bubbleTea'),
        setAuto: () => store.set('auto'),
        reset: () => {
            if (browser) {
                safeRemoveItem('ahb-theme');
            }
            store.set('auto'); // Reset to auto mode for better UX
        }
    };

    return store;
}

export const theme = createThemeStore();

// Create contrast mode store
function createContrastModeStore() {
    const getInitialContrast = (): ContrastMode => {
        if (!browser) return 'normal';

        const stored = safeGetItem('ahb-contrast-mode');
        if (stored === 'normal' || stored === 'high') {
            return stored;
        }

        // Check system preference for high contrast
        if (browser && window.matchMedia?.('(prefers-contrast: high)').matches) {
            return 'high';
        }

        return 'normal';
    };

    const initialContrast = getInitialContrast();
    const { subscribe, set, update } = writable<ContrastMode>(initialContrast);

    const applyContrastToDOM = (mode: ContrastMode) => {
        if (browser) {
            document.documentElement.classList.remove('contrast-normal', 'contrast-high');
            document.documentElement.classList.add(`contrast-${mode}`);
        }
    };

    // Apply initial contrast
    applyContrastToDOM(initialContrast);

    return {
        subscribe,
        set: (mode: ContrastMode) => {
            if (browser) {
                safeSetItem('ahb-contrast-mode', mode);
                applyContrastToDOM(mode);
            }
            set(mode);
        },
        toggle: () => {
            update(current => {
                const newMode: ContrastMode = current === 'normal' ? 'high' : 'normal';
                if (browser) {
                    safeSetItem('ahb-contrast-mode', newMode);
                    applyContrastToDOM(newMode);
                }
                return newMode;
            });
        },
        setNormal: () => {
            const mode: ContrastMode = 'normal';
            if (browser) {
                safeSetItem('ahb-contrast-mode', mode);
                applyContrastToDOM(mode);
            }
            set(mode);
        },
        setHigh: () => {
            const mode: ContrastMode = 'high';
            if (browser) {
                safeSetItem('ahb-contrast-mode', mode);
                applyContrastToDOM(mode);
            }
            set(mode);
        },
        reset: () => {
            const mode: ContrastMode = 'normal';
            if (browser) {
                safeRemoveItem('ahb-contrast-mode');
                applyContrastToDOM(mode);
            }
            set(mode);
        }
    };
}

export const contrastMode = createContrastModeStore();

// Derived store for current theme config (respects contrast mode and resolved theme)
export const themeConfig = {
    subscribe: (run: (value: ThemeConfig & { currentColors: ThemeColors; userTheme: ThemeType; resolvedTheme: SystemThemeType }) => void) => {
        let currentResolvedTheme: SystemThemeType = 'terminal';
        let currentContrast: ContrastMode = 'normal';

        const unsubTheme = theme.subscribe(t => { currentResolvedTheme = t; update(); });
        const unsubContrast = contrastMode.subscribe(c => { currentContrast = c; update(); });

        function update() {
            const config = themeConfigs[currentResolvedTheme];
            const colors = currentContrast === 'high' ? config.highContrastColors : config.colors;
            const userTheme = theme.getUserTheme();

            run({
                ...config,
                currentColors: colors,
                userTheme,
                resolvedTheme: currentResolvedTheme
            });
        }

        // Initial call
        update();

        return () => {
            unsubTheme();
            unsubContrast();
        };
    }
};

// Utility function to get CSS custom properties for the current theme
export function getThemeCSSProperties(themeType: SystemThemeType, contrast: ContrastMode = 'normal'): Record<string, string> {
    const config = themeConfigs[themeType];
    const colors = contrast === 'high' ? config.highContrastColors : config.colors;

    // Generate radius properties from tokens
    const themeRadii = borderRadius.themes[themeType];
    const radiusProperties: Record<string, string> = {};

    if (themeRadii) {
        Object.entries(themeRadii).forEach(([size, value]) => {
            radiusProperties[`--radius-${size}`] = value as string;
        });
    }

    return {
        '--theme-primary': colors.primary,
        '--theme-secondary': colors.secondary,
        '--theme-accent': colors.accent,
        '--theme-background': colors.background,
        '--theme-surface': colors.surface,
        '--theme-text': colors.text,
        '--theme-success': colors.success,
        '--theme-warning': colors.warning,
        '--theme-error': colors.error,
        '--theme-info': colors.info,
        ...radiusProperties
    };
}

// Additional helper functions for the theme system
export function isAutoTheme(theme: ThemeType): boolean {
    return theme === 'auto';
}

export function getThemeDisplayInfo(userTheme: ThemeType, resolvedTheme: SystemThemeType) {
    if (userTheme === 'auto') {
        return {
            displayName: `Auto (${themeConfigs[resolvedTheme].displayName})`,
            description: `Automatically follows system preference. Currently: ${themeConfigs[resolvedTheme].displayName}`,
            isAuto: true
        };
    }

    return {
        displayName: themeConfigs[userTheme].displayName,
        description: themeConfigs[userTheme].description,
        isAuto: false
    };
}

// System theme preference detection
export function getSystemThemePreference(): SystemThemeType {
    if (!browser || !window.matchMedia) {
        return 'terminal'; // SSR fallback
    }

    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const lightModeQuery = window.matchMedia('(prefers-color-scheme: light)');

    if (darkModeQuery.matches) {
        // Dark mode -> Terminal theme (hacker aesthetic)
        return 'terminal';
    } else if (lightModeQuery.matches) {
        // Light mode -> Bubble Tea theme (colorful, modern)
        return 'bubbleTea';
    }

    // Default fallback to terminal if no preference
    return 'terminal';
}

// System preference change listener
export function watchSystemThemePreference(callback: (theme: SystemThemeType) => void): () => void {
    if (!browser || !window.matchMedia) {
        return () => { }; // SSR or no matchMedia - no-op cleanup function
    }

    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const lightModeQuery = window.matchMedia('(prefers-color-scheme: light)');

    const handleChange = () => {
        const newTheme = getSystemThemePreference();
        callback(newTheme);
    };

    // Use addEventListener if available (modern browsers), fallback to addListener
    if (darkModeQuery.addEventListener) {
        darkModeQuery.addEventListener('change', handleChange);
        lightModeQuery.addEventListener('change', handleChange);

        return () => {
            darkModeQuery.removeEventListener('change', handleChange);
            lightModeQuery.removeEventListener('change', handleChange);
        };
    } else if (darkModeQuery.addListener) {
        // Legacy support
        darkModeQuery.addListener(handleChange);
        lightModeQuery.addListener(handleChange);

        return () => {
            darkModeQuery.removeListener?.(handleChange);
            lightModeQuery.removeListener?.(handleChange);
        };
    }

    return () => { }; // No-op cleanup if no event listeners supported
}

// Export utilities
export { safeGetItem, safeSetItem, safeRemoveItem };


