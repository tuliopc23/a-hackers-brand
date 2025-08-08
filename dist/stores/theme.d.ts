declare function safeGetItem(key: string): string | null;
declare function safeSetItem(key: string, value: string): void;
declare function safeRemoveItem(key: string): void;
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
    primaryAlt?: string;
    secondaryAlt?: string;
    accentAlt?: string;
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
export declare const themeConfigs: Record<SystemThemeType, ThemeConfig>;
export declare const theme: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<SystemThemeType>, invalidate?: () => void) => import("svelte/store").Unsubscriber;
    getUserTheme: () => ThemeType;
    set: (theme: ThemeType) => void;
    toggle: () => void;
    setTerminal: () => void;
    setBubbleTea: () => void;
    setAuto: () => void;
    reset: () => void;
};
export declare const contrastMode: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<ContrastMode>, invalidate?: () => void) => import("svelte/store").Unsubscriber;
    set: (mode: ContrastMode) => void;
    toggle: () => void;
    setNormal: () => void;
    setHigh: () => void;
    reset: () => void;
};
export declare const themeConfig: {
    subscribe: (run: (value: ThemeConfig & {
        currentColors: ThemeColors;
        userTheme: ThemeType;
        resolvedTheme: SystemThemeType;
    }) => void) => () => void;
};
export declare function getThemeCSSProperties(themeType: SystemThemeType, contrast?: ContrastMode): Record<string, string>;
export declare function isAutoTheme(theme: ThemeType): boolean;
export declare function getThemeDisplayInfo(userTheme: ThemeType, resolvedTheme: SystemThemeType): {
    displayName: string;
    description: string;
    isAuto: boolean;
};
export declare function getSystemThemePreference(): SystemThemeType;
export declare function watchSystemThemePreference(callback: (theme: SystemThemeType) => void): () => void;
export { safeGetItem, safeSetItem, safeRemoveItem };
