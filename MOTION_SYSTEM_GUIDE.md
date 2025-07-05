# Motion System Guide

## Overview

The A Hacker's Brand motion system is a sophisticated animation framework built specifically for Svelte 5, combining liquid glass aesthetics with terminal-inspired interactions. This system provides a cohesive set of motion primitives that enhance user experience while maintaining performance and accessibility.

## Design Philosophy

### Liquid Glass Aesthetics
Our motion system is inspired by Apple's liquid glass design language, featuring:
- **Fluid Transitions**: Smooth, organic movements that feel natural
- **Glass Morphism**: Blur effects and transparency that create depth
- **Elastic Behavior**: Bouncy, spring-based animations with realistic physics
- **Breathing Life**: Subtle ambient animations that make interfaces feel alive

### Terminal Heritage
Balanced with our hacker/terminal aesthetic:
- **Crisp Precision**: Sharp, purposeful movements for technical clarity
- **Retro Timing**: Nostalgic easing curves reminiscent of classic computing
- **Scanline Effects**: CRT-inspired visual treatments
- **Phosphor Glow**: Terminal-style lighting and color bleeding

### Performance First
- **Hardware Acceleration**: GPU-optimized transforms and opacity changes
- **Reduced Motion Respect**: Automatic adaptation for accessibility preferences
- **Memory Efficient**: Minimal overhead with proper cleanup
- **Battery Conscious**: Optimized for mobile and laptop devices

## Motion Tokens

### Durations
```typescript
export const DURATIONS = {
  instant: 0,
  fast: 150,      // Quick feedback
  normal: 300,    // Default transitions
  slow: 500,      // Emphasized changes
  slower: 750,    // Major state changes
  slowest: 1000   // Hero animations
};
```

### Easing Functions
```typescript
export const EASINGS = {
  // Standard curves
  linear: 'linear',
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  
  // Custom liquid glass curves
  spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  liquid: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  
  // Terminal-inspired curves
  terminal: 'cubic-bezier(0.25, 0, 0.75, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  
  // Glass morphism
  glass: 'cubic-bezier(0.16, 1, 0.3, 1)',
  blur: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
};
```

### Motion Scales
```typescript
export const MOTION_SCALES = {
  // Transform scales
  micro: 1.01,    // Subtle hover
  small: 1.05,    // Button feedback
  medium: 1.1,    // Card elevation
  large: 1.15,    // Emphasis
  huge: 1.25,     // Modal entrance
  
  // Blur intensities
  blur: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px'
  }
};
```

## Core Transitions

### 1. liquidBlur
The signature transition combining opacity, transform, and blur effects.

```svelte
<script>
  import { liquidBlur } from '$lib/motion';
</script>

<div in:liquidBlur={{ duration: 300, blur: 'md' }}>
  Content with liquid entrance
</div>
```

**Parameters:**
- `duration`: Animation duration (default: 300ms)
- `blur`: Blur intensity - 'sm' | 'md' | 'lg' | 'xl' | '2xl'
- `scale`: Transform scale (default: 0.95)
- `y`: Vertical offset (default: 10px)
- `easing`: Timing function (default: 'liquid')

**Use Cases:**
- Modal entrances/exits
- Card reveals
- Content loading states
- Page transitions

### 2. glassFade
Pure glass morphism transition with directional movement.

```svelte
<div in:glassFade={{ direction: 'up', duration: 400 }}>
  Glass fade content
</div>
```

**Parameters:**
- `direction`: 'up' | 'down' | 'left' | 'right'
- `duration`: Animation duration
- `distance`: Movement distance (default: 20px)
- `opacity`: Starting opacity (default: 0)

**Use Cases:**
- List item animations
- Navigation transitions
- Tooltip appearances
- Form field focus states

### 3. springPop
Bouncy scale animation with spring physics.

```svelte
<button use:springPop={{ scale: 1.05, duration: 200 }}>
  Interactive element
</button>
```

**Parameters:**
- `scale`: Maximum scale factor
- `duration`: Animation duration
- `bounce`: Bounce intensity (default: 0.3)
- `damping`: Spring damping (default: 0.8)

**Use Cases:**
- Button interactions
- Card hover states
- Loading indicators
- Success feedback

## Action System

