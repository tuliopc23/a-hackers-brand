/**
 * Advanced Liquid Glass Animation Effects
 * Production-ready animation system for the Liquid Glass Terminal Fusion design system
 */

import { Variants } from 'framer-motion';

export const liquidGlassEffects = {
  // Core Glass Morphism Animations
  glassShimmer: {
    initial: {
      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      backgroundPosition: '-200% center',
      backgroundSize: '200% 100%'
    },
    animate: {
      backgroundPosition: ['200% center', '-200% center'],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    },
    hover: {
      background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)',
      backdropFilter: 'blur(25px) saturate(200%)',
      boxShadow: '0 16px 40px rgba(0, 212, 170, 0.25), 0 8px 16px rgba(0, 212, 170, 0.15)',
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  },

  // Liquid Flow Effects
  liquidMorph: {
    idle: {
      borderRadius: '20px',
      scale: 1,
      rotate: 0
    },
    hover: {
      borderRadius: ['20px', '25px', '15px', '20px'],
      scale: 1.02,
      rotate: [0, 1, -1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    },
    tap: {
      scale: 0.98,
      borderRadius: '15px',
      transition: {
        duration: 0.1,
        ease: 'easeInOut'
      }
    }
  },

  // Magnetic Hover Effects
  magneticHover: {
    initial: {
      x: 0,
      y: 0,
      scale: 1
    },
    hover: {
      x: 'var(--magnetic-x, 0)',
      y: 'var(--magnetic-y, 0)',
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }
  },

  // Prismatic Light Effects
  prismaticGlow: {
    initial: {
      filter: 'hue-rotate(0deg) saturate(100%) brightness(100%)',
      boxShadow: '0 0 0px rgba(0, 212, 170, 0)'
    },
    animate: {
      filter: [
        'hue-rotate(0deg) saturate(100%) brightness(100%)',
        'hue-rotate(60deg) saturate(150%) brightness(110%)',
        'hue-rotate(120deg) saturate(200%) brightness(120%)',
        'hue-rotate(180deg) saturate(150%) brightness(110%)',
        'hue-rotate(240deg) saturate(100%) brightness(100%)',
        'hue-rotate(300deg) saturate(150%) brightness(110%)',
        'hue-rotate(360deg) saturate(100%) brightness(100%)'
      ],
      boxShadow: [
        '0 0 0px rgba(0, 212, 170, 0)',
        '0 0 20px rgba(255, 0, 150, 0.3)',
        '0 0 30px rgba(0, 150, 255, 0.4)',
        '0 0 25px rgba(150, 255, 0, 0.3)',
        '0 0 20px rgba(255, 150, 0, 0.3)',
        '0 0 25px rgba(150, 0, 255, 0.3)',
        '0 0 0px rgba(0, 212, 170, 0)'
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  },

  // Terminal-Specific Animations
  terminalBoot: {
    hidden: {
      opacity: 0,
      scale: 0.8,
      filter: 'blur(20px)',
      rotateX: -15
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  },

  commandEntry: {
    hidden: {
      opacity: 0,
      x: -30,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25
      }
    },
    executing: {
      backgroundColor: 'rgba(0, 212, 170, 0.1)',
      boxShadow: '0 0 20px rgba(0, 212, 170, 0.3)',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    success: {
      backgroundColor: 'rgba(34, 197, 94, 0.1)',
      boxShadow: '0 0 15px rgba(34, 197, 94, 0.25)',
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    error: {
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
      boxShadow: '0 0 15px rgba(239, 68, 68, 0.25)',
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  },

  cursorBlink: {
    visible: {
      opacity: [1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'steps(1, end)'
      }
    }
  },

  // Advanced Glass Effects
  deepGlass: {
    initial: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(20px) saturate(180%)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    hover: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(30px) saturate(200%)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: [
        '0 8px 32px rgba(0, 0, 0, 0.3)',
        'inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        '0 0 40px rgba(0, 212, 170, 0.15)'
      ],
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    },
    focus: {
      background: 'rgba(255, 255, 255, 0.12)',
      backdropFilter: 'blur(35px) saturate(220%)',
      border: '1px solid rgba(0, 212, 170, 0.4)',
      boxShadow: [
        '0 12px 40px rgba(0, 0, 0, 0.4)',
        'inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        '0 0 0 4px rgba(0, 212, 170, 0.1)'
      ],
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  },

  // Quantum Effects
  quantumParticles: {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: [0, 1, 0],
      scale: [0.5, 1.5, 0.5],
      x: [0, Math.random() * 100 - 50],
      y: [0, Math.random() * 100 - 50],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
        times: [0, 0.5, 1]
      }
    }
  },

  // Performance-Optimized Presets
  fastGlass: {
    hover: {
      transform: 'translateY(-2px) scale(1.02)',
      filter: 'brightness(110%)',
      transition: {
        duration: 0.15,
        ease: 'easeOut'
      }
    }
  },

  ultraFastGlass: {
    hover: {
      transform: 'translateY(-1px)',
      opacity: 0.9,
      transition: {
        duration: 0.1,
        ease: 'easeOut'
      }
    }
  }
};

// Accessibility-aware animations with reduced motion support
export const accessibleGlassEffects = {
  respectMotion: (effect: Variants): Variants => ({
    ...effect,
    '@media (prefers-reduced-motion: reduce)': {
      ...effect,
      transition: {
        duration: 0.01
      },
      animate: {
        ...effect.animate,
        transition: {
          duration: 0.01
        }
      }
    }
  })
};

// Performance monitoring helpers
export const performanceOptimized = {
  willChange: {
    transform: 'transform',
    opacity: 'opacity',
    filter: 'filter'
  },
  
  gpuAccelerated: {
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden' as const,
    perspective: 1000
  }
};

// Easing functions for liquid glass
export const liquidEasing = {
  glass: 'cubic-bezier(0.4, 0, 0.2, 1)',
  liquid: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  magnetic: 'cubic-bezier(0.2, 0, 0, 1.2)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  terminal: 'cubic-bezier(0.4, 0, 0.2, 1)'
};

// Animation duration constants (optimized for 60fps)
export const liquidDurations = {
  instant: 0,
  ultraFast: 0.05, // 3 frames at 60fps
  fast: 0.1,       // 6 frames at 60fps
  normal: 0.2,     // 12 frames at 60fps
  slow: 0.3,       // 18 frames at 60fps
  slower: 0.5,     // 30 frames at 60fps
  terminal: 0.15   // 9 frames at 60fps
};