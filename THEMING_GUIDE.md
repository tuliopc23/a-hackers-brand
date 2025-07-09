# Theming Guide - A Hacker's Brand

This guide shows you how to customize the liquid glass aesthetic and create your own unique brand identity with A Hacker's Brand components.

## Quick Start

The design system is built on CSS custom properties (variables) that you can override to match your brand:

```css
/* Your custom theme */
:root {
	--brand-primary: #your-color;
	--brand-secondary: #your-color;
	--glass-opacity: 0.15;
	--blur-strength: 12px;
}
```

---

## Core Design Tokens

### Color System

#### Brand Colors

```css
:root {
	/* Primary brand colors */
	--brand-primary: #06b6d4; /* Cyan */
	--brand-secondary: #3b82f6; /* Blue */
	--brand-accent: #8b5cf6; /* Purple */
	--brand-success: #10b981; /* Green */
	--brand-warning: #f59e0b; /* Amber */
	--brand-danger: #ef4444; /* Red */

	/* Neutral colors */
	--brand-white: #ffffff;
	--brand-black: #000000;
	--brand-gray-50: #f9fafb;
	--brand-gray-900: #111827;
}
```

#### Glass Morphism Colors

```css
:root {
	/* Glass background colors */
	--glass-bg-light: rgba(255, 255, 255, 0.1);
	--glass-bg-medium: rgba(255, 255, 255, 0.15);
	--glass-bg-heavy: rgba(255, 255, 255, 0.25);

	/* Glass border colors */
	--glass-border-light: rgba(255, 255, 255, 0.1);
	--glass-border-medium: rgba(255, 255, 255, 0.2);
	--glass-border-heavy: rgba(255, 255, 255, 0.3);

	/* Glass shadow colors */
	--glass-shadow: rgba(0, 0, 0, 0.1);
	--glass-glow: rgba(255, 255, 255, 0.2);
}
```

#### Terminal Colors

```css
:root {
	/* Terminal theme colors */
	--terminal-bg: rgba(0, 0, 0, 0.95);
	--terminal-primary: #4ade80; /* Green */
	--terminal-secondary: #22c55e; /* Darker green */
	--terminal-accent: #16a34a; /* Even darker green */
	--terminal-text: #dcfce7; /* Light green */
	--terminal-muted: rgba(74, 222, 128, 0.6);
}
```

#### Neon Colors

```css
:root {
	/* Neon/cyberpunk theme */
	--neon-primary: #ec4899; /* Pink */
	--neon-secondary: #8b5cf6; /* Purple */
	--neon-accent: #06b6d4; /* Cyan */
	--neon-glow: rgba(236, 72, 153, 0.7);
	--neon-bg: rgba(0, 0, 0, 0.95);
}
```

#### Liquid Colors

```css
:root {
	/* Liquid/gradient theme */
	--liquid-primary: linear-gradient(135deg, #3b82f6, #8b5cf6);
	--liquid-secondary: linear-gradient(135deg, #06b6d4, #3b82f6);
	--liquid-accent: linear-gradient(135deg, #8b5cf6, #ec4899);
	--liquid-bg: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
}
```

### Typography

```css
:root {
	/* Font families */
	--font-sans: 'PP Supply Sans', -apple-system, BlinkMacSystemFont, sans-serif;
	--font-mono: 'PP Supply Mono', 'Fira Code', 'JetBrains Mono', monospace;
	--font-display: 'PP Supply Sans', sans-serif;

	/* Font weights */
	--font-weight-light: 300;
	--font-weight-normal: 400;
	--font-weight-medium: 500;
	--font-weight-semibold: 600;
	--font-weight-bold: 700;

	/* Font sizes */
	--text-xs: 0.75rem; /* 12px */
	--text-sm: 0.875rem; /* 14px */
	--text-base: 1rem; /* 16px */
	--text-lg: 1.125rem; /* 18px */
	--text-xl: 1.25rem; /* 20px */
	--text-2xl: 1.5rem; /* 24px */
	--text-3xl: 1.875rem; /* 30px */
	--text-4xl: 2.25rem; /* 36px */
}
```

### Spacing and Layout

