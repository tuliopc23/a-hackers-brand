# Border Radius Standardization

This document outlines the unified border radius system implemented to standardize naming conventions and provide automatic theme-aware radius application.

## Overview

The border radius system has been completely restructured to eliminate manual variant selection and provide a unified, theme-aware approach to border radius across all components.

## Key Improvements

### 🎯 **Automatic Theme Application**
Components now automatically apply the correct border radius based on the currently active theme without requiring manual variant selection.

### 📏 **Semantic Component Sizing**
Components use semantic sizing (`button-radius-md`, `card-radius-lg`) instead of hardcoded pixel values.

### 🔄 **CSS Custom Properties**
All radius values are now provided via CSS custom properties that automatically update when themes change.

### 🧹 **Eliminated Manual Functions**
Removed manual `getBorderRadius()` functions from components in favor of the unified system.

## Architecture

### 1. Design Tokens Structure

```typescript
// Enhanced border radius tokens
export const borderRadius = {
  // Base radius scale
  base: {
    none: '0',
    xs: '0.125rem',  // 2px
    sm: '0.375rem',  // 6px  
    md: '0.5rem',    // 8px
    lg: '0.75rem',   // 12px
    xl: '1rem',      // 16px
    '2xl': '1.5rem', // 24px
    '3xl': '2rem',   // 32px
    '4xl': '2.5rem', // 40px
    full: '9999px'
  },
  
  // Theme-specific radius scales
  themes: {
    // Terminal theme (sharper, more angular)
    terminal: {
      sm: '0.25rem',   // 4px
      md: '0.375rem',  // 6px
      lg: '0.5rem',    // 8px
      xl: '0.75rem',   // 12px
      '2xl': '1rem',   // 16px
      // ...
    },
    // Bubble Tea theme (more rounded, modern)
    bubbleTea: {
      sm: '0.5rem',    // 8px
      md: '0.75rem',   // 12px
      lg: '1rem',      // 16px
      xl: '1.5rem',    // 24px
      '2xl': '2rem',   // 32px
      // ...
    }
  },
  
  // Semantic component radius (uses CSS custom properties)
  semantic: {
    button: {
      sm: 'var(--radius-sm)',
      md: 'var(--radius-md)', 
      lg: 'var(--radius-lg)',
      xl: 'var(--radius-xl)'
    },
    card: {
      sm: 'var(--radius-lg)',
      md: 'var(--radius-xl)',
      lg: 'var(--radius-2xl)',
      xl: 'var(--radius-3xl)'
    },
    // ... more components
  }
};
```

### 2. Theme Store Integration

The theme store now automatically applies CSS custom properties when themes change:

```typescript
// Apply CSS custom properties for current theme
const cssProperties = getThemeCSSProperties(resolvedTheme);
Object.entries(cssProperties).forEach(([property, value]) => {
    document.documentElement.style.setProperty(property, value);
});
```

Generated CSS properties:
- `--radius-sm`: Theme-appropriate small radius
- `--radius-md`: Theme-appropriate medium radius
- `--radius-lg`: Theme-appropriate large radius
- etc.

### 3. CSS Class System

New CSS classes automatically use the theme-appropriate values:

```css
/* Component-specific radius classes */
.button-radius-md { border-radius: var(--radius-md) !important; }
.card-radius-lg { border-radius: var(--radius-2xl) !important; }
.modal-radius-lg { border-radius: var(--radius-3xl) !important; }
```

### 4. Component Updates

Components now use semantic classes instead of manual logic:

```svelte
<!-- Before: Manual theme detection -->
<script>
  const getBorderRadius = (variant) => {
    if (variant === 'bubbleTea') {
      return 'rounded-bubble-tea-lg';
    }
    return 'rounded-2xl';
  };
</script>

<!-- After: Automatic theme-aware classes -->
<script>
  const getRadiusClass = () => 'card-radius-lg';
</script>
```

## Usage Examples

### Component Usage

```svelte
<!-- Buttons automatically use theme-appropriate radius -->
<Button size="md" class="button-radius-md">Click me</Button>

<!-- Cards use larger radius semantically -->
<Card class="card-radius-lg">Content</Card>

<!-- Modals use even larger radius -->
<Modal class="modal-radius-lg">Dialog content</Modal>
```

### CSS Custom Properties

```css
/* Use theme-aware radius in custom styles */
.my-component {
  border-radius: var(--radius-lg);
  border-top-left-radius: var(--radius-xl);
}

/* Responsive radius */
@media (max-width: 640px) {
  .my-component {
    border-radius: var(--radius-sm);
  }
}
```

### JavaScript/Motion Integration

```typescript
import { radiusUtils, getMotionRadius } from '$lib/utils/radius.js';

// Get theme-aware radius for animations
const radius = getMotionRadius(currentTheme, 'card', 'lg');

// Use semantic utilities
const buttonRadius = radiusUtils.button('md');
const cardRadius = radiusUtils.card('lg');
```

