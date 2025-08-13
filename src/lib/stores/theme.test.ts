import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { get } from 'svelte/store';
import {
    getSystemThemePreference,
    watchSystemThemePreference,
    isAutoTheme,
    getThemeDisplayInfo,
    type SystemThemeType,
    type ThemeType
} from './theme.js';

// Mock window.matchMedia
const createMockMatchMedia = (matches: boolean) => ({
    matches,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    media: '',
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
});

describe('System Theme Preference Detection', () => {
    let originalMatchMedia: typeof window.matchMedia;

    beforeEach(() => {
        // Store original matchMedia
        originalMatchMedia = window.matchMedia;
    });

    afterEach(() => {
        // Restore original matchMedia
        window.matchMedia = originalMatchMedia;
        vi.restoreAllMocks();
    });

    describe('getSystemThemePreference', () => {
        it('should return terminal for dark mode preference', () => {
            window.matchMedia = vi.fn((query) => {
                if (query === '(prefers-color-scheme: dark)') {
                    return createMockMatchMedia(true);
                }
                if (query === '(prefers-color-scheme: light)') {
                    return createMockMatchMedia(false);
                }
                return createMockMatchMedia(false);
            });

            const preference = getSystemThemePreference();
            expect(preference).toBe('terminal');
        });

        it('should return bubbleTea for light mode preference', () => {
            window.matchMedia = vi.fn((query) => {
                if (query === '(prefers-color-scheme: dark)') {
                    return createMockMatchMedia(false);
                }
                if (query === '(prefers-color-scheme: light)') {
                    return createMockMatchMedia(true);
                }
                return createMockMatchMedia(false);
            });

            const preference = getSystemThemePreference();
            expect(preference).toBe('bubbleTea');
        });

        it('should return terminal as fallback when no preference', () => {
            window.matchMedia = vi.fn(() => createMockMatchMedia(false));

            const preference = getSystemThemePreference();
            expect(preference).toBe('terminal');
        });

        it('should handle missing matchMedia gracefully', () => {
            // @ts-ignore - Testing browser compatibility
            window.matchMedia = undefined;

            const preference = getSystemThemePreference();
            expect(preference).toBe('terminal');
        });
    });

    describe('watchSystemThemePreference', () => {
        it('should set up listeners for system preference changes', () => {
            const darkModeQuery = createMockMatchMedia(true);
            const lightModeQuery = createMockMatchMedia(false);

            window.matchMedia = vi.fn((query) => {
                if (query === '(prefers-color-scheme: dark)') return darkModeQuery;
                if (query === '(prefers-color-scheme: light)') return lightModeQuery;
                return createMockMatchMedia(false);
            });

            const callback = vi.fn();
            const cleanup = watchSystemThemePreference(callback);

            // Should use modern addEventListener when available
            expect(darkModeQuery.addEventListener).toHaveBeenCalled();
            expect(lightModeQuery.addEventListener).toHaveBeenCalled();

            // Cleanup should remove listeners
            cleanup();
            expect(darkModeQuery.removeEventListener).toHaveBeenCalled();
            expect(lightModeQuery.removeEventListener).toHaveBeenCalled();
        });

        it('should call callback when system preference changes', () => {
            const darkModeQuery = createMockMatchMedia(false);
            const lightModeQuery = createMockMatchMedia(true);

            window.matchMedia = vi.fn((query) => {
                if (query === '(prefers-color-scheme: dark)') return darkModeQuery;
                if (query === '(prefers-color-scheme: light)') return lightModeQuery;
                return createMockMatchMedia(false);
            });

            const callback = vi.fn();
            watchSystemThemePreference(callback);

            // Simulate system change by calling the registered listener (modern API)
            const changeHandler = darkModeQuery.addEventListener.mock.calls[0][1];

            // Change to dark mode
            darkModeQuery.matches = true;
            lightModeQuery.matches = false;
            changeHandler();

            expect(callback).toHaveBeenCalledWith('terminal');
        });

        it('should return no-op cleanup when matchMedia unavailable', () => {
            // @ts-ignore - Testing browser compatibility
            window.matchMedia = undefined;

            const callback = vi.fn();
            const cleanup = watchSystemThemePreference(callback);

            expect(typeof cleanup).toBe('function');
            expect(() => cleanup()).not.toThrow();
        });
    });

    describe('Helper Functions', () => {
        describe('isAutoTheme', () => {
            it('should return true for auto theme', () => {
                expect(isAutoTheme('auto')).toBe(true);
            });

            it('should return false for manual themes', () => {
                expect(isAutoTheme('terminal')).toBe(false);
                expect(isAutoTheme('bubbleTea')).toBe(false);
            });
        });

        describe('getThemeDisplayInfo', () => {
            it('should return auto mode info when user theme is auto', () => {
                const info = getThemeDisplayInfo('auto', 'terminal');

                expect(info.displayName).toBe('Auto (Terminal)');
                expect(info.description).toContain('Automatically follows system preference');
                expect(info.description).toContain('Currently: Terminal');
                expect(info.isAuto).toBe(true);
            });

            it('should return manual theme info when user theme is not auto', () => {
                const info = getThemeDisplayInfo('terminal', 'terminal');

                expect(info.displayName).toBe('Terminal');
                expect(info.description).toBe('Hacker aesthetic with green matrix colors and sharp edges');
                expect(info.isAuto).toBe(false);
            });

            it('should handle bubbleTea theme correctly', () => {
                const info = getThemeDisplayInfo('bubbleTea', 'bubbleTea');

                expect(info.displayName).toBe('Bubble Tea');
                expect(info.description).toBe('Modern TUI with colorful gradients and rounded corners');
                expect(info.isAuto).toBe(false);
            });
        });
    });
});

describe('Theme System Integration', () => {
    it('should map system preferences correctly', () => {
        const testCases: Array<{
            darkMatches: boolean;
            lightMatches: boolean;
            expected: SystemThemeType;
        }> = [
                { darkMatches: true, lightMatches: false, expected: 'terminal' },
                { darkMatches: false, lightMatches: true, expected: 'bubbleTea' },
                { darkMatches: false, lightMatches: false, expected: 'terminal' }, // fallback
            ];

        testCases.forEach(({ darkMatches, lightMatches, expected }) => {
            window.matchMedia = vi.fn((query) => {
                if (query === '(prefers-color-scheme: dark)') {
                    return createMockMatchMedia(darkMatches);
                }
                if (query === '(prefers-color-scheme: light)') {
                    return createMockMatchMedia(lightMatches);
                }
                return createMockMatchMedia(false);
            });

            const preference = getSystemThemePreference();
            expect(preference).toBe(expected);
        });
    });
});