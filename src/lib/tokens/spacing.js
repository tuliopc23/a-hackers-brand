/**
 * A Hacker's Brand - Spacing Design Tokens
 * Consistent spacing system for liquid glass aesthetics
 */

export const brandSpacing = {
    // === BASE SPACING SCALE ===
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '0.75rem',    // 12px
    lg: '1rem',       // 16px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '2rem',    // 32px
    '4xl': '2.5rem',  // 40px
    '5xl': '3rem',    // 48px
    '6xl': '4rem',    // 64px

    // === COMPONENT SPACING ===
    component: {
        padding: {
            button: '0.75rem 1.5rem',
            input: '0.75rem 1rem',
            card: '1.5rem',
            modal: '2rem'
        },
        margin: {
            section: '3rem 0',
            element: '1rem 0',
            component: '0.5rem 0'
        },
        gap: {
            tight: '0.5rem',
            normal: '1rem',
            loose: '1.5rem',
            spread: '2rem'
        }
    },

    // === LAYOUT SPACING ===
    layout: {
        container: '1rem',
        section: '2rem',
        sidebar: '16rem',
        header: '4rem'
    }
}; 