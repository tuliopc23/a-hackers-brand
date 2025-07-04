# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is A Hacker's Brand - a professional liquid glass terminal fusion design system built with SvelteKit. It combines Apple's liquid glass aesthetics with terminal/CLI hacker aesthetics to create a unique brand system for the hacker community.

## Key Technologies

- **SvelteKit** - Main framework with Svelte 5
- **TailwindCSS** - Utility-first CSS framework
- **Threlte** - Three.js integration for WebGL/3D components
- **Vite** - Build tool with optimized configurations
- **TypeScript** - Type-safe JavaScript

## Common Development Commands

```bash
# Development
npm run dev                 # Start development server
npm run build              # Build application and package
npm run build:app          # Build application only
npm run build:package      # Build package only

# Testing
npm run test               # Run unit tests with Vitest
npm run test:run           # Run tests once
npm run test:coverage      # Run tests with coverage
npm run test:motion        # Run motion library tests
npm run test:visual        # Run Playwright visual tests
npm run test:visual:update # Update visual test snapshots

# Code Quality
npm run lint               # Lint code with ESLint
npm run lint:fix           # Fix linting issues
npm run format             # Format code with Prettier
npm run format:check       # Check code formatting
npm run check              # Type check with svelte-check

# Documentation
npm run docs:dev           # Start Histoire documentation server
npm run docs:build         # Build documentation
npm run docs:preview       # Preview built documentation

# Performance
npm run perf              # Run Lighthouse performance tests
npm run analyze:bundle    # Analyze bundle size
npm run size              # Check bundle size limits
```

## Architecture

### Core Structure

- **`src/lib/`** - Main library code, published as NPM package
- **`src/lib/components/`** - Reusable UI components organized by category
- **`src/lib/motion/`** - Native Svelte 5 animation system (replaces Framer Motion)
- **`src/lib/tokens/`** - Design tokens and theme configuration
- **`src/lib/utils/`** - Utility functions and helpers
- **`src/routes/`** - SvelteKit app routes for documentation/demo

### Component Categories

1. **Core Glass Components** - Basic UI elements (Button, Card, Input, Badge, etc.)
2. **Terminal Components** - Terminal-themed components (TerminalWindow, CommandBlock, etc.)
3. **Liquidify Components** - Advanced glass morphism components with physics
4. **WebGL/3D Components** - Three.js powered components via Threlte
5. **Performance Components** - Monitoring and optimization utilities

### Motion System

Custom animation system built for Svelte 5:
- **Transitions**: `liquidBlur`, `glassFade`, `springPop`
- **Actions**: `magneticHover`
- **Presets**: Common animation configurations
- **Tokens**: Duration, easing, and animation constants

### Key Import Aliases

```typescript
$lib        → ./src/lib
$components → ./src/lib/components
$utils      → ./src/lib/utils
$stores     → ./src/lib/stores
$motion     → ./src/lib/motion
```

## Development Notes

### Package Structure
- Exports components, tokens, and utilities for external consumption
- Uses `svelte-package` for library builds
- Configured with proper TypeScript declarations
- Publishes to NPM as `tulio-brand-system`

### Performance Optimization
- Lazy loading for heavy components (3D/WebGL)
- Bundle splitting for Threlte and Lucide icons
- Performance monitoring with Lighthouse CI
- Size limits enforced with size-limit

### Testing Strategy
- Unit tests with Vitest and happy-dom
- Visual regression tests with Playwright
- Component testing with @testing-library/svelte
- Coverage thresholds: 80% functions/lines/statements, 70% branches

### 3D/WebGL Components
- Use Threlte for Three.js integration
- Lazy load 3D components to avoid blocking main thread
- Performance monitoring for WebGL-heavy components
- Fallback rendering for low-end devices

### Motion System Usage
```svelte
<script>
  import { liquid, fade, magnetic } from '$motion';
</script>

<div 
  in:liquid={{ duration: 300, blur: 'md' }}
  use:magnetic={{ strength: 0.3 }}
>
  Content
</div>
```

### Glass Morphism Components
Located in `src/lib/components/liquidify/` with physics-based interactions:
- Advanced blur and backdrop effects
- Magnetic hover interactions
- Spring-based animations
- Responsive glass surfaces