/**
 * Design Tokens Index
 * Central export for all design tokens in the Liquid Glass Terminal Fusion design system
 */

export { primitives } from './primitives';
export { semantic } from './semantic';
export { motion } from './motion';
export { components } from './components';

// Re-export commonly used tokens for convenience
export { primitives as p } from './primitives';
export { semantic as s } from './semantic';
export { motion as m } from './motion';
export { components as c } from './components';

// Export a unified tokens object
import { primitives } from './primitives';
import { semantic } from './semantic';
import { motion } from './motion';
import { components } from './components';

export const tokens = {
  primitives,
  semantic,
  motion,
  components
};

// Export type definitions
export type Primitives = typeof primitives;
export type Semantic = typeof semantic;
export type Motion = typeof motion;
export type Components = typeof components;
export type Tokens = typeof tokens;
