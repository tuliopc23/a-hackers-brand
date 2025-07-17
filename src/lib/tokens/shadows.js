/**
 * A Hacker's Brand - Shadow Design Tokens
 * Liquid glass and depth shadow system
 */

export const brandShadows = {
    // === STANDARD SHADOWS ===
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',

    // === GLASS MORPHISM SHADOWS ===
    glass: {
        light: '0 8px 32px rgba(31, 38, 135, 0.37)',
        medium: '0 8px 32px rgba(31, 38, 135, 0.5)',
        heavy: '0 8px 32px rgba(31, 38, 135, 0.75)',
        glow: '0 0 20px rgba(0, 217, 255, 0.3)'
    },

    // === TERMINAL GLOW EFFECTS ===
    glow: {
        green: '0 0 10px rgba(0, 255, 65, 0.5), 0 0 20px rgba(0, 255, 65, 0.3)',
        blue: '0 0 10px rgba(0, 217, 255, 0.5), 0 0 20px rgba(0, 217, 255, 0.3)',
        amber: '0 0 10px rgba(255, 176, 0, 0.5), 0 0 20px rgba(255, 176, 0, 0.3)',
        red: '0 0 10px rgba(255, 0, 64, 0.5), 0 0 20px rgba(255, 0, 64, 0.3)',
        purple: '0 0 10px rgba(128, 64, 255, 0.5), 0 0 20px rgba(128, 64, 255, 0.3)'
    },

    // === ELEVATION SYSTEM ===
    elevation: {
        0: 'none',
        1: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        2: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
        3: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
        4: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
        5: '0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)'
    }
}; 