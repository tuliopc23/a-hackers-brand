/**
 * Primitive Design Tokens
 * Raw values that form the foundation of the Liquid Glass Terminal Fusion design system
 */

export const primitives = {
  // Color Primitives - Liquid Terminal Spectrum
  colors: {
    // Primary Brand Colors
    accent: {
      50: '#e6fffa',
      100: '#b3ffe6',
      200: '#80ffd4',
      300: '#4dffc1',
      400: '#1affaf',
      500: '#00D4AA', // Primary accent - refined teal
      600: '#00aa88',
      700: '#008066',
      800: '#005544',
      900: '#002b22',
      950: '#001511'
    },
    
    // Terminal Deep Space
    terminal: {
      50: '#f5f5f7',
      100: '#e8e8ed',
      200: '#d1d1db',
      300: '#a8a8b8',
      400: '#7f7f95',
      500: '#565672',
      600: '#3a3a4f',
      700: '#2a2a3c',
      800: '#1A1A24', // Terminal surface
      900: '#0A0A0F', // Terminal deep
      950: '#050507'
    },
    
    // Syntax-Inspired Colors
    syntax: {
      function: '#5ED3F3',    // Turquoise
      string: '#FFD700',      // Golden
      keyword: '#FF79C6',     // Rose
      comment: '#6272A4',     // Muted
      variable: '#8BE9FD',    // Sky blue
      operator: '#FF6B6B',    // Coral
      constant: '#BD93F9',    // Purple
      type: '#50FA7B',        // Green
      error: '#FF5555',       // Red
      warning: '#FFB86C'      // Orange
    },
    
    // Glass Surface System
    glass: {
      white: {
        1: 'rgba(255, 255, 255, 0.04)',
        2: 'rgba(255, 255, 255, 0.08)',
        3: 'rgba(255, 255, 255, 0.12)',
        4: 'rgba(255, 255, 255, 0.16)',
        5: 'rgba(255, 255, 255, 0.20)',
        6: 'rgba(255, 255, 255, 0.24)',
        7: 'rgba(255, 255, 255, 0.28)',
        8: 'rgba(255, 255, 255, 0.32)'
      },
      black: {
        1: 'rgba(0, 0, 0, 0.04)',
        2: 'rgba(0, 0, 0, 0.08)',
        3: 'rgba(0, 0, 0, 0.12)',
        4: 'rgba(0, 0, 0, 0.16)',
        5: 'rgba(0, 0, 0, 0.20)',
        6: 'rgba(0, 0, 0, 0.24)',
        7: 'rgba(0, 0, 0, 0.28)',
        8: 'rgba(0, 0, 0, 0.32)'
      }
    },
    
    // Prismatic Effects
    prismatic: {
      red: '#FF006E',
      orange: '#FB5607',
      yellow: '#FFBE0B',
      green: '#8AC926',
      blue: '#3A86FF',
      purple: '#C77DFF',
      pink: '#FF4CC6'
    }
  },
  
  // Typography Primitives
  typography: {
    // Font Families
    fontFamily: {
      display: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      text: '"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"SF Mono", "Monaco", "Cascadia Code", "Roboto Mono", monospace',
      monoAlt: '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
      terminal: '"Berkeley Mono", "SF Mono", "Monaco", monospace'
    },
    
    // Font Sizes - Fluid Scale
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
      '7xl': '4.5rem',    // 72px
      '8xl': '6rem',      // 96px
      '9xl': '8rem'       // 128px
    },
    
    // Monospace Optimized Sizes
    monoSize: {
      xs: '0.6875rem',    // 11px
      sm: '0.8125rem',    // 13px
      base: '0.875rem',   // 14px
      lg: '1rem',         // 16px
      xl: '1.125rem',     // 18px
      '2xl': '1.25rem'    // 20px
    },
    
    // Font Weights
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    },
    
    // Line Heights
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      code: '1.7'
    },
    
    // Letter Spacing
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
      mono: '0.02em'
    }
  },
  
  // Spacing Primitives - 8px Base System
  spacing: {
    0: '0',
    px: '1px',
    0.5: '0.125rem',    // 2px
    1: '0.25rem',       // 4px
    1.5: '0.375rem',    // 6px
    2: '0.5rem',        // 8px
    2.5: '0.625rem',    // 10px
    3: '0.75rem',       // 12px
    3.5: '0.875rem',    // 14px
    4: '1rem',          // 16px
    5: '1.25rem',       // 20px
    6: '1.5rem',        // 24px
    7: '1.75rem',       // 28px
    8: '2rem',          // 32px
    9: '2.25rem',       // 36px
    10: '2.5rem',       // 40px
    11: '2.75rem',      // 44px
    12: '3rem',         // 48px
    14: '3.5rem',       // 56px
    16: '4rem',         // 64px
    20: '5rem',         // 80px
    24: '6rem',         // 96px
    28: '7rem',         // 112px
    32: '8rem',         // 128px
    36: '9rem',         // 144px
    40: '10rem',        // 160px
    44: '11rem',        // 176px
    48: '12rem',        // 192px
    52: '13rem',        // 208px
    56: '14rem',        // 224px
    60: '15rem',        // 240px
    64: '16rem',        // 256px
    72: '18rem',        // 288px
    80: '20rem',        // 320px
    96: '24rem'         // 384px
  },
  
  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',     // 2px
    base: '0.25rem',    // 4px
    md: '0.375rem',     // 6px
    lg: '0.5rem',       // 8px
    xl: '0.75rem',      // 12px
    '2xl': '1rem',      // 16px
    '3xl': '1.5rem',    // 24px
    full: '9999px',
    terminal: '0.5rem', // Terminal specific
    glass: '1rem'       // Glass morphism specific
  },
  
  // Shadows
  shadows: {
    // Glass Shadows
    glass: {
      xs: '0 1px 2px rgba(0, 0, 0, 0.02), 0 2px 4px rgba(0, 0, 0, 0.01)',
      sm: '0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03)',
      base: '0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.06)',
      md: '0 4px 16px rgba(0, 0, 0, 0.12), 0 16px 40px rgba(0, 0, 0, 0.08)',
      lg: '0 8px 32px rgba(0, 0, 0, 0.16), 0 24px 64px rgba(0, 0, 0, 0.12)',
      xl: '0 16px 48px rgba(0, 0, 0, 0.20), 0 32px 80px rgba(0, 0, 0, 0.15)',
      '2xl': '0 24px 64px rgba(0, 0, 0, 0.25), 0 48px 120px rgba(0, 0, 0, 0.20)'
    },
    
    // Colored Shadows
    colored: {
      accent: '0 4px 16px rgba(0, 212, 170, 0.25), 0 8px 32px rgba(0, 212, 170, 0.15)',
      function: '0 4px 16px rgba(94, 211, 243, 0.25), 0 8px 32px rgba(94, 211, 243, 0.15)',
      error: '0 4px 16px rgba(255, 85, 85, 0.25), 0 8px 32px rgba(255, 85, 85, 0.15)'
    },
    
    // Inner Shadows
    inner: {
      sm: 'inset 0 1px 2px rgba(0, 0, 0, 0.05)',
      base: 'inset 0 2px 4px rgba(0, 0, 0, 0.08)',
      md: 'inset 0 4px 8px rgba(0, 0, 0, 0.12)',
      lg: 'inset 0 8px 16px rgba(0, 0, 0, 0.16)'
    }
  },
  
  // Blur Values
  blur: {
    none: '0',
    sm: '4px',
    base: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '40px',
    '3xl': '64px'
  },
  
  // Z-Index Scale
  zIndex: {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    dropdown: '1000',
    sticky: '1020',
    fixed: '1030',
    modalBackdrop: '1040',
    modal: '1050',
    popover: '1060',
    tooltip: '1070',
    notification: '1080',
    commandPalette: '1090'
  },
  
  // Breakpoints
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    '3xl': '1920px',
    '4xl': '2560px'
  }
};
