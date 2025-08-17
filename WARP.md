# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

- Repository: a Svelte 5 UI component library built with Vite in library mode.
- Primary package manager: Bun (recommended). Node >=18 required by engines.

Sections:
- Common development commands
- Testing commands (Vitest)
- Architecture and build system
- Theming model (terminal, glass, liquid)
- Automated barrel exports
- Documentation workflows
- Important peer dependencies
- Suggested improvements for this repo

Common development commands

Use these exact scripts (from package.json). Prefer Bun; npm/pnpm work too.
- Install deps: bun install
- Start dev (library preview via Vite): bun run dev
- Build the library: bun run build
- Preview build: bun run preview
- TypeScript typecheck only: bun run typecheck
- Svelte diagnostics (library scope): bun run check or bun run check:lib
- Lint: bun run lint
- Lint and fix: bun run lint:fix
- Emit .d.ts types (used by build): bun run types:emit
- Docs (Mintlify) dev server: bun run docs:dev
- Docs broken-link check: bun run docs:links
- Docs static preview: bun run docs:preview

Testing commands (Vitest)

There is no test script defined; run Vitest directly. Vitest is configured in vite.config.ts with:
- environment: jsdom
- globals: true
- setupFiles: ./src/test-setup.ts

Examples (fish/bash):
- Run all tests (watch off): bunx vitest run
- Run in watch mode: bunx vitest
- Run a single test file: bunx vitest run path/to/your.test.ts
- Filter by test name: bunx vitest run -t "partial name here"

Architecture and build system

- Vite library mode
  - Entry: src/lib/index.ts
  - Format: ES module (fileName: index.js)
  - CSS strategy: Svelte plugin with emitCss: false (component CSS is inlined into JS)
  - Rollup externals (not bundled): svelte, @threlte/core, @threlte/extras, three, @lucide/svelte, lucide-svelte
  - Alias: $lib -> /src/lib
- Package export surface (package.json)
  - exports["."].import: dist/index.js
  - exports["."].types: dist/index.d.ts
  - svelte entry: dist/index.js
  - files published: dist/
- Types generation
  - Script: types:emit -> tsc --emitDeclarationOnly -p tsconfig.build.json
  - Build script runs vite build then types:emit

Theming model (terminal, glass, liquid)

- Variants
  - terminal: high-contrast, matrix-green accents, sharper radii
  - glass: translucent surfaces, softened radii, gradient accents
  - liquid (experimental): higher-intensity glow/gradients for expressive surfaces
- Theme tokens and CSS custom properties
  - The system relies on CSS variables (e.g., --theme-*, border-radius variables like --radius-sm/md/lg/xl/2xl/…)
  - A unified border-radius scale is applied via theme-aware variables; components use semantic classes (e.g., button-radius-md, card-radius-lg) rather than hardcoded pixel values
- Layout utilities example (StatusBar)
  - The StatusBar can set --status-bar-height automatically for layout; utilities like .with-status-bar consume that to prevent overlap

Automated barrel exports

- Components under src/lib/components are exported through a generated index.ts barrel, as described in docs/AUTOMATED_BARREL_GENERATION.md
- Contributor workflow (summary):
  - Add component files in src/lib/components/
  - Run the barrel generator commands (if available) or rely on the integrated generation in the build (see docs/AUTOMATED_BARREL_GENERATION.md)
  - Ensure new components are picked up in the generated barrel before publishing

Documentation workflows

- Mintlify-based docs are present under docs/ with scripts:
  - bun run docs:dev (local dev)
  - bun run docs:links (broken link checker)
  - bun run docs:preview (static preview)
- Showcase/Histoire
  - The README states the Histoire-based showcase is currently disabled due to Svelte 5 incompatibility and suggests an opt-in env (ENABLE_SHOWCASE) if/when support lands
  - There is no histoire script in package.json; any Histoire guidance in .github/copilot-instructions.md is considered stale for now

Important peer dependencies

Consumers must install these peers in their app to use the library:
- svelte >=5.0.0
- @threlte/core ^8.1.4
- @threlte/extras ^9.4.5
- three ^0.179.1
- lucide-svelte ^0.539.0

Local development uses Svelte ^5.38.1 and Vite ^7.1.2 in devDependencies. Node >=18 (engines) is required. Bun is recommended for speed but not mandatory.

Suggested improvements (non-breaking, to discuss before applying)

- Add a test script in package.json to standardize running tests:
  - "test": "vitest",
  - "test:run": "vitest run"
- Add a docs:build script if Mintlify requires a build step separate from preview in CI.
- Clarify/align Histoire guidance:
  - If a showcase will return, add explicit scripts (e.g., "showcase", "showcase:build") and document a guarded ENABLE_SHOWCASE env flag in README; otherwise remove stale references in .github/copilot-instructions.md.
- Consider adding a format script (e.g., biome/prettier) to complement eslint.

Notes and references

- package.json scripts are the source of truth for commands
- Vite guide: https://vite.dev/guide/
- Bun docs: https://bun.com/docs
- Svelte docs: https://svelte.dev/docs

