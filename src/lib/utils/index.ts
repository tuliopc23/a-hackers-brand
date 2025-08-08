// Minimal utilities used across components

// Simple classnames merge
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}
