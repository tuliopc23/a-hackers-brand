// Glass UI Component Library - Main Exports
// Automatically generated component index

// ==============================================
// UI Components
// ==============================================
export { ThemeToggle } from '../../../components/ui/theme-toggle';

// ==============================================
// Layout Components  
// ==============================================
export { Navbar } from '@/components/layout/navbar/navbar';
export { Sidebar } from '@/components/layout/sidebar/sidebar';
export { GlassHeader } from '@/components/layout/glass-header';
export { GlassFooter } from '@/components/layout/glass-footer';

// ==============================================
// Marketing Components
// ==============================================
export { GlassHero } from '@/components/marketing/glass-hero';
export { GlassFeatureShowcase } from '@/components/marketing/glass-feature-showcase';
export { GlassFloatingAction } from '@/components/marketing/glass-floating-action';
export { GlassResponsiveButton } from '@/components/marketing/glass-responsive-button';
export { GlassResponsiveCard } from '@/components/marketing/glass-responsive-card';

// ==============================================
// Terminal Components
// ==============================================
export { TerminalWindow } from '@/components/terminal/terminal-window';
export { CommandBlock } from '@/components/terminal/command-block';
export { PerformanceMonitor } from '@/components/terminal/performance-monitor';
export { AiCommandSuggestions } from '@/components/terminal/ai-command-suggestions';

// ==============================================
// Advanced Components
// ==============================================
export { NeuralNetworkVisualizer } from '@/components/advanced/neural-network-visualizer';
export { ProjectShowcaseAR } from '@/components/advanced/project-showcase-ar';
export { SkillNetwork3D } from '@/components/advanced/skill-network-3d';

// ==============================================
// Showcase Components
// ==============================================
export { ComponentShowcase } from '@/components/showcase/component-showcase';
export { ComprehensiveDemo } from '@/components/showcase/comprehensive-demo';

// ==============================================
// Documentation Components
// ==============================================
export { InteractivePlayground } from '@/components/docs/interactive-playground';

// ==============================================
// Theming Components
// ==============================================
export { ThemeCustomizer } from '@/components/theming/theme-customizer';
export { ThemeProvider } from '@/components/theming/theme-provider';

// ==============================================
// Re-export commonly used types and utilities
// ==============================================
export type { ComponentProps, ReactNode } from 'react';

// ==============================================
// Component Groups for easier imports
// ==============================================
export const GlassUI = {
  // Core UI
  ThemeToggle,
  
  // Layout
  Navbar,
  Sidebar,
  GlassHeader,
  GlassFooter,
  
  // Marketing
  GlassHero,
  GlassFeatureShowcase,
  GlassFloatingAction,
  GlassResponsiveButton,
  GlassResponsiveCard,
  
  // Terminal
  TerminalWindow,
  CommandBlock,
  PerformanceMonitor,
  AiCommandSuggestions,
  
  // Advanced
  NeuralNetworkVisualizer,
  ProjectShowcaseAR,
  SkillNetwork3D,
  
  // Showcase
  ComponentShowcase,
  ComprehensiveDemo,
  
  // Docs
  InteractivePlayground,
  
  // Theming
  ThemeCustomizer,
  ThemeProvider,
} as const;

export default GlassUI;
