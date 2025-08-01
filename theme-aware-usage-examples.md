# Theme-Aware Component Usage Examples

## 🎯 **Basic Usage**

### **Automatic Theme Detection (Recommended)**
```svelte
<!-- Components automatically adapt to current theme -->
<Button variant="auto">Submit</Button>
<Card variant="auto">
  <h3>Auto Card</h3>
  <p>This card automatically matches the current theme.</p>
</Card>
<Input variant="auto" placeholder="Search..." />
```

### **Theme Alias (Same as auto)**
```svelte
<!-- "theme" is an alias for "auto" -->
<Button variant="theme">Theme Button</Button>
<Card variant="theme">Theme Card</Card>
```

## 🎨 **Theme-Specific Behavior**

### **Terminal Theme**
When theme is set to "terminal", auto components use:
- **Colors**: terminal-green, terminal-blue, terminal-cyan
- **Styling**: Monospace fonts, sharp borders, matrix-style aesthetics
- **Effects**: Terminal glow effects and shadows

```svelte
<!-- When terminal theme is active -->
<Button variant="auto">
  <!-- Renders with: bg-gradient-to-r from-terminal-blue to-terminal-cyan -->
</Button>
```

### **Bubble Tea Theme**
When theme is set to "bubbleTea", auto components use:
- **Colors**: bubble-tea-pink, bubble-tea-purple, bubble-tea-blue
- **Styling**: Rounded borders, colorful gradients, modern TUI aesthetics
- **Effects**: Colorful glow effects and shadows

```svelte
<!-- When bubble tea theme is active -->
<Button variant="auto">
  <!-- Renders with: bg-gradient-to-r from-bubble-tea-pink to-bubble-tea-purple -->
</Button>
```

## 🔧 **Override Examples**

### **Mixed Auto and Explicit**
```svelte
<!-- Primary action uses theme, secondary uses explicit style -->
<Button variant="auto" size="lg">Save Changes</Button>
<Button variant="ghost" size="md">Cancel</Button>

<!-- Auto main content, explicit sidebar -->
<Card variant="auto">
  <h2>Main Content</h2>
  <p>Adapts to theme automatically</p>
</Card>

<Card variant="glass" class="sidebar">
  <h3>Always Glass</h3>
  <p>Always uses glass styling</p>
</Card>
```

### **Form with Theme Awareness**
```svelte
<form>
  <!-- All inputs adapt to theme -->
  <Input variant="auto" label="Name" required />
  <Input variant="auto" label="Email" type="email" />
  <Input variant="auto" label="Message" type="textarea" />
  
  <!-- Actions match theme -->
  <div class="flex gap-4">
    <Button variant="auto" type="submit">Submit</Button>
    <Button variant="outline" type="button">Reset</Button>
  </div>
</form>
```

## 🎭 **Advanced Patterns**

### **Conditional Theme Detection**
```svelte
<script>
  import { getCurrentTheme, isTerminalTheme } from '$lib/utils/theme-aware.js';
  
  const currentTheme = $derived(getCurrentTheme());
  const isTerminal = $derived(isTerminalTheme());
</script>

{#if isTerminal}
  <Button variant="auto" class="font-mono">
    > execute_command()
  </Button>
{:else}
  <Button variant="auto" class="rounded-lg">
    🧋 Bubble Tea Action
  </Button>
{/if}
```

### **Custom Theme-Aware Component**
```svelte
<script>
  import { getThemeAwareTextColor, getCurrentTheme } from '$lib/utils/theme-aware.js';
  
  const theme = $derived(getCurrentTheme());
  const primaryColor = $derived(getThemeAwareTextColor('primary'));
  const accentColor = $derived(getThemeAwareTextColor('accent'));
</script>

<div class="custom-component {primaryColor} border-current">
  <h3 class={accentColor}>Theme-Aware Title</h3>
  <p>Current theme: {theme}</p>
</div>
```

