# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.1] - 2025-08-01

### Fixed
- Resolved dependency resolution conflicts between Vite 7 and @sveltejs/vite-plugin-svelte
- Added missing devDependencies for @threlte/core, @threlte/extras, three, and @lucide/svelte
- Fixed compilation failures caused by missing Threlte and Three.js packages
- Forced exact version for @sveltejs/vite-plugin-svelte to prevent downgrade to incompatible 5.x

### Changed
- Updated installation instructions to use Bun package manager
- Improved dependency resolution stability
- Added troubleshooting section to README for dependency conflicts

### Technical
- Added missing peerDependency for @lucide/svelte for consistency
- Enhanced development setup documentation with Bun commands
- Improved cache clearing instructions for dependency conflicts

### Migration Notes
- Existing users should clear their cache and reinstall dependencies after updating
- Run `rm -rf node_modules bun.lockb && bun install` to resolve any conflicts
- No breaking changes to component APIs or theme system

## [0.3.0] - 2024-12-01

### Added
- **Bubble Tea Theme System**: Complete dual-theme architecture supporting both terminal hacker aesthetics and modern TUI design
- **Theme Store**: Centralized theme management with `theme.js` store for seamless theme switching
- **New Color Palette**: Comprehensive Bubble Tea color system with pink, purple, blue, cyan gradients
- **Theme Variants**: Added `bubbleTea` variant to all major components (Button, Card, Tabs, Modal)
- **StatusBar Component**: New component for terminal-style status displays with theme support
- **ColorPalette Component**: Interactive color showcase component with copy-to-clipboard functionality
- **Theme Documentation**: Complete documentation pages for theme usage and implementation
- **Border Radius System**: Enhanced border radius tokens for rounded Bubble Tea aesthetics
- **Gradient Utilities**: New gradient combinations for modern TUI styling

### Enhanced
- **Button Component**: Added `bubbleTea` variant with rounded corners and gradient styling
- **Card Component**: Enhanced with `bubbleTea` variant featuring gradient backgrounds
- **Tabs Component**: Added pill-style tabs for Bubble Tea theme with smooth transitions
- **Modal Component**: Updated with rounded corners and gradient borders for Bubble Tea theme
- **Tailwind Configuration**: Extended with Bubble Tea colors and border radius utilities
- **Documentation Layout**: Added theme toggle controls throughout documentation
- **Component Playground**: Enhanced with theme switching capabilities

### Technical
- **Design Tokens**: Expanded token system with theme-specific configurations
- **TypeScript Support**: Full type definitions for theme system and new components
- **Accessibility**: Maintained WCAG AA compliance across both themes
- **Performance**: Optimized theme switching with minimal re-renders
- **Build System**: Updated documentation generation to include new components

### Migration Guide
- Theme switching is backward compatible - existing `terminal` variants continue to work
- New `bubbleTea` variants available for all major components
- Theme store provides centralized theme management
- Default theme remains `terminal` to maintain existing behavior

## [0.2.0] - 2024-11-15

### Added
- Core component library with 50+ components
- Terminal hacker aesthetic design system
- Liquid glass morphism effects
- WebGL and Three.js integration
- Comprehensive motion system
- Documentation and playground

### Technical
- SvelteKit + Vite + Bun build pipeline
- TypeScript support throughout
- Tree-shaking optimization
- Performance monitoring
- Accessibility compliance

## [0.1.0] - 2024-10-01

### Added
- Initial design system foundation
- Basic component architecture
- Build and development setup
- Core styling system