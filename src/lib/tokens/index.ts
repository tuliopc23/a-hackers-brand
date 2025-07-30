// A Hacker's Brand - Design Tokens
// Advanced Hacker Color Palette - Retro Futuristic
export const brandColors = {
    // Core Hacker Terminal Colors
    terminal: {
        green: '#00ff41', // Classic Matrix green
        cyan: '#00ffff', // Electric cyan
        blue: '#0080ff', // Neon blue
        purple: '#8a2be2', // Deep purple
        matrix: '#00ff88', // Matrix accent green
        neon: '#ff1493', // Hot pink neon
        amber: '#ffbf00', // Retro amber
        lime: '#32cd32', // Lime green
        magenta: '#ff00ff', // Electric magenta
        orange: '#ff4500' // Cyber orange
    },
    // Retro Futuristic Gradients
    gradients: {
        cyberpunk: 'linear-gradient(135deg, #ff1493 0%, #8a2be2 50%, #00ffff 100%)',
        matrix: 'linear-gradient(180deg, #00ff41 0%, #008f11 100%)',
        neon: 'linear-gradient(90deg, #ff00ff 0%, #00ffff 50%, #ffff00 100%)',
        synthwave: 'linear-gradient(135deg, #ff006e 0%, #8338ec 50%, #3a86ff 100%)',
        terminal: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)',
        hologram: 'linear-gradient(45deg, rgba(0,255,255,0.1) 0%, rgba(255,0,255,0.1) 50%, rgba(255,255,0,0.1) 100%)'
    },
    // Glass Morphism System
    glass: {
        primary: 'rgba(0, 255, 65, 0.15)',
        secondary: 'rgba(0, 255, 255, 0.12)',
        accent: 'rgba(255, 255, 255, 0.08)',
        background: 'rgba(0, 0, 0, 0.4)',
        border: 'rgba(0, 255, 65, 0.3)',
        glow: 'rgba(0, 255, 65, 0.5)',
        shadow: 'rgba(0, 255, 65, 0.2)'
    },
    // Semantic Colors with Hacker Aesthetic
    semantic: {
        success: '#00ff41',
        warning: '#ffbf00',
        error: '#ff073a',
        info: '#00ffff',
        neutral: '#808080'
    },
    // Background System
    backgrounds: {
        primary: '#0a0a0f',
        secondary: '#1a1a2e',
        tertiary: '#16213e',
        surface: '#1e1e1e',
        panel: 'rgba(255, 255, 255, 0.05)',
        overlay: 'rgba(0, 0, 0, 0.8)'
    },
    // Text Colors
    text: {
        primary: '#ffffff',
        secondary: '#cccccc',
        muted: '#888888',
        inverse: '#000000',
        terminal: '#00ff41',
        neon: '#00ffff',
        accent: '#ff1493'
    }
};

// Typography Scale
export const typography = {
    fontFamily: {
        mono: ['PP Supply Mono', 'Consolas', 'Monaco', 'monospace'],
        sans: ['PP Supply Sans', 'Inter', 'system-ui', 'sans-serif']
    },
    fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem'
    },
    lineHeight: {
        tight: '1.25',
        normal: '1.5',
        relaxed: '1.75'
    }
};

// Spacing Scale
export const spacing = {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem'
};

// Glass Effects
export const glassEffects = {
    blur: {
        sm: 'blur(4px)',
        md: 'blur(8px)',
        lg: 'blur(12px)',
        xl: 'blur(16px)'
    },
    backdrop: {
        light: 'rgba(255, 255, 255, 0.1)',
        medium: 'rgba(255, 255, 255, 0.15)',
        heavy: 'rgba(255, 255, 255, 0.25)'
    },
    border: {
        subtle: '1px solid rgba(255, 255, 255, 0.1)',
        medium: '1px solid rgba(255, 255, 255, 0.2)',
        strong: '2px solid rgba(255, 255, 255, 0.3)'
    }
};

// Shadow System
export const shadows = {
    glass: {
        sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)'
    },
    glow: {
        terminal: '0 0 20px rgba(0, 212, 170, 0.5)',
        cyan: '0 0 20px rgba(0, 170, 255, 0.5)',
        purple: '0 0 20px rgba(136, 68, 255, 0.5)',
        danger: '0 0 20px rgba(255, 68, 68, 0.5)'
    }
};

// Animation Timings
export const animations = {
    duration: {
        fast: '150ms',
        normal: '300ms',
        slow: '500ms',
        slower: '750ms'
    },
    easing: {
        ease: 'ease',
        easeIn: 'ease-in',
        easeOut: 'ease-out',
        easeInOut: 'ease-in-out',
        spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        bouncy: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }
};

// Component Sizes
export const componentSizes = {
    sm: {
        padding: '0.5rem 1rem',
        fontSize: '0.875rem',
        height: '2rem'
    },
    md: {
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        height: '2.5rem'
    },
    lg: {
        padding: '1rem 2rem',
        fontSize: '1.125rem',
        height: '3rem'
    },
    xl: {
        padding: '1.25rem 2.5rem',
        fontSize: '1.25rem',
        height: '3.5rem'
    }
};

// Z-Index Scale
export const zIndex = {
    behind: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800
};

// Export combined tokens
export const tokens = {
    colors: brandColors,
    typography,
    spacing,
    effects: glassEffects,
    shadows,
    animations,
    sizes: componentSizes,
    zIndex
};

export default tokens;