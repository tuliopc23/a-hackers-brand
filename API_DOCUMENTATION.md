# A Hacker's Brand - API Documentation

## Overview

This document provides comprehensive API documentation for all components in the A Hacker's Brand design system. Each component includes liquid glass aesthetics with terminal/CLI hacker themes, featuring dynamic jelly animations and Apple-style rounded corners.

## Design System Principles

### Variants

All components support these core variants:

- **`glass`** - Liquid glass morphism with subtle transparency
- **`terminal`** - Retro terminal aesthetics with green accents
- **`liquid`** - Enhanced liquid effects with gradient transitions
- **`neon`** - Cyberpunk neon styling with pink/purple accents

### Animations

- **Jelly Effects** - Dynamic corner radius morphing and organic scaling
- **Liquid Transitions** - Smooth blur and glass transitions
- **Breathing** - Subtle pulsing animations for interactive elements
- **Magnetic Hover** - Elements that respond to cursor proximity

### Accessibility

- Full ARIA compliance
- Keyboard navigation support
- Screen reader compatibility
- Focus management

---

## Core Components

### Button

Interactive button with liquid glass effects and jelly animations.

```svelte
<Button variant="glass" size="md" animated={true} jelly={true}>Click me</Button>
```

#### Props

- `variant`: `'glass' | 'terminal' | 'liquid' | 'neon'` - Visual style variant
- `size`: `'sm' | 'md' | 'lg'` - Button size
- `animated`: `boolean` - Enable animations
- `jelly`: `boolean` - Enable jelly hover effects
- `glow`: `boolean` - Enable glow effects
- `loading`: `boolean` - Show loading spinner
- `disabled`: `boolean` - Disable button
- `href`: `string` - Convert to link
- `type`: `'button' | 'submit' | 'reset'` - Button type
- `class`: `string` - Additional CSS classes

#### Events

- `onclick`: `() => void` - Click handler

---

### Card

Container component with liquid glass background and interactive effects.

```svelte
<Card variant="glass" animated={true} hoverable={true}>
	<h3>Card Title</h3>
	<p>Card content goes here...</p>
</Card>
```

#### Props

- `variant`: `'glass' | 'terminal' | 'liquid' | 'neon'` - Visual style variant
- `animated`: `boolean` - Enable animations
- `hoverable`: `boolean` - Enable hover effects
- `glow`: `boolean` - Enable glow effects
- `padding`: `'none' | 'sm' | 'md' | 'lg'` - Internal padding
- `borderRadius`: `'sm' | 'md' | 'lg' | 'xl'` - Corner radius
- `class`: `string` - Additional CSS classes

---

### Input

Text input with liquid glass styling and validation states.

```svelte
<Input variant="glass" placeholder="Enter text..." bind:value={inputValue} error={errorMessage} />
```

#### Props

- `variant`: `'glass' | 'terminal' | 'liquid' | 'neon'` - Visual style variant
- `value`: `string` - Input value (bindable)
- `placeholder`: `string` - Placeholder text
- `type`: `'text' | 'password' | 'email' | 'number' | 'url' | 'tel' | 'search'` - Input type
- `size`: `'sm' | 'md' | 'lg'` - Input size
- `animated`: `boolean` - Enable animations
- `glow`: `boolean` - Enable glow effects
- `error`: `string` - Error message
- `success`: `string` - Success message
- `disabled`: `boolean` - Disable input
- `readonly`: `boolean` - Read-only state
- `required`: `boolean` - Required field
- `class`: `string` - Additional CSS classes

#### Events

- `oninput`: `(event: Event) => void` - Input change handler
- `onchange`: `(event: Event) => void` - Value change handler
- `onfocus`: `(event: FocusEvent) => void` - Focus handler
- `onblur`: `(event: FocusEvent) => void` - Blur handler

---

### Modal

Overlay modal with liquid glass backdrop and smooth animations.

```svelte
<Modal bind:open={modalOpen} title="Modal Title">
	<p>Modal content...</p>
</Modal>
```

#### Props

- `open`: `boolean` - Modal visibility (bindable)
- `title`: `string` - Modal title
- `size`: `'sm' | 'md' | 'lg' | 'xl' | 'full'` - Modal size
- `variant`: `'glass' | 'terminal' | 'liquid' | 'neon'` - Visual style variant
- `closable`: `boolean` - Show close button
- `animated`: `boolean` - Enable animations
- `closeOnEscape`: `boolean` - Close on Escape key
- `closeOnOutsideClick`: `boolean` - Close on backdrop click
- `class`: `string` - Additional CSS classes

