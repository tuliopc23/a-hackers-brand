/**
 * Advanced Theming and Customization System
 * Dynamic theme generation and real-time customization
 */

import { createContext, useContext, useEffect, useState } from 'react';

// Theme Configuration Types
export interface ThemeColors {
  // Brand Colors
  brand: {
    primary: string;
    secondary: string;
    accent: string;
    hover: string;
    active: string;
  };
  
  // Background Colors
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
    glass: string;
    terminal: string;
  };
  
  // Foreground Colors
  foreground: {
    primary: string;
    secondary: string;
    muted: string;
    inverse: string;
  };
  
  // State Colors
  state: {
    success: string;
    warning: string;
    error: string;
    info: string;
  };
  
  // Syntax Colors
  syntax: {
    function: string;
    string: string;
    keyword: string;
    comment: string;
    variable: string;
    operator: string;
    constant: string;
    type: string;
  };
  
  // Glass Colors
  glass: {
    light: Record<string, string>;
    dark: Record<string, string>;
    accent: Record<string, string>;
  };
}

export interface ThemeEffects {
  blur: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    colored: string;
  };
  
  gradients: {
    primary: string;
    secondary: string;
    glass: string;
    terminal: string;
  };
  
  animations: {
    duration: {
      fast: string;
      normal: string;
      slow: string;
    };
    easing: {
      glass: string;
      liquid: string;
      spring: string;
    };
  };
}