```css
:root {
	/* Spacing scale */
	--space-0: 0;
	--space-1: 0.25rem; /* 4px */
	--space-2: 0.5rem; /* 8px */
	--space-3: 0.75rem; /* 12px */
	--space-4: 1rem; /* 16px */
	--space-5: 1.25rem; /* 20px */
	--space-6: 1.5rem; /* 24px */
	--space-8: 2rem; /* 32px */
	--space-10: 2.5rem; /* 40px */
	--space-12: 3rem; /* 48px */
	--space-16: 4rem; /* 64px */
	--space-20: 5rem; /* 80px */
	--space-24: 6rem; /* 96px */

	/* Border radius */
	--radius-sm: 0.375rem; /* 6px */
	--radius-md: 0.5rem; /* 8px */
	--radius-lg: 0.75rem; /* 12px */
	--radius-xl: 1rem; /* 16px */
	--radius-2xl: 1.5rem; /* 24px */
	--radius-full: 9999px;
}
```

### Effects and Animations

```css
:root {
	/* Blur effects */
	--blur-none: 0;
	--blur-sm: 4px;
	--blur-md: 8px;
	--blur-lg: 16px;
	--blur-xl: 24px;
	--blur-2xl: 40px;
	--blur-3xl: 64px;

	/* Animation durations */
	--duration-instant: 0ms;
	--duration-fast: 150ms;
	--duration-normal: 300ms;
	--duration-slow: 500ms;
	--duration-slower: 750ms;
	--duration-slowest: 1000ms;

	/* Easing functions */
	--ease-linear: linear;
	--ease-in: cubic-bezier(0.4, 0, 1, 1);
	--ease-out: cubic-bezier(0, 0, 0.2, 1);
	--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
	--ease-glass: cubic-bezier(0.25, 0.46, 0.45, 0.94);
	--ease-liquid: cubic-bezier(0.23, 1, 0.32, 1);
	--ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);
	--ease-jelly: cubic-bezier(0.25, 0.46, 0.45, 0.94);
	--ease-jelly-bounce: cubic-bezier(0.68, -0.6, 0.32, 1.6);

	/* Shadow depths */
	--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
	--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
	--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
	--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
	--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
	--shadow-glass: 0 8px 32px rgba(0, 0, 0, 0.12);
	--shadow-glow: 0 0 20px currentColor;
}
```

---

## Creating Custom Themes

### Corporate Theme Example

```css
/* Corporate professional theme */
:root {
	--brand-primary: #0052cc; /* Professional blue */
	--brand-secondary: #091e42; /* Dark blue */
	--brand-accent: #36b37e; /* Professional green */

	--glass-bg-light: rgba(0, 82, 204, 0.08);
	--glass-border-light: rgba(0, 82, 204, 0.15);
	--glass-glow: rgba(0, 82, 204, 0.3);

	--font-sans: 'Inter', system-ui, sans-serif;
	--radius-md: 4px; /* Less rounded for corporate feel */
	--blur-md: 6px; /* Subtle blur */
}
```

### Gaming Theme Example

```css
/* Gaming/esports theme */
:root {
	--brand-primary: #ff6b35; /* Orange */
	--brand-secondary: #004e89; /* Navy blue */
	--brand-accent: #00a8cc; /* Bright cyan */

	--neon-primary: #ff6b35;
	--neon-secondary: #00a8cc;
	--neon-glow: rgba(255, 107, 53, 0.8);

	--glass-bg-light: rgba(255, 107, 53, 0.1);
	--glass-border-light: rgba(255, 107, 53, 0.2);

	--font-sans: 'Rajdhani', sans-serif;
	--font-weight-bold: 800;
	--radius-lg: 8px;
	--blur-lg: 20px; /* Heavy blur for gaming feel */
}
```

### Minimalist Theme Example

```css
/* Clean minimalist theme */
:root {
	--brand-primary: #6366f1; /* Indigo */
	--brand-secondary: #f3f4f6; /* Light gray */
	--brand-accent: #10b981; /* Emerald */

	--glass-bg-light: rgba(255, 255, 255, 0.05);
	--glass-border-light: rgba(255, 255, 255, 0.08);
	--glass-glow: rgba(99, 102, 241, 0.2);

	--font-sans: 'SF Pro Display', system-ui, sans-serif;
	--radius-xl: 20px; /* Very rounded */
	--blur-sm: 3px; /* Minimal blur */
	--duration-normal: 200ms; /* Faster animations */
}
```

