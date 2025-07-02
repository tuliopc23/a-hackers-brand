/**
 * Brand System Utilities
 * Enhanced utilities for the Tulio Brand System
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Re-export glass utilities from glass-ui for components that need them
export {
  glassVariants,
  getGlassClass,
  focusRing,
  microInteraction,
  responsiveSize,
  touchTarget,
  responsiveGlass,
  animationState
} from '@/glass-ui';