export interface Theme {
  name: string;
  displayName: string;
  description: string;
  category: 'official' | 'community' | 'custom';
  colors: ThemeColors;
  effects: ThemeEffects;
  preview: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

// Predefined Themes
export const defaultThemes: Record<string, Theme> = {
  quantum: {
    name: 'quantum',
    displayName: 'Quantum Glass',
    description: 'The original liquid glass terminal fusion theme',
    category: 'official',
    colors: {
      brand: {
        primary: '#00D4AA',
        secondary: '#00AA88',
        accent: '#1AFFAF',
        hover: '#4DFFC1',
        active: '#008066'
      },
      background: {
        primary: '#0A0A0F',
        secondary: '#1A1A24',
        tertiary: '#2A2A3C',
        glass: 'rgba(255, 255, 255, 0.08)',
        terminal: '#050507'
      },
      foreground: {
        primary: '#F5F5F7',
        secondary: '#D1D1DB',
        muted: '#A8A8B8',
        inverse: '#0A0A0F'
      },
      state: {
        success: '#50FA7B',
        warning: '#FFB86C',
        error: '#FF5555',
        info: '#5ED3F3'
      },
      syntax: {
        function: '#5ED3F3',
        string: '#FFD700',
        keyword: '#FF79C6',
        comment: '#6272A4',
        variable: '#8BE9FD',
        operator: '#FF6B6B',
        constant: '#BD93F9',
        type: '#50FA7B'
      },
      glass: {
        light: {
          '1': 'rgba(255, 255, 255, 0.04)',
          '2': 'rgba(255, 255, 255, 0.08)',
          '3': 'rgba(255, 255, 255, 0.12)',
          '4': 'rgba(255, 255, 255, 0.16)'
        },
        dark: {
          '1': 'rgba(0, 0, 0, 0.04)',
          '2': 'rgba(0, 0, 0, 0.08)',
          '3': 'rgba(0, 0, 0, 0.12)',
          '4': 'rgba(0, 0, 0, 0.16)'
        },
        accent: {
          '1': 'rgba(0, 212, 170, 0.10)',
          '2': 'rgba(0, 212, 170, 0.20)',
          '3': 'rgba(0, 212, 170, 0.30)',
          '4': 'rgba(0, 212, 170, 0.40)'
        }
      }
    },
    effects: {
      blur: {
        sm: '4px',
        md: '12px',
        lg: '20px',
        xl: '40px'
      },
      shadows: {
        sm: '0 2px 8px rgba(0, 0, 0, 0.08)',
        md: '0 4px 16px rgba(0, 0, 0, 0.12)',
        lg: '0 8px 32px rgba(0, 0, 0, 0.16)',
        xl: '0 16px 48px rgba(0, 0, 0, 0.20)',
        colored: '0 4px 16px rgba(0, 212, 170, 0.25)'
      },
      gradients: {
        primary: 'linear-gradient(135deg, #00D4AA 0%, #3B82F6 100%)',
        secondary: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
        glass: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        terminal: 'linear-gradient(135deg, #0A0A0F 0%, #1A1A24 100%)'
      },
      animations: {
        duration: {
          fast: '100ms',
          normal: '200ms',
          slow: '400ms'
        },
        easing: {
          glass: 'cubic-bezier(0.4, 0, 0.2, 1)',
          liquid: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        }
      }
    },
    preview: {
      primary: '#00D4AA',
      secondary: '#1A1A24',
      accent: '#5ED3F3'
    }
  },

  neon: {
    name: 'neon',
    displayName: 'Neon Cyberpunk',
    description: 'Vibrant cyberpunk theme with electric neon colors',
    category: 'official',
    colors: {
      brand: {
        primary: '#FF0080',
        secondary: '#CC0066',
        accent: '#FF4DC6',
        hover: '#FF66D9',
        active: '#990047'
      },
      background: {
        primary: '#0D0015',
        secondary: '#1A0033',
        tertiary: '#2D0066',
        glass: 'rgba(255, 0, 128, 0.08)',
        terminal: '#050008'
      },
      foreground: {
        primary: '#F0E6FF',
        secondary: '#D4B3FF',
        muted: '#B380FF',
        inverse: '#0D0015'
      },
      state: {
        success: '#00FF88',
        warning: '#FFAA00',
        error: '#FF3366',
        info: '#00DDFF'
      },
      syntax: {
        function: '#00FFFF',
        string: '#FFFF00',
        keyword: '#FF0080',
        comment: '#8A2BE2',
        variable: '#00FF88',
        operator: '#FF6600',
        constant: '#FF33CC',
        type: '#66FF66'
      },
      glass: {
        light: {
          '1': 'rgba(255, 0, 128, 0.04)',
          '2': 'rgba(255, 0, 128, 0.08)',
          '3': 'rgba(255, 0, 128, 0.12)',
          '4': 'rgba(255, 0, 128, 0.16)'
        },
        dark: {
          '1': 'rgba(13, 0, 21, 0.04)',
          '2': 'rgba(13, 0, 21, 0.08)',
          '3': 'rgba(13, 0, 21, 0.12)',
          '4': 'rgba(13, 0, 21, 0.16)'
        },
        accent: {
          '1': 'rgba(255, 0, 128, 0.10)',
          '2': 'rgba(255, 0, 128, 0.20)',
          '3': 'rgba(255, 0, 128, 0.30)',
          '4': 'rgba(255, 0, 128, 0.40)'
        }
      }
    },
    effects: {
      blur: {
        sm: '6px',
        md: '16px',
        lg: '24px',
        xl: '48px'
      },
      shadows: {
        sm: '0 0 8px rgba(255, 0, 128, 0.3)',
        md: '0 0 16px rgba(255, 0, 128, 0.4)',
        lg: '0 0 32px rgba(255, 0, 128, 0.5)',
        xl: '0 0 48px rgba(255, 0, 128, 0.6)',
        colored: '0 0 20px rgba(255, 0, 128, 0.8)'
      },
      gradients: {
        primary: 'linear-gradient(135deg, #FF0080 0%, #00FFFF 100%)',
        secondary: 'linear-gradient(135deg, #8A2BE2 0%, #FF1493 100%)',
        glass: 'linear-gradient(135deg, rgba(255,0,128,0.15) 0%, rgba(255,0,128,0.05) 100%)',
        terminal: 'linear-gradient(135deg, #0D0015 0%, #1A0033 100%)'
      },
      animations: {
        duration: {
          fast: '80ms',
          normal: '180ms',
          slow: '350ms'
        },
        easing: {
          glass: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          liquid: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        }
      }
    },
    preview: {
      primary: '#FF0080',
      secondary: '#1A0033',
      accent: '#00FFFF'
    }
  },

  forest: {
    name: 'forest',
    displayName: 'Digital Forest',
    description: 'Nature-inspired theme with organic green tones',
    category: 'official',
    colors: {
      brand: {
        primary: '#22C55E',
        secondary: '#16A34A',
        accent: '#4ADE80',
        hover: '#86EFAC',
        active: '#15803D'
      },
      background: {
        primary: '#0F1F0F',
        secondary: '#1A2A1A',
        tertiary: '#2A3A2A',
        glass: 'rgba(34, 197, 94, 0.08)',
        terminal: '#0A150A'
      },
      foreground: {
        primary: '#F0FDF4',
        secondary: '#DCFCE7',
        muted: '#BBF7D0',
        inverse: '#0F1F0F'
      },
      state: {
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6'
      },
      syntax: {
        function: '#60A5FA',
        string: '#FDE047',
        keyword: '#A78BFA',
        comment: '#6B7280',
        variable: '#34D399',
        operator: '#FB7185',
        constant: '#C084FC',
        type: '#22C55E'
      },
      glass: {
        light: {
          '1': 'rgba(34, 197, 94, 0.04)',
          '2': 'rgba(34, 197, 94, 0.08)',
          '3': 'rgba(34, 197, 94, 0.12)',
          '4': 'rgba(34, 197, 94, 0.16)'
        },
        dark: {
          '1': 'rgba(15, 31, 15, 0.04)',
          '2': 'rgba(15, 31, 15, 0.08)',
          '3': 'rgba(15, 31, 15, 0.12)',
          '4': 'rgba(15, 31, 15, 0.16)'
        },
        accent: {
          '1': 'rgba(34, 197, 94, 0.10)',
          '2': 'rgba(34, 197, 94, 0.20)',
          '3': 'rgba(34, 197, 94, 0.30)',
          '4': 'rgba(34, 197, 94, 0.40)'
        }
      }
    },
    effects: {
      blur: {
        sm: '3px',
        md: '10px',
        lg: '18px',
        xl: '36px'
      },
      shadows: {
        sm: '0 2px 6px rgba(34, 197, 94, 0.08)',
        md: '0 4px 12px rgba(34, 197, 94, 0.12)',
        lg: '0 8px 24px rgba(34, 197, 94, 0.16)',
        xl: '0 16px 40px rgba(34, 197, 94, 0.20)',
        colored: '0 4px 16px rgba(34, 197, 94, 0.25)'
      },
      gradients: {
        primary: 'linear-gradient(135deg, #22C55E 0%, #059669 100%)',
        secondary: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
        glass: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.05) 100%)',
        terminal: 'linear-gradient(135deg, #0F1F0F 0%, #1A2A1A 100%)'
      },
      animations: {
        duration: {
          fast: '120ms',
          normal: '250ms',
          slow: '450ms'
        },
        easing: {
          glass: 'cubic-bezier(0.4, 0, 0.2, 1)',
          liquid: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.2)'
        }
      }
    },
    preview: {
      primary: '#22C55E',
      secondary: '#1A2A1A',
      accent: '#60A5FA'
    }
  },

  arctic: {
    name: 'arctic',
    displayName: 'Arctic Glow',
    description: 'Cool blue theme with icy crystalline effects',
    category: 'official',
    colors: {
      brand: {
        primary: '#3B82F6',
        secondary: '#2563EB',
        accent: '#60A5FA',
        hover: '#93C5FD',
        active: '#1D4ED8'
      },
      background: {
        primary: '#0F1629',
        secondary: '#1E293B',
        tertiary: '#334155',
        glass: 'rgba(59, 130, 246, 0.08)',
        terminal: '#0A0F1C'
      },
      foreground: {
        primary: '#F8FAFC',
        secondary: '#E2E8F0',
        muted: '#CBD5E1',
        inverse: '#0F1629'
      },
      state: {
        success: '#06D6A0',
        warning: '#FFD23F',
        error: '#EF476F',
        info: '#118AB2'
      },
      syntax: {
        function: '#7DD3FC',
        string: '#FDE68A',
        keyword: '#C084FC',
        comment: '#64748B',
        variable: '#A7F3D0',
        operator: '#FBBF24',
        constant: '#DDD6FE',
        type: '#60A5FA'
      },
      glass: {
        light: {
          '1': 'rgba(59, 130, 246, 0.04)',
          '2': 'rgba(59, 130, 246, 0.08)',
          '3': 'rgba(59, 130, 246, 0.12)',
          '4': 'rgba(59, 130, 246, 0.16)'
        },
        dark: {
          '1': 'rgba(15, 22, 41, 0.04)',
          '2': 'rgba(15, 22, 41, 0.08)',
          '3': 'rgba(15, 22, 41, 0.12)',
          '4': 'rgba(15, 22, 41, 0.16)'
        },
        accent: {
          '1': 'rgba(59, 130, 246, 0.10)',
          '2': 'rgba(59, 130, 246, 0.20)',
          '3': 'rgba(59, 130, 246, 0.30)',
          '4': 'rgba(59, 130, 246, 0.40)'
        }
      }
    },
    effects: {
      blur: {
        sm: '5px',
        md: '14px',
        lg: '22px',
        xl: '44px'
      },
      shadows: {
        sm: '0 2px 8px rgba(59, 130, 246, 0.08)',
        md: '0 4px 16px rgba(59, 130, 246, 0.12)',
        lg: '0 8px 32px rgba(59, 130, 246, 0.16)',
        xl: '0 16px 48px rgba(59, 130, 246, 0.20)',
        colored: '0 4px 16px rgba(59, 130, 246, 0.25)'
      },
      gradients: {
        primary: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
        secondary: 'linear-gradient(135deg, #06B6D4 0%, #0369A1 100%)',
        glass: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0.05) 100%)',
        terminal: 'linear-gradient(135deg, #0F1629 0%, #1E293B 100%)'
      },
      animations: {
        duration: {
          fast: '110ms',
          normal: '220ms',
          slow: '420ms'
        },
        easing: {
          glass: 'cubic-bezier(0.4, 0, 0.2, 1)',
          liquid: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        }
      }
    },
    preview: {
      primary: '#3B82F6',
      secondary: '#1E293B',
      accent: '#7DD3FC'
    }
  }
};