---

## Component-Specific Customization

### Button Customization

```css
/* Custom button variants */
.btn-custom-primary {
	--btn-bg: linear-gradient(135deg, var(--brand-primary), var(--brand-secondary));
	--btn-border: var(--brand-primary);
	--btn-text: white;
	--btn-hover-bg: linear-gradient(135deg, var(--brand-secondary), var(--brand-accent));
	--btn-shadow: 0 4px 20px rgba(var(--brand-primary-rgb), 0.4);
}

.btn-custom-secondary {
	--btn-bg: transparent;
	--btn-border: var(--brand-primary);
	--btn-text: var(--brand-primary);
	--btn-hover-bg: var(--brand-primary);
	--btn-hover-text: white;
}
```

```svelte
<!-- Usage -->
<Button class="btn-custom-primary">Primary Action</Button>
<Button class="btn-custom-secondary">Secondary Action</Button>
```

### Card Customization

```css
/* Custom card styles */
.card-custom {
	--card-bg: rgba(var(--brand-primary-rgb), 0.1);
	--card-border: rgba(var(--brand-primary-rgb), 0.2);
	--card-shadow: 0 8px 32px rgba(var(--brand-primary-rgb), 0.15);
	--card-blur: 16px;
}

.card-gradient {
	background: linear-gradient(135deg, rgba(var(--brand-primary-rgb), 0.1), rgba(var(--brand-secondary-rgb), 0.1));
	border: 1px solid rgba(var(--brand-primary-rgb), 0.2);
}
```

```svelte
<!-- Usage -->
<Card class="card-custom">Custom styled card</Card>
<Card class="card-gradient">Gradient card</Card>
```

### Input Customization

```css
/* Custom input styles */
.input-custom {
	--input-bg: rgba(var(--brand-primary-rgb), 0.05);
	--input-border: rgba(var(--brand-primary-rgb), 0.2);
	--input-border-focus: var(--brand-primary);
	--input-text: var(--brand-primary);
	--input-placeholder: rgba(var(--brand-primary-rgb), 0.6);
}

.input-minimal {
	--input-bg: transparent;
	--input-border: transparent;
	--input-border-bottom: 2px solid rgba(var(--brand-primary-rgb), 0.3);
	--input-border-focus-bottom: 2px solid var(--brand-primary);
	border-radius: 0;
	border-bottom: var(--input-border-bottom);
}
```

---

## Dark/Light Mode Support

### Automatic Theme Switching

```css
/* Light mode variables */
:root {
	--bg-primary: #ffffff;
	--bg-secondary: #f8fafc;
	--text-primary: #1e293b;
	--text-secondary: #64748b;

	/* Glass effects for light mode */
	--glass-bg: rgba(255, 255, 255, 0.8);
	--glass-border: rgba(0, 0, 0, 0.1);
}

/* Dark mode variables */
@media (prefers-color-scheme: dark) {
	:root {
		--bg-primary: #0f172a;
		--bg-secondary: #1e293b;
		--text-primary: #f1f5f9;
		--text-secondary: #94a3b8;

		/* Glass effects for dark mode */
		--glass-bg: rgba(255, 255, 255, 0.1);
		--glass-border: rgba(255, 255, 255, 0.2);
	}
}

/* Manual dark mode class */
.dark {
	--bg-primary: #0f172a;
	--bg-secondary: #1e293b;
	--text-primary: #f1f5f9;
	--text-secondary: #94a3b8;
	--glass-bg: rgba(255, 255, 255, 0.1);
	--glass-border: rgba(255, 255, 255, 0.2);
}
```

### Theme Toggle Implementation

```svelte
<script>
	import { Button } from 'a-hackers-brand';

	let darkMode = $state(false);

	const toggleTheme = () => {
		darkMode = !darkMode;
		document.documentElement.classList.toggle('dark', darkMode);
		localStorage.setItem('theme', darkMode ? 'dark' : 'light');
	};

	// Initialize theme from localStorage
	const initTheme = () => {
		const saved = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		darkMode = saved ? saved === 'dark' : prefersDark;
		document.documentElement.classList.toggle('dark', darkMode);
	};

	initTheme();
</script>

<Button onclick={toggleTheme} variant="glass">
	{darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
</Button>
```

