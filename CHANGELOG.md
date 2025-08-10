# Changelog

All notable changes to this project will be documented in this file.

The format loosely follows Keep a Changelog and semantic versioning (semver). Versions < 1.0.0 may introduce breaking changes in minor releases as the API stabilizes.

## [0.1.0] - 2025-08-10
Initial public launch of the UI component library under the package name `a-hacker-brand`.

### Added
- Packaged Svelte 5 component library build with emitted TypeScript declarations.
- Core variant system: `terminal`, `glass`, and `liquid` (liquid currently positioned as a higher‑glow experimental style).
- Accessibility-focused patterns (semantic buttons, keyboard navigation for key interactive components: tabs, select, drawer basics).
- Environment-guarded showcase scripts (Histoire) using `ENABLE_SHOWCASE` flag.

### Changed
- Documentation alignment: clarified that “Glass” corresponds to the previously marketed “Bubble Tea” look; “Liquid” documented separately as experimental.
- Removed analyzer suppression scaffolds (`__markUsed`, artificial no-op effects) to ensure genuine diagnostics surface.
- Refined README wording to present accessibility as an ongoing audit rather than a completed WCAG 2.1 AA guarantee.

### Fixed
- ColorSwatch interaction now uses a semantic `<button>` (improved keyboard and a11y support).
- Consistency between install instructions and actual peer dependencies (corrected `lucide-svelte` name).
- Prevented failed showcase commands in CI/local by short-circuiting when `ENABLE_SHOWCASE` is not set.

### Removed
- Unimplemented placeholder props:
  - `createOption`, `virtualScroll` from `SelectAdvanced`
  - `virtualScroll` from `DataTable`
  These were removed to avoid exposing inert API surface before feature design is finalized.

### Known Issues / Deferred
- Component showcase (Histoire) disabled pending upstream Svelte 5 plugin compatibility (forbidden `svelte/internal` import usage). Tracking issue to be opened upstream.
- Advanced features (virtual scrolling, option creation flows) intentionally deferred.
- Comprehensive automated accessibility & interaction regression tests (axe / Playwright) not yet integrated.

### Internal / Tooling
- Added repository metadata (`repository`, `bugs`, `homepage`) and engines field.
- Added guarded NPM scripts for showcase: `histoire`, `histoire:build` require `ENABLE_SHOWCASE=true`.

## Planned (Unreleased)
(The following will migrate here from roadmap issues once work begins.)
- Reintroduction of motion layer with tokenized durations/easings respecting `prefers-reduced-motion`.
- Alternative or updated component showcase once Svelte 5 support lands upstream.
- Virtualized data rendering for large tables/lists (design + performance validation).
- Expanded accessibility audit & documented keyboard interaction matrix.

---

[0.1.0]: https://github.com/tuliopc23/a-hackers-brand/releases/tag/v0.1.0