// Theme Context
export interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeName: string) => void;
  customizeTheme: (customizations: Partial<Theme>) => void;
  createCustomTheme: (theme: Theme) => void;
  availableThemes: Record<string, Theme>;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme Utilities
export class ThemeGenerator {
  static generateColorVariations(baseColor: string, steps: number = 9): Record<string, string> {
    // This would implement actual color generation logic
    // For now, returning a simplified version
    const variations: Record<string, string> = {};
    for (let i = 1; i <= steps; i++) {
      variations[i.toString()] = `${baseColor}${Math.round(i * 11).toString(16).padStart(2, '0')}`;
    }
    return variations;
  }

  static generateGlassColors(primaryColor: string): ThemeColors['glass'] {
    return {
      light: {
        '1': `${primaryColor}10`,
        '2': `${primaryColor}20`,
        '3': `${primaryColor}30`,
        '4': `${primaryColor}40`
      },
      dark: {
        '1': 'rgba(0, 0, 0, 0.04)',
        '2': 'rgba(0, 0, 0, 0.08)',
        '3': 'rgba(0, 0, 0, 0.12)',
        '4': 'rgba(0, 0, 0, 0.16)'
      },
      accent: {
        '1': `${primaryColor}10`,
        '2': `${primaryColor}20`,
        '3': `${primaryColor}30`,
        '4': `${primaryColor}40`
      }
    };
  }

