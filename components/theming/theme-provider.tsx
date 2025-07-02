'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { 
  Theme, 
  ThemeContextType,
  defaultThemes, 
  CSSVariableGenerator 
} from '@/lib/theming/theme-system';

// Theme Provider Component
export function ThemeProvider({ 
  children, 
  defaultTheme = 'quantum',
  enableSystemTheme = true,
  storageKey = 'liquid-glass-theme'
}: {
  children: ReactNode;
  defaultTheme?: string;
  enableSystemTheme?: boolean;
  storageKey?: string;
}) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(defaultThemes[defaultTheme] || defaultThemes.quantum);
  const [availableThemes, setAvailableThemes] = useState(defaultThemes);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [customThemes, setCustomThemes] = useState<Record<string, Theme>>({});

  // Load theme from localStorage on mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem(storageKey);
      if (savedTheme) {
        const themeData = JSON.parse(savedTheme);
        if (themeData.name && availableThemes[themeData.name]) {
          setCurrentTheme(availableThemes[themeData.name]);
        } else if (themeData.name && customThemes[themeData.name]) {
          setCurrentTheme(customThemes[themeData.name]);
        }
      }
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error);
    }
  }, [storageKey, availableThemes, customThemes]);

  // Apply CSS variables when theme changes
  useEffect(() => {
    CSSVariableGenerator.applyCSSVariables(currentTheme);
    
    // Save to localStorage
    try {
      localStorage.setItem(storageKey, JSON.stringify({ name: currentTheme.name }));
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
  }, [currentTheme, storageKey]);

  // Listen for system theme changes
  useEffect(() => {
    if (!enableSystemTheme) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [enableSystemTheme]);

  const setTheme = (themeName: string) => {
    const theme = availableThemes[themeName] || customThemes[themeName];
    if (theme) {
      setCurrentTheme(theme);
    }
  };

  const customizeTheme = (customizations: Partial<Theme>) => {
    const updatedTheme = {
      ...currentTheme,
      ...customizations,
      colors: {
        ...currentTheme.colors,
        ...customizations.colors
      },
      effects: {
        ...currentTheme.effects,
        ...customizations.effects
      }
    };
    setCurrentTheme(updatedTheme);
  };

  const createCustomTheme = (theme: Theme) => {
    setCustomThemes(prev => ({
      ...prev,
      [theme.name]: theme
    }));
    setAvailableThemes(prev => ({
      ...prev,
      [theme.name]: theme
    }));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const contextValue: ThemeContextType = {
    currentTheme,
    setTheme,
    customizeTheme,
    createCustomTheme,
    availableThemes: { ...availableThemes, ...customThemes },
    isDarkMode,
    toggleDarkMode
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div 
        className="min-h-screen transition-colors duration-300"
        style={{
          backgroundColor: currentTheme.colors.background.primary,
          color: currentTheme.colors.foreground.primary
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use the theme context
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Theme selector component
export function ThemeSelector({ 
  className,
  showPreview = true,
  compact = false 
}: { 
  className?: string;
  showPreview?: boolean;
  compact?: boolean;
}) {
  const { currentTheme, availableThemes, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  if (compact) {
    return (
      <div className={className}>
        <select
          value={currentTheme.name}
          onChange={(e) => setTheme(e.target.value)}
          className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm appearance-none cursor-pointer hover:bg-white/20 transition-colors"
        >
          {Object.values(availableThemes).map(theme => (
            <option key={theme.name} value={theme.name} className="bg-slate-800">
              {theme.displayName}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors w-full"
      >
        <div className="flex items-center gap-2">
          <div 
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: currentTheme.colors.brand.primary }}
          />
          <span className="font-medium">{currentTheme.displayName}</span>
        </div>
        <div className="ml-auto text-white/60">
          {isOpen ? '▲' : '▼'}
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-xl border border-white/20 rounded-lg overflow-hidden z-50">
          {Object.values(availableThemes).map(theme => (
            <button
              key={theme.name}
              onClick={() => {
                setTheme(theme.name);
                setIsOpen(false);
              }}
              className="w-full text-left p-4 hover:bg-white/10 transition-colors border-b border-white/10 last:border-b-0"
            >
              <div className="flex items-center gap-3 mb-2">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: theme.colors.brand.primary }}
                />
                <span className="text-white font-medium">{theme.displayName}</span>
                {currentTheme.name === theme.name && (
                  <div className="ml-auto text-emerald-400">✓</div>
                )}
              </div>
              
              {showPreview && (
                <>
                  <p className="text-white/60 text-sm mb-2">{theme.description}</p>
                  <div className="flex gap-1">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: theme.colors.brand.primary }}
                    />
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: theme.colors.brand.secondary }}
                    />
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: theme.colors.brand.accent }}
                    />
                  </div>
                </>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Theme switch component for quick theme switching
export function ThemeSwitch({ className }: { className?: string }) {
  const { availableThemes, currentTheme, setTheme } = useTheme();
  const themeNames = Object.keys(availableThemes);
  const currentIndex = themeNames.indexOf(currentTheme.name);

  const nextTheme = () => {
    const nextIndex = (currentIndex + 1) % themeNames.length;
    setTheme(themeNames[nextIndex]);
  };

  const prevTheme = () => {
    const prevIndex = (currentIndex - 1 + themeNames.length) % themeNames.length;
    setTheme(themeNames[prevIndex]);
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        onClick={prevTheme}
        className="w-8 h-8 flex items-center justify-center bg-white/10 border border-white/20 rounded hover:bg-white/20 transition-colors text-white"
      >
        ←
      </button>
      
      <div className="px-3 py-1 bg-white/10 border border-white/20 rounded text-white text-sm font-medium min-w-[120px] text-center">
        {currentTheme.displayName}
      </div>
      
      <button
        onClick={nextTheme}
        className="w-8 h-8 flex items-center justify-center bg-white/10 border border-white/20 rounded hover:bg-white/20 transition-colors text-white"
      >
        →
      </button>
    </div>
  );
}