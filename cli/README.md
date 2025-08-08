# create-hackers-brand CLI

🚀 **Officially sanctioned CLI for creating projects with A Hacker's Brand design system**

## Quick Start

```bash
# Create a new project
npx create-hackers-brand my-app

# Interactive mode (no arguments)
npx create-hackers-brand

# Create with specific template
npx create-hackers-brand my-dashboard --template=dashboard --demo
```

## Features

- 🎨 **Zero Dependencies** - Pure Node.js implementation
- 🚀 **Multiple Templates** - Minimal, Dashboard, and Portfolio starters
- 🎭 **Interactive Mode** - Guided project creation
- 🎪 **Demo Components** - Optional example components
- 🎯 **TypeScript Ready** - Full TypeScript support by default
- 🎨 **Beautiful Terminal UI** - ASCII art, colors, and spinners

## Templates

### Minimal

- Basic SvelteKit setup
- Core A Hacker's Brand components
- Tailwind CSS configuration
- TypeScript support

### Dashboard

- Complete admin dashboard
- Data visualization components
- Navigation and layout
- Form components

### Portfolio

- Stunning portfolio site
- 3D effects and animations
- Hero sections
- Project galleries

## Command Line Options

```bash
npx create-hackers-brand <project-name> [options]

Options:
  --template=<name>    Choose template: minimal, dashboard, portfolio
  --demo               Include demo components and examples
  --typescript         Enable TypeScript (default: true)
  --skip-install       Skip npm install after creation
  --verbose            Show detailed output
  --help, -h           Show help information
```

## Examples

```bash
# Minimal project with demo components
npx create-hackers-brand my-app --demo

# Dashboard template
npx create-hackers-brand admin-panel --template=dashboard

# Portfolio site with demos
npx create-hackers-brand portfolio --template=portfolio --demo

# Skip npm install (for CI/CD)
npx create-hackers-brand project --skip-install
```

## What Gets Created

```
my-app/
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── svelte.config.js      # Svelte configuration
├── tailwind.config.js    # Tailwind + A Hacker's Brand preset
├── tsconfig.json         # TypeScript configuration
├── src/
│   ├── app.html          # HTML template
│   ├── app.css           # Global styles
│   ├── routes/
│   │   ├── +layout.svelte
│   │   └── +page.svelte
│   └── lib/
│       └── components/   # Your custom components
```

## Dependencies Included

- **SvelteKit** - Modern web framework
- **A Hacker's Brand** - Design system components
- **Tailwind CSS** - Utility-first CSS
- **TypeScript** - Type safety
- **Vite** - Fast build tool

## After Creation

```bash
cd my-app
npm install  # (unless --skip-install was used)
npm run dev  # Start development server
```

## Publishing

This CLI is designed to be published to NPM as `create-hackers-brand` and used with `npx`.

```bash
# From the cli directory
npm publish
```

## Architecture

- **Pure Node.js** - No external dependencies for minimal install size
- **Template System** - Modular template definitions
- **Interactive Prompts** - Built-in readline interface
- **Progress Feedback** - Custom spinner and status indicators
- **Error Handling** - Graceful error recovery

## Contributing

1. Clone the repository
2. Make changes to `cli/index.js`
3. Test with `node index.js test-project`
4. Submit PR

## License

MIT - Part of the A Hacker's Brand design system