  static createCustomTheme(config: Partial<Theme>): Theme {
    const baseTheme = defaultThemes.quantum;
    return {
      ...baseTheme,
      ...config,
      colors: {
        ...baseTheme.colors,
        ...config.colors
      },
      effects: {
        ...baseTheme.effects,
        ...config.effects
      }
    };
  }

  static exportTheme(theme: Theme): string {
    return JSON.stringify(theme, null, 2);
  }

  static importTheme(themeJson: string): Theme {
    try {
      return JSON.parse(themeJson);
    } catch (error) {
      throw new Error('Invalid theme JSON format');
    }
  }
}

// CSS Variable Generator
export class CSSVariableGenerator {
  static generateCSSVariables(theme: Theme): string {
    const variables: string[] = [];

    // Brand colors
    Object.entries(theme.colors.brand).forEach(([key, value]) => {
      variables.push(`  --brand-${key}: ${value};`);
    });

    // Background colors
    Object.entries(theme.colors.background).forEach(([key, value]) => {
      variables.push(`  --bg-${key}: ${value};`);
    });

    // Foreground colors
    Object.entries(theme.colors.foreground).forEach(([key, value]) => {
      variables.push(`  --fg-${key}: ${value};`);
    });

    // State colors
    Object.entries(theme.colors.state).forEach(([key, value]) => {
      variables.push(`  --state-${key}: ${value};`);
    });

    // Syntax colors
    Object.entries(theme.colors.syntax).forEach(([key, value]) => {
      variables.push(`  --syntax-${key}: ${value};`);
    });

    // Glass colors
    Object.entries(theme.colors.glass.light).forEach(([key, value]) => {
      variables.push(`  --glass-light-${key}: ${value};`);
    });

    Object.entries(theme.colors.glass.dark).forEach(([key, value]) => {
      variables.push(`  --glass-dark-${key}: ${value};`);
    });

    Object.entries(theme.colors.glass.accent).forEach(([key, value]) => {
      variables.push(`  --glass-accent-${key}: ${value};`);
    });

    // Effects
    Object.entries(theme.effects.blur).forEach(([key, value]) => {
      variables.push(`  --blur-${key}: ${value};`);
    });

    Object.entries(theme.effects.shadows).forEach(([key, value]) => {
      variables.push(`  --shadow-${key}: ${value};`);
    });

    Object.entries(theme.effects.gradients).forEach(([key, value]) => {
      variables.push(`  --gradient-${key}: ${value};`);
    });

    Object.entries(theme.effects.animations.duration).forEach(([key, value]) => {
      variables.push(`  --duration-${key}: ${value};`);
    });

    Object.entries(theme.effects.animations.easing).forEach(([key, value]) => {
      variables.push(`  --easing-${key}: ${value};`);
    });

    return `:root {\n${variables.join('\n')}\n}`;
  }

