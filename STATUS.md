# STATUS — DX/Docs Integration

- Vite configured with `rolldown-vite` and `css.transformer = 'lightningcss'`.
- Tailwind v4 style enforced via `@import "tailwindcss";` and `@theme` example.
- oxc resolver/minifier is used implicitly via rolldown.
- Type declarations emitted via temporary shim: `tsc --emitDeclarationOnly` (tsconfig.build.json). Replace with oxc typegen when available.
- Mintlify docs moved to `/docs`, theme set to "linden", terminal aesthetics layered via `/docs/styles/terminal.css`.
- IA created per spec; pages scaffolded.
- Scripts added: docs:dev/docs:build/docs:preview, build/typecheck/types:emit, storybook/build-storybook.

## Commands
- bunx tsc --noEmit
- bun run build
- bun run types:emit
- bun run docs:build
- bun run storybook && bun run build-storybook

## Evidence Pending
Run the above commands locally (requires installing devDependencies). Capture logs and paste below:

```
[bundler logs]
```
