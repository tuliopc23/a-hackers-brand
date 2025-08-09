/**
 * Enhanced error handling utilities for theme store debugging and monitoring
 * Provides detailed error reporting, validation helpers, and troubleshooting tools
 */
type ThemeError = {
    code: string;
    message: string;
    timestamp: number;
    context?: Record<string, unknown>;
};
export interface ThemeHealthCheck {
    isStorageAvailable: boolean;
    isMediaQuerySupported: boolean;
    hasValidThemeConfig: boolean;
    currentErrors: ThemeError[];
    recommendations: string[];
}
export interface ThemeValidationResult {
    isValid: boolean;
    errors: string[];
    warnings: string[];
}
/**
 * Comprehensive theme system health check
 */
export declare function performThemeHealthCheck(): ThemeHealthCheck;
/**
 * Validate theme configuration object
 */
export declare function validateThemeConfig(config: any): ThemeValidationResult;
/**
 * Generate troubleshooting report for theme issues
 */
export declare function generateTroubleshootingReport(): string;
/**
 * Clear all theme-related data and reset to defaults
 */
export declare function resetThemeSystem(): boolean;
/**
 * Export error monitoring utilities
 */
export declare const ThemeMonitor: {
    healthCheck: typeof performThemeHealthCheck;
    validateConfig: typeof validateThemeConfig;
    troubleshoot: typeof generateTroubleshootingReport;
    reset: typeof resetThemeSystem;
    watchErrors: (callback: (error: ThemeError) => void) => () => void;
};
export {};
