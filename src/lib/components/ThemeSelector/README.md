# ThemeSelector Component

A flexible theme selector component that integrates with the system theme preference detection system. Provides multiple UI variants for theme selection with real-time system preference following.

## 🌟 Features

- **Multiple Variants**: Dropdown, toggle buttons, and pill buttons
- **Auto Mode**: Automatically follows system `prefers-color-scheme`
- **Real-time Updates**: Shows current system preference status
- **Accessible**: Full keyboard navigation and screen reader support
- **Responsive**: Adapts to different screen sizes
- **Type-Safe**: Full TypeScript integration

## 🚀 Usage Examples

### Basic Usage

```svelte
<script>
  import { ThemeSelector } from '$lib/components';
</script>

<!-- Default pill-style selector -->
<ThemeSelector />
```

### Dropdown Variant

```svelte
<ThemeSelector 
  variant="dropdown" 
  showDescription={true}
  showSystemStatus={true}
/>
```

### Toggle Button Variant

```svelte
<ThemeSelector 
  variant="toggle" 
  size="lg"
  showDescription={false}
/>
```

### Minimal Pills

```svelte
<ThemeSelector 
  variant="pills"
  size="sm"
  showDescription={false}
  showSystemStatus={false}
/>
```

## 📱 Responsive Design

The component automatically adapts to different screen sizes:

```svelte
<!-- Mobile-optimized -->
<div class="block sm:hidden">
  <ThemeSelector variant="dropdown" size="md" />
</div>

<!-- Desktop version -->
<div class="hidden sm:block">
  <ThemeSelector variant="pills" size="lg" />
</div>
```

## 🎨 Variants

### Dropdown
- **Best for**: Settings pages, mobile layouts
- **Features**: Full descriptions, compact when collapsed
- **Accessibility**: Native select element support

### Toggle Buttons
- **Best for**: Compact horizontal layouts
- **Features**: Visual button group, clear active state
- **Accessibility**: Proper button roles and ARIA states

### Pills
- **Best for**: Modern UIs, flexible layouts
- **Features**: Icon + text, flexible wrapping
- **Accessibility**: Individual button elements

## 🔧 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'dropdown' \| 'toggle' \| 'pills'` | `'pills'` | UI variant to display |
| `showDescription` | `boolean` | `true` | Show theme description text |
| `showSystemStatus` | `boolean` | `true` | Show system preference indicator |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Component size |
| `class` | `string` | `''` | Additional CSS classes |

## 🎯 Integration Examples

### Navigation Bar

```svelte
<script>
  import { ThemeSelector } from '$lib/components';
</script>

<nav class="flex items-center justify-between p-4">
  <h1>My App</h1>
  <ThemeSelector 
    variant="pills" 
    size="sm"
    showDescription={false}
    showSystemStatus={false}
  />
</nav>
```

### Settings Panel

```svelte
<script>
  import { ThemeSelector, Card } from '$lib/components';
</script>

<Card>
  <h2>Appearance Settings</h2>
  <div class="space-y-4">
    <ThemeSelector 
      variant="dropdown"
      showDescription={true}
      showSystemStatus={true}
    />
    
    <!-- Other settings... -->
  </div>
</Card>
```

### Sidebar

```svelte
<aside class="w-64 p-4 border-r">
  <div class="space-y-6">
    <div>
      <h3 class="text-sm font-medium mb-2">Theme</h3>
      <ThemeSelector 
        variant="toggle"
        size="sm"
        showDescription={false}
      />
    </div>
  </div>
</aside>
```

## 🎨 Styling

### CSS Custom Properties

The component uses theme-aware custom properties:

```css
.theme-selector {
  --primary: var(--theme-primary);
  --surface: var(--theme-surface);
  --text: var(--theme-text);
  --border: var(--theme-border);
}
```

### Custom Styling

```svelte
<ThemeSelector 
  class="custom-theme-selector"
  variant="pills"
/>

<style>
  :global(.custom-theme-selector) {
    /* Custom button styling */
    --button-spacing: 0.75rem;
    --button-radius: 0.5rem;
  }
  
  :global(.custom-theme-selector button) {
    border-radius: var(--button-radius);
    padding: var(--button-spacing);
  }
</style>
```

## ♿ Accessibility

### Keyboard Navigation
- **Tab**: Navigate between options
- **Enter/Space**: Select theme
- **Arrow Keys**: Navigate in toggle variant

### Screen Reader Support
- Proper ARIA labels and descriptions
- Live region updates for theme changes
- Semantic button/select elements

### Reduced Motion
- Respects `prefers-reduced-motion: reduce`
- Disables transitions when requested
- Maintains functionality without animations

## 🔍 System Integration

### Auto Mode Indicator

```svelte
{#if $themeConfig.userTheme === 'auto'}
  <div class="flex items-center gap-2 text-sm">
    <div class="w-2 h-2 bg-green-400 rounded-full"></div>
    <span>Following system: {$themeConfig.resolvedTheme}</span>
  </div>
{/if}
```

### Manual Override Detection

```svelte
<script>
  import { theme, themeConfig, isAutoTheme } from '$lib/stores/theme.ts';
  
  $: isManualOverride = !isAutoTheme($themeConfig.userTheme);
</script>

{#if isManualOverride}
  <button onclick={() => theme.setAuto()}>
    Switch to Auto Mode
  </button>
{/if}
```

## 🛠️ Advanced Usage

### Custom Theme Options

```svelte
<script>
  import { theme } from '$lib/stores/theme.ts';
  
  const customThemes = [
    { value: 'auto', label: '🔄 Auto', description: 'Follow system' },
    { value: 'terminal', label: '💻 Terminal', description: 'Dark hacker theme' },
    { value: 'bubbleTea', label: '🧋 Bubble Tea', description: 'Light modern theme' }
  ];
</script>

<div class="space-y-2">
  {#each customThemes as { value, label, description }}
    <button 
      class="w-full text-left p-3 rounded-lg border"
      class:active={$themeConfig.userTheme === value}
      onclick={() => theme.set(value)}
    >
      <div class="font-medium">{label}</div>
      <div class="text-sm opacity-70">{description}</div>
    </button>
  {/each}
</div>
```

### Theme Preview

```svelte
<script>
  import { themeConfigs } from '$lib/stores/theme.ts';
</script>

<div class="grid grid-cols-3 gap-4">
  {#each Object.entries(themeConfigs) as [key, config]}
    <div 
      class="p-4 rounded-lg border cursor-pointer"
      style="background: {config.colors.background}; color: {config.colors.text}"
      onclick={() => theme.set(key)}
    >
      <h3 style="color: {config.colors.primary}">{config.displayName}</h3>
      <p class="text-sm opacity-75">{config.description}</p>
    </div>
  {/each}
</div>
```

This component provides a complete, accessible, and flexible theme selection interface that seamlessly integrates with the system preference detection system.