## Component-Specific Radius Mappings

| Component | Small | Medium | Large | Extra Large |
|-----------|-------|--------|-------|-------------|
| **Button** | `--radius-sm` | `--radius-md` | `--radius-lg` | `--radius-xl` |
| **Card** | `--radius-lg` | `--radius-xl` | `--radius-2xl` | `--radius-3xl` |
| **Modal** | `--radius-xl` | `--radius-2xl` | `--radius-3xl` | `--radius-4xl` |
| **Input** | `--radius-sm` | `--radius-md` | `--radius-lg` | `--radius-xl` |
| **Avatar** | `--radius-sm` | `--radius-md` | `--radius-lg` | `--radius-xl` |
| **Badge** | `--radius-sm` | `--radius-md` | `--radius-lg` | `--radius-full` |

## Theme Differences

### Terminal Theme (Sharp, Angular)
- **Small**: 4px
- **Medium**: 6px  
- **Large**: 8px
- **Extra Large**: 12px

### Bubble Tea Theme (Rounded, Modern)
- **Small**: 8px
- **Medium**: 12px
- **Large**: 16px
- **Extra Large**: 24px

## Migration Guide

### Updating Components

1. **Remove manual `getBorderRadius` functions**
2. **Replace with semantic class methods**
3. **Update motion/animation radius values**

```diff
- const getBorderRadius = (variant) => {
-   if (variant === 'bubbleTea') return 'rounded-bubble-tea-lg';
-   return 'rounded-2xl';
- };

+ const getRadiusClass = () => 'card-radius-lg';
```

### Updating Styles

```diff
- .my-component { border-radius: 24px; }
+ .my-component { border-radius: var(--radius-2xl); }

- .rounded-bubble-tea-lg
+ .card-radius-lg
```

### Updating Motion Effects

```diff
- borderRadius: variant === 'bubbleTea' ? '24px' : '16px'
+ borderRadius: 'var(--radius-xl)'
```

## Available CSS Classes

### Base Radius Classes
- `.radius-none` → `var(--radius-none)`
- `.radius-xs` → `var(--radius-xs)`
- `.radius-sm` → `var(--radius-sm)`
- `.radius-md` → `var(--radius-md)`
- `.radius-lg` → `var(--radius-lg)`
- `.radius-xl` → `var(--radius-xl)`
- `.radius-2xl` → `var(--radius-2xl)`
- `.radius-3xl` → `var(--radius-3xl)`
- `.radius-4xl` → `var(--radius-4xl)`
- `.radius-full` → `var(--radius-full)`

### Component-Specific Classes
- **Buttons**: `.button-radius-{sm|md|lg|xl}`
- **Cards**: `.card-radius-{sm|md|lg|xl}`
- **Modals**: `.modal-radius-{sm|md|lg|xl}`
- **Inputs**: `.input-radius-{sm|md|lg|xl}`
- **Avatars**: `.avatar-radius-{sm|md|lg|xl|full}`
- **Badges**: `.badge-radius-{sm|md|lg|pill}`
- **Tabs**: `.tab-radius-{sm|md|lg}`

### Utility Classes
- **Top**: `.radius-t-{sm|md|lg|xl}`
- **Bottom**: `.radius-b-{sm|md|lg|xl}`
- **Left**: `.radius-l-{sm|md|lg|xl}`
- **Right**: `.radius-r-{sm|md|lg|xl}`

### Animation Classes
- `.radius-transition` → Smooth radius transitions
- `.radius-transition-fast` → Fast transitions
- `.radius-transition-slow` → Slow transitions
- `.radius-hover` → Hover radius effects
- `.card-radius-hover` → Card-specific hover effects
- `.button-radius-hover` → Button-specific hover effects

## Benefits

### 🎨 **Consistent Design**
All components now use theme-appropriate radius values automatically.

### 🔧 **Maintainable Code**
No more manual theme detection or hardcoded values in components.

### ⚡ **Better Performance**
CSS custom properties provide better performance than JavaScript calculations.

### 🎯 **Type Safety**
TypeScript types ensure correct usage of radius utilities.

### 📱 **Responsive Design**
Built-in responsive radius classes for different screen sizes.

### 🎬 **Animation Ready**
Motion-compatible radius values for smooth transitions.

## Testing

The radius system has been tested across:
- ✅ All core components (Button, Card, Modal, etc.)
- ✅ Theme switching (Terminal ↔ Bubble Tea)
- ✅ Motion effects and animations
- ✅ Responsive breakpoints
- ✅ CSS custom property fallbacks
- ✅ TypeScript compilation

## Future Enhancements

1. **Additional Themes**: Easy to add new themes with different radius scales
2. **User Preferences**: Allow users to customize radius preferences
3. **Component Variants**: More semantic radius variants for specific use cases
4. **Animation Presets**: Pre-defined animation curves for radius transitions

The unified border radius system provides a solid foundation for consistent, maintainable, and theme-aware border radius across the entire design system.