### **Dashboard with Auto Theming**
```svelte
<!-- All components automatically match selected theme -->
<div class="dashboard">
  <!-- Header adapts to theme -->
  <Card variant="auto" class="header">
    <h1>Dashboard</h1>
    <Button variant="auto" size="sm">Settings</Button>
  </Card>
  
  <!-- Stats cards adapt to theme -->
  <div class="grid grid-cols-3 gap-4">
    <Card variant="auto">
      <h3>Users</h3>
      <p class="text-2xl">1,234</p>
    </Card>
    <Card variant="auto">
      <h3>Revenue</h3>
      <p class="text-2xl">$12.3k</p>
    </Card>
    <Card variant="auto">
      <h3>Growth</h3>
      <p class="text-2xl">+23%</p>
    </Card>
  </div>
  
  <!-- Form adapts to theme -->
  <Card variant="auto">
    <h2>Quick Actions</h2>
    <div class="flex gap-2">
      <Input variant="auto" placeholder="Search users..." />
      <Button variant="auto">Search</Button>
    </div>
  </Card>
</div>
```

## 🔄 **Theme Switching**

### **Dynamic Theme Toggle**
```svelte
<script>
  import { theme } from '$lib/stores/theme.js';
  import { Button } from '$lib/components';
  
  function toggleTheme() {
    const currentTheme = $theme.resolvedTheme;
    if (currentTheme === 'terminal') {
      theme.setBubbleTea();
    } else {
      theme.setTerminal();
    }
  }
</script>

<!-- Button automatically updates its styling when theme changes -->
<Button variant="auto" onclick={toggleTheme}>
  Toggle Theme
</Button>

<!-- Card content automatically updates -->
<Card variant="auto">
  <p>This card will automatically update its styling when you toggle the theme!</p>
</Card>
```

### **Theme Selector with Previews**
```svelte
<script>
  import { theme } from '$lib/stores/theme.js';
  
  const themes = [
    { key: 'terminal', name: 'Terminal', description: 'Dark hacker aesthetic' },
    { key: 'bubbleTea', name: 'Bubble Tea', description: 'Colorful modern TUI' }
  ];
</script>

<div class="theme-selector">
  <h3>Choose Theme</h3>
  
  {#each themes as themeOption}
    <Card 
      variant="auto" 
      interactive 
      onclick={() => theme.set(themeOption.key)}
      class="theme-preview"
    >
      <h4>{themeOption.name}</h4>
      <p>{themeOption.description}</p>
      
      <!-- Preview components -->
      <div class="preview">
        <Button variant="auto" size="sm">Preview</Button>
        <Input variant="auto" placeholder="Preview input" size="sm" />
      </div>
    </Card>
  {/each}
</div>
```

## 💡 **Best Practices**

### **Default to Auto**
```svelte
<!-- ✅ Good: Let components adapt to theme -->
<Button variant="auto">Primary Action</Button>
<Card variant="auto">Main Content</Card>

<!-- ❌ Avoid: Hard-coding themes unless specifically needed -->
<Button variant="terminal">Hard-coded Terminal</Button>
```

### **Use Explicit When Needed**
```svelte
<!-- ✅ Good: Explicit when you need specific styling -->
<Button variant="auto">Save</Button>        <!-- Matches theme -->
<Button variant="ghost">Cancel</Button>     <!-- Always subtle -->
<Button variant="outline">Advanced</Button> <!-- Always outlined -->

<!-- ✅ Good: Brand elements that should stay consistent -->
<Card variant="glass" class="logo-card">
  <img src="/logo.svg" alt="Logo" />
</Card>
```

### **Progressive Enhancement**
```svelte
<!-- ✅ Good: Start with auto, enhance with specific variants -->
<div class="action-bar">
  <Button variant="auto" size="lg">Primary</Button>
  <Button variant="auto" size="md">Secondary</Button>
  <Button variant="ghost" size="sm">Tertiary</Button>
</div>
```

---

## 🎉 **Result**

With these patterns, your components will automatically adapt to the current theme while giving you full control when you need explicit styling. The theme-aware system provides consistency by default and flexibility when needed!