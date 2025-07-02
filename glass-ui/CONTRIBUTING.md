# Contributing to Glass UI 🤝

Thank you for your interest in contributing to Glass UI! This guide will help you get started.

## 🎯 **Development Setup**

### Prerequisites
- Node.js 18+
- npm 9+
- Git

### Getting Started
```bash
# Clone the repository
git clone https://github.com/tuliopc23/glass-ui.git
cd glass-ui

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Run Storybook
npm run storybook
```

## 📋 **Development Workflow**

### Before You Start
1. Check existing [issues](https://github.com/tuliopc23/glass-ui/issues)
2. Open a new issue for new features or bugs
3. Wait for approval before starting work

### Making Changes
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass: `npm test`
6. Check code quality: `npm run lint`
7. Build the library: `npm run build`

### Commit Guidelines
We follow [Conventional Commits](https://conventionalcommits.org/):

```bash
# Examples
git commit -m "feat: add tooltip component"
git commit -m "fix: resolve button focus issue"
git commit -m "docs: update button documentation"
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

## 🧩 **Component Guidelines**

### New Component Checklist
- [ ] Component implements glassmorphism variants
- [ ] TypeScript definitions included
- [ ] Accessibility features (ARIA, keyboard nav)
- [ ] Responsive design patterns
- [ ] Unit tests with >90% coverage
- [ ] Storybook stories
- [ ] Documentation

### Code Standards
- **TypeScript**: All components must be typed
- **Accessibility**: WCAG 2.1 AA compliance required
- **Performance**: No unnecessary re-renders
- **Consistency**: Follow existing patterns

### Example Component Structure
```tsx
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const componentVariants = cva(
  'base-classes',
  {
    variants: {
      variant: {
        default: 'default-classes',
        glass: 'glass-classes',
        'glass-dark': 'glass-dark-classes',
      },
      size: {
        sm: 'small-classes',
        md: 'medium-classes',
        lg: 'large-classes',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(componentVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Component.displayName = 'Component';

export { Component, componentVariants };
```

## 🧪 **Testing**

### Writing Tests
```tsx
import { render, screen } from '@testing-library/react';
import { Component } from './component';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component>Test content</Component>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies glass variant', () => {
    render(<Component variant="glass">Glass component</Component>);
    const component = screen.getByText('Glass component');
    expect(component).toHaveClass('glass-classes');
  });
});
```

### Accessibility Testing
```tsx
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

it('has no accessibility violations', async () => {
  const { container } = render(<Component />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## 📖 **Documentation**

### Storybook Stories
Each component needs comprehensive Storybook stories:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Component } from './component';

const meta: Meta<typeof Component> = {
  title: 'Components/Component',
  component: Component,
  parameters: {
    docs: {
      description: {
        component: 'A flexible component with glassmorphism effects.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'glass', 'glass-dark'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default component',
  },
};

export const Glass: Story = {
  args: {
    variant: 'glass',
    children: 'Glass component',
  },
};
```

## 🚀 **Release Process**

1. **Version Update**: We use semantic versioning
2. **Changelog**: Auto-generated from commits
3. **Testing**: All tests must pass
4. **Build**: Production build created
5. **NPM Publish**: Automated via GitHub Actions

## 🏆 **Recognition**

Contributors will be:
- Listed in our README
- Credited in release notes
- Invited to maintainer discussions

## 📞 **Questions?**

- **Issues**: [GitHub Issues](https://github.com/tuliopc23/glass-ui/issues)
- **Discussions**: [GitHub Discussions](https://github.com/tuliopc23/glass-ui/discussions)
- **Email**: tulio@tuliocunha.dev

---

**Thank you for contributing to Glass UI! 🎉** 