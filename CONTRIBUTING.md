# Contributing to a-hacker-brand

Welcome. This guide explains how to develop, test, document, and release contributions to the `a-hacker-brand` UI component library.

The project is currently < 1.0.0. While we follow Semantic Versioning principles, pre‑1.0 minor versions (0.x) may include breaking changes when necessary to stabilize APIs. We aim to minimize them and document all in the CHANGELOG.

---

## Table of Contents
1. Core Principles
2. Tech Stack & Tooling
3. Getting Started
4. Development Workflow
5. Commit & Branch Conventions
6. Adding / Modifying Components
7. Variants & Theming Guidelines
8. Accessibility Guidelines
9. API Surface & Placeholder Policy
10. Documentation Standards
11. Testing & Quality Gates
12. Showcase (Histoire) Status
13. Performance & Bundle Practices
14. Release Process
15. Security / Disclosure
16. Decision Log
17. PR Checklist (Copy/Paste)

---

## 1. Core Principles
- Clarity over cleverness: readable Svelte + TypeScript with minimal abstraction.
- No dead / placeholder features: ship only what works.
- Accessibility considered at design time, not after release.
- Deterministic builds: zero warnings in build + typecheck.
- Stable public API: avoid churn; remove unimplemented props early.
- Incremental hardening: add tests and a11y coverage continuously.

---

## 2. Tech Stack & Tooling
- Language: TypeScript
- Framework: Svelte 5 (runes)
- Bundler: Vite
- Linting: ESLint (TS + Svelte)
- Type Quality: `tsc --noEmit` / `svelte-check`
- Docs: README + future external docs site (Mintlify config present)
- Showcase: Histoire (temporarily disabled; see section 12)
- Tests (coming/optional phase): Vitest + Playwright (for interaction)
- Styling: Utility classes (Tailwind-esque), token helpers, variant pattern

---

## 3. Getting Started
```bash
bun install
bun run dev        # Starts local development playground (if configured)
bun run build      # Builds dist + types
bun run typecheck  # Type-only check
bun run check      # Svelte + CSS diagnostics
bun run lint       # Lint
```

---

## 4. Development Workflow
1. Open / choose or create an issue describing the change (feature, fix, refactor).
2. Create a branch: `feat/select-filtering`, `fix/tabs-focus-loop`, `docs/readme-typo`, etc.
3. Implement incrementally—keep PRs focused.
4. Update docs & CHANGELOG in same PR when altering public API.
5. Ensure all commands (typecheck, lint, build) pass.
6. Open PR with descriptive title & checklist.

---

## 5. Commit & Branch Conventions
Use Conventional Commits:
- `feat: add liquid variant shadow refinement`
- `fix: correct keyboard navigation in Drawer`
- `docs: add accessibility matrix outline`
- `refactor: unify size token mapping`
- `chore: bump dependencies`
- `test: add Tabs keyboard tests`

No squashing unrelated changes into one commit; keep atomic history.

---

## 6. Adding / Modifying Components

### Component Checklist
- [ ] Resides under `src/lib/components/ComponentName.svelte`
- [ ] Exports added to central barrel (if present—e.g. `src/lib/index.ts`)
- [ ] Props typed with explicit JSDoc (describe meaning, defaults).
- [ ] Avoid broad `any`; use discriminated unions or generics appropriately.
- [ ] Provide at least one variant integration (terminal / glass / liquid).
- [ ] Keyboard interactions implemented where relevant.
- [ ] No placeholder boolean flags for future features.
- [ ] Internal utilities placed in `src/lib/utils` or domain-specific subfolder.
- [ ] Minimal DOM nesting: prefer semantic elements (`button`, `ul/li`, `nav`, `dialog` patterns as appropriate).

### Runes / Reactivity
- Use `$state`, `$derived`, `$effect` sparingly—no artificial `$effect` just to “mark used”.
- Computed collections should be `$derived` only if they are reused or non-trivial.

---

## 7. Variants & Theming Guidelines
Current variants: `terminal`, `glass`, `liquid`.
- `terminal`: high contrast, matrix aesthetic.
- `glass`: formerly “bubbleTea” marketing; softened modern style.
- `liquid`: higher‑glow / experimental; treat as evolving.

### Implementation Tips
- Centralize style maps:
  ```ts
  const variants = {
    terminal: { button: '...', panel: '...' },
    glass: { ... },
    liquid: { ... }
  };
  ```
- Size tokens (sm/md/lg) should mirror consistent semantic groups (`trigger`, `option`, `panel`, etc.).
- No hard-coded colors inside logic; rely on token classes where possible for future theming.

---

## 8. Accessibility Guidelines

Baseline:
- All interactive affordances use semantic elements (`button`, `a`, `input`, `select`, form elements) unless a custom role is required.
- Keyboard:
  - Enter/Space triggers primary action.
  - Escape closes popovers, drawers, menus.
  - Arrow keys for listbox, tablist, carousel, and grid patterns.
  - Focus is trapped only inside deliberate components (Drawer, Modal) and previously focused element restored on close.
