/**
 * Accessibility utilities for WCAG compliance
 * Includes color contrast calculations and validation functions
 */
/**
 * Convert hex color to RGB values
 */
export declare function hexToRgb(hex: string): {
    r: number;
    g: number;
    b: number;
} | null;
/**
 * Calculate relative luminance of a color
 * Based on WCAG 2.1 guidelines
 */
export declare function getLuminance(rgb: {
    r: number;
    g: number;
    b: number;
}): number;
/**
 * Calculate contrast ratio between two colors
 * Returns a value between 1:1 and 21:1
 */
export declare function getContrastRatio(color1: string, color2: string): number;
/**
 * Check if color combination meets WCAG AA standards
 */
export declare function meetsWCAG_AA(foreground: string, background: string, isLargeText?: boolean): boolean;
/**
 * Check if color combination meets WCAG AAA standards
 */
export declare function meetsWCAG_AAA(foreground: string, background: string, isLargeText?: boolean): boolean;
/**
 * Check if color meets UI component contrast requirements (3:1)
 */
export declare function meetsUIContrast(color1: string, color2: string): boolean;
/**
 * Lighten a hex color by a percentage
 */
export declare function lightenColor(hex: string, percent: number): string;
/**
 * Darken a hex color by a percentage
 */
export declare function darkenColor(hex: string, percent: number): string;
/**
 * Generate a WCAG AA compliant color variant
 * Automatically adjusts lightness to meet contrast requirements
 */
export declare function makeAccessible(foreground: string, background: string, targetRatio?: number, maxAttempts?: number): string;
/**
 * Color accessibility grade (A, AA, AAA)
 */
export type AccessibilityGrade = 'Fail' | 'A' | 'AA' | 'AAA';
/**
 * Get accessibility grade for color combination
 */
export declare function getAccessibilityGrade(foreground: string, background: string, isLargeText?: boolean): AccessibilityGrade;
/**
 * Comprehensive accessibility report for a color palette
 */
export interface ColorAccessibilityReport {
    combination: string;
    foreground: string;
    background: string;
    ratio: number;
    normalText: AccessibilityGrade;
    largeText: AccessibilityGrade;
    uiComponent: boolean;
    recommendations?: string;
}
/**
 * Generate accessibility report for multiple color combinations
 */
export declare function generateAccessibilityReport(colors: {
    name: string;
    hex: string;
}[], backgrounds: {
    name: string;
    hex: string;
}[]): ColorAccessibilityReport[];
/**
 * High contrast mode color adjustments
 */
export declare const highContrastAdjustments: {
    /**
     * Enhance colors for high contrast mode
     */
    enhanceForHighContrast: (hex: string) => string;
    /**
     * Create high contrast variant of entire color palette
     */
    createHighContrastPalette: (colors: Record<string, string>) => Record<string, string>;
};
