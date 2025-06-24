/**
 * Liquid Glass Tokens - Brand System
 * Enhanced tokens for stunning brand experiences
 */

export const liquidGlassTokens = {
  colors: {
    glass: {
      light: {
        primary: "rgba(255, 255, 255, 0.12)",
        secondary: "rgba(248, 250, 252, 0.15)",
        tertiary: "rgba(241, 245, 249, 0.18)",
        elevated: "rgba(255, 255, 255, 0.25)",
        floating: "rgba(255, 255, 255, 0.20)",
        overlay: "rgba(255, 255, 255, 0.30)"
      },
      dark: {
        primary: "rgba(28, 28, 30, 0.15)",
        secondary: "rgba(44, 44, 46, 0.18)",
        tertiary: "rgba(58, 58, 60, 0.22)",
        elevated: "rgba(88, 88, 90, 0.28)",
        floating: "rgba(68, 68, 70, 0.25)",
        overlay: "rgba(48, 48, 50, 0.35)"
      }
    }
  },
  
  shadows: {
    glass: {
      whisper: "0 1px 2px rgba(0, 0, 0, 0.02), 0 2px 4px rgba(0, 0, 0, 0.01)",
      subtle: "0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.03)",
      light: "0 2px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.06)",
      medium: "0 4px 16px rgba(0, 0, 0, 0.12), 0 16px 40px rgba(0, 0, 0, 0.08)",
      heavy: "0 8px 32px rgba(0, 0, 0, 0.16), 0 24px 64px rgba(0, 0, 0, 0.12)",
      intense: "0 16px 48px rgba(0, 0, 0, 0.20), 0 32px 80px rgba(0, 0, 0, 0.15)",
      extreme: "0 24px 64px rgba(0, 0, 0, 0.25), 0 48px 120px rgba(0, 0, 0, 0.20)"
    }
  },
  
  timing: {
    instant: "0.05s",
    fast: "0.15s", 
    normal: "0.25s",
    smooth: "0.35s",
    slow: "0.5s"
  },
  
  easing: {
    glass: "cubic-bezier(0.4, 0, 0.2, 1)",
    liquid: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    magnetic: "cubic-bezier(0.2, 0, 0, 1.2)",
    hover: "cubic-bezier(0.4, 0, 0.2, 1)"
  }
};