### magneticHover
Creates magnetic attraction effect for interactive elements.

```svelte
<script>
  import { magneticHover } from '$lib/motion';
</script>

<button use:magneticHover={{ strength: 0.3, distance: 100 }}>
  Magnetic button
</button>
```

**Parameters:**
- `strength`: Attraction intensity (0-1)
- `distance`: Detection radius in pixels
- `easing`: Movement easing curve
- `returnSpeed`: Return animation duration

**Implementation Details:**
- Tracks mouse position relative to element
- Calculates magnetic force based on distance
- Smoothly transforms element position
- Returns to center when mouse leaves area

### jellyHover
Deformation effect simulating jelly-like physics.

```svelte
<div use:jellyHover={{ intensity: 0.15, speed: 400 }}>
  Jelly element
</div>
```

**Parameters:**
- `intensity`: Deformation amount
- `speed`: Animation duration
- `elasticity`: Bounce-back behavior
- `damping`: Physics damping

### breathing
Subtle ambient animation for idle states.

```svelte
<div use:breathing={{ enabled: true, intensity: 0.02, speed: 4000 }}>
  Breathing element
</div>
```

**Parameters:**
- `enabled`: Enable/disable animation
- `intensity`: Scale variation amount
- `speed`: Full cycle duration
- `delay`: Starting delay

## Animation Presets

### Button Animations
```typescript
// Hover state
const buttonHover = {
  scale: 1.05,
  duration: DURATIONS.fast,
  easing: EASINGS.spring
};

// Active state
const buttonActive = {
  scale: 0.98,
  duration: DURATIONS.instant,
  easing: EASINGS.sharp
};

// Loading state
const buttonLoading = {
  scale: 1.02,
  duration: DURATIONS.slow,
  easing: EASINGS.ease,
  repeat: true
};
```

### Modal Animations
```typescript
// Entrance
const modalEnter = {
  duration: DURATIONS.normal,
  blur: 'lg',
  scale: 0.9,
  y: 50,
  easing: EASINGS.spring
};

// Exit
const modalExit = {
  duration: DURATIONS.fast,
  blur: 'xl',
  scale: 0.95,
  y: -20,
  easing: EASINGS.glass
};
```

### Card Animations
```typescript
// Hover elevation
const cardHover = {
  y: -8,
  scale: 1.02,
  duration: DURATIONS.fast,
  easing: EASINGS.liquid
};

// Focus state
const cardFocus = {
  outline: '2px solid rgba(139, 92, 246, 0.5)',
  outlineOffset: '4px',
  duration: DURATIONS.fast
};
```

## Advanced Techniques

### Staggered Animations
```svelte
<script>
  import { liquidBlur } from '$lib/motion';
  
  let items = [...];
</script>

{#each items as item, i}
  <div 
    in:liquidBlur={{ 
      duration: 300,
      delay: i * 50,
      blur: 'md'
    }}
  >
    {item}
  </div>
{/each}
```

### Conditional Animations
```svelte
<script>
  import { liquidBlur, glassFade } from '$lib/motion';
  
  let useBlur = true;
</script>

<div in:liquidBlur={useBlur ? { blur: 'md' } : undefined}
     in:glassFade={!useBlur ? { direction: 'up' } : undefined}>
  Conditional animation
</div>
```

### Custom Easing
```typescript
// Create custom terminal-inspired easing
const terminalEasing = 'cubic-bezier(0.25, 0, 0.25, 1)';

// Use in animations
<div in:liquidBlur={{ easing: terminalEasing }}>
  Terminal-style animation
</div>
```

## Performance Optimization

### Best Practices

1. **Use Transform and Opacity**
   ```svelte
   <!-- Good: GPU accelerated -->
   <div style="transform: translateY({y}px) scale({scale}); opacity: {opacity}">
   
   <!-- Avoid: Layout thrashing -->
   <div style="top: {y}px; width: {width}px;">
   ```

2. **Minimize Reflows**
   ```svelte
   <!-- Good: Transform only -->
   .animated { transform: translateX(100px); }
   
   <!-- Bad: Position changes -->
   .animated { left: 100px; }
   ```

3. **Use will-change Sparingly**
   ```css
   .animating {
     will-change: transform, opacity;
   }
   
   .animation-complete {
     will-change: auto;
   }
   ```

