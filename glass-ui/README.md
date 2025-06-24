# Glass UI ✨

> Professional glassmorphism component library for React. Beautiful, accessible, and performant.

[![npm version](https://badge.fury.io/js/%40tuliopc23%2Fglass-ui.svg)](https://badge.fury.io/js/%40tuliopc23%2Fglass-ui)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@tuliopc23/glass-ui)](https://bundlephobia.com/package/@tuliopc23/glass-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

## 🚀 **Why Glass UI?**

Glass UI provides **production-ready glassmorphism components** that work seamlessly in any React application. Built with TypeScript, accessibility-first, and performance-optimized.

### **What Makes It Special**
- 🎨 **Beautiful Glassmorphism** - Multiple glass variants (light, dark, adaptive)
- ⚡ **Performance First** - Tree-shakeable, <150KB bundle size
- ♿ **Accessible** - WCAG 2.1 AA compliant, keyboard navigation
- 🔧 **Developer Experience** - Full TypeScript support, excellent autocomplete
- 🎯 **Universal** - Works in any React app, any design system
- 📱 **Responsive** - Mobile-first, works on all devices

## 📦 **Installation**

```bash
npm install @tuliopc23/glass-ui

# or
yarn add @tuliopc23/glass-ui

# or  
pnpm add @tuliopc23/glass-ui
```

### **Peer Dependencies**
```bash
npm install react react-dom
```

## 🎯 **Quick Start**

```tsx
import { Button, Card, Input } from '@tuliopc23/glass-ui';

function App() {
  return (
    <Card variant="glass" className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Glass UI</h1>
      <Input variant="glass" placeholder="Enter your email" />
      <Button variant="glass" className="mt-4">
        Get Started
      </Button>
    </Card>
  );
}
```

## 🧩 **Components**

### **Form Elements**
- **Button** - Multiple variants including glass effects
- **Input** - Text inputs with glassmorphism styling  
- **Textarea** - Multi-line text areas
- **Select** - Dropdown selections with Radix UI
- **Badge** - Labels and status indicators

### **Layout & Structure**
- **Card** - Flexible containers with glass effects
- **Modal** - Accessible dialogs and overlays
- **Tooltip** - Contextual information overlays

### **All Components Include:**
- ✅ Multiple glass variants (`glass`, `glass-dark`, `outline`, `ghost`)
- ✅ Comprehensive TypeScript definitions
- ✅ Accessibility features (ARIA, keyboard navigation)
- ✅ Responsive design patterns
- ✅ Dark mode support

## 🎨 **Variant System**

Glass UI uses a consistent variant system across all components:

```tsx
// Glass variants
<Button variant="glass">Glass Button</Button>
<Card variant="glass-dark">Dark Glass Card</Card>

// Standard variants  
<Button variant="outline">Outline Button</Button>
<Card variant="elevated">Elevated Card</Card>
```

### **Available Variants**
- `glass` - Light glassmorphism effect
- `glass-dark` - Dark glassmorphism effect  
- `outline` - Border-only styling
- `ghost` - Minimal hover effects
- `default` - Standard styling

## 🔧 **Styling & Customization**

Glass UI is built with **Tailwind CSS** and uses **CSS variables** for theming:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... */
}
```

### **Custom Themes**
```tsx
// Override CSS variables for custom themes
<div style={{
  '--background': '210 40% 98%',
  '--glass-bg': 'rgba(255, 255, 255, 0.1)',
  '--glass-border': 'rgba(255, 255, 255, 0.2)'
}}>
  <Button variant="glass">Themed Button</Button>
</div>
```

## 📱 **Responsive Design**

All components include responsive design patterns:

```tsx
<Button 
  size="sm"        // Mobile
  className="md:size-lg lg:size-xl"  // Larger screens
>
  Responsive Button
</Button>
```

## ♿ **Accessibility**

Glass UI is built with accessibility as a first-class citizen:

- **Keyboard Navigation** - All interactive elements support keyboard
- **Screen Readers** - Proper ARIA labels and semantic HTML
- **Focus Management** - Visible focus indicators and logical tab order
- **Color Contrast** - WCAG 2.1 AA compliant color combinations

```tsx
// Accessibility features included automatically
<Button 
  aria-label="Submit form"
  disabled={isLoading}
>
  {isLoading ? 'Loading...' : 'Submit'}
</Button>
```

## 🚀 **Performance**

- **Tree Shaking** - Import only what you use
- **Bundle Size** - <150KB for complete library
- **Runtime Performance** - Optimized rendering, minimal re-renders
- **CSS-in-JS Free** - Uses Tailwind for optimal performance

```tsx
// Tree-shaking friendly imports
import { Button } from '@tuliopc23/glass-ui';  // Recommended

// Or import specific components
import { Button } from '@tuliopc23/glass-ui/button';
```

## 📚 **Documentation & Storybook**

- **Live Documentation**: [glass-ui.tuliocunha.dev](https://glass-ui.tuliocunha.dev)
- **Interactive Storybook**: [storybook.glass-ui.tuliocunha.dev](https://storybook.glass-ui.tuliocunha.dev)
- **GitHub Repository**: [github.com/tuliopc23/glass-ui](https://github.com/tuliopc23/glass-ui)

## 🛠️ **Development**

```bash
# Clone the repository
git clone https://github.com/tuliopc23/glass-ui.git
cd glass-ui

# Install dependencies
npm install

# Start development server
npm run dev

# Run Storybook
npm run storybook

# Run tests
npm test

# Build library
npm run build
```

## 🤝 **Contributing**

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 **License**

MIT © [Tulio Pinheiro Cunha](https://tuliocunha.dev)

## 🙏 **Acknowledgments**

- [Radix UI](https://radix-ui.com) - Primitive components
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [Framer Motion](https://framer.com/motion) - Animation library
- [React](https://react.dev) - UI library

---

**Made with ❤️ by [Tulio Pinheiro Cunha](https://tuliocunha.dev)** 