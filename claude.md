# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a comprehensive Safari Command Palette & Productivity Center for Apple platforms (macOS/iOS/iPadOS) that eliminates friction in browser workflows through advanced system integration.

### Core Vision
Combine Safari extension capabilities with native iOS/iPadOS Shortcuts app integration to create a powerful command palette that bypasses typical mobile productivity limitations through URL schemes and automation.

### Tech Stack
- **Safari Extension**: Svelte 5 + SvelteKit + TypeScript (strict)
- **UI Design**: Apple Liquid Glass design language (WWDC 2025)
- **Animation**: Native Svelte 5 transitions with GPU acceleration
- **Package Manager**: npm (for extension), pnpm (for main project)
- **Future**: SwiftUI native app for all platforms

## Project Structure

```
tulio-brand-system/
├── Cockpit-App/safari-command-palette-svelte/  # Main Safari extension
├── svelte-version/                             # Brand system components
├── glass-ui/                                   # UI component library
└── [other brand system components]
```

## Safari Extension Development

### Primary Commands (from extension directory)
```bash
cd Cockpit-App/safari-command-palette-svelte/
npm install                    # Install dependencies
npm run build:extension       # Build Safari extension
npm run dev                   # Development server
npm run test                  # Run tests
```

### Architecture Overview

**Core Files:**
- `src/palette/App.svelte` - Main command palette UI
- `src/lib/shortcutsIntegration.ts` - iOS Shortcuts app integration
- `src/lib/commandFilter.ts` - Advanced command filtering with Web Workers
- `src/lib/performance.ts` - Performance monitoring and optimization
- `src/palette/app.css` - Apple Liquid Glass design system

**Key Features:**
1. **Apple Liquid Glass Design**: WWDC 2025-inspired UI with backdrop blur, gradient layers, and fluid animations
2. **Shortcuts Integration**: Direct integration with iOS/macOS Shortcuts app
3. **URL Scheme Support**: Deep links to apps like Things, Linear, Superhuman, NotePlan
4. **Performance Optimized**: Web Workers, GPU acceleration, device profiling
5. **Accessibility**: Full keyboard navigation, screen reader support

### TypeScript Configuration
- **Strict Mode**: Enabled (`allowJs: false`, `strict: true`)
- **Module Resolution**: `bundler` for modern imports
- **No JavaScript**: Pure TypeScript implementation

## iOS/iPadOS Integration Strategy

### Shortcuts App Integration
The extension integrates with 10+ pre-configured shortcuts:
- **Productivity**: Things tasks, Linear issues, Superhuman emails
- **Navigation**: NotePlan projects, VPN control, Focus modes
- **Automation**: Weather briefings, meeting prep, dev environment
- **Utilities**: Screenshots with AI processing, clipboard management

### URL Scheme Commands
Supports 15+ app URL schemes:
- **System**: Settings, Control Center
- **Productivity**: Things, Notion, Obsidian, Slack
- **Development**: GitHub, Working Copy
- **Media**: Spotify, YouTube

### Platform-Specific Features
- **iPad**: Magic Keyboard shortcuts, Split View integration
- **iPhone**: Gesture-based activation (planned)
- **macOS**: Native menu bar integration (planned)

## Apple Liquid Glass Design Language

