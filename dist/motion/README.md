# Svelte 5 Motion System

This motion system has been updated to be fully compatible with Svelte 5, using modern patterns like `$effect`, `$state`, `$derived`, and proper cleanup mechanisms.

## Key Updates

### 1. Replaced Lifecycle Functions with `$effect`

**Before (Svelte 4):**

```javascript
import { onMount, onDestroy } from 'svelte';

let element;

onMount(() => {
	// Setup animations
	const cleanup = setupAnimations();

	return cleanup; // This doesn't work in onMount
});

onDestroy(() => {
	// Manual cleanup
});
```

**After (Svelte 5):**

```javascript
let element = $state();

$effect(() => {
	if (!element) return;

	// Setup animations
	const cleanup = setupAnimations();

	// Return cleanup function
	return cleanup;
});
```

### 2. Store Integration with Effects

**Store Helper for Effects:**

```javascript
import { toEffect } from '$lib/motion';

$effect(() => {
	return toEffect(someStore, (value) => {
		// React to store changes
		console.log('Store updated:', value);

		// Return cleanup if needed
		return () => {
			// Cleanup logic
		};
	});
});
```

### 3. Rune-based State Management

**Motion State:**

```javascript
import { createMotionState } from '$lib/motion';

const motionState = createMotionState({
	scale: 1,
	rotation: 0,
	opacity: 1
});

// Use reactive values
const styles = $derived(`
  transform: scale(${motionState.current.scale}) rotate(${motionState.current.rotation}deg);
  opacity: ${motionState.current.opacity};
`);
```

### 4. Enhanced Motion Helpers

#### Reduced Motion Support

```javascript
import { useReducedMotion } from '$lib/motion';

const prefersReducedMotion = useReducedMotion();
const shouldAnimate = $derived(animate && !prefersReducedMotion);
```

#### Event Listeners with Cleanup

```javascript
import { useEventListener } from '$lib/motion';

$effect(() => {
	if (!element) return;

	useEventListener(element, 'click', handleClick);
	useEventListener(element, 'mouseenter', handleMouseEnter);
	// Cleanup is automatic
});
```

#### Animation Frames

```javascript
import { useAnimationFrame } from '$lib/motion';

const { start, stop } = useAnimationFrame((time) => {
	// Animation logic
	animationProgress = (Math.sin(time * 0.003) + 1) / 2;

	// Return false to stop, true to continue
	return shouldContinue;
}, $state(enabled));
```

### 5. GSAP Integration

**Updated GSAP Usage:**

```javascript
import { gsap } from 'gsap';

$effect(() => {
	if (!element || !shouldAnimate) return;

	// GSAP context for automatic cleanup
	const ctx = gsap.context(() => {
		// Setup animations
		gsap.set(element, { scale: 1 });

		if (interactive) {
			setupInteractiveAnimations();
		}
	}, element);

	// Cleanup is handled by GSAP context
	return () => ctx.revert();
});
```

### 6. Accessibility and Performance

#### Reduced Motion Handling

All motion components now automatically respect `prefers-reduced-motion`:

```javascript
// Animations are automatically adjusted
const duration = prefersReducedMotion ? 100 : 300;
const scale = prefersReducedMotion ? 1.02 : 1.05;
const distance = prefersReducedMotion ? 10 : 20;
```

#### Performance Optimizations

- `will-change` properties are properly managed
- Animation cleanup prevents memory leaks
- Debounced effects reduce unnecessary updates

## Usage Examples

### Basic Motion Component

```svelte
<script>
	import { springPop, useReducedMotion } from '$lib/motion';

	let element = $state();
	const prefersReducedMotion = useReducedMotion();

	const transitionOptions = $derived({
		duration: prefersReducedMotion ? 150 : 300,
		bounce: !prefersReducedMotion
	});
</script>

<div bind:this={element} in:springPop={transitionOptions}>Content</div>
```

### Interactive Motion with Actions

```svelte
<script>
	import { jellyHover, useReducedMotion } from '$lib/motion';

	const prefersReducedMotion = useReducedMotion();

	const hoverOptions = $derived({
		enabled: !prefersReducedMotion,
		duration: prefersReducedMotion ? 100 : 200,
		scale: prefersReducedMotion ? 1.02 : 1.05,
		responsiveness: prefersReducedMotion ? 'subtle' : 'strong'
	});
</script>

<button use:jellyHover={hoverOptions}> Interactive Button </button>
```

### Store Integration

```svelte
<script>
	import { toEffect } from '$lib/motion';
	import { threlteConfig, saveThrelteConfig } from '$lib/stores/threlte';

	$effect(() => {
		return toEffect(threlteConfig, (config) => {
			// React to threlte config changes
			saveThrelteConfig(config);

			return () => {
				// Cleanup if needed
			};
		});
	});
</script>
```

## Motion Directives

All motion directives automatically handle:

- Reduced motion preferences
- Proper cleanup
- Performance optimizations
- Accessibility features

### Available Directives

- `springPop` - Bouncy entrance/exit animations
- `glassFade` - Glass panel sliding effects
- `liquidBlur` - Liquid glass morphing
- `jellyHover` - Jelly-like hover interactions
- `magneticHover` - Magnetic cursor attraction
- `liquidResponsive` - Liquid-like responsiveness

## Best Practices

1. **Always use effects for lifecycle management**
2. **Check for reduced motion preferences**
3. **Use reactive values for motion parameters**
4. **Implement proper cleanup**
5. **Test with assistive technologies**

## Migration from Svelte 4

1. Replace `onMount`/`onDestroy` with `$effect`
2. Convert reactive statements to `$derived`
3. Use `$state` for component state
4. Add reduced motion handling
5. Update store subscriptions to use `toEffect`