#### Events

- `onopen`: `() => void` - Modal open handler
- `onclose`: `() => void` - Modal close handler

---

### Select

Dropdown select with liquid glass styling and smooth animations.

```svelte
<Select options={selectOptions} bind:value={selectedValue} placeholder="Choose option..." />
```

#### Props

- `options`: `Array<{ value: string; label: string; disabled?: boolean }>` - Select options
- `value`: `string` - Selected value (bindable)
- `placeholder`: `string` - Placeholder text
- `variant`: `'glass' | 'terminal' | 'liquid' | 'neon'` - Visual style variant
- `size`: `'sm' | 'md' | 'lg'` - Select size
- `animated`: `boolean` - Enable animations
- `glow`: `boolean` - Enable glow effects
- `searchable`: `boolean` - Enable search functionality
- `multiple`: `boolean` - Allow multiple selections
- `disabled`: `boolean` - Disable select
- `error`: `string` - Error message
- `class`: `string` - Additional CSS classes

#### Events

- `onchange`: `(value: string | string[]) => void` - Selection change handler

---

### Switch

Toggle switch with liquid glass styling and smooth animations.

```svelte
<Switch bind:checked={switchValue} label="Enable feature" description="Toggle this feature on/off" />
```

#### Props

- `checked`: `boolean` - Switch state (bindable)
- `label`: `string` - Switch label
- `description`: `string` - Switch description
- `variant`: `'glass' | 'terminal' | 'liquid' | 'neon'` - Visual style variant
- `size`: `'sm' | 'md' | 'lg'` - Switch size
- `animated`: `boolean` - Enable animations
- `glow`: `boolean` - Enable glow effects
- `disabled`: `boolean` - Disable switch
- `class`: `string` - Additional CSS classes

#### Events

- `onchange`: `(checked: boolean) => void` - State change handler

---

### Tabs

Tabbed interface with liquid glass styling and smooth transitions.

```svelte
<Tabs bind:activeTab={currentTab} variant="glass">
	<TabList>
		<Tab value="tab1">Tab 1</Tab>
		<Tab value="tab2">Tab 2</Tab>
	</TabList>
	<TabPanels>
		<TabPanel value="tab1">Content 1</TabPanel>
		<TabPanel value="tab2">Content 2</TabPanel>
	</TabPanels>
</Tabs>
```

#### Props

- `activeTab`: `string` - Active tab value (bindable)
- `variant`: `'glass' | 'terminal' | 'liquid' | 'neon'` - Visual style variant
- `orientation`: `'horizontal' | 'vertical'` - Tab orientation
- `animated`: `boolean` - Enable animations
- `glow`: `boolean` - Enable glow effects
- `class`: `string` - Additional CSS classes

#### Events

- `onchange`: `(activeTab: string) => void` - Tab change handler

---

### Radio

Radio button group with liquid glass styling and animations.

```svelte
<Radio options={radioOptions} bind:value={selectedRadio} name="radio-group" />
```

#### Props

- `options`: `Array<{ value: string; label: string; disabled?: boolean; description?: string }>` - Radio options
- `value`: `string` - Selected value (bindable)
- `name`: `string` - Radio group name
- `variant`: `'glass' | 'terminal' | 'liquid' | 'neon'` - Visual style variant
- `size`: `'sm' | 'md' | 'lg'` - Radio size
- `orientation`: `'horizontal' | 'vertical'` - Layout orientation
- `animated`: `boolean` - Enable animations
- `glow`: `boolean` - Enable glow effects
- `jelly`: `boolean` - Enable jelly effects
- `error`: `string` - Error message
- `class`: `string` - Additional CSS classes

#### Events

- `onchange`: `(value: string) => void` - Selection change handler

---

### Tooltip

Smart positioning tooltip with liquid glass styling.

```svelte
<Tooltip text="Helpful information" position="top">
	<Button>Hover me</Button>
</Tooltip>
```

#### Props

- `text`: `string` - Tooltip text
- `position`: `'top' | 'bottom' | 'left' | 'right'` - Preferred position
- `variant`: `'glass' | 'terminal' | 'liquid' | 'dark'` - Visual style variant
- `delay`: `number` - Show delay in milliseconds
- `offset`: `number` - Offset from target element
- `arrow`: `boolean` - Show arrow indicator
- `animated`: `boolean` - Enable animations
- `class`: `string` - Additional CSS classes

