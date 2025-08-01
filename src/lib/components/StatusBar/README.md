# StatusBar Component

A flexible status bar component for displaying application status, file information, and contextual indicators with support for multiple visual variants.

## ⚠️ Important: Layout Management

The `StatusBar` component is positioned fixed at the bottom of the viewport. To prevent content overlap, you **must** manage layout spacing in your application.

### Automatic Layout Management (Recommended)

By default, the StatusBar automatically manages layout by setting a CSS custom property:

```svelte
<script>
  import { StatusBar } from '$lib/components';
</script>

<!-- StatusBar automatically sets --status-bar-height CSS custom property -->
<StatusBar status="Ready" />

<!-- Use layout utilities to respect status bar space -->
<main class="with-status-bar">
  <!-- Your content here -->
</main>
```

### Manual Layout Management

If you need more control, disable automatic layout management:

```svelte
<StatusBar autoLayout={false} />

<!-- Manually apply layout utilities -->
<main class="with-status-bar-md">
  <!-- Your content with medium spacing -->
</main>
```

## Layout Utilities

The component provides several CSS utilities for managing layout:

### CSS Classes

```css
/* Basic padding to accommodate status bar */
.with-status-bar { 
  padding-bottom: var(--status-bar-height, 2.5rem); 
}

/* Additional spacing variants */
.with-status-bar-sm { 
  padding-bottom: calc(var(--status-bar-height, 2.5rem) + 0.5rem); 
}
.with-status-bar-md { 
  padding-bottom: calc(var(--status-bar-height, 2.5rem) + 1rem); 
}
.with-status-bar-lg { 
  padding-bottom: calc(var(--status-bar-height, 2.5rem) + 1.5rem); 
}

/* Container that fills remaining viewport height */
.container-with-status-bar { 
  min-height: calc(100vh - var(--status-bar-height, 2.5rem)); 
}
```

### JavaScript Utilities

```javascript
import { statusBarVariants } from '$lib/utils/responsive.js';

// Generate utility classes
const containerClass = statusBarVariants({ spacing: 'md', container: true });
```

## Usage Examples

### Basic Usage

```svelte
<script>
  import { StatusBar } from '$lib/components';
</script>

<StatusBar 
  status="Ready"
  fileType="TypeScript"
  lineNumber={42}
  columnNumber={15}
  encoding="UTF-8"
/>
```

### With Custom Indicators

```svelte
<StatusBar 
  status="Compiling"
  indicators={[
    { label: "Errors", value: "0", type: "success" },
    { label: "Warnings", value: "3", type: "warning" },
    { label: "Build", value: "2.1s", type: "normal" }
  ]}
/>
```

### Different Variants

```svelte
<!-- Terminal theme -->
<StatusBar variant="terminal" status="Connected" />

<!-- Bubble tea theme with animation -->
<StatusBar variant="bubbleTea" status="Processing" />

<!-- Glass morphism theme -->
<StatusBar variant="glass" status="Ready" />
```

### Layout Integration

```svelte
<script>
  import { StatusBar } from '$lib/components';
  import { statusBarVariants } from '$lib/utils/responsive.js';
  
  const pageClass = statusBarVariants({ spacing: 'md', container: true });
</script>

<!-- Page container that accounts for status bar -->
<main class={pageClass}>
  <h1>My Application</h1>
  <!-- Content here -->
</main>

<!-- Status bar at bottom -->
<StatusBar status="Ready" fileType="Svelte" />
```

## CSS Custom Properties

The component communicates its height via CSS custom properties:

```css
:root {
  --status-bar-height: 2.5rem; /* Default fallback */
}
```

When `autoLayout={true}` (default), the component dynamically updates this value based on its actual rendered height.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `status` | `string` | `'Ready'` | Main status text |
| `encoding` | `string` | `'UTF-8'` | File encoding display |
| `position` | `string` | `'1:1'` | Position display for mobile |
| `lineNumber` | `number` | `1` | Current line number |
| `columnNumber` | `number` | `1` | Current column number |
| `fileType` | `string` | `'TypeScript'` | File type display |
| `variant` | `'terminal' \| 'bubbleTea' \| 'glass'` | `'bubbleTea'` | Visual theme |
| `size` | `'sm' \| 'md'` | `'md'` | Size variant |
| `indicators` | `Array<Indicator>` | `[]` | Additional status indicators |
| `autoLayout` | `boolean` | `true` | Automatic layout management |
| `class` | `string` | `''` | Additional CSS classes |

### Indicator Type

```typescript
interface Indicator {
  label: string;
  value: string;
  type?: 'normal' | 'warning' | 'error' | 'success';
}
```

## Accessibility

- Uses `role="status"` for proper screen reader support
- Includes `aria-live="polite"` for status updates
- Responsive design hides non-essential info on smaller screens
- Supports `prefers-reduced-motion` for animations

## Migration from Global CSS

If you're updating from a version that used global CSS:

### Before (with global side effects)
```svelte
<!-- Old version automatically modified body element -->
<StatusBar status="Ready" />
```

### After (no global side effects)
```svelte
<!-- New version uses CSS custom properties -->
<main class="with-status-bar">
  <!-- Your content -->
</main>
<StatusBar status="Ready" />
```

The new approach provides better encapsulation and avoids unintended global CSS modifications.