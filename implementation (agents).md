# Task Review – **Hacker-CLI Redesign**

## 1. User Query
**Single Agent:**  
> *“This is a design system that leverages terminal aesthetics (Hacker-CLI). It’s almost complete; I need a plan to reach launch. I also want to change the style and aesthetics to look like the Bubble Tea TUI library, but in Svelte for the web (see `Untitled.png`).”*

---

## 2. Plan Specification

### 2.1 Thinking & Observations
The design system is nearly launch-ready:

| Area | Status | Notes |
| --- | --- | --- |
| **Component library** | ✅ 50 + components | Variant-based styling & motion system |
| **Build system** | ✅ SvelteKit + Vite + Bun | Comprehensive tests & CI/CD |
| **Docs infrastructure** | ✅ Auto-generated, playgrounds, routing |
| **Current styling** | Terminal green `#30D158`, glassmorphism | Needs Bubble Tea gradients & rounded corners |
| **Gaps** | — | Bubble Tea variants, status bar, color-palette showcase |

### 2.2 Approach
**Two-phase rollout**

1. **Launch Prep (Week 1-2)**  
   * Finish docs, squash bugs, ship **v0.3.0** with current terminal theme.

2. **Bubble Tea Theme (Week 2-3)**  
   * Introduce new color tokens & gradients  
   * Add Bubble Tea variants to components  
   * Implement theme-switching (terminal ↔ Bubble Tea)

Result: quick launch, followed by a major aesthetic upgrade without breaking existing users.

---

## 3. Implementation Matrix

> **Legend:** `MODIFY` = update existing file   `NEW` = create file

| File / Resource | Action | Key Work |
| --- | --- | --- |
| **`src/lib/tokens/index.ts`** | MODIFY | Add Bubble Tea palette (pink/purple/blue/cyan gradients), larger border-radius tokens, semantic success/warn/error colors |
| **`tailwind.config.js`** | MODIFY | Extend with new colors & gradient utilities; update default radii |
| **`src/lib/components/Button.svelte`** | MODIFY | Add `bubbleTea` variant (gradient background) |
| **`src/lib/components/Card.svelte`** | MODIFY | Gradient borders, rounded corners variant |
| **`src/lib/components/Tabs.svelte`** | MODIFY | Pill-style gradient tabs with smooth transitions |
| **`src/lib/components/Modal.svelte`** | MODIFY | Bubble Tea variant, colorful backdrop |
| **`src/lib/components/StatusBar.svelte`** | **NEW** | Bottom bar with status text, UTF-8 indicator, themed colors |
| **`src/lib/components/ColorPalette.svelte`** | **NEW** | Interactive swatch grid for terminal & Bubble Tea palettes |
| **`src/lib/components/index.ts`** | MODIFY | Export new StatusBar & ColorPalette |
| **`src/lib/stores/theme.ts`** | **NEW** | Reactive store for theme switching (localStorage persistence) |
| **`src/routes/+page.svelte`** | MODIFY | Showcase both themes; add toggle |
| **`src/routes/docs/themes/+page.svelte`** | **NEW** | Overview docs for theme system |
| **`src/routes/docs/themes/bubble-tea/+page.svelte`** | **NEW** | Deep-dive docs for Bubble Tea theme |
| **`src/routes/docs/+layout.svelte`** | MODIFY | Inject theme toggle into docs layout |
| **`scripts/generate-docs.js`** | MODIFY | Include new components & theme-aware examples |
| **`src/lib/docs/ComponentPlayground.svelte`** | MODIFY | Live theme switcher |
| **`README.md`** | **NEW** | Screenshots, install notes, theme usage |
| **`package.json`** | MODIFY | Bump to **v0.3.0**, add keywords |
| **`CHANGELOG.md`** | **NEW** | v0.2.0 → v0.3.0 (keep-a-changelog format) |
| **`src/routes/docs/getting-started/themes/+page.svelte`** | **NEW** | Quick-start guide for theme integration |

---

## 4. Reasoning / Mermaid (placeholder)

```mermaid
graph TD
  LaunchPrep -->|v0.3.0| TerminalTheme
  TerminalTheme --> BubbleTeaTokens
  BubbleTeaTokens --> UpdatedVariants
  UpdatedVariants --> ThemeSwitcher
  ThemeSwitcher --> DocsUpdate