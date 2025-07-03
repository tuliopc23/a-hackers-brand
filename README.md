# Tulio Brand System

Professional Liquid Glass Terminal Fusion Brand System - A cutting-edge design system combining Apple's liquid glass aesthetics with terminal/CLI hacker aesthetics.

## 🚀 Features

- **Liquid Glass Design Language**: Inspired by Apple's latest design innovations
- **Terminal/CLI Aesthetics**: Hacker-inspired components with cyberpunk styling
- **Advanced WebGL Effects**: 3D particle systems and shader-based animations
- **Performance Optimized**: Built for production with lazy loading and bundle optimization
- **Fully Typed**: Complete TypeScript support with comprehensive type definitions
- **Motion System**: Advanced animations with magnetic hover, ripple effects, and physics
- **Accessibility First**: WCAG 2.1 AA compliant components

## 📦 Installation

```bash
npm install tulio-brand-system
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install svelte @sveltejs/kit three @threlte/core @threlte/extras
```

## 🎯 Quick Start

```svelte
<script>
  import { GlassButton, TerminalWindow, GlassCard } from 'tulio-brand-system';
</script>

<GlassCard class="p-6">
  <h1>Welcome to the Future</h1>
  <GlassButton variant="primary" magnetic ripple>
    Deploy to Production
  </GlassButton>
</GlassCard>

<TerminalWindow title="system.exe" autoPlay>
  <script>
    const commands = [
      { command: 'npm install tulio-brand-system', delay: 1000 },
      { command: 'npm run dev', delay: 2000 }
    ];
  </script>
</TerminalWindow>
```

## 🧩 Components

### Glass Components
- `GlassButton` - Liquid glass buttons with magnetic hover and ripple effects
- `GlassCard` - Frosted glass containers with backdrop blur
- `GlassInput` - Terminal-inspired input fields with glow effects
- `GlassModal` - Floating glass modal dialogs
- `GlassTabs` - Smooth animated tab navigation

### Terminal Components
- `TerminalWindow` - Fully interactive terminal emulator
- `TerminalOrbit` - 3D orbital terminal visualization
- `AdvancedTerminal` - Terminal with AI command suggestions
- `CommandBlock` - Syntax-highlighted command displays

### WebGL/3D Components
- `GlassScene` - Interactive 3D glass formations
- `LiquidGlassShader` - Advanced liquid distortion effects
- `LiquidParticleSystem` - Physics-based particle animations
- `AdvancedLiquidGlassScene` - Multi-theme 3D environments

### Motion Components
- `MagneticButton` - Magnetic hover interactions
- `RippleButton` - Material Design ripple effects
- `FloatingElements` - Floating animation system
- `ParallaxScroll` - Smooth parallax scrolling

## 🎨 Design Tokens

The system includes a comprehensive set of design tokens:

```javascript
import { tokens, brandColors, typography } from 'tulio-brand-system/tokens';

// Use brand colors
const primaryColor = brandColors.terminal.green; // #00d4aa
const glassBackground = brandColors.glass.primary; // rgba(0, 212, 170, 0.8)

// Typography scale
const monoFont = typography.fontFamily.mono; // ['PP Supply Mono', 'Consolas', ...]
```

## 🛠 Customization

### Theme Configuration

```svelte
<script>
  import { GlassScene } from 'tulio-brand-system';
</script>

<GlassScene 
  theme="cyberpunk" 
  quality="ultra"
  enableBloom={true}
  enableParticles={true}
  interactive={true}
/>
```

### CSS Custom Properties

```css
:root {
  --terminal-green: #00d4aa;
  --glass-blur: blur(12px);
  --magnetic-strength: 0.3;
}
```

## 🎭 Available Themes

- **Terminal**: Classic green terminal aesthetic
- **Cyberpunk**: Neon pink and cyan styling
- **Neural**: Organic green neural network theme
- **Quantum**: Purple and orange quantum computing theme
- **Liquid**: Blue liquid glass effects

## ⚡ Performance

The system is built with performance in mind:

- **Lazy Loading**: Components load only when needed
- **Bundle Splitting**: Separate chunks for WebGL and heavy components
- **Tree Shaking**: Import only what you use
- **Performance Monitoring**: Built-in performance overlay

```svelte
<script>
  import { PerformanceOverlay } from 'tulio-brand-system';
</script>

<PerformanceOverlay position="bottom-right" />
```

## 📱 Responsive Design

All components are fully responsive and work across devices:

```svelte
<GlassButton 
  size="md"
  class="sm:size-lg lg:size-xl"
  magnetic
  ripple
>
  Responsive Button
</GlassButton>
```

## 🧪 Testing

The system includes comprehensive testing utilities:

```javascript
import { render } from '@testing-library/svelte';
import { GlassButton } from 'tulio-brand-system';

test('renders glass button', () => {
  const { getByRole } = render(GlassButton, { 
    props: { variant: 'primary' } 
  });
  expect(getByRole('button')).toBeInTheDocument();
});
```

## 📖 Documentation

Visit our [interactive documentation](https://tulio-brand-system.vercel.app) for:

- Live component demos
- Code examples
- Brand guidelines
- Performance insights
- Integration guides

## 🛠 Development

To develop locally:

```bash
# Clone the repository
git clone https://github.com/tuliopinheirocunha/tulio-brand-system.git
cd tulio-brand-system

# Install dependencies
npm install

# Start development server
npm run dev

# Build the package
npm run package

# Run tests
npm run test
```

## 🤝 Contributing

This is a personal brand system, but feedback and suggestions are welcome!

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🔗 Links

- [Documentation](https://tulio-brand-system.vercel.app)
- [GitHub Repository](https://github.com/tuliopinheirocunha/tulio-brand-system)
- [npm Package](https://www.npmjs.com/package/tulio-brand-system)

---

Built with ❤️ using Svelte 5, SvelteKit, Three.js, and Threlte.
