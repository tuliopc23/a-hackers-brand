# A Hacker's Brand Design System

A Svelte 5 component library featuring dual themes (terminal hacker aesthetic + modern Bubble Tea TUI design) with comprehensive TypeScript support and component documentation.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap and Build (CRITICAL SETUP)
**ALWAYS install peer dependencies first** - the library requires them to build properly:
```bash
# Install Bun (required package manager)
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc
export PATH="$HOME/.bun/bin:$PATH"

# Install dependencies (1.2s)
bun install

# Install required peer dependencies 
bun add @threlte/core @threlte/extras three lucide-svelte

# Build the library (6s) - NEVER CANCEL, set timeout 60+ minutes
bun run build
```

### Primary Development Workflow
**Use Histoire for component development** - this is the main development environment:
```bash
# Start component documentation server (16s startup) - NEVER CANCEL, set timeout 30+ minutes
bun run histoire
# Access at http://localhost:6006/
```

**Build validation (always run before committing):**
```bash
# Library build (6s) - NEVER CANCEL, set timeout 60+ minutes  
bun run build

# Svelte validation (2.5s) - passes with warnings only
bun run check
```

### What Works vs What Doesn't

**✅ WORKING COMMANDS:**
- `bun install` (1.2s) - Dependencies install successfully
- `bun run build` (6s) - Library builds with minor warnings, generates dist/ output
- `bun run histoire` (16s startup) - Component documentation works on port 6006
- `bun run check` (2.5s) - Svelte validation passes (warnings only, not errors)
- `bun run preview` - Preview built library

**⚠️ PROBLEMATIC COMMANDS (document but don't rely on):**
- `bun run dev` - SvelteKit dev server starts but routes return 404, not the main development method
- `bun run typecheck` (4.5s) - Has TypeScript error in src/lib/utils.d.ts export issue
- `bun run lint` (6s) - Has 28 errors: missing `{#each}` keys in Svelte files
- `bun x vitest run` (1.7s) - Tests fail: need browser environment setup (window not defined)
- `bun run histoire:build` - FAILS: Svelte 5 compatibility issue with Histoire plugin

## Validation

### Manual Testing Scenarios
After making changes to components, ALWAYS validate through Histoire:

1. **Start Histoire development server:**
   ```bash
   bun run histoire
   # Navigate to http://localhost:6006/
   ```

2. **Test dual theme system:**
   - Switch between Terminal and Bubble Tea themes in component stories
   - Verify theme-specific colors (green matrix vs pink/purple gradients)
   - Test theme toggle functionality

3. **Validate component behavior:**
   - Test interactive components (buttons, switches, modals)
   - Verify TypeScript props and events work correctly
   - Check responsive behavior and accessibility features

4. **Build validation:**
   ```bash
   bun run build && echo "Build successful"
   ```

### Required Fixes Before Production
**Known issues that need resolution:**
- Tests require browser environment setup (jsdom/happy-dom)
- TypeScript declaration export issue in src/lib/utils.d.ts
- 28 linting errors need `{#each}` key attributes added
- Histoire build process incompatible with Svelte 5

## Architecture Overview

### Project Structure
- **Purpose:** Component library with dual theme system + documentation site
- **Primary Development:** Use Histoire (not SvelteKit dev server)
- **Build Output:** Library in dist/ directory with TypeScript declarations

### Library Surface (src/lib)
- **Components:** src/lib/components/* - 50+ UI components with terminal/bubbleTea variants
- **Exports:** src/lib/index.ts - main export surface for consumers
- **Themes:** src/lib/stores/theme.ts - dual theme system (terminal | bubbleTea | auto)
- **Styles:** src/lib/styles/* - CSS and design tokens
- **Types:** Full TypeScript support with .d.ts generation

### Theme System
- **Terminal Theme:** Green matrix colors (#00ff41), sharp edges, hacker aesthetic
- **Bubble Tea Theme:** Pink/purple gradients, rounded corners, modern TUI design
- **Auto Mode:** Follows system dark/light preference
- **Usage:** All major components support both theme variants

### Documentation
- **Histoire:** Component stories and interactive documentation (development)
- **Mintlify:** Static documentation in docs/ folder
- **SvelteKit:** Demo application in src/routes/* (has routing issues)

## Common Tasks

### Adding New Components
1. Create component in src/lib/components/
2. Add both terminal and bubbleTea variants
3. Export from src/lib/components/index.ts and src/lib/index.ts
4. Create .story.svelte file for Histoire documentation
5. Test with `bun run histoire`
6. Build with `bun run build`

### Theme Development
- Modify src/lib/stores/theme.ts for theme logic
- Update CSS custom properties in src/lib/styles/
- Test theme switching in Histoire component stories
- Both themes must maintain WCAG 2.1 AA compliance

### Build and Distribution
```bash
# Build library (6s) - NEVER CANCEL, set timeout 60+ minutes
bun run build

# Check output
ls -la dist/
# Should contain: index.js, index.d.ts
```

## System Requirements
- **Bun:** 1.2+ (primary package manager)
- **Node.js:** 18+ required (fallback compatibility)
- **Peer Dependencies:** svelte >=5.0.0, @threlte/core, @threlte/extras, three, lucide-svelte

## Troubleshooting

### Build Issues
```bash
# Clear cache and reinstall if build fails
rm -rf node_modules bun.lockb .svelte-kit
bun install
bun add @threlte/core @threlte/extras three lucide-svelte
bun run build
```

### Development Server Issues
- **Use Histoire instead of SvelteKit dev server** for component development
- SvelteKit dev (`bun run dev`) has routing configuration issues
- Histoire on port 6006 is the primary development environment

### Testing Issues
- Tests currently fail due to missing browser environment
- Need to configure Vitest with jsdom or happy-dom
- Window/DOM APIs not available in test environment

## Performance Notes
- **Build Time:** ~6 seconds (normal)
- **Histoire Startup:** ~16 seconds (normal)  
- **Install Time:** ~1-2 seconds (normal)
- **Bundle Size:** Library output <150kb when built

## CRITICAL: Timeout Values
- **Build Commands:** Set timeout 60+ minutes, NEVER CANCEL (actual time ~6s)
- **Development Server:** Set timeout 30+ minutes, NEVER CANCEL (actual time ~16s startup)
- **Install Commands:** Set timeout 10+ minutes, NEVER CANCEL (actual time ~1-2s)