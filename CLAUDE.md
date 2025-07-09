# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is A Hacker's Brand - a professional liquid glass terminal fusion design system built with SvelteKit. It combines Apple's liquid glass aesthetics with terminal/CLI hacker aesthetics to create a unique brand system for the hacker community.

## Key Technologies

- **SvelteKit 2.22.2** - Main framework with Svelte 5.35.1
- **TailwindCSS 3.4.17** - Utility-first CSS with custom liquid glass configurations
- **Threlte 8.0.0** - Three.js integration for WebGL/3D components
- **Vite 6.3.5** - Build tool with optimized chunking and source maps
- **TypeScript 5.8.3** - Type-safe JavaScript in strict mode
- **Vitest 3.2.4** - Unit testing with coverage thresholds
- **Playwright 1.53.2** - Visual regression testing

## Common Development Commands

```bash
# Development
npm run dev                    # Start development server
npm run build                  # Build search index + app + package
npm run build:app              # Build application only
npm run build:package          # Build package with svelte-package
npm run build:search-index     # Build search index for docs
npm run preview                # Preview built app
npm run package                # Package library only

# Testing
npm run test                   # Run Vitest in watch mode
npm run test:run               # Run tests once
npm run test:coverage          # Run tests with coverage
npm run test:motion            # Run motion library tests
npm run test:all               # Run all tests (unit + visual + a11y)
npm run test:visual            # Run Playwright visual tests
npm run test:visual:update     # Update visual test snapshots
npm run test:visual:ui         # Run visual tests with UI
npm run test:a11y              # Run accessibility tests

# Code Quality
npm run lint                   # ESLint with flat config
npm run lint:fix               # Fix linting issues
npm run format                 # Format with Prettier
npm run format:check           # Check formatting
npm run check                  # Type check with svelte-check
npm run check:watch            # Type check in watch mode

# Documentation (Histoire disabled due to conflicts)
npm run docs:build-integrated  # Custom docs build script
npm run generate:docs          # Generate documentation
npm run docs:watch             # Watch docs generation

# Performance & Bundle Analysis
npm run perf                   # Lighthouse CI autorun
npm run analyze:bundle         # Vite bundle analyzer
npm run size                   # Check bundle size limits
npm run size:analyze           # Analyze bundle size with details
npm run bundle:monitor         # Build + analyze bundle

# Code Generation
npm run generate:component     # Generate new component
npm run generate:docs:watch    # Watch and generate docs
```

## Architecture

### Core Structure

- **`src/lib/`** - Main library code, published as NPM package
- **`src/lib/components/`** - Reusable UI components organized by category
- **`src/lib/motion/`** - Native Svelte 5 animation system
- **`src/lib/tokens/`** - Design tokens and theme configuration
- **`src/lib/utils/`** - Utility functions and helpers
- **`src/lib/search/`** - Search functionality for documentation
- **`src/lib/docs/`** - Documentation generation utilities
- **`src/routes/`** - SvelteKit app routes for documentation/demo
- **`scripts/`** - Build scripts for search index and docs generation

### Component Categories

1. **Core Components** - Basic UI elements (Button, Card, Input, Badge, etc.)
2. **Terminal Components** - CLI-themed components (TerminalWindow, CommandBlock, BootSequence, etc.)
3. **Liquidify Components** - Advanced glass morphism with physics (`src/lib/components/liquidify/`)
4. **WebGL/3D Components** - Three.js powered components (`src/lib/components/webgl/`)
5. **Effects Components** - Visual effects and animations
6. **Responsive Components** - Layout and responsive utilities
7. **Performance Components** - Monitoring and optimization utilities
8. **Playground Components** - Development and testing tools

### Motion System

Custom animation system built for Svelte 5 with full TypeScript support:

- **Transitions**: `liquidBlur`, `glassFade`, `springPop`, `jellyMotion`
- **Actions**: `magneticHover`, `jellyHover`, `liquidResponsive`
- **Presets**: Common animation configurations
- **Tokens**: Duration, easing, and animation constants

### Key Import Aliases

```typescript
$lib        → ./src/lib
$components → ./src/lib/components
$utils      → ./src/lib/utils
$stores     → ./src/lib/stores
$motion     → ./src/lib/motion
$types      → ./src/lib/types
```

## Development Notes

### Package Structure

- Exports components, tokens, and utilities for external consumption
- Uses `svelte-package` for library builds with publint validation
- Configured with proper TypeScript declarations and source maps
- Package name: `a-hackers-brand` (not `tulio-brand-system`)
- Uses pnpm for package management

### Svelte 5 Migration Status

The project is **75% migrated to Svelte 5** with the following patterns:

**Completed:**

- Motion system fully migrated with proper action interfaces
- Core components using `$props()` and `$state()` runes
- Custom actions (`jellyHover`, `magneticHover`, `liquidResponsive`) working properly

**Critical Issues Requiring Attention:**

- Legacy `$:` reactive statements need conversion to `$effect`
- Deprecated `<svelte:component>` usage needs updating
- Some `<slot>` instances need migration to `{@render}` tags
- Accessibility warnings for missing keyboard handlers

### Performance Optimization

- Manual bundle chunking for Threlte and Lucide icons
- Lazy loading for heavy components (3D/WebGL)
- Performance monitoring with Lighthouse CI
- Size limits enforced with size-limit package
- Source maps enabled for production debugging

### Testing Strategy

- Unit tests with Vitest and jsdom environment
- Visual regression tests with Playwright (multi-browser + mobile)
- Component testing with @testing-library/svelte
- Accessibility testing with axe-core
- Coverage thresholds: 80% functions/lines/statements, 70% branches

### Build Configuration

- **Vite**: ESNext target with esbuild minification
- **Deployment**: Vercel adapter with Node.js 20.x runtime
- **TypeScript**: Strict mode enabled
- **ESLint**: Flat config structure

### 3D/WebGL Components

- Use Threlte 8.0.0 for Three.js integration
- Lazy load 3D components to avoid blocking main thread
- Performance monitoring for WebGL-heavy components
- Fallback rendering for low-end devices

### Motion System Usage

```svelte
<script>
	import { liquidBlur, glassFade, magneticHover, jellyHover } from '$motion';
</script>

<div
	in:liquidBlur={{ duration: 300, blur: 'md' }}
	use:magneticHover={{ strength: 0.3 }}
	use:jellyHover={{ enabled: true, duration: 200 }}
>
	Content
</div>
```

### Component Development Patterns

**Svelte 5 Component Structure:**

```svelte
<script lang="ts">
	import { magneticHover, jellyHover } from '$lib/motion';

	interface Props extends HTMLButtonAttributes {
		variant?: 'default' | 'secondary';
		// ... other props
	}

	const { variant = 'default', ...restProps }: Props = $props();
</script>

<button use:jellyHover={{ enabled: true, duration: 200 }} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</button>
```

### Documentation System

- Histoire removed due to dependency conflicts
- Custom documentation generation with search index
- Integrated docs build process with watch mode
- Search functionality powered by FlexSearch

### Glass Morphism Components

Located in `src/lib/components/liquidify/` with physics-based interactions:

- Advanced blur and backdrop effects
- Magnetic hover interactions
- Spring-based animations
- Responsive glass surfaces
