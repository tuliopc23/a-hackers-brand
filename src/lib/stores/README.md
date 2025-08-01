# Theme Store - System Preference Integration

A comprehensive theme management system with automatic system color scheme detection and seamless switching capabilities.

## 🌟 Features

- **System Preference Detection**: Automatically detects `prefers-color-scheme: dark/light`
- **Auto-Switching Mode**: Follows system preference changes in real-time
- **Manual Override**: Users can manually select specific themes
- **High Contrast Support**: Respects `prefers-contrast: high` for accessibility
- **Persistent Storage**: Saves user preferences in localStorage
- **Type-Safe**: Full TypeScript support with strict typing

## 🎨 Available Themes

### Core Themes
- **Terminal**: Dark hacker aesthetic with green matrix colors (`prefers-color-scheme: dark`)
- **Bubble Tea**: Modern colorful gradients with rounded corners (`prefers-color-scheme: light`)

### Auto Mode
- **Auto**: Automatically follows system color scheme preference
  - Dark mode → Terminal theme
  - Light mode → Bubble Tea theme
  - Responds to system changes in real-time

## 🚀 Quick Start

```typescript
import { theme, themeConfig, getSystemThemePreference } from '$lib/stores/theme.ts';

// Subscribe to resolved theme (what's actually applied)
theme.subscribe(resolvedTheme => {
  console.log('Current theme:', resolvedTheme); // 'terminal' | 'bubbleTea'
});

// Subscribe to complete theme configuration
themeConfig.subscribe(config => {
  console.log('User preference:', config.userTheme); // 'terminal' | 'bubbleTea' | 'auto'
  console.log('Resolved theme:', config.resolvedTheme); // 'terminal' | 'bubbleTea'
  console.log('Colors:', config.currentColors);
});

// Set themes
theme.set('auto');        // Follow system preference
theme.setTerminal();      // Force terminal theme
theme.setBubbleTea();     // Force bubble tea theme
theme.toggle();           // Cycle through: terminal → bubbleTea → auto
```

## 📱 System Integration

### Automatic Detection

```typescript
import { getSystemThemePreference, watchSystemThemePreference } from '$lib/stores/theme.ts';

// Get current system preference
const systemTheme = getSystemThemePreference(); // 'terminal' | 'bubbleTea'

// Watch for system changes
const cleanup = watchSystemThemePreference((newTheme) => {
  console.log('System preference changed to:', newTheme);
});

// Clean up when done
cleanup();
```

### Manual Control

```svelte
<script>
  import { theme, themeConfig, isAutoTheme } from '$lib/stores/theme.ts';
</script>

<!-- Theme selector with auto mode -->
<select on:change={(e) => theme.set(e.target.value)}>
  <option value="auto">Auto (Follow System)</option>
  <option value="terminal">Terminal (Dark)</option>
  <option value="bubbleTea">Bubble Tea (Light)</option>
</select>

<!-- Show current status -->
{#if $themeConfig.userTheme === 'auto'}
  <p>Following system preference: {$themeConfig.resolvedTheme}</p>
{:else}
  <p>Manual theme: {$themeConfig.userTheme}</p>
{/if}
```

## 🎯 Advanced Usage

### Theme Display Information

```typescript
import { getThemeDisplayInfo } from '$lib/stores/theme.ts';

const info = getThemeDisplayInfo('auto', 'terminal');
console.log(info.displayName);  // "Auto (Terminal)"
console.log(info.description);  // "Automatically follows system preference. Currently: Terminal"
console.log(info.isAuto);       // true
```

### CSS Custom Properties

```typescript
import { getThemeCSSProperties } from '$lib/stores/theme.ts';

const cssProps = getThemeCSSProperties('terminal', 'high');
// Returns: { '--theme-primary': '#33ff66', '--theme-secondary': '#33ffff', ... }
```

### Complete Theme Configuration

```svelte
<script>
  import { themeConfig } from '$lib/stores/theme.ts';
  
  $: ({
    name,           // Theme identifier
    displayName,    // Human-readable name
    description,    // Theme description
    currentColors,  // Active colors (respects contrast mode)
    userTheme,      // User's preference ('auto', 'terminal', 'bubbleTea')
    resolvedTheme   // Actual applied theme ('terminal', 'bubbleTea')
  } = $themeConfig);
</script>

<div style="background: {currentColors.background}; color: {currentColors.text}">
  <h1 style="color: {currentColors.primary}">{displayName}</h1>
  <p>{description}</p>
  
  {#if userTheme === 'auto'}
    <small>Auto mode: Currently {resolvedTheme}</small>
  {/if}
</div>
```

## 🔧 System Mapping

The system preference mapping follows intuitive conventions:

```typescript
// System → Theme Mapping
'prefers-color-scheme: dark'  → 'terminal'    // Dark hacker aesthetic
'prefers-color-scheme: light' → 'bubbleTea'   // Light modern design
'no-preference'               → 'terminal'    // Conservative default
```

## 🎛️ API Reference

### Theme Store Methods

```typescript
interface ThemeStore {
  subscribe(run: (theme: SystemThemeType) => void): () => void;
  getUserTheme(): ThemeType;
  set(theme: ThemeType): void;
  toggle(): void;                    // Cycles: terminal → bubbleTea → auto
  setTerminal(): void;
  setBubbleTea(): void;
  setAuto(): void;
  reset(): void;                     // Resets to 'auto'
}
```

### System Detection Functions

```typescript
// Get current system preference
function getSystemThemePreference(): SystemThemeType;

// Watch for system preference changes
function watchSystemThemePreference(
  callback: (theme: SystemThemeType) => void
): () => void;

// Check if theme is auto mode
function isAutoTheme(theme: ThemeType): boolean;

// Get display information for theme
function getThemeDisplayInfo(
  userTheme: ThemeType, 
  resolvedTheme: SystemThemeType
): {
  displayName: string;
  description: string;
  isAuto: boolean;
};
```

## 🛠️ Implementation Details

### Storage Strategy
- **User Preference**: Stored in `localStorage` as `ahb-theme`
- **Values**: `'auto'`, `'terminal'`, `'bubbleTea'`
- **Default**: `'auto'` for optimal user experience

### Media Query Support
- Uses `window.matchMedia('(prefers-color-scheme: dark)')`
- Adds event listeners for real-time system changes
- Graceful fallback for unsupported browsers

### Performance Optimizations
- Lazy initialization of system watchers
- Automatic cleanup of event listeners
- Minimal DOM manipulations with efficient class toggling

### Browser Compatibility
- **Modern Browsers**: Full support with real-time switching
- **Legacy Browsers**: Graceful degradation to manual theme selection
- **SSR**: Safe server-side rendering with sensible defaults

## 🔍 Troubleshooting

### Common Issues

**Theme not switching automatically:**
```typescript
// Check if auto mode is enabled
const userTheme = theme.getUserTheme();
if (userTheme !== 'auto') {
  theme.setAuto(); // Enable auto mode
}
```

**System preference not detected:**
```typescript
// Verify browser support
if (window.matchMedia) {
  const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
  console.log('Dark mode supported:', darkMode.matches);
} else {
  console.log('matchMedia not supported');
}
```

**Manual testing system changes:**
```javascript
// In browser dev tools, simulate system changes:
// 1. Open Dev Tools
// 2. Cmd/Ctrl + Shift + P
// 3. Type "Show Rendering"
// 4. Change "Emulate CSS prefers-color-scheme"
```

This system provides a robust, user-friendly theme management solution that respects user preferences while offering the flexibility of manual control when needed.