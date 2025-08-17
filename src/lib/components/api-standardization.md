# API Standardization Guidelines

This document outlines the standardized API patterns for A Hacker's Brand components to ensure consistency across the library.

## Variant Props

All components that support theme variants should use a consistent `variant` prop with these standardized values:

```typescript
type VariantProp = 'terminal' | 'glass' | 'liquid' | 'auto' | 'theme';
```

Where:
- `terminal` - Classic terminal aesthetic with green text and dark backgrounds
- `glass` - Modern translucent UI with rounded corners (formerly "bubbleTea")
- `liquid` - Experimental high-glow variant with fluid animations
- `auto` - Automatically follows the system theme preference
- `theme` - Uses the current application theme (from the theme store)

Note: Some components may have additional component-specific variants, but should always support these core variants.

## Size Props

All components that support different sizes should use a consistent `size` prop with these standardized values:

```typescript
type SizeProp = 'sm' | 'md' | 'lg' | 'xl';
```

Where:
- `sm` - Small size
- `md` - Medium size (default)
- `lg` - Large size
- `xl` - Extra large size

## State Props

Interactive components should have consistent state props:

```typescript
// Common state props
disabled?: boolean;    // Disables interaction
loading?: boolean;     // Shows loading state
error?: string;        // Error message or error state
```

## Animation Props

Components with animations should have consistent animation control props:

```typescript
// Animation control props
animate?: boolean;     // Enable/disable animations
reduceMotion?: boolean; // Override to respect reduced motion preference
```

## Event Handler Props

Event handlers should follow these naming patterns:

```typescript
// Click events
onClick?: (event: MouseEvent) => void;

// Value change events
onValueChange?: (value: T) => void;
onSelectionChange?: (selected: T[]) => void;

// State change events
onOpenChange?: (open: boolean) => void;
onFocus?: (event: FocusEvent) => void;
onBlur?: (event: FocusEvent) => void;

// Form events
onSubmit?: (event: SubmitEvent) => void;
onInput?: (event: InputEvent) => void;
```

## Common Props

All components should accept these common props:

```typescript
// Common props
class?: string;         // CSS class string
style?: string;         // Inline styles
id?: string;            // Element ID
```

## Accessibility Props

Interactive components should accept standard accessibility props:

```typescript
// Accessibility props
'aria-label'?: string;
'aria-labelledby'?: string;
'aria-describedby'?: string;
'aria-expanded'?: boolean;
'aria-haspopup'?: boolean | 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid';
```

## CSS Custom Properties

Components should use consistent CSS custom property naming:

```css
/* Component-specific properties */
--component-name-property: value;

/* Example */
--button-border-radius: var(--radius-md);
--input-focus-ring-color: var(--color-primary);
```

## Component Children

Components should accept children in a consistent way, using Svelte's `Snippet` type:

```typescript
// For single child slot
children?: import("svelte").Snippet;

// For multiple named slots
children?: {
  header?: import("svelte").Snippet;
  default?: import("svelte").Snippet;
  footer?: import("svelte").Snippet;
};
```

## Forwarded Events

Components should document which events are forwarded:

```typescript
/**
 * @forwarded mousedown, mouseup, click
 */
```

## Compound Components

Compound components should be organized as:

```
ComponentName/
  ComponentName.svelte       // Main component
  ComponentName.Item.svelte  // Child component
  ComponentName.Header.svelte // Child component
```

## Type Definitions

Components should export their prop types and event types:

```typescript
// In the component file
export type ComponentProps = {
  // Props definition
};

export type ComponentEvents = {
  // Events definition
};
```

## Implementation Checklist

When implementing or updating components, ensure:

- [ ] Variant prop uses standard values (`terminal`, `glass`, `liquid`, `auto`, `theme`)
- [ ] Size prop uses standard values (`sm`, `md`, `lg`, `xl`)
- [ ] Common state props are supported (`disabled`, `loading`, `error`)
- [ ] Animation controls are consistent
- [ ] Event handlers follow naming convention
- [ ] Common props are forwarded (class, style, id)
- [ ] Accessibility props are supported
- [ ] CSS custom properties follow naming convention
- [ ] Children are handled with Svelte Snippets
- [ ] Type definitions are exported