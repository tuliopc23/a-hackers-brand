# A Hacker's Brand Design System

<div align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-green.svg" alt="Version" />
  <img src="https://img.shields.io/badge/svelte-5.0-orange.svg" alt="Svelte 5" />
  <img src="https://img.shields.io/badge/typescript-5.0-blue.svg" alt="TypeScript" />
  <img src="https://img.shields.io/badge/variants-3-purple.svg" alt="Variants" />
</div>

<br />

A modern Svelte 5 UI component library featuring a **terminal aesthetic**, a soft translucent **glass** style, and an experimental **liquid** glow variant.

## ✨ Features

- 🎨 **Design Variants** – `terminal`, `glass`, `liquid` (experimental/high‑glow)
- ⚡ **Rich Component Set** – Growing collection with consistent sizing & styling tokens
- 🎯 **TypeScript First** – Full type safety and IntelliSense
- 📱 **Responsive** – Mobile-first adaptive layouts
- ♿ **Accessibility-Focused** – Keyboard & semantic patterns (ongoing audit)
- 🚀 **Performance** – Tree-shakable, lean build output
- 🧩 **Composable** – Clear prop APIs; no hidden global state
- 🎭 **Motion-Ready** – Motion layer planned (prefers-reduced-motion aware)

## 🧪 Showcase Status

The interactive Histoire-based showcase is temporarily disabled due to an upstream Svelte 5 incompatibility (plugin imports from `svelte/internal`).  
To skip quietly (default): run scripts normally.  
To attempt once upstream support lands:
```bash
ENABLE_SHOWCASE=true bun run histoire
```
Tracking issue will be linked in the CHANGELOG once opened.

## 🎨 Variants (Design Intent)

### Terminal
- Matrix green accents (`#00ff41`)
- High contrast, monospaced aesthetic
- Minimal glow, utilitarian feel

### Glass
- Translucent surfaces / subtle blur
- Rounded edges & softened contrasts
- Gradient accents and soft glow
- (Formerly referred to as “Bubble Tea” in earlier drafts)

### Liquid (Experimental)
- Higher-intensity gradient & glow surfaces
- For visually expressive surfaces (cards, panels)
- Subject to refinement before 1.0

## 🚀 Quick Start

```bash
# Install (Bun recommended)
bun add a-hacker-brand

# Install peer dependencies
bun add svelte @threlte/core @threlte/extras three lucide-svelte

# Or with npm/pnpm
npm install a-hacker-brand svelte @threlte/core @threlte/extras three lucide-svelte
pnpm add a-hacker-brand svelte @threlte/core @threlte/extras three lucide-svelte
```

```svelte
<script>
  import { Button, Card, GlowText } from 'a-hacker-brand';
</script>

<Button variant="terminal">Terminal Action</Button>
<Button variant="glass">Glass Action</Button>
<Button variant="liquid">Liquid Action</Button>

<Card variant="glass">
  <GlowText color="pink" intensity="intense">
    Glass Card
  </GlowText>
  <p>Soft translucency with accent glow.</p>
</Card>
```

## 🎯 Using Variants

Most components expose a `variant` prop:
```svelte
<Tabs variant="terminal" />
<Tabs variant="glass" />
<Tabs variant="liquid" />
```
If a variant is not yet refined for a component, it gracefully falls back to a base style.

## ♿ Accessibility (Current Baseline)

Implemented:
- Semantic buttons & interactive roles (no div+onclick anti-patterns)
- Keyboard: Enter/Space activation, Escape closes overlays, Arrow keys for list-like navigation where applicable
- Focus management for popovers/drawers (restoring prior focus)
- Visible focus styles

Planned:
- Expanded a11y test matrix & automated axe scans
- Live region announcements for dynamic content
- Reduced motion tokenization

(Please report issues—accessibility is an active priority.)

## 📋 Component Variants (Examples)

```svelte
<!-- Terminal -->
<Button variant="terminal">Run</Button>
<Card variant="terminal">...</Card>
<Modal variant="terminal">...</Modal>
<Tabs variant="terminal">...</Tabs>

<!-- Glass -->
<Button variant="glass">Submit</Button>
<Card variant="glass">...</Card>
<Modal variant="glass">...</Modal>
<Tabs variant="glass">...</Tabs>

<!-- Liquid (experimental) -->
<Button variant="liquid">Glow Action</Button>
<Card variant="liquid">...</Card>
```

## 🎨 New Components

### StatusBar
Terminal-style status bar with theme support:

```svelte
<StatusBar 
  variant="glass"
  status="Ready"
  encoding="UTF-8"
  fileType="TypeScript"
  lineNumber={42}
  columnNumber={13}
  indicators={[
    { label: 'Variant', value: 'Glass', type: 'success' }
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
<!-- Glass variant glow effects -->
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

## Versioning

This is the initial 0.x line; minor releases may include breaking changes while APIs stabilize. Refer to the CHANGELOG for any breaking notes.

## 🎨 Design Philosophy

### Terminal Theme
Inspired by classic hacker culture, command-line interfaces, and retro computing. Features high contrast, precision, and utilitarian design principles.

### Glass Variant
Translucent, softened surfaces with subtle gradients and glow accents. Emphasizes approachability and modern terminal-inspired clarity without overpowering neon effects.

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