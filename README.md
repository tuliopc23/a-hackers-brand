# A Hacker's Brand

<div align="center">
  <p align="center">
    <strong>A Hacker's Brand</strong> is a cutting-edge design system that fuses Apple's liquid glass aesthetics with terminal/CLI hacker themes to create a unique visual language for the modern developer.
  </p>
  
  <p align="center">
    <a href="#installation">Installation</a> •
    <a href="#quick-start">Quick Start</a> •
    <a href="#components">Components</a> •
    <a href="#documentation">Documentation</a> •
    <a href="#contributing">Contributing</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/npm/v/a-hackers-brand?style=flat-square" alt="NPM Version">
    <img src="https://img.shields.io/npm/l/a-hackers-brand?style=flat-square" alt="License">
    <img src="https://img.shields.io/github/stars/tuliopc23/a-hackers-brand?style=flat-square" alt="GitHub Stars">
  </p>
</div>

## ✨ Features

- 🎨 **Liquid Glass Aesthetics** - Beautiful glass morphism with liquid animations
- 💻 **Terminal/CLI Theme** - Hacker aesthetics meets modern design
- 🎭 **53+ Components** - Comprehensive UI library with advanced components
- 🌊 **Liquid Jelly Motion** - Smooth, organic animations and interactions
- 🎮 **Retro Computing** - 14 vintage computer-inspired text variants
- 🚀 **WebGL/3D Effects** - Advanced visual effects with Three.js/Threlte
- 📱 **Fully Responsive** - Complete responsive design system
- 🎯 **TypeScript** - 100% type-safe with strict mode
- ⚡ **Svelte 5** - Built with the latest Svelte features
- 🎪 **TailwindCSS 4** - Bleeding-edge styling capabilities

## 📦 Installation

```bash
npm install a-hackers-brand
```

or with pnpm:

```bash
pnpm add a-hackers-brand
```

## 🚀 Quick Start

### 1. Import the CSS

Add to your app's main CSS file or `app.html`:

```css
@import 'a-hackers-brand/styles.css';
```

### 2. Use Components

```svelte
<script>
  import { Button, Card, LiquidTerminal } from 'a-hackers-brand';
</script>

<Card variant="glass" jelly>
  <h2>Welcome to the Matrix</h2>
  <p>Experience the liquid glass revolution.</p>
  <Button variant="liquid" glow>
    Enter the System
  </Button>
</Card>

<LiquidTerminal 
  title="NEURAL_INTERFACE_v3.0"
  theme="liquid"
  enableLiquidFlow
/>
```

### 3. Configure Tailwind (Optional)

If you want to use our design tokens with Tailwind:

```js
// tailwind.config.js
import hackersConfig from 'a-hackers-brand/tailwind';

export default {
  presets: [hackersConfig],
  // your config...
};
```

## 🎨 Components

### Core Glass Components
- **Button** - Liquid glass buttons with jelly effects
- **Card** - Glass morphism cards with dynamic corners
- **Input** - Terminal-styled inputs with liquid interactions
- **Modal** - Liquid entrance/exit animations
- **Badge** - Status indicators with glow effects
- **Switch** - iOS-style switches with glass aesthetics
- **Tabs** - Animated tab navigation
- **Accordion** - Collapsible content with smooth transitions

### Terminal Components
- **TerminalWindow** - Classic terminal emulator
- **LiquidTerminal** - Advanced terminal with particle effects
- **CommandBlock** - Code display with syntax highlighting
- **RetroText** - 14 vintage computer text variants

### Advanced Components
- **LiquidGlassScene** - WebGL-powered 3D scenes
- **ParticleSystem** - Interactive particle effects
- **VintageMacScreen** - Retro Macintosh UI
- **DataGrid** - Advanced data tables

### Motion System
- **liquidBlur** - Liquid morphing transitions
- **glassFade** - Smooth glass fade effects
- **jellyHover** - Organic hover interactions
- **magneticHover** - Magnetic cursor effects
- **springPop** - Bouncy spring animations

## 🛠️ Development

### Prerequisites
- Node.js 18+
- pnpm 8+

### Setup

```bash
# Clone the repository
git clone https://github.com/tuliopc23/a-hackers-brand.git
cd a-hackers-brand

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Build library and app
pnpm test         # Run tests
pnpm lint         # Lint code
pnpm format       # Format code
pnpm docs:dev     # Start documentation
```

## 📚 Documentation

Comprehensive documentation is available at [https://hackers-brand.dev](https://hackers-brand.dev) (coming soon).

### Key Sections
- [Getting Started](./docs/getting-started.md)
- [Component API](./docs/components/README.md)
- [Theming Guide](./docs/theming.md)
- [Motion System](./docs/motion.md)
- [Design Tokens](./docs/tokens.md)

## 🎯 Design Philosophy

A Hacker's Brand combines two powerful aesthetics:

1. **Apple's Liquid Glass** - Clean, modern, and sophisticated with beautiful transparency effects
2. **Terminal/CLI Hacker Culture** - Raw, powerful, and authentic with a focus on functionality

The result is a unique design language that speaks to developers while maintaining professional polish.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT © [Tulio Pinheiro Cunha](https://github.com/tuliopc23)

## 🙏 Acknowledgments

- Inspired by Apple's design philosophy
- Built with love for the hacker community
- Powered by Svelte, TailwindCSS, and Three.js

---

<div align="center">
  Made with 💚 by hackers, for hackers
</div>