### Memory Management
```typescript
// Cleanup event listeners
onDestroy(() => {
  removeEventListener('mousemove', handleMouseMove);
  cancelAnimationFrame(animationId);
});

// Debounce expensive operations
const debouncedResize = debounce(() => {
  updateDimensions();
}, 100);
```

## Accessibility

### Reduced Motion Support
```typescript
// Automatic detection
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// Conditional animations
if (!prefersReducedMotion) {
  element.animate(keyframes, options);
}
```

### Focus Management
```svelte
<script>
  import { trapFocus } from '$lib/motion/actions';
</script>

<div use:trapFocus={modalOpen}>
  Modal content with focus trap
</div>
```

### Screen Reader Announcements
```svelte
<div 
  in:liquidBlur
  aria-live="polite"
  aria-label="Content loaded"
>
  Dynamic content
</div>
```

## Testing Animations

### Unit Testing
```typescript
import { liquidBlur } from '$lib/motion';
import { render } from '@testing-library/svelte';

test('liquidBlur applies correct styles', () => {
  const { container } = render(TestComponent);
  const element = container.querySelector('.animated');
  
  expect(element).toHaveStyle('opacity: 0');
  expect(element).toHaveStyle('transform: scale(0.95)');
});
```

### Visual Regression
```typescript
// Playwright test
test('button hover animation', async ({ page }) => {
  await page.hover('[data-testid="animated-button"]');
  await page.waitForTimeout(200);
  await expect(page).toHaveScreenshot('button-hover.png');
});
```

### Performance Testing
```typescript
test('animation performance', async () => {
  const start = performance.now();
  await runAnimation();
  const duration = performance.now() - start;
  
  expect(duration).toBeLessThan(50); // 50ms threshold
});
```

## Common Patterns

### Loading States
```svelte
<script>
  import { breathing, springPop } from '$lib/motion';
  
  let loading = false;
</script>

<button 
  use:breathing={{ enabled: loading }}
  use:springPop={{ scale: loading ? 1.02 : 1.05 }}
>
  {loading ? 'Loading...' : 'Submit'}
</button>
```

### Success Feedback
```svelte
<script>
  import { springPop } from '$lib/motion';
  
  let success = false;
  
  function handleSubmit() {
    success = true;
    setTimeout(() => success = false, 2000);
  }
</script>

<div 
  in:springPop={success ? { scale: 1.1, duration: 400 } : undefined}
  class:success
>
  Form submitted!
</div>
```

### Page Transitions
```svelte
<!-- +layout.svelte -->
<script>
  import { page } from '$app/stores';
  import { liquidBlur } from '$lib/motion';
</script>

{#key $page.url.pathname}
  <main in:liquidBlur={{ duration: 300, blur: 'sm' }}>
    <slot />
  </main>
{/key}
```

## Browser Support

### Modern Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Fallbacks
```typescript
// Feature detection
const supportsBackdropFilter = CSS.supports('backdrop-filter', 'blur(1px)');

if (!supportsBackdropFilter) {
  // Fallback to solid background
  element.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
}
```

## Migration Guide

### From Framer Motion
```typescript
// Before (Framer Motion)
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.3 }}
>

// After (A Hacker's Brand)
<div in:liquidBlur={{ duration: 300, scale: 0.9 }}>
```

### From CSS Animations
```css
/* Before (CSS) */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in { animation: fadeIn 0.3s ease-out; }
```

```svelte
<!-- After (Motion System) -->
<div in:glassFade={{ direction: 'up', duration: 300 }}>
```

## Contributing

### Adding New Transitions
1. Create transition function in `/src/lib/motion/`
2. Export from `/src/lib/motion/index.ts`
3. Add TypeScript types
4. Write unit tests
5. Add documentation examples
6. Test browser compatibility

### Performance Guidelines
- Always use `transform` and `opacity` when possible
- Avoid animating `width`, `height`, `top`, `left`
- Test on low-end devices
- Measure with Performance API
- Respect `prefers-reduced-motion`

This motion system provides the foundation for creating beautiful, performant, and accessible animations that enhance the A Hacker's Brand aesthetic while maintaining excellent user experience across all devices and accessibility needs.