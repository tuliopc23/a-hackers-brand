# Configuration & Migration Audit — 2025-08-07

Verifying delegated tasks: full config rewrite, build fixes, production vs. unused separation, cleanup, Mintlify docs + custom CSS, and migration to Rolldown-era Vite.

## TL;DR
- Full configuration rewrite: NOT PRESENT
- Build issues isolated/fixed: NOT EVIDENT
- Separate production vs. unused components: NOT PRESENT
- Major cleanup: NOT EVIDENT
- Mintlify docs config + custom CSS: PARTIAL (mint.json + custom.css exist; CSS not clearly wired)
- Switch to Rolldown Vite: NOT PRESENT (no Vite config or package manifest)

## Evidence snapshot
Present:
- SvelteKit structure: `src/app.html`, `src/app.css`, `src/routes/*`, `src/lib/*`
- Build cache: `.svelte-kit/` (build was run previously)
- Docs content: multiple `.mdx` files (root, `components/`, `themes/`, `utilities/`)
- Mintlify config: `mint.json`
- Custom CSS for docs: `custom.css`
- Netlify: `_headers`, `_redirects`, `.netlify/state.json`
- Env file: `.env.production`

Missing for a "full rewrite":
- `package.json` (no scripts/deps)
- `svelte.config.(js|ts)`
- `vite.config.(js|ts)`
- `tailwind.config.(js|cjs|ts)` (if Tailwind intended)
- `postcss.config.(js|cjs|ts)`
- `bunfig.toml` (optional)

Notes:
- `.svelte-kit/tsconfig.json` references `../vite.config.{js,ts}` but these files do not exist.
- `mint.json` doesn’t reference `custom.css`. If Mintlify is serving, the CSS must be wired via their custom CSS mechanism (per Mintlify "Custom CSS" docs), otherwise it won’t be applied.
- No explicit split of production vs. experimental/unused components (e.g., gated exports or separate folders).
- Cleanup flags: empty dirs (e.g., `src/lib/components/Badge/`), stray `.DS_Store`, duplicate README files.

## Recommended next steps
1) Recreate project manifest and scripts
   - Add `package.json` with Bun-friendly scripts: `dev`, `build`, `preview`, `test`.
   - Pin SvelteKit 2.x and Vite 7 (Rolldown-era); include `@sveltejs/kit` + `@sveltejs/vite-plugin-svelte`.

2) Add core config files
   - `svelte.config.js` with the chosen adapter.
   - `vite.config.ts` (minimal), verify modern Vite defaults.
   - (If Tailwind) add `tailwind.config.js` + `postcss.config.js` and wire styles.

3) Wire Mintlify custom CSS
   - Update `mint.json` to include `custom.css` via Mintlify’s supported custom CSS mechanism so it’s actually applied.

4) Component curation
   - Introduce folders/tags (production, experimental, docs-only, deprecated).
   - Gate exports in `src/lib/index.ts` to exclude non-production items.

5) Cleanup
   - Remove empty directories, `.DS_Store`, and consolidate duplicate READMEs.

6) Build validation
   - After reintroducing config, run a clean build and Vitest (tests present under `src/lib/stores/theme.test.ts`).

— Auto-generated to document current state and guide implementation.