---

### Alert

Notification system with various states and positioning.

```svelte
<Alert variant="success" title="Success!" description="Operation completed successfully" closable={true} />
```

#### Props

- `variant`: `'success' | 'error' | 'warning' | 'info' | 'terminal'` - Alert type
- `title`: `string` - Alert title
- `description`: `string` - Alert description
- `closable`: `boolean` - Show close button
- `animated`: `boolean` - Enable animations
- `glow`: `boolean` - Enable glow effects
- `jelly`: `boolean` - Enable jelly effects
- `icon`: `boolean` - Show icon
- `position`: `'static' | 'fixed'` - Positioning type
- `placement`: `'top' | 'bottom' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'` - Fixed placement
- `class`: `string` - Additional CSS classes

#### Events

- `onclose`: `() => void` - Close handler

---

### Dropdown

Dropdown menu with smart positioning and keyboard navigation.

```svelte
<Dropdown items={dropdownItems} trigger="Menu" onselect={handleSelect} />
```

#### Props

- `items`: `Array<{ label: string; value: string; icon?: any; disabled?: boolean; divider?: boolean }>` - Menu items
- `trigger`: `string` - Trigger button text
- `value`: `string` - Selected value
- `variant`: `'glass' | 'terminal' | 'liquid' | 'neon'` - Visual style variant
- `size`: `'sm' | 'md' | 'lg'` - Menu size
- `position`: `'bottom' | 'top' | 'left' | 'right'` - Menu position
- `animated`: `boolean` - Enable animations
- `glow`: `boolean` - Enable glow effects
- `jelly`: `boolean` - Enable jelly effects
- `class`: `string` - Additional CSS classes
- `triggerClass`: `string` - Trigger button classes
- `menuClass`: `string` - Menu container classes

#### Events

- `onselect`: `(value: string) => void` - Selection handler

---

### Pagination

Smart pagination with ellipsis and navigation controls.

```svelte
<Pagination bind:currentPage={page} {totalPages} siblingCount={2} />
```

#### Props

- `currentPage`: `number` - Current page (bindable)
- `totalPages`: `number` - Total number of pages
- `siblingCount`: `number` - Number of siblings to show
- `variant`: `'glass' | 'terminal' | 'liquid' | 'neon'` - Visual style variant
- `size`: `'sm' | 'md' | 'lg'` - Pagination size
- `animated`: `boolean` - Enable animations
- `glow`: `boolean` - Enable glow effects
- `jelly`: `boolean` - Enable jelly effects
- `showFirstLast`: `boolean` - Show first/last buttons
- `class`: `string` - Additional CSS classes

#### Events

- `onchange`: `(page: number) => void` - Page change handler

---

### Skeleton

Loading skeleton with various types and animations.

```svelte
<Skeleton type="text" lines={3} animated={true} variant="glass" />
```

#### Props

- `variant`: `'glass' | 'terminal' | 'liquid' | 'neon'` - Visual style variant
- `type`: `'text' | 'avatar' | 'card' | 'button' | 'image' | 'paragraph'` - Skeleton type
- `lines`: `number` - Number of lines for text/paragraph types
- `animated`: `boolean` - Enable shimmer animation
- `glow`: `boolean` - Enable glow effects
- `speed`: `'slow' | 'normal' | 'fast'` - Animation speed
- `width`: `string` - Custom width
- `height`: `string` - Custom height
- `rounded`: `boolean` - Enable rounded corners
- `class`: `string` - Additional CSS classes

---

## Motion System

### Transitions

```svelte
import {(glassFade, liquidBlur, springPop)} from '$lib/motion';

<div in:glassFade={{ duration: 300 }}>Glass fade transition</div>

<div in:liquidBlur={{ duration: 500, blur: 'md' }}>Liquid blur transition</div>

<div in:springPop={{ scale: 1.1, duration: 400 }}>Spring pop transition</div>
```

### Actions

```svelte
import {(jellyHover, magneticHover, breathing)} from '$lib/motion';

<button use:jellyHover={{ scale: 1.05, duration: 200 }}> Jelly hover effect </button>

<div use:magneticHover={{ strength: 0.3, distance: 50 }}>Magnetic hover effect</div>

<div use:breathing={{ intensity: 0.03, speed: 2000 }}>Breathing animation</div>
```

### Animation Tokens

