/**
 * Accessibility utilities for WCAG compliance
 * Includes color contrast calculations and validation functions
 */

/**
 * Convert hex color to RGB values
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

/**
 * Calculate relative luminance of a color
 * Based on WCAG 2.1 guidelines
 */
export function getLuminance(rgb: { r: number; g: number; b: number }): number {
    const { r, g, b } = rgb;

    // Convert RGB to relative values
    const rsRGB = r / 255;
    const gsRGB = g / 255;
    const bsRGB = b / 255;

    // Apply gamma correction
    const rLin = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
    const gLin = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
    const bLin = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);

    // Calculate relative luminance
    return 0.2126 * rLin + 0.7152 * gLin + 0.0722 * bLin;
}

/**
 * Calculate contrast ratio between two colors
 * Returns a value between 1:1 and 21:1
 */
export function getContrastRatio(color1: string, color2: string): number {
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);

    if (!rgb1 || !rgb2) {
        throw new Error('Invalid hex color format');
    }

    const lum1 = getLuminance(rgb1);
    const lum2 = getLuminance(rgb2);

    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);

    return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Check if color combination meets WCAG AA standards
 */
export function meetsWCAG_AA(foreground: string, background: string, isLargeText = false): boolean {
    const ratio = getContrastRatio(foreground, background);
    return isLargeText ? ratio >= 3 : ratio >= 4.5;
}

/**
 * Check if color combination meets WCAG AAA standards
 */
export function meetsWCAG_AAA(foreground: string, background: string, isLargeText = false): boolean {
    const ratio = getContrastRatio(foreground, background);
    return isLargeText ? ratio >= 4.5 : ratio >= 7;
}

/**
 * Check if color meets UI component contrast requirements (3:1)
 */
export function meetsUIContrast(color1: string, color2: string): boolean {
    const ratio = getContrastRatio(color1, color2);
    return ratio >= 3;
}

/**
 * Lighten a hex color by a percentage
 */
export function lightenColor(hex: string, percent: number): string {
    const rgb = hexToRgb(hex);
    if (!rgb) throw new Error('Invalid hex color');

    const factor = 1 + (percent / 100);
    const r = Math.min(255, Math.round(rgb.r * factor));
    const g = Math.min(255, Math.round(rgb.g * factor));
    const b = Math.min(255, Math.round(rgb.b * factor));

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

/**
 * Darken a hex color by a percentage
 */
export function darkenColor(hex: string, percent: number): string {
    const rgb = hexToRgb(hex);
    if (!rgb) throw new Error('Invalid hex color');

    const factor = 1 - (percent / 100);
    const r = Math.max(0, Math.round(rgb.r * factor));
    const g = Math.max(0, Math.round(rgb.g * factor));
    const b = Math.max(0, Math.round(rgb.b * factor));

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

/**
 * Generate a WCAG AA compliant color variant
 * Automatically adjusts lightness to meet contrast requirements
 */
export function makeAccessible(
    foreground: string,
    background: string,
    targetRatio = 4.5,
    maxAttempts = 50
): string {
    let adjustedColor = foreground;
    let currentRatio = getContrastRatio(adjustedColor, background);

    if (currentRatio >= targetRatio) {
        return adjustedColor;
    }

    // Try lightening first
    for (let i = 1; i <= maxAttempts; i++) {
        const lightened = lightenColor(foreground, i * 2);
        const ratio = getContrastRatio(lightened, background);

        if (ratio >= targetRatio) {
            return lightened;
        }
    }

    // If lightening doesn't work, try darkening
    for (let i = 1; i <= maxAttempts; i++) {
        const darkened = darkenColor(foreground, i * 2);
        const ratio = getContrastRatio(darkened, background);

        if (ratio >= targetRatio) {
            return darkened;
        }
    }

    // If nothing works, return a high contrast fallback
    const rgb = hexToRgb(background);
    if (!rgb) return foreground;

    const backgroundLuminance = getLuminance(rgb);
    return backgroundLuminance > 0.5 ? '#000000' : '#ffffff';
}

/**
 * Color accessibility grade (A, AA, AAA)
 */
export type AccessibilityGrade = 'Fail' | 'A' | 'AA' | 'AAA';

/**
 * Get accessibility grade for color combination
 */
export function getAccessibilityGrade(
    foreground: string,
    background: string,
    isLargeText = false
): AccessibilityGrade {
    const ratio = getContrastRatio(foreground, background);

    if (isLargeText) {
        if (ratio >= 4.5) return 'AAA';
        if (ratio >= 3) return 'AA';
        return 'Fail';
    } else {
        if (ratio >= 7) return 'AAA';
        if (ratio >= 4.5) return 'AA';
        if (ratio >= 3) return 'A';
        return 'Fail';
    }
}

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
export function generateAccessibilityReport(
    colors: { name: string; hex: string }[],
    backgrounds: { name: string; hex: string }[]
): ColorAccessibilityReport[] {
    const report: ColorAccessibilityReport[] = [];

    for (const color of colors) {
        for (const bg of backgrounds) {
            const ratio = getContrastRatio(color.hex, bg.hex);
            const normalGrade = getAccessibilityGrade(color.hex, bg.hex, false);
            const largeGrade = getAccessibilityGrade(color.hex, bg.hex, true);
            const uiContrast = meetsUIContrast(color.hex, bg.hex);

            let recommendations = '';
            if (normalGrade === 'Fail') {
                const accessible = makeAccessible(color.hex, bg.hex);
                recommendations = `Consider using ${accessible} for better contrast`;
            }

            report.push({
                combination: `${color.name} on ${bg.name}`,
                foreground: color.hex,
                background: bg.hex,
                ratio: Math.round(ratio * 100) / 100,
                normalText: normalGrade,
                largeText: largeGrade,
                uiComponent: uiContrast,
                recommendations: recommendations || undefined
            });
        }
    }

    return report;
}

/**
 * High contrast mode color adjustments
 */
export const highContrastAdjustments = {
    /**
     * Enhance colors for high contrast mode
     */
    enhanceForHighContrast: (hex: string): string => {
        const rgb = hexToRgb(hex);
        if (!rgb) return hex;

        // Increase saturation and adjust lightness
        const luminance = getLuminance(rgb);

        if (luminance < 0.5) {
            // Dark colors - make them lighter and more saturated
            return lightenColor(hex, 25);
        } else {
            // Light colors - make them more saturated
            const { r, g, b } = rgb;
            const enhanced = {
                r: Math.min(255, Math.round(r * 1.1)),
                g: Math.min(255, Math.round(g * 1.1)),
                b: Math.min(255, Math.round(b * 1.1))
            };
            return `#${enhanced.r.toString(16).padStart(2, '0')}${enhanced.g.toString(16).padStart(2, '0')}${enhanced.b.toString(16).padStart(2, '0')}`;
        }
    },

    /**
     * Create high contrast variant of entire color palette
     */
    createHighContrastPalette: (colors: Record<string, string>): Record<string, string> => {
        const enhanced: Record<string, string> = {};

        for (const [key, value] of Object.entries(colors)) {
            enhanced[key] = highContrastAdjustments.enhanceForHighContrast(value);
        }

        return enhanced;
    }
};