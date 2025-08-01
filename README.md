# A Hacker's Brand Design System

<div align="center">
  <img src="https://img.shields.io/badge/version-0.3.1-green.svg" alt="Version" />
  <img src="https://img.shields.io/badge/svelte-5.0-orange.svg" alt="Svelte 5" />
  <img src="https://img.shields.io/badge/typescript-5.0-blue.svg" alt="TypeScript" />
  <img src="https://img.shields.io/badge/themes-2-purple.svg" alt="Dual Themes" />
</div>

<br />

A cutting-edge design system featuring **dual themes**: classic terminal hacker aesthetics and modern **Bubble Tea TUI** design. Switch seamlessly between green matrix styling and colorful gradient interfaces.

## ✨ Features

- 🎨 **Dual Theme System** - Terminal hacker aesthetic + Modern Bubble Tea TUI
- ⚡ **50+ Components** - Comprehensive component library with theme variants
- 🔄 **Theme Switching** - Seamless transitions between visual styles
- 🎯 **TypeScript First** - Full type safety and IntelliSense support
- 📱 **Responsive** - Mobile-first design with adaptive layouts
- ♿ **Accessible** - WCAG 2.1 AA compliant with keyboard navigation
- 🚀 **Performance** - Tree-shakable, optimized bundles
- 🎭 **Motion System** - Smooth animations and micro-interactions

## 🎨 Themes

### Terminal Theme
Classic hacker aesthetic with:
- Matrix green (`#00ff41`) color scheme
- Sharp, precise edges and corners
- IBM Plex Mono, JetBrains Mono, SF Mono typography
- High contrast for readability
- CLI-inspired interactions
- Terminal glow effects

### Bubble Tea Theme
Modern TUI design featuring:
- Colorful gradients (pink, purple, blue, cyan)
- Glow and neon effects for enhanced visual impact
- Rounded corners and soft edges
- Professional monospace typography
- Approachable color palette
- Modern terminal UI patterns

## 🚀 Quick Start

```bash
# Install with Bun (recommended)
bun add a-hackers-brand

# Install peer dependencies
bun add @threlte/core @threlte/extras three @lucide/svelte

# Or with npm/pnpm
npm install a-hackers-brand
pnpm add a-hackers-brand
```

```svelte
<script>
  import { Button, Card, GlowText, theme } from 'a-hackers-brand';
  
  // Set your preferred theme
  theme.setBubbleTea(); // or theme.setTerminal()
</script>

<!-- Use themed components -->
<Button variant="bubbleTea">Modern TUI Button</Button>
<Button variant="terminal">Hacker Style Button</Button>

<Card variant="bubbleTea">
  <GlowText color="pink" intensity="intense">
    Bubble Tea Title
  </GlowText>
  <p>Colorful and modern design with glow effects</p>
</Card>
```

## 🎯 Theme Switching

```javascript
import { theme } from 'a-hackers-brand/stores/theme';

// Switch themes programmatically
theme.toggle();                // Toggle between themes
theme.setTerminal();           // Set terminal theme
theme.setBubbleTea();          // Set Bubble Tea theme

// Listen to theme changes
theme.subscribe(currentTheme => {
  console.log('Theme changed to:', currentTheme);
});
```

## 📋 Component Variants

All major components support both theme variants:

```svelte
<!-- Terminal variants -->
<Button variant="terminal">Terminal Button</Button>
<Card variant="terminal">Terminal Card</Card>
<Modal variant="terminal">Terminal Modal</Modal>
<Tabs variant="terminal">Terminal Tabs</Tabs>

<!-- Bubble Tea variants -->
<Button variant="bubbleTea">Bubble Tea Button</Button>
<Card variant="bubbleTea">Bubble Tea Card</Card>
<Modal variant="bubbleTea">Bubble Tea Modal</Modal>
<Tabs variant="bubbleTea">Bubble Tea Tabs</Tabs>
```

## 🎨 New Components

### StatusBar
Terminal-style status bar with theme support:

```svelte
<StatusBar 
  variant="bubbleTea"
  status="Ready"
  encoding="UTF-8"
  fileType="TypeScript"
  lineNumber={42}
  columnNumber={13}
  indicators={[
    { label: 'Theme', value: 'Bubble Tea', type: 'success' }
  ]}
/>
```

