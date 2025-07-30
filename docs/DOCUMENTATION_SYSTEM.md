# A Hacker's Brand - Documentation Generation System

This project includes a comprehensive documentation generation system that automatically creates exhaustive component documentation pages for all exported components.

## Features

✨ **Automated Generation**: Automatically generates documentation for all exported components  
🎮 **Interactive Playground**: Live prop controls with real-time preview  
📚 **Code Examples**: Auto-synced examples with source code  
📊 **Type-Safe Tables**: Props & events tables extracted from TypeScript definitions  
🎯 **Accessibility**: Built-in accessibility information and best practices  
🔗 **Related Components**: Intelligent component relationships

## Generated Content

Each component documentation page includes:

### 🎯 Hero Section

- Component name with gradient styling
- Category, complexity, and version badges
- Comprehensive description
- Quick preview with multiple variants

### 🎮 Interactive Playground

- Real-time prop controls (checkboxes, selects, text inputs)
- Live component preview
- Auto-generated code examples
- Sync between controls and code

### 📝 Code Examples

- Basic usage examples
- Variant demonstrations
- Advanced configuration examples
- Tabbed interface with smooth animations

### 📊 API Reference

- **Props Table**: Name, type, default value, description
- **Events Table**: Event name, type, description
- Extracted from TypeScript definition files

### ♿ Accessibility

- Built-in accessibility features
- Best practices and guidelines
- ARIA support information

### 🔗 Related Components

- Intelligent component suggestions
- Category-based relationships

## Usage

### Generate All Documentation

```bash
# Generate documentation for all components
bun run docs:generate

# Alternative command
bun run generate:docs
```

### Manual Script Execution

```bash
# Run the documentation generator directly
bun scripts/generate-docs.js
```

## File Structure

```
src/
├── lib/
│   └── docs/                          # Documentation support components
│       ├── ComponentPlayground.svelte # Interactive playground
│       ├── PropsTable.svelte         # Props reference table
│       └── EventsTable.svelte        # Events reference table
├── routes/
│   └── docs/
│       └── components/
│           ├── [component]/
│           │   └── +page.svelte      # Generated component docs
│           ├── accordion/
│           ├── badge/
│           ├── button/
│           └── ...                   # All component docs
└── scripts/
    └── generate-docs.js              # Documentation generator
```

## How It Works

### 1. Component Discovery

- Scans `src/lib/components/index.ts`
- Extracts all default exports
- Identifies component names automatically

### 2. Type Analysis

- Reads TypeScript definition files from `dist/components/*.d.ts`
- Parses interface definitions
- Extracts prop types, defaults, and optional flags

### 3. Code Generation

- Generates variant examples from union types
- Creates basic and advanced usage examples
- Builds interactive playground configurations

### 4. Template Generation

- Uses comprehensive Svelte template
- Includes all sections (hero, playground, examples, API, a11y)
- Applies consistent styling and animations

## Component Metadata

The system includes rich metadata for better documentation:

```javascript
const COMPONENT_METADATA = {
	Button: {
		description: 'Interactive button component with liquid glass morphism...',
		category: 'Core',
		complexity: 'Simple',
		since: '0.1.0'
	}
	// ... more components
};
```

## Generated Components

### ComponentPlayground.svelte

- Interactive prop controls
- Real-time preview
- Live code generation
- Support for boolean, string, and select inputs

### PropsTable.svelte

- Type-safe props display
- Optional/required indicators
- Default value highlighting
- Descriptions and types

### EventsTable.svelte

- Event documentation
- Type information
- Usage descriptions

## Customization

### Adding New Components

1. Export your component in `src/lib/components/index.ts`
2. Build the project to generate TypeScript definitions
3. Run `bun run docs:generate`

### Custom Metadata

Add component metadata in `scripts/generate-docs.js`:

```javascript
const COMPONENT_METADATA = {
	YourComponent: {
		description: 'Your component description',
		category: 'Your Category',
		complexity: 'Simple|Medium|Complex',
		since: '0.x.x'
	}
};
```

### Styling

- Consistent with the brand's terminal/hacker aesthetic
- Liquid glass morphism effects
- Terminal-inspired color palette
- Responsive design

## Technical Details

### TypeScript Integration

- Automatic prop type extraction
- Union type analysis for variants
- Optional parameter detection
- Default value inference

### Code Examples

- Automatic variant generation
- Smart prop filtering for examples
- Template-based code generation

### Performance

- Static generation at build time
- No runtime overhead
- Fast page loads

### Browser Support

- Modern browsers with ES6+ support
- Progressive enhancement
- Accessibility-first design

## Troubleshooting

### Missing Type Definitions

If TypeScript definitions are missing:

```bash
bun run build:package
bun run docs:generate
```

### Component Not Found

Ensure the component is properly exported in `index.ts`:

```typescript
export { default as YourComponent } from './YourComponent.svelte';
```

### Styling Issues

The documentation pages inherit from the main app styling. Ensure your CSS classes are available.

## Future Enhancements

- [ ] Visual regression testing for docs
- [ ] Auto-generated component screenshots
- [ ] Search functionality
- [ ] Component dependency graphs
- [ ] Performance metrics per component
- [ ] Dark/light theme toggle
- [ ] Export documentation as PDF/HTML

## Contributing

When adding new components:

1. Include comprehensive TypeScript interfaces
2. Add meaningful prop descriptions
3. Consider accessibility requirements
4. Update component metadata
5. Regenerate documentation

The documentation system is designed to grow with your component library while maintaining consistency and quality across all component documentation.