- ARIA roles:
  - Use ARIA only when native semantics insufficient.
  - Keep roles consistent with pattern (e.g. `role="listbox"` + `role="option"`).
- No `tabindex="0"` on non-interactive elements unless part of roving index pattern.
- Visual focus: all focusable elements must have clear visible focus state (outline, ring, etc.).
- Reduced motion:
  - Respect `prefers-reduced-motion: reduce`—wrap animations in media queries or gate durations.
- Claims:
  - We phrase “Accessibility-focused; ongoing audit” until formal test coverage & audits complete.

---

## 9. API Surface & Placeholder Policy
Policy: **Never ship unimplemented props.**
- Remove props rather than leaving inert.
- If future feature is near-term (<1 sprint), gate behind internal code path or separate feature branch.
- Public API changes must update CHANGELOG.

---

## 10. Documentation Standards
- Update README when adding or removing a component or variant.
- Add short prop table OR at minimum a usage snippet.
- Ensure install instructions remain valid for `a-hacker-brand`.
- Cross-reference peers (e.g., “Works with three.js via @threlte/core”).
- Keep marketing claims accurate (no absolute accessibility compliance guarantees until validated).

---

## 11. Testing & Quality Gates
Current baseline (initial release):
- Type safety: `bun run typecheck`
- Svelte diagnostics: `bun run check`
- Lint: `bun run lint`
- Build: `bun run build`

Upcoming (contributions welcome):
- Unit tests (Vitest) for pure utilities.
- Integration / interaction tests (Playwright) for keyboard flows.
- Snapshot or visual regression optional later.
- aXe accessibility smoke tests embedded in an ephemeral page.

Add tests for:
- Stateful keyboard components (Tabs, Select, Drawer).
- Focus trap open/close cycles.

---

## 12. Showcase (Histoire) Status
Histoire is disabled due to upstream Svelte 5 plugin importing forbidden `svelte/internal` modules.
- Scripts short‑circuit unless `ENABLE_SHOWCASE=true`.
- To attempt (once plugin updated):
  ```bash
  ENABLE_SHOWCASE=true bun run histoire
  ```
- Do not make PRs depend on showcase until compatibility returns.
- Track upstream issue link (to be added in CHANGELOG & README when opened).

---

## 13. Performance & Bundle Practices
- Avoid large dynamic imports inside high-frequency reactive blocks.
- Keep component surface lean—external heavy libs should remain peer dependencies.
- `sideEffects: false` requires avoiding top-level runtime side effects that must always execute.
- Guard dev-only warnings with `if (process.env.NODE_ENV !== 'production')`.

---

## 14. Release Process
1. Ensure all blockers merged.
2. Update `CHANGELOG.md` with new version section.
3. Bump version in `package.json` (follow semver; for pre-1.0 treat minor as “potentially breaking”).
4. Build + typecheck clean.
5. Tag & push: `git tag v0.1.1 && git push --tags`.
6. Publish:
   ```bash
   npm publish --access public
   ```
   (Ensure logged into correct npm account.)
7. Create GitHub Release referencing CHANGELOG section.

---

## 15. Security / Disclosure
- Do not open public issues for potential security vulnerabilities.
- Instead, open a private channel (email repo owner / maintainers) or GitHub Security Advisory (if enabled).
- Provide reproduction steps and environment details.

---

## 16. Decision Log
Record architectural or product decisions in a future `docs/DECISIONS.md` (or in issues labeled `decision`):
Template:
```
Decision: <short title>
Date:
Context:
Options Considered:
Decision:
Rationale:
Follow-up / Review Date:
Owner:
```

---

## 17. PR Checklist (Copy into Description)
```
### PR Type
[ ] Feature
[ ] Fix
[ ] Refactor
[ ] Docs
[ ] Chore / Tooling
[ ] Test

### Scope
Component(s) touched:
Public API change?  [ ] Yes  [ ] No
If yes: CHANGELOG updated?  [ ] Yes  [ ] N/A

### Quality Gates
Typecheck passes:      [ ] 
Svelte check passes:   [ ] 
Lint passes:           [ ] 
Build passes:          [ ] 

### Accessibility
Keyboard interactions updated/tested:  [ ] N/A [ ] Yes
Semantic roles/labels verified:        [ ] N/A [ ] Yes
Focus management considered:           [ ] N/A [ ] Yes

### Docs
README/example updated:  [ ] N/A [ ] Yes
Removed placeholder props: [ ] N/A [ ] Yes

### Notes / Risks
(Describe migration, potential regressions, or deferred items)
```

---

## Questions?
Open an issue with the `question` label or start a draft PR early for feedback.

Thank you for contributing to `a-hacker-brand`!