### ColorPalette
Interactive color showcase with copy-to-clipboard:

```svelte
<ColorPalette 
  theme="both"
  layout="grid"
  showCategories={true}
  interactive={true}
  onColorSelect={(color) => console.log('Selected:', color)}
/>
```

### GlowText
Typography with neon/glow effects:

```svelte
<!-- Bubble Tea glow effects -->
<GlowText color="pink" intensity="intense">
  Bright Pink Glow
</GlowText>

<GlowText color="purple" pulse>
  Pulsing Purple Text
</GlowText>

<!-- Terminal glow effects -->
<GlowText variant="terminal" color="matrix">
  Matrix Green Glow
</GlowText>
```

## 📚 Documentation

Visit our comprehensive documentation:

- **[Getting Started](https://a-hackers-brand.netlify.app/docs/getting-started)** - Installation and setup
- **[Theme Guide](https://a-hackers-brand.netlify.app/docs/themes)** - Theme switching and customization
- **[Components](https://a-hackers-brand.netlify.app/docs/components)** - Component library and API
- **[Bubble Tea Theme](https://a-hackers-brand.netlify.app/docs/themes/bubble-tea)** - Modern TUI design guide

## 🎯 CSS Custom Properties

Customize themes with CSS variables:

```css
:root {
  /* Terminal Theme */
  --terminal-green: #00ff41;
  --terminal-cyan: #00ffff;
  --terminal-blue: #0080ff;
  
  /* Bubble Tea Theme */
  --bubble-tea-pink: #ff6b9d;
  --bubble-tea-purple: #c44af2;
  --bubble-tea-blue: #4fa8ff;
  --bubble-tea-radius: 16px;
}
```

## 🔧 Tailwind Integration

Extend your Tailwind config:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'bubble-tea': {
          pink: '#ff6b9d',
          purple: '#c44af2',
          blue: '#4fa8ff',
          cyan: '#4dd8da',
          // ... more colors
        }
      },
      borderRadius: {
        'bubble-tea': '16px',
        'bubble-tea-lg': '24px',
      }
    }
  }
}
```

## 🚦 Migration from v0.2.0

Version 0.3.0 is backward compatible:

- All existing `terminal` variants continue to work
- New `bubbleTea` variants are additive
- Theme store provides optional theme management
- Default theme remains `terminal`

To adopt the new theme system:

```javascript
// Before (v0.2.0)
<Button variant="default">Button</Button>

// After (v0.3.0) - Choose your theme
<Button variant="terminal">Terminal Button</Button>
<Button variant="bubbleTea">Bubble Tea Button</Button>
```

## 🎨 Design Philosophy

### Terminal Theme
Inspired by classic hacker culture, command-line interfaces, and retro computing. Features high contrast, precision, and utilitarian design principles.

### Bubble Tea Theme
Modern TUI aesthetics inspired by contemporary terminal applications like Charm's Bubble Tea framework. Emphasizes approachability, color, and contemporary design patterns.

## 💻 Development Setup

```bash
# Clone and install
git clone https://github.com/tuliopc23/a-hackers-brand.git
cd a-hackers-brand
bun install

# Start development
bun run dev

# Build
bun run build
```

## 🔧 Troubleshooting

### Dependency Conflicts
If you encounter dependency resolution conflicts:

```bash
# Clear cache and reinstall
rm -rf node_modules bun.lockb
bun install
```

### Requirements
- **Package Manager**: Bun 1.2+ (recommended) or npm/pnpm
- **Node.js**: 18+ required
- **Peer Dependencies**: @threlte/core, @threlte/extras, three, @lucide/svelte
- **Build Tools**: Vite 7+, SvelteKit 2+

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **[Documentation](https://a-hackers-brand.netlify.app)**
- **[GitHub Repository](https://github.com/tuliopc23/a-hackers-brand)**
- **[NPM Package](https://www.npmjs.com/package/a-hackers-brand)**
- **[Changelog](CHANGELOG.md)**

---

<div align="center">
  <p>Built with ❤️ by the A Hacker's Brand team</p>
  <p>
    <a href="https://svelte.dev">Svelte</a> • 
    <a href="https://kit.svelte.dev">SvelteKit</a> • 
    <a href="https://tailwindcss.com">Tailwind CSS</a> • 
    <a href="https://bun.sh">Bun</a>
  </p>
</div>