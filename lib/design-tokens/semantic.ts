/**
 * Semantic Design Tokens
 * Maps primitive tokens to their semantic purpose in the design system
 */

import { primitives } from './primitives';

export const semantic = {
  // Color Semantics
  colors: {
    // Background Colors
    background: {
      primary: primitives.colors.terminal[900],
      secondary: primitives.colors.terminal[800],
      tertiary: primitives.colors.terminal[700],
      elevated: primitives.colors.glass.white[2],
      overlay: primitives.colors.glass.black[6],
      terminal: primitives.colors.terminal[950],
      glass: primitives.colors.glass.white[1]
    },
    
    // Foreground Colors
    foreground: {
      primary: primitives.colors.terminal[50],
      secondary: primitives.colors.terminal[200],
      tertiary: primitives.colors.terminal[300],
      muted: primitives.colors.terminal[400],
      disabled: primitives.colors.terminal[500],
      inverse: primitives.colors.terminal[900]
    },
    
    // Brand Colors
    brand: {
      primary: primitives.colors.accent[500],
      secondary: primitives.colors.accent[600],
      tertiary: primitives.colors.accent[400],
      hover: primitives.colors.accent[400],
      active: primitives.colors.accent[600],
      disabled: primitives.colors.accent[300]
    },
    
    // Interactive States
    state: {
      success: {
        base: primitives.colors.syntax.type,
        light: `${primitives.colors.syntax.type}20`,
        dark: `${primitives.colors.syntax.type}80`
      },
      warning: {
        base: primitives.colors.syntax.warning,
        light: `${primitives.colors.syntax.warning}20`,
        dark: `${primitives.colors.syntax.warning}80`
      },
      error: {
        base: primitives.colors.syntax.error,
        light: `${primitives.colors.syntax.error}20`,
        dark: `${primitives.colors.syntax.error}80`
      },
      info: {
        base: primitives.colors.syntax.function,
        light: `${primitives.colors.syntax.function}20`,
        dark: `${primitives.colors.syntax.function}80`
      }
    },
    
    // Terminal Command States
    terminal: {
      idle: primitives.colors.terminal[300],
      hover: primitives.colors.terminal[200],
      active: primitives.colors.accent[500],
      executing: primitives.colors.syntax.function,
      success: primitives.colors.syntax.type,
      error: primitives.colors.syntax.error,
      prompt: primitives.colors.accent[400],
      cursor: primitives.colors.accent[500]
    },
    
    // Syntax Highlighting
    syntax: {
      function: primitives.colors.syntax.function,
      string: primitives.colors.syntax.string,
      keyword: primitives.colors.syntax.keyword,
      comment: primitives.colors.syntax.comment,
      variable: primitives.colors.syntax.variable,
      operator: primitives.colors.syntax.operator,
      constant: primitives.colors.syntax.constant,
      type: primitives.colors.syntax.type
    },
    
    // Glass Surfaces
    glass: {
      light: primitives.colors.glass.white,
      dark: primitives.colors.glass.black,
      accent: {
        1: `${primitives.colors.accent[500]}10`,
        2: `${primitives.colors.accent[500]}20`,
        3: `${primitives.colors.accent[500]}30`,
        4: `${primitives.colors.accent[500]}40`
      }
    }
  },
  
  // Typography Semantics
  typography: {
    // Display Typography
    display: {
      fontFamily: primitives.typography.fontFamily.display,
      fontSize: {
        sm: primitives.typography.fontSize['3xl'],
        md: primitives.typography.fontSize['4xl'],
        lg: primitives.typography.fontSize['5xl'],
        xl: primitives.typography.fontSize['6xl'],
        '2xl': primitives.typography.fontSize['7xl']
      },
      fontWeight: primitives.typography.fontWeight.bold,
      lineHeight: primitives.typography.lineHeight.tight,
      letterSpacing: primitives.typography.letterSpacing.tight
    },
    
    // Heading Typography
    heading: {
      fontFamily: primitives.typography.fontFamily.display,
      fontSize: {
        h1: primitives.typography.fontSize['4xl'],
        h2: primitives.typography.fontSize['3xl'],
        h3: primitives.typography.fontSize['2xl'],
        h4: primitives.typography.fontSize.xl,
        h5: primitives.typography.fontSize.lg,
        h6: primitives.typography.fontSize.base
      },
      fontWeight: primitives.typography.fontWeight.semibold,
      lineHeight: primitives.typography.lineHeight.tight,
      letterSpacing: primitives.typography.letterSpacing.tight
    },
    
    // Body Typography
    body: {
      fontFamily: primitives.typography.fontFamily.text,
      fontSize: {
        sm: primitives.typography.fontSize.sm,
        base: primitives.typography.fontSize.base,
        lg: primitives.typography.fontSize.lg
      },
      fontWeight: primitives.typography.fontWeight.normal,
      lineHeight: primitives.typography.lineHeight.normal,
      letterSpacing: primitives.typography.letterSpacing.normal
    },
    
    // Code Typography
    code: {
      fontFamily: primitives.typography.fontFamily.mono,
      fontSize: {
        sm: primitives.typography.monoSize.sm,
        base: primitives.typography.monoSize.base,
        lg: primitives.typography.monoSize.lg
      },
      fontWeight: primitives.typography.fontWeight.normal,
      lineHeight: primitives.typography.lineHeight.code,
      letterSpacing: primitives.typography.letterSpacing.mono
    },
    
    // Terminal Typography
    terminal: {
      fontFamily: primitives.typography.fontFamily.terminal,
      fontSize: {
        sm: primitives.typography.monoSize.sm,
        base: primitives.typography.monoSize.base,
        lg: primitives.typography.monoSize.lg
      },
      fontWeight: primitives.typography.fontWeight.medium,
      lineHeight: primitives.typography.lineHeight.code,
      letterSpacing: primitives.typography.letterSpacing.mono
    }
  },
  
  // Spacing Semantics
  spacing: {
    // Layout Spacing
    layout: {
      xs: primitives.spacing[2],
      sm: primitives.spacing[4],
      md: primitives.spacing[6],
      lg: primitives.spacing[8],
      xl: primitives.spacing[12],
      '2xl': primitives.spacing[16],
      '3xl': primitives.spacing[24]
    },
    
    // Component Spacing
    component: {
      padding: {
        xs: primitives.spacing[2],
        sm: primitives.spacing[3],
        md: primitives.spacing[4],
        lg: primitives.spacing[6],
        xl: primitives.spacing[8]
      },
      gap: {
        xs: primitives.spacing[1],
        sm: primitives.spacing[2],
        md: primitives.spacing[3],
        lg: primitives.spacing[4],
        xl: primitives.spacing[6]
      }
    },
    
    // Terminal Spacing
    terminal: {
      padding: primitives.spacing[4],
      lineGap: primitives.spacing[1],
      blockGap: primitives.spacing[4],
      promptGap: primitives.spacing[2]
    },
    
    // Section Spacing
    section: {
      sm: primitives.spacing[16],
      md: primitives.spacing[24],
      lg: primitives.spacing[32],
      xl: primitives.spacing[48]
    }
  },
  
  // Border Radius Semantics
  borderRadius: {
    component: {
      sm: primitives.borderRadius.md,
      md: primitives.borderRadius.lg,
      lg: primitives.borderRadius.xl,
      full: primitives.borderRadius.full
    },
    terminal: primitives.borderRadius.terminal,
    glass: primitives.borderRadius.glass,
    button: primitives.borderRadius.lg,
    input: primitives.borderRadius.md,
    card: primitives.borderRadius.xl,
    modal: primitives.borderRadius['2xl']
  },
  
  // Shadow Semantics
  shadows: {
    // Component Shadows
    component: {
      sm: primitives.shadows.glass.sm,
      md: primitives.shadows.glass.base,
      lg: primitives.shadows.glass.md,
      xl: primitives.shadows.glass.lg
    },
    
    // Interactive Shadows
    interactive: {
      hover: primitives.shadows.glass.md,
      active: primitives.shadows.glass.sm,
      focus: primitives.shadows.colored.accent
    },
    
    // Terminal Shadows
    terminal: {
      window: primitives.shadows.glass.lg,
      command: primitives.shadows.glass.sm,
      hover: primitives.shadows.glass.md
    },
    
    // Modal Shadows
    modal: primitives.shadows.glass.xl,
    dropdown: primitives.shadows.glass.lg,
    tooltip: primitives.shadows.glass.md
  },
  
  // Blur Semantics
  blur: {
    glass: {
      sm: primitives.blur.sm,
      md: primitives.blur.base,
      lg: primitives.blur.md,
      xl: primitives.blur.lg
    },
    overlay: primitives.blur.xl,
    modal: primitives.blur['2xl']
  },
  
  // Z-Index Semantics
  zIndex: {
    base: primitives.zIndex[0],
    raised: primitives.zIndex[10],
    dropdown: primitives.zIndex.dropdown,
    sticky: primitives.zIndex.sticky,
    fixed: primitives.zIndex.fixed,
    modal: primitives.zIndex.modal,
    popover: primitives.zIndex.popover,
    tooltip: primitives.zIndex.tooltip,
    notification: primitives.zIndex.notification,
    commandPalette: primitives.zIndex.commandPalette
  }
};
