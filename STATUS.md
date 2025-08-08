# STATUS — DX/Docs Integration

- Vite configured with Svelte plugin and LightningCSS.
- Rolldown plugin temporarily removed due to missing package (rolldown-vite@^0.5.0 not resolvable). Action: keep Vite default bundler for now; when correct package is available, re-enable and measure.
- Tailwind v4 style enforced via `@import "tailwindcss";` and `@theme` tokens (terminal/bubbleTea).
- oxc resolver/minifier: pending; currently using Vite defaults. Declarations emitted via shim `tsc --emitDeclarationOnly`.
- Mintlify docs under `/docs`, theme "linden", terminal aesthetics layered via `/docs/styles/terminal.css`.
- IA per spec; pages scaffolded; imports use `@org/ui`.
- Scripts: docs:dev/docs:build/docs:preview, build/typecheck/check/types:emit, storybook/build-storybook.

## Commands to validate
- bunx tsc --noEmit
- bun run check
- bun run build
- bun run types:emit
- bun run docs:build

## Evidence
Paste logs from local runs here after executing the above.