### Core Principles
- **Backdrop Blur**: `blur(32px) saturate(180%)`
- **Layered Transparency**: Multi-layer glass effects with subtle gradients
- **Depth & Shadows**: Multiple shadow layers for realistic depth
- **Fluid Animations**: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` for Apple-like motion
- **Category Colors**: Gradient backgrounds per command category

### Performance Optimizations
- **GPU Acceleration**: `transform: translate3d(0, 0, 0)`
- **Layer Management**: `contain: layout style paint`
- **Reduced Motion**: Accessibility support for motion preferences
- **Device Profiling**: Adaptive effects based on device capabilities

## Development Workflow

### Extension Development
1. **Setup**: `npm install` in extension directory
2. **Development**: `npm run dev` for live reloading
3. **Build**: `npm run build:extension` for Safari
4. **Test**: Load `dist/` folder in Safari Extension preferences

### Code Quality
- **TypeScript Strict**: No JavaScript allowed
- **Performance Monitoring**: Built-in metrics and benchmarking
- **Accessibility**: ARIA labels, keyboard navigation
- **Error Handling**: Comprehensive try-catch with user feedback

## Planned Xcode Integration

### Native SwiftUI App Structure
```
SafariCommandPalette.xcodeproj/
├── Shared/
│   ├── Models/          # Command models, shortcuts integration
│   ├── Views/           # SwiftUI views matching extension UI
│   ├── Services/        # URL scheme handling, system integration
├── iOS/                 # iOS-specific features
├── iPadOS/             # iPad-specific features (Magic Keyboard)
├── macOS/              # macOS-specific features (menu bar)
└── Safari Extension/   # Current web extension
```

### Key Native Features (Planned)
1. **System Integration**: Native shortcuts, hotkey registration
2. **Cross-Platform Sync**: iCloud sync for custom commands
3. **Advanced Gestures**: iPhone gesture recognition
4. **Widgets**: Home screen widgets for quick actions
5. **Apple Intelligence**: Siri integration for voice commands

## Important Development Notes

### Browser API Integration
- Currently uses sample data - needs real Safari API integration
- Tab management, bookmarks, history need browser API connections
- Extension manifest requires Safari-specific configuration

### Performance Requirements
- **Target**: 60fps animations on all devices
- **Memory**: <50MB heap usage
- **Bundle Size**: <100KB gzipped
- **Load Time**: <100ms initialization

### Testing Strategy
- **Unit Tests**: Vitest for logic testing
- **Performance Tests**: Built-in benchmark suite
- **Visual Tests**: Playwright for UI regression
- **Device Testing**: iOS Safari, iPadOS Safari, macOS Safari

## Next Steps for Xcode Project

When ready to start the native SwiftUI implementation:

1. **Create Xcode Project**: Multi-platform app with Safari Extension
2. **Port Extension Logic**: Convert TypeScript to Swift
3. **Native UI**: SwiftUI implementation of Liquid Glass design
4. **System APIs**: Use native shortcuts, URL schemes, system integration
5. **App Store**: Prepare for iOS/iPadOS/macOS App Store distribution

### Apple Developer Requirements
- **Apple Developer Premium**: Access to advanced APIs
- **App Groups**: For extension-app communication
- **Shortcuts Integration**: Use Intents framework
- **URL Schemes**: Register custom schemes
- **iCloud**: For cross-device sync

## Command Categories

### Current Categories
- **Navigation**: Browser navigation, link hints
- **Bookmarks**: Bookmark management
- **History**: Browse history
- **Tools**: Utilities, dark mode, screenshots
- **Productivity**: Shortcuts app integration
- **Development**: Dev tools, GitHub, Working Copy
- **System**: iOS settings, Control Center
- **Social**: Discord, messaging apps
- **Media**: Spotify, YouTube

### Extension Points
- Custom shortcuts can be added via `shortcutsIntegration.addCustomShortcut()`
- URL schemes can be extended via `shortcutsIntegration.addCustomURLScheme()`
- Commands support categories, icons, keywords, and shortcuts

## Debugging & Troubleshooting

### Common Issues
- **Dependencies**: Run `npm install` if build fails
- **TypeScript Errors**: Ensure strict mode compliance
- **Performance**: Check device profiler recommendations
- **Safari Loading**: Verify extension manifest and permissions

### Development Tools
- **Performance Monitor**: Built-in FPS and memory tracking
- **Command Filter**: Web Worker-based search optimization
- **Toast System**: User feedback for all actions
- **Console Logging**: Comprehensive debug information

This project represents the next evolution of browser productivity tools, specifically designed for Apple's ecosystem with deep system integration capabilities.