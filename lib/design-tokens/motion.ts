/**
 * Motion Design Tokens
 * Animation and transition tokens for the Liquid Glass Terminal Fusion design system
 */

export const motion = {
  // Duration Tokens
  duration: {
    instant: '0ms',
    fast: '100ms',
    normal: '200ms',
    moderate: '300ms',
    slow: '400ms',
    slower: '600ms',
    slowest: '800ms',
    
    // Semantic Durations
    interaction: {
      hover: '200ms',
      press: '100ms',
      release: '150ms'
    },
    
    transition: {
      fade: '200ms',
      slide: '300ms',
      scale: '250ms',
      morph: '400ms'
    },
    
    animation: {
      spin: '1000ms',
      pulse: '2000ms',
      bounce: '800ms',
      shake: '500ms'
    },
    
    // Terminal Specific
    terminal: {
      typeChar: '50ms',
      typeLine: '1000ms',
      blink: '1000ms',
      execute: '300ms'
    }
  },
  
  // Easing Functions
  easing: {
    // Base Easings
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    
    // Custom Cubic Beziers
    glass: 'cubic-bezier(0.4, 0, 0.2, 1)',
    liquid: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    magnetic: 'cubic-bezier(0.2, 0, 0, 1.2)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    
    // Apple-Inspired
    appleSlow: 'cubic-bezier(0.4, 0, 0.2, 1)',
    appleFast: 'cubic-bezier(0.4, 0, 0.6, 1)',
    appleSpring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    
    // Terminal Specific
    terminalIn: 'cubic-bezier(0.4, 0, 0.2, 1)',
    terminalOut: 'cubic-bezier(0, 0, 0.2, 1)',
    typewriter: 'steps(1, end)'
  },
  
  // Keyframe Animations
  keyframes: {
    // Fade Animations
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 }
    },
    fadeOut: {
      from: { opacity: 1 },
      to: { opacity: 0 }
    },
    
    // Scale Animations
    scaleIn: {
      from: { transform: 'scale(0.9)', opacity: 0 },
      to: { transform: 'scale(1)', opacity: 1 }
    },
    scaleOut: {
      from: { transform: 'scale(1)', opacity: 1 },
      to: { transform: 'scale(0.9)', opacity: 0 }
    },
    
    // Slide Animations
    slideInUp: {
      from: { transform: 'translateY(100%)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 }
    },
    slideInDown: {
      from: { transform: 'translateY(-100%)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 }
    },
    slideInLeft: {
      from: { transform: 'translateX(-100%)', opacity: 0 },
      to: { transform: 'translateX(0)', opacity: 1 }
    },
    slideInRight: {
      from: { transform: 'translateX(100%)', opacity: 0 },
      to: { transform: 'translateX(0)', opacity: 1 }
    },
    
    // Glass Morphism Animations
    glassShimmer: {
      '0%': { 
        backgroundPosition: '-200% center',
        opacity: 0.5
      },
      '50%': {
        opacity: 0.8
      },
      '100%': { 
        backgroundPosition: '200% center',
        opacity: 0.5
      }
    },
    
    glassPulse: {
      '0%, 100%': {
        opacity: 0.4,
        transform: 'scale(1)'
      },
      '50%': {
        opacity: 0.6,
        transform: 'scale(1.05)'
      }
    },
    
    // Liquid Animations
    liquidFlow: {
      '0%': {
        transform: 'translateX(-100%) translateY(0) scale(1)',
        opacity: 0
      },
      '50%': {
        transform: 'translateX(0) translateY(-10px) scale(1.1)',
        opacity: 1
      },
      '100%': {
        transform: 'translateX(100%) translateY(0) scale(1)',
        opacity: 0
      }
    },
    
    liquidMorph: {
      '0%, 100%': {
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
      },
      '50%': {
        borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%'
      }
    },
    
    // Terminal Animations
    terminalBlink: {
      '0%, 49%': { opacity: 1 },
      '50%, 100%': { opacity: 0 }
    },
    
    terminalType: {
      from: { width: 0 },
      to: { width: '100%' }
    },
    
    terminalGlow: {
      '0%, 100%': {
        textShadow: '0 0 5px currentColor, 0 0 10px currentColor'
      },
      '50%': {
        textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor'
      }
    },
    
    // Loading Animations
    spin: {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' }
    },
    
    pulse: {
      '0%, 100%': {
        opacity: 1,
        transform: 'scale(1)'
      },
      '50%': {
        opacity: 0.5,
        transform: 'scale(0.95)'
      }
    },
    
    bounce: {
      '0%, 100%': {
        transform: 'translateY(0)',
        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
      },
      '50%': {
        transform: 'translateY(-25%)',
        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
      }
    },
    
    // Prismatic Effects
    prismaticShift: {
      '0%': {
        filter: 'hue-rotate(0deg) saturate(100%)'
      },
      '50%': {
        filter: 'hue-rotate(180deg) saturate(150%)'
      },
      '100%': {
        filter: 'hue-rotate(360deg) saturate(100%)'
      }
    },
    
    // Magnetic Hover
    magneticHover: {
      '0%': {
        transform: 'translate(0, 0) scale(1)'
      },
      '100%': {
        transform: 'translate(var(--magnetic-x, 0), var(--magnetic-y, 0)) scale(1.05)'
      }
    }
  },
  
  // Transition Presets
  transitions: {
    // Base Transitions
    all: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    none: 'none',
    
    // Property Specific
    opacity: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    colors: 'background-color 200ms cubic-bezier(0.4, 0, 0.2, 1), border-color 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    shadow: 'box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    
    // Component Transitions
    button: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    card: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    modal: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    dropdown: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    
    // Glass Transitions
    glass: 'all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    glassHover: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    
    // Terminal Transitions
    terminal: 'all 100ms cubic-bezier(0.4, 0, 0.2, 1)',
    terminalCommand: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)'
  },
  
  // Spring Configurations (for Framer Motion)
  spring: {
    // Stiffness & Damping Presets
    gentle: { stiffness: 100, damping: 15 },
    normal: { stiffness: 300, damping: 20 },
    bouncy: { stiffness: 400, damping: 10 },
    stiff: { stiffness: 700, damping: 30 },
    
    // Component Springs
    modal: { stiffness: 300, damping: 25 },
    dropdown: { stiffness: 400, damping: 25 },
    card: { stiffness: 200, damping: 20 },
    
    // Interaction Springs
    hover: { stiffness: 400, damping: 20 },
    tap: { stiffness: 500, damping: 25 },
    drag: { stiffness: 300, damping: 20 }
  },
  
  // Performance Hints
  performance: {
    // GPU Accelerated Properties
    accelerated: ['transform', 'opacity', 'filter'],
    
    // Will-change Values
    willChange: {
      transform: 'transform',
      opacity: 'opacity',
      filter: 'filter',
      all: 'transform, opacity, filter'
    },
    
    // Reduced Motion Queries
    reducedMotion: {
      query: '@media (prefers-reduced-motion: reduce)',
      duration: '0.01ms',
      easing: 'linear'
    }
  }
};