---

## Custom Color Palettes

### Defining RGB Variables

```css
/* Define RGB values for use with opacity */
:root {
	--brand-primary-rgb: 6, 182, 212; /* Cyan */
	--brand-secondary-rgb: 59, 130, 246; /* Blue */
	--brand-accent-rgb: 139, 92, 246; /* Purple */
	--brand-success-rgb: 16, 185, 129; /* Green */
	--brand-warning-rgb: 245, 158, 11; /* Amber */
	--brand-danger-rgb: 239, 68, 68; /* Red */
}

/* Use with opacity */
.bg-primary-10 {
	background: rgba(var(--brand-primary-rgb), 0.1);
}
.bg-primary-20 {
	background: rgba(var(--brand-primary-rgb), 0.2);
}
.border-primary-30 {
	border-color: rgba(var(--brand-primary-rgb), 0.3);
}
```

### Color Generator Function

```javascript
// JavaScript utility to generate color variations
function generateColorPalette(baseColor) {
	const rgb = hexToRgb(baseColor);

	return {
		50: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.05)`,
		100: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)`,
		200: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)`,
		300: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3)`,
		400: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.4)`,
		500: baseColor,
		600: darken(baseColor, 0.1),
		700: darken(baseColor, 0.2),
		800: darken(baseColor, 0.3),
		900: darken(baseColor, 0.4)
	};
}

// Usage
const primaryPalette = generateColorPalette('#06b6d4');
```

---

## Animation Customization

### Custom Easing Functions

```css
:root {
	/* Custom easing curves */
	--ease-custom-bounce: cubic-bezier(0.68, -0.6, 0.32, 1.6);
	--ease-custom-elastic: cubic-bezier(0.25, 0.46, 0.45, 0.94);
	--ease-custom-back: cubic-bezier(0.175, 0.885, 0.32, 1.275);

	/* Custom durations */
	--duration-micro: 100ms;
	--duration-quick: 200ms;
	--duration-smooth: 400ms;
	--duration-relaxed: 600ms;
}
```

### Custom Transitions

```css
/* Custom transition classes */
.transition-custom {
	transition: all var(--duration-smooth) var(--ease-custom-bounce);
}

.transition-glass {
	transition:
		background-color var(--duration-normal) var(--ease-glass),
		border-color var(--duration-normal) var(--ease-glass),
		backdrop-filter var(--duration-normal) var(--ease-glass);
}

.transition-liquid {
	transition:
		transform var(--duration-slow) var(--ease-liquid),
		filter var(--duration-slow) var(--ease-liquid);
}
```

### Custom Animations

```css
@keyframes pulse-custom {
	0%,
	100% {
		opacity: 1;
		transform: scale(1);
	}
	50% {
		opacity: 0.8;
		transform: scale(1.05);
	}
}

@keyframes glow-custom {
	0%,
	100% {
		box-shadow: 0 0 20px rgba(var(--brand-primary-rgb), 0.5);
	}
	50% {
		box-shadow: 0 0 40px rgba(var(--brand-primary-rgb), 0.8);
	}
}