  static applyCSSVariables(theme: Theme): void {
    const root = document.documentElement;

    // Apply brand colors
    Object.entries(theme.colors.brand).forEach(([key, value]) => {
      root.style.setProperty(`--brand-${key}`, value);
    });

    // Apply background colors
    Object.entries(theme.colors.background).forEach(([key, value]) => {
      root.style.setProperty(`--bg-${key}`, value);
    });

    // Apply foreground colors
    Object.entries(theme.colors.foreground).forEach(([key, value]) => {
      root.style.setProperty(`--fg-${key}`, value);
    });

    // Apply state colors
    Object.entries(theme.colors.state).forEach(([key, value]) => {
      root.style.setProperty(`--state-${key}`, value);
    });

    // Apply syntax colors
    Object.entries(theme.colors.syntax).forEach(([key, value]) => {
      root.style.setProperty(`--syntax-${key}`, value);
    });

    // Apply glass colors
    Object.entries(theme.colors.glass.light).forEach(([key, value]) => {
      root.style.setProperty(`--glass-light-${key}`, value);
    });

    Object.entries(theme.colors.glass.dark).forEach(([key, value]) => {
      root.style.setProperty(`--glass-dark-${key}`, value);
    });

    Object.entries(theme.colors.glass.accent).forEach(([key, value]) => {
      root.style.setProperty(`--glass-accent-${key}`, value);
    });

    // Apply effects
    Object.entries(theme.effects.blur).forEach(([key, value]) => {
      root.style.setProperty(`--blur-${key}`, value);
    });

    Object.entries(theme.effects.shadows).forEach(([key, value]) => {
      root.style.setProperty(`--shadow-${key}`, value);
    });

    Object.entries(theme.effects.gradients).forEach(([key, value]) => {
      root.style.setProperty(`--gradient-${key}`, value);
    });

    Object.entries(theme.effects.animations.duration).forEach(([key, value]) => {
      root.style.setProperty(`--duration-${key}`, value);
    });

    Object.entries(theme.effects.animations.easing).forEach(([key, value]) => {
      root.style.setProperty(`--easing-${key}`, value);
    });
  }
}

// Theme Hook
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Color Utilities
export class ColorUtilities {
  static hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  static rgbToHex(r: number, g: number, b: number): string {
    return "#" + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }).join("");
  }

  static lighten(color: string, amount: number): string {
    const rgb = this.hexToRgb(color);
    if (!rgb) return color;

    const { r, g, b } = rgb;
    const newR = Math.min(255, Math.round(r + (255 - r) * amount));
    const newG = Math.min(255, Math.round(g + (255 - g) * amount));
    const newB = Math.min(255, Math.round(b + (255 - b) * amount));

    return this.rgbToHex(newR, newG, newB);
  }

  static darken(color: string, amount: number): string {
    const rgb = this.hexToRgb(color);
    if (!rgb) return color;

    const { r, g, b } = rgb;
    const newR = Math.max(0, Math.round(r * (1 - amount)));
    const newG = Math.max(0, Math.round(g * (1 - amount)));
    const newB = Math.max(0, Math.round(b * (1 - amount)));

    return this.rgbToHex(newR, newG, newB);
  }

  static withAlpha(color: string, alpha: number): string {
    const rgb = this.hexToRgb(color);
    if (!rgb) return color;

    const { r, g, b } = rgb;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  static getContrastRatio(color1: string, color2: string): number {
    const getLuminance = (color: string): number => {
      const rgb = this.hexToRgb(color);
      if (!rgb) return 0;

      const { r, g, b } = rgb;
      const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });

      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    };

    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);

    return (brightest + 0.05) / (darkest + 0.05);
  }

  static isAccessible(foreground: string, background: string, level: 'AA' | 'AAA' = 'AA'): boolean {
    const ratio = this.getContrastRatio(foreground, background);
    return level === 'AA' ? ratio >= 4.5 : ratio >= 7;
  }
}