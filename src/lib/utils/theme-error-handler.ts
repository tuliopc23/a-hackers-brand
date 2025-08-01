/**
 * Enhanced error handling utilities for theme store debugging and monitoring
 * Provides detailed error reporting, validation helpers, and troubleshooting tools
 */

import { ThemeErrorReporter } from '../stores/theme.js';
import type { ThemeError } from '../stores/theme.js';

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
export function performThemeHealthCheck(): ThemeHealthCheck {
    const recommendations: string[] = [];
    const errors = ThemeErrorReporter.getRecentErrors();

    // Check localStorage availability
    let isStorageAvailable = false;
    try {
        if (typeof window !== 'undefined' && window.localStorage) {
            const test = '__theme_test__';
            localStorage.setItem(test, 'test');
            localStorage.removeItem(test);
            isStorageAvailable = true;
        }
    } catch (error) {
        recommendations.push('Enable localStorage for theme persistence');
    }

    // Check media query support
    let isMediaQuerySupported = false;
    try {
        if (typeof window !== 'undefined' && window.matchMedia) {
            const testQuery = window.matchMedia('(prefers-color-scheme: dark)');
            isMediaQuerySupported = typeof testQuery.matches === 'boolean';
        }
    } catch (error) {
        recommendations.push('Update browser for better theme detection');
    }

    // Check for frequent errors
    const errorCounts = errors.reduce((acc, error) => {
        acc[error.code] = (acc[error.code] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    if (errorCounts['STORAGE_WRITE_ERROR'] > 2) {
        recommendations.push('Check localStorage quota or permissions');
    }

    if (errorCounts['DOM_THEME_APPLICATION_FAILED'] > 1) {
        recommendations.push('Verify DOM access and CSS class definitions');
    }

    if (errorCounts['SYSTEM_THEME_DETECTION_FAILED'] > 3) {
        recommendations.push('Consider fallback theme detection methods');
    }

    // Add general recommendations based on environment
    if (!isStorageAvailable) {
        recommendations.push('Theme preferences will not persist between sessions');
    }

    if (!isMediaQuerySupported) {
        recommendations.push('Auto theme switching based on system preference unavailable');
    }

    return {
        isStorageAvailable,
        isMediaQuerySupported,
        hasValidThemeConfig: errors.filter(e => e.code.includes('CONFIG')).length === 0,
        currentErrors: errors,
        recommendations
    };
}

/**
 * Validate theme configuration object
 */
export function validateThemeConfig(config: any): ThemeValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!config || typeof config !== 'object') {
        errors.push('Theme config must be an object');
        return { isValid: false, errors, warnings };
    }

    // Check required properties
    const requiredProps = ['name', 'displayName', 'description', 'colors', 'highContrastColors'];
    for (const prop of requiredProps) {
        if (!(prop in config)) {
            errors.push(`Missing required property: ${prop}`);
        }
    }

    // Validate colors object
    if (config.colors && typeof config.colors === 'object') {
        const requiredColors = ['primary', 'secondary', 'accent', 'background', 'surface', 'text'];
        for (const color of requiredColors) {
            if (!(color in config.colors)) {
                errors.push(`Missing color: ${color}`);
            } else if (typeof config.colors[color] !== 'string') {
                errors.push(`Color ${color} must be a string`);
            } else if (!/^#[0-9A-Fa-f]{6}$/.test(config.colors[color])) {
                warnings.push(`Color ${color} should be a valid hex color`);
            }
        }
    }

    // Validate high contrast colors
    if (config.highContrastColors && typeof config.highContrastColors === 'object') {
        const requiredColors = ['primary', 'secondary', 'accent', 'background', 'surface', 'text'];
        for (const color of requiredColors) {
            if (!(color in config.highContrastColors)) {
                warnings.push(`Missing high contrast color: ${color}`);
            }
        }
    }

    return {
        isValid: errors.length === 0,
        errors,
        warnings
    };
}

/**
 * Generate troubleshooting report for theme issues
 */
export function generateTroubleshootingReport(): string {
    const healthCheck = performThemeHealthCheck();
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown';

    let report = '# Theme System Troubleshooting Report\n\n';

    report += `**Generated:** ${new Date().toISOString()}\n`;
    report += `**User Agent:** ${userAgent}\n\n`;

    report += '## System Health\n\n';
    report += `- **localStorage Available:** ${healthCheck.isStorageAvailable ? '✅' : '❌'}\n`;
    report += `- **Media Query Support:** ${healthCheck.isMediaQuerySupported ? '✅' : '❌'}\n`;
    report += `- **Theme Config Valid:** ${healthCheck.hasValidThemeConfig ? '✅' : '❌'}\n\n`;

    if (healthCheck.currentErrors.length > 0) {
        report += '## Recent Errors\n\n';
        healthCheck.currentErrors.forEach(error => {
            report += `**${error.code}** (${new Date(error.timestamp).toLocaleTimeString()})\n`;
            report += `${error.message}\n`;
            if (error.context) {
                report += `Context: ${JSON.stringify(error.context, null, 2)}\n`;
            }
            report += '\n';
        });
    }

    if (healthCheck.recommendations.length > 0) {
        report += '## Recommendations\n\n';
        healthCheck.recommendations.forEach(rec => {
            report += `- ${rec}\n`;
        });
        report += '\n';
    }

    report += '## Browser Compatibility\n\n';
    report += `- **localStorage:** ${typeof Storage !== 'undefined' ? '✅' : '❌'}\n`;
    report += `- **matchMedia:** ${typeof window !== 'undefined' && window.matchMedia ? '✅' : '❌'}\n`;
    report += `- **CSS Custom Properties:** ${CSS && CSS.supports && CSS.supports('color', 'var(--test)') ? '✅' : '❌'}\n`;

    return report;
}

/**
 * Clear all theme-related data and reset to defaults
 */
export function resetThemeSystem(): boolean {
    try {
        // Clear localStorage
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.removeItem('ahb-theme');
            localStorage.removeItem('ahb-contrast-mode');
        }

        // Clear error history
        ThemeErrorReporter.clearErrors();

        // Reset DOM classes
        if (typeof document !== 'undefined') {
            const classList = document.documentElement.classList;
            classList.remove('theme-terminal', 'theme-bubble-tea', 'contrast-normal', 'contrast-high');
            classList.add('theme-terminal', 'contrast-normal');
        }

        return true;
    } catch (error) {
        console.error('Failed to reset theme system:', error);
        return false;
    }
}

/**
 * Export error monitoring utilities
 */
export const ThemeMonitor = {
    healthCheck: performThemeHealthCheck,
    validateConfig: validateThemeConfig,
    troubleshoot: generateTroubleshootingReport,
    reset: resetThemeSystem,

    // Real-time monitoring
    watchErrors: (callback: (error: ThemeError) => void) => {
        // This would need to be implemented with a proper event system
        // For now, poll for new errors
        let lastErrorCount = 0;
        const interval = setInterval(() => {
            const errors = ThemeErrorReporter.getRecentErrors();
            if (errors.length > lastErrorCount) {
                const newErrors = errors.slice(lastErrorCount);
                newErrors.forEach(callback);
                lastErrorCount = errors.length;
            }
        }, 1000);

        return () => clearInterval(interval);
    }
};