.animate-pulse-custom {
	animation: pulse-custom 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-glow-custom {
	animation: glow-custom 3s ease-in-out infinite;
}
```

---

## Responsive Design Tokens

### Breakpoint Variables

```css
:root {
	/* Breakpoints */
	--breakpoint-sm: 640px;
	--breakpoint-md: 768px;
	--breakpoint-lg: 1024px;
	--breakpoint-xl: 1280px;
	--breakpoint-2xl: 1536px;
}

/* Responsive spacing */
@media (min-width: 640px) {
	:root {
		--space-responsive: var(--space-8);
		--text-responsive: var(--text-xl);
	}
}

@media (min-width: 1024px) {
	:root {
		--space-responsive: var(--space-12);
		--text-responsive: var(--text-2xl);
	}
}
```

### Container Queries Support

```css
/* Container query variables */
.component-container {
	container-type: inline-size;
}

@container (min-width: 300px) {
	.responsive-component {
		--component-padding: var(--space-4);
		--component-text: var(--text-sm);
	}
}

@container (min-width: 500px) {
	.responsive-component {
		--component-padding: var(--space-6);
		--component-text: var(--text-base);
	}
}
```

---

## Performance Optimization

### Reduced Motion Support

```css
/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
	:root {
		--duration-fast: 0ms;
		--duration-normal: 0ms;
		--duration-slow: 0ms;
		--ease-glass: linear;
		--ease-liquid: linear;
		--ease-spring: linear;
	}

	*,
	*::before,
	*::after {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
	}
}
```

### High Contrast Support

```css
/* High contrast mode support */
@media (prefers-contrast: high) {
	:root {
		--glass-bg-light: rgba(255, 255, 255, 0.9);
		--glass-border-light: rgba(0, 0, 0, 0.8);
		--blur-md: 0px; /* Disable blur for clarity */
	}
}
```

---

## Theme Switching System

### Complete Theme Manager

```svelte
<script>
	import { writable } from 'svelte/store';

	// Theme store
	const theme = writable('glass');

	const themes = {
		glass: {
			name: 'Glass Morphism',
			primary: '#06b6d4',
			secondary: '#3b82f6',
			accent: '#8b5cf6'
		},
		terminal: {
			name: 'Terminal Hacker',
			primary: '#4ade80',
			secondary: '#22c55e',
			accent: '#16a34a'
		},
		neon: {
			name: 'Neon Cyberpunk',
			primary: '#ec4899',
			secondary: '#8b5cf6',
			accent: '#06b6d4'
		},
		corporate: {
			name: 'Corporate Blue',
			primary: '#0052cc',
			secondary: '#091e42',
			accent: '#36b37e'
		}
	};

	const applyTheme = (themeName) => {
		const selectedTheme = themes[themeName];
		const root = document.documentElement;

		// Apply theme colors
		root.style.setProperty('--brand-primary', selectedTheme.primary);
		root.style.setProperty('--brand-secondary', selectedTheme.secondary);
		root.style.setProperty('--brand-accent', selectedTheme.accent);

		// Save to localStorage
		localStorage.setItem('selected-theme', themeName);
	};

	// Initialize theme
	const initTheme = () => {
		const saved = localStorage.getItem('selected-theme') || 'glass';
		theme.set(saved);
		applyTheme(saved);
	};

	initTheme();
</script>

<!-- Theme selector -->
<div class="theme-selector">
	{#each Object.entries(themes) as [key, themeData]}
		<button
			onclick={() => {
				theme.set(key);
				applyTheme(key);
			}}
			class="theme-option {$theme === key ? 'active' : ''}"
			style="--preview-color: {themeData.primary}"
		>
			<div class="theme-preview"></div>
			<span>{themeData.name}</span>
		</button>
	{/each}
</div>

<style>
	.theme-selector {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		padding: 1rem;
	}

	.theme-option {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 0.75rem;
		backdrop-filter: blur(8px);
		transition: all 0.3s ease;
		cursor: pointer;
	}

	.theme-option:hover,
	.theme-option.active {
		background: rgba(255, 255, 255, 0.1);
		border-color: var(--preview-color);
		box-shadow: 0 0 20px rgba(var(--preview-color-rgb), 0.3);
	}

	.theme-preview {
		width: 24px;
		height: 24px;
		background: var(--preview-color);
		border-radius: 50%;
		box-shadow: 0 0 10px rgba(var(--preview-color-rgb), 0.5);
	}
</style>
```

---

## Best Practices

### 1. **Consistent Color Usage**

- Use semantic color names (primary, secondary, accent)
- Maintain consistent opacity levels across components
- Test color combinations for accessibility

### 2. **Performance Considerations**

- Use CSS custom properties for dynamic theming
- Minimize the number of different blur values
- Respect user motion preferences

### 3. **Accessibility**

- Ensure sufficient color contrast ratios
- Provide high contrast alternatives
- Support reduced motion preferences

### 4. **Maintainability**

- Keep theme tokens in a centralized file
- Document your custom theme decisions
- Use semantic naming conventions

### 5. **Testing**

- Test themes across different devices
- Verify readability in all variants
- Check performance impact of heavy effects

---

This theming guide provides everything you need to customize A Hacker's Brand to match your unique vision while maintaining the beautiful liquid glass aesthetic and smooth animations that make the system special.
