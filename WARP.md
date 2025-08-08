# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

- Repo type: SvelteKit-based component library and docs site
- Primary tooling: Bun, SvelteKit, Vitest
- Shell: fish (use fish-compatible syntax)

Commands
- Install dependencies
  - bun install

- Development server (SvelteKit)
  - Preferred: bun run dev
  - Fallback: bun x svelte-kit dev

- Build
  - Preferred: bun run build
  - Fallback: bun x svelte-kit build

- Preview (after build)
  - Preferred: bun run preview
  - Fallback: bun x svelte-kit preview

- Tests (Vitest)
  - Run all tests: bun x vitest
  - Single file: bun x vitest src/lib/stores/theme.test.ts
  - By test name: bun x vitest -t 'name of the test'
  - With coverage: bun x vitest --coverage

Notes on commands
- Prefer package.json scripts when they exist (do not invent script names). If a script is missing, use the fallback commands above.
- Requirements from README: Bun 1.2+ (recommended), Node 18+.
- Some components (webgl/Threlte, icons) require peer deps during app integration: @threlte/core @threlte/extras three @lucide/svelte.

Architecture overview
- Purpose
  - This repo provides a design system with two visual themes (terminal and bubbleTea) and a SvelteKit docs site showcasing components and usage.

- Library surface (src/lib)
  - Components: src/lib/components/* contains core UI (Button, Card, Modal, Tabs, etc.), terminal-focused elements (LiquidTerminal, TerminalWindow, MatrixRain), responsive utilities, and webgl/Threlte integrations under components/webgl.
  - Exports: src/lib/index.ts and src/lib/components/index.ts are the main export surfaces for consumers.
  - Motion/effects: src/lib/motion/* and components/liquidify/* provide animations and physics-driven effects.
  - Styles/tokens: src/lib/styles/* (CSS) and src/lib/tokens/* (e.g., borderRadius) inform theme CSS variables.
  - Utilities: src/lib/utils/* (responsive helpers, theme-aware utilities, error handling, bundle-size helpers).

- Theming system (src/lib/stores)
  - theme.ts exposes a theme store supporting 'terminal' | 'bubbleTea' | 'auto'. In auto mode it detects system color-scheme and updates in real time.
  - The store applies CSS custom properties (e.g., --theme-primary, --theme-surface, --radius-*) to documentElement and toggles theme-terminal/theme-bubble-tea classes.
  - contrastMode store toggles contrast-normal/contrast-high classes and selects high-contrast color sets when enabled.
  - themeConfig is a derived subscription that yields displayName/description/currentColors plus userTheme and resolvedTheme.
  - getThemeCSSProperties(theme, contrast?) builds the color CSS vars and merges radius tokens from src/lib/tokens.
  - Tests: src/lib/stores/theme.test.ts validates system preference detection and helpers using Vitest.

- Docs site (SvelteKit routes)
  - src/routes/docs/* contains the docs pages (getting-started, themes, components, accessibility). Pages showcase component usage and theme switching.
  - +layout.svelte and +page.svelte at various levels set up the docs shell and content areas.

Usage notes and constraints
- No existing WARP.md was found; this file is newly created.
- Follow repo rules:
  - Prefer package.json scripts; do not downgrade dependencies without explicit permission; when installing, use latest or latest stable.
  - Use fish-compatible command syntax.
  - If uncertain about framework behavior, consult up-to-date docs.
- Lint/format: no root lint/format configs were detected during this write; if such scripts/configs appear later, prefer running them via package.json.

References
- Project docs: https://a-hackers-brand.netlify.app
- Bun docs: https://bun.com/docs
- Svelte docs: https://svelte.dev/docs
- Vite guide: https://vite.dev/guide/
- Vitest: https://vitest.dev/guide

