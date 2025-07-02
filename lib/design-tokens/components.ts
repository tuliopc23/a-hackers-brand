/**
 * Component Design Tokens
 * Component-specific token mappings for the Liquid Glass Terminal Fusion design system
 */

import { semantic } from './semantic';
import { motion } from './motion';

export const components = {
  // Button Component Tokens
  button: {
    // Sizing
    size: {
      sm: {
        height: '2rem',
        paddingX: semantic.spacing.component.padding.sm,
        paddingY: semantic.spacing.component.padding.xs,
        fontSize: semantic.typography.body.fontSize.sm,
        iconSize: '1rem'
      },
      md: {
        height: '2.5rem',
        paddingX: semantic.spacing.component.padding.md,
        paddingY: semantic.spacing.component.padding.sm,
        fontSize: semantic.typography.body.fontSize.base,
        iconSize: '1.25rem'
      },
      lg: {
        height: '3rem',
        paddingX: semantic.spacing.component.padding.lg,
        paddingY: semantic.spacing.component.padding.md,
        fontSize: semantic.typography.body.fontSize.lg,
        iconSize: '1.5rem'
      }
    },
    
    // Variants
    variant: {
      primary: {
        background: semantic.colors.brand.primary,
        color: semantic.colors.foreground.inverse,
        border: 'transparent',
        hover: {
          background: semantic.colors.brand.hover,
          shadow: semantic.shadows.interactive.hover
        },
        active: {
          background: semantic.colors.brand.active,
          shadow: semantic.shadows.interactive.active
        }
      },
      glass: {
        background: semantic.colors.glass.light[3],
        color: semantic.colors.foreground.primary,
        border: semantic.colors.glass.light[4],
        backdropFilter: semantic.blur.glass.md,
        hover: {
          background: semantic.colors.glass.light[4],
          border: semantic.colors.glass.light[5],
          shadow: semantic.shadows.interactive.hover
        },
        active: {
          background: semantic.colors.glass.light[5],
          shadow: semantic.shadows.interactive.active
        }
      },
      terminal: {
        background: semantic.colors.terminal.idle,
        color: semantic.colors.syntax.function,
        border: semantic.colors.terminal.active,
        hover: {
          background: semantic.colors.terminal.hover,
          color: semantic.colors.terminal.active,
          shadow: semantic.shadows.terminal.hover
        },
        active: {
          background: semantic.colors.terminal.active,
          color: semantic.colors.background.terminal
        }
      }
    },
    
    // Common Properties
    borderRadius: semantic.borderRadius.button,
    fontWeight: semantic.typography.body.fontWeight,
    transition: motion.transitions.button,
    focusRing: {
      color: semantic.colors.brand.primary,
      width: '2px',
      offset: '2px'
    }
  },
  
  // Card Component Tokens
  card: {
    // Variants
    variant: {
      glass: {
        background: semantic.colors.glass.light[2],
        border: semantic.colors.glass.light[3],
        backdropFilter: semantic.blur.glass.lg,
        shadow: semantic.shadows.component.md
      },
      elevated: {
        background: semantic.colors.background.elevated,
        border: semantic.colors.glass.light[2],
        shadow: semantic.shadows.component.lg
      },
      terminal: {
        background: semantic.colors.background.terminal,
        border: semantic.colors.terminal.idle,
        shadow: semantic.shadows.terminal.window
      }
    },
    
    // Sizing
    padding: {
      sm: semantic.spacing.component.padding.md,
      md: semantic.spacing.component.padding.lg,
      lg: semantic.spacing.component.padding.xl
    },
    
    // Common Properties
    borderRadius: semantic.borderRadius.card,
    transition: motion.transitions.card
  },
  
  // Input Component Tokens
  input: {
    // Sizing
    size: {
      sm: {
        height: '2rem',
        paddingX: semantic.spacing.component.padding.sm,
        fontSize: semantic.typography.body.fontSize.sm
      },
      md: {
        height: '2.5rem',
        paddingX: semantic.spacing.component.padding.md,
        fontSize: semantic.typography.body.fontSize.base
      },
      lg: {
        height: '3rem',
        paddingX: semantic.spacing.component.padding.lg,
        fontSize: semantic.typography.body.fontSize.lg
      }
    },
    
    // States
    state: {
      default: {
        background: semantic.colors.glass.light[1],
        border: semantic.colors.glass.light[3],
        color: semantic.colors.foreground.primary
      },
      hover: {
        border: semantic.colors.glass.light[4],
        background: semantic.colors.glass.light[2]
      },
      focus: {
        border: semantic.colors.brand.primary,
        shadow: semantic.shadows.interactive.focus,
        background: semantic.colors.glass.light[2]
      },
      error: {
        border: semantic.colors.state.error.base,
        shadow: `0 0 0 3px ${semantic.colors.state.error.light}`
      },
      disabled: {
        background: semantic.colors.glass.light[1],
        color: semantic.colors.foreground.disabled,
        cursor: 'not-allowed'
      }
    },
    
    // Common Properties
    borderRadius: semantic.borderRadius.input,
    transition: motion.transitions.all,
    placeholder: {
      color: semantic.colors.foreground.muted
    }
  },
  
  // Terminal Component Tokens
  terminal: {
    // Window
    window: {
      background: semantic.colors.background.terminal,
      border: semantic.colors.terminal.idle,
      borderRadius: semantic.borderRadius.terminal,
      shadow: semantic.shadows.terminal.window,
      backdropFilter: semantic.blur.glass.xl,
      padding: semantic.spacing.terminal.padding
    },
    
    // Header
    header: {
      height: '2.5rem',
      background: semantic.colors.glass.dark[2],
      borderBottom: semantic.colors.glass.dark[3],
      padding: semantic.spacing.component.padding.sm
    },
    
    // Command Block
    commandBlock: {
      padding: semantic.spacing.terminal.padding,
      margin: semantic.spacing.terminal.blockGap,
      background: semantic.colors.glass.dark[1],
      border: 'transparent',
      borderRadius: semantic.borderRadius.component.sm,
      hover: {
        background: semantic.colors.glass.dark[2],
        border: semantic.colors.terminal.hover
      },
      active: {
        background: semantic.colors.glass.accent[1],
        border: semantic.colors.terminal.active
      }
    },
    
    // Typography
    typography: {
      fontFamily: semantic.typography.terminal.fontFamily,
      fontSize: semantic.typography.terminal.fontSize.base,
      lineHeight: semantic.typography.terminal.lineHeight,
      letterSpacing: semantic.typography.terminal.letterSpacing
    },
    
    // Colors
    colors: {
      prompt: semantic.colors.terminal.prompt,
      command: semantic.colors.foreground.primary,
      output: semantic.colors.foreground.secondary,
      error: semantic.colors.state.error.base,
      success: semantic.colors.state.success.base,
      cursor: semantic.colors.terminal.cursor
    },
    
    // Animations
    cursor: {
      animation: `${motion.duration.terminal.blink} ${motion.easing.linear} infinite`,
      keyframes: motion.keyframes.terminalBlink
    }
  },
  
  // Modal Component Tokens
  modal: {
    // Overlay
    overlay: {
      background: semantic.colors.background.overlay,
      backdropFilter: semantic.blur.overlay
    },
    
    // Content
    content: {
      background: semantic.colors.glass.light[3],
      border: semantic.colors.glass.light[4],
      borderRadius: semantic.borderRadius.modal,
      shadow: semantic.shadows.modal,
      backdropFilter: semantic.blur.glass.xl,
      padding: semantic.spacing.component.padding.xl,
      maxWidth: '32rem',
      margin: semantic.spacing.layout.md
    },
    
    // Animation
    animation: {
      duration: motion.duration.moderate,
      easing: motion.easing.glass,
      spring: motion.spring.modal
    }
  },
  
  // Tooltip Component Tokens
  tooltip: {
    background: semantic.colors.glass.dark[7],
    color: semantic.colors.foreground.primary,
    border: semantic.colors.glass.dark[8],
    borderRadius: semantic.borderRadius.component.sm,
    padding: `${semantic.spacing.component.padding.xs} ${semantic.spacing.component.padding.sm}`,
    fontSize: semantic.typography.body.fontSize.sm,
    shadow: semantic.shadows.tooltip,
    backdropFilter: semantic.blur.glass.md,
    animation: {
      duration: motion.duration.fast,
      easing: motion.easing.glass
    }
  },
  
  // Badge Component Tokens
  badge: {
    // Sizing
    size: {
      sm: {
        height: '1.25rem',
        paddingX: semantic.spacing.component.padding.xs,
        fontSize: '0.625rem'
      },
      md: {
        height: '1.5rem',
        paddingX: semantic.spacing.component.padding.sm,
        fontSize: semantic.typography.body.fontSize.sm
      },
      lg: {
        height: '1.75rem',
        paddingX: semantic.spacing.component.padding.md,
        fontSize: semantic.typography.body.fontSize.base
      }
    },
    
    // Variants
    variant: {
      default: {
        background: semantic.colors.glass.light[3],
        color: semantic.colors.foreground.primary,
        border: semantic.colors.glass.light[4]
      },
      success: {
        background: semantic.colors.state.success.light,
        color: semantic.colors.state.success.dark,
        border: semantic.colors.state.success.base
      },
      warning: {
        background: semantic.colors.state.warning.light,
        color: semantic.colors.state.warning.dark,
        border: semantic.colors.state.warning.base
      },
      error: {
        background: semantic.colors.state.error.light,
        color: semantic.colors.state.error.dark,
        border: semantic.colors.state.error.base
      },
      info: {
        background: semantic.colors.state.info.light,
        color: semantic.colors.state.info.dark,
        border: semantic.colors.state.info.base
      }
    },
    
    // Common Properties
    borderRadius: semantic.borderRadius.component.full,
    fontWeight: semantic.typography.body.fontWeight
  },
  
  // Navigation Component Tokens
  navigation: {
    height: '4rem',
    background: semantic.colors.glass.dark[2],
    border: semantic.colors.glass.dark[3],
    backdropFilter: semantic.blur.glass.xl,
    shadow: semantic.shadows.component.sm,
    padding: semantic.spacing.layout.md,
    
    // Links
    link: {
      color: semantic.colors.foreground.secondary,
      hover: {
        color: semantic.colors.foreground.primary,
        background: semantic.colors.glass.light[2]
      },
      active: {
        color: semantic.colors.brand.primary,
        background: semantic.colors.glass.accent[1]
      },
      padding: `${semantic.spacing.component.padding.sm} ${semantic.spacing.component.padding.md}`,
      borderRadius: semantic.borderRadius.component.sm,
      transition: motion.transitions.all
    }
  },
  
  // Progress Component Tokens
  progress: {
    height: '0.5rem',
    background: semantic.colors.glass.light[2],
    borderRadius: semantic.borderRadius.component.full,
    
    // Bar
    bar: {
      background: `linear-gradient(90deg, ${semantic.colors.brand.primary}, ${semantic.colors.syntax.function})`,
      borderRadius: semantic.borderRadius.component.full,
      transition: `width ${motion.duration.moderate} ${motion.easing.glass}`,
      glow: {
        shadow: `0 0 20px ${semantic.colors.brand.primary}`
      }
    },
    
    // Variants
    variant: {
      default: {
        bar: semantic.colors.brand.primary
      },
      success: {
        bar: semantic.colors.state.success.base
      },
      warning: {
        bar: semantic.colors.state.warning.base
      },
      error: {
        bar: semantic.colors.state.error.base
      }
    }
  }
};
