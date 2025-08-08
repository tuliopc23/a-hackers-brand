# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Hacker's Brand is a cutting-edge design system that combines Apple's liquid glass aesthetics with terminal/CLI hacker aesthetics. It's built with SvelteKit, TypeScript, and Threlte (Three.js for Svelte).

## Essential Commands

### Development
```bash
# Start dev server with Bun
bun run dev

# Run type checking
bun run check
bun run typecheck  # alias

# Run linting
bun run lint
bun run lint:fix  # auto-fix issues

# Run tests
bun run test       # watch mode
bun run test:run   # single run
```

### Building
```bash
# Build the library package
bun run build:package

# Build for production
bun run build

# Build and analyze bundle size
bun run analyze
```

### Testing
```bash
# Unit tests with coverage
bun run test:coverage

# Run specific test categories
bun run test:motion      # motion library tests
bun run test:integration # integration tests

# Visual regression testing (if Playwright is set up)
bun run test:visual
bun run test:visual:update  # update snapshots
```

### Component Generation
```bash
# Generate a new component
bun run generate:component

# Generate documentation
bun run generate:docs
```

### Deployment
```bash
# Full deployment process (tests + build + deploy)
bun run deploy

# Skip tests during deployment
bun run deploy:skip-tests

# Dry run deployment
bun run deploy:dry-run
```

## Architecture Overview

### Project Structure
```
src/lib/
├── components/       # UI components organized by type
│   ├── effects/     # Visual effect components
│   ├── liquidify/   # Glass UI components with physics
│   ├── responsive/  # Responsive layout components
│   └── webgl/       # 3D/WebGL components
├── motion/          # Animation and motion utilities
├── stores/          # Svelte stores
├── tokens/          # Design tokens
└── utils/           # Utility functions
```

### Key Component Categories

1. **Glass UI Components** (`liquidify/`): Premium glass-morphism components with physics simulations
   - GlassButton, GlassCard, GlassInput, GlassModal, GlassTabs
   - Physics engines: glass-ripple, magnetic-hover, spring animations

2. **Terminal Components**: Hacker aesthetic terminal emulators
   - TerminalWindow, AdvancedTerminal, LiquidTerminal
   - Command blocks, AI suggestions, boot sequences

3. **3D/WebGL Components** (`webgl/`): Three.js-based 3D effects
   - LiquidGlassScene, LiquidBackground, ParticleSystem
   - Uses Threlte for Svelte integration

4. **Motion Library** (`motion/`): Reusable animation presets
   - glassFade, jellyMotion, liquidBlur, magneticHover, springPop

### Technology Stack

- **Framework**: SvelteKit with TypeScript
- **Bundler**: Vite with Bun runtime
- **Styling**: Tailwind CSS v4
- **3D Graphics**: Three.js via Threlte
- **Testing**: Vitest (unit), Playwright (e2e/visual)
- **Linting**: ESLint with security and a11y plugins
- **Package Manager**: Bun

### Build Configuration

The project uses advanced Vite configuration with:
- Automatic code splitting for optimal caching
- Separate chunks for: threlte, icons, motion, utils, components
- Brotli and gzip compression for production builds
- Tree-shaking and bundle analysis tools

### Testing Strategy

- **Coverage Requirements**: 90% for functions, lines, statements; 85% for branches
- **Test Categories**: unit, integration, visual regression, a11y, e2e
- **Performance**: Lighthouse CI integration for performance monitoring

### Development Guidelines

1. **Component Creation**: Use `bun run generate:component` for consistent structure
2. **TypeScript**: Strict mode enabled, avoid `any` types
3. **Accessibility**: WCAG 2.1 AA compliance enforced via ESLint
4. **Security**: ESLint security plugin catches common vulnerabilities
5. **Performance**: Monitor bundle size with `bun run size`

### Export Structure

The library exports components through multiple entry points:
- Main export: `a-hackers-brand`
- Components: `a-hackers-brand/components`
- Tokens: `a-hackers-brand/tokens`
- Styles: `a-hackers-brand/styles`

### Important Notes

- Uses Bun runtime for improved performance
- Svelte 5 with runes API
- All scripts in `/scripts` are Bun executables
- CSS-in-JS not used; prefer Tailwind utilities
- WebGL components may require browser environment