```typescript
import { DURATION, EASING_CSS, BORDER_RADIUS } from '$lib/motion/tokens';

// Duration presets
DURATION.fast; // 150ms
DURATION.normal; // 300ms
DURATION.slow; // 500ms

// Easing functions
EASING_CSS.jelly; // Jelly bounce
EASING_CSS.liquidJelly; // Liquid jelly
EASING_CSS.glassFade; // Glass fade

// Border radius transforms
BORDER_RADIUS.morphing; // Dynamic radius morphing
```

---

## Styling Guidelines

### CSS Variables

The design system uses CSS custom properties for theming:

```css
:root {
	/* Glass morphism */
	--glass-bg: rgba(255, 255, 255, 0.1);
	--glass-border: rgba(255, 255, 255, 0.2);
	--glass-blur: 12px;

	/* Terminal colors */
	--terminal-bg: rgba(0, 0, 0, 0.9);
	--terminal-accent: #4ade80;
	--terminal-text: #4ade80;

	/* Liquid gradients */
	--liquid-primary: linear-gradient(135deg, #3b82f6, #8b5cf6);
	--liquid-secondary: linear-gradient(135deg, #06b6d4, #3b82f6);

	/* Neon colors */
	--neon-pink: #ec4899;
	--neon-purple: #8b5cf6;
	--neon-glow: 0 0 20px currentColor;
}
```

### Customization

Components can be customized using Tailwind CSS classes:

```svelte
<Button class="custom-bg custom-border custom-text">Custom styled button</Button>
```

### Responsive Design

All components are responsive by default:

```svelte
<Card class="w-full md:w-1/2 lg:w-1/3">Responsive card</Card>
```

---

## Best Practices

### Performance

- Use `animated={false}` for static content
- Implement lazy loading for heavy components
- Use `will-change-transform` for animated elements

### Accessibility

- Always provide `aria-label` for interactive elements
- Use semantic HTML structure
- Ensure proper focus management
- Test with screen readers

### Theming

- Use variant props instead of custom CSS when possible
- Leverage CSS custom properties for global theming
- Maintain consistent spacing and typography

### Animation

- Respect user preferences for reduced motion
- Use appropriate easing functions for different interactions
- Keep animations subtle and purposeful

---

## TypeScript Support

All components are fully typed with TypeScript:

```typescript
import type { ButtonProps, CardProps, InputProps } from 'a-hackers-brand';

interface MyComponentProps {
	button: ButtonProps;
	card: CardProps;
	input: InputProps;
}
```

### Generic Types

```typescript
// Component props
interface ComponentProps<T = any> extends HTMLAttributes<T> {
	variant?: 'glass' | 'terminal' | 'liquid' | 'neon';
	animated?: boolean;
	class?: string;
}

// Event handlers
type EventHandler<T = any> = (event: T) => void;
type ChangeHandler<T = any> = (value: T) => void;
```

---

## Testing

### Component Testing

```typescript
import { render, screen } from '@testing-library/svelte';
import { Button } from 'a-hackers-brand';

test('renders button with correct text', () => {
	render(Button, { props: { children: 'Click me' } });
	expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

### Visual Testing

```typescript
import { test, expect } from '@playwright/test';

test('button has correct appearance', async ({ page }) => {
	await page.goto('/components/button');
	await expect(page.locator('button')).toHaveScreenshot('button.png');
});
```

---

## Migration Guide

### From v0.1.x to v0.2.x

- Update import paths: `import { Button } from 'a-hackers-brand'`
- Replace deprecated props with new variants
- Update event handlers to use new syntax
- Test motion animations with new jelly system

### Breaking Changes

- Removed `theme` prop in favor of `variant`
- Updated motion API with new jelly effects
- Changed component file structure

---

## Contributing

### Adding New Components

1. Create component in `src/lib/components/`
2. Add to exports in `src/lib/components/index.ts`
3. Include all variants and motion support
4. Add comprehensive TypeScript types
5. Write tests and documentation
6. Update this API documentation

### Code Style

- Use Svelte 5 runes syntax
- Follow TypeScript strict mode
- Include accessibility attributes
- Add motion animations
- Support all design variants

---

## Support

For issues, questions, or contributions:

- GitHub Issues: [github.com/your-username/a-hackers-brand/issues](https://github.com/your-username/a-hackers-brand/issues)
- Documentation: [your-docs-site.com](https://your-docs-site.com)
- Discord: [discord.gg/your-invite](https://discord.gg/your-invite)
