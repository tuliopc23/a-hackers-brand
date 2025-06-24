import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Heart, Download, Plus, ArrowRight } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
A versatile button component with glassmorphism effects and comprehensive accessibility features.

## Features
- Multiple glass variants with backdrop blur effects
- Full keyboard navigation support
- Loading and disabled states
- Icon support with proper spacing
- Responsive design patterns
- WCAG 2.1 AA compliant
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'outline', 'ghost', 'link', 'glass', 'glass-dark'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select', 
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as child element',
    },
  },
  args: {
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Default: Story = {
  args: {
    children: 'Default Button',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

// Glass variants
export const Glass: Story = {
  args: {
    variant: 'glass',
    children: 'Glass Button',
  },
  parameters: {
    backgrounds: {
      default: 'gradient',
      values: [
        {
          name: 'gradient',
          value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
      ],
    },
  },
};

export const GlassDark: Story = {
  args: {
    variant: 'glass-dark',
    children: 'Glass Dark Button',
  },
  parameters: {
    backgrounds: {
      default: 'dark-gradient',
      values: [
        {
          name: 'dark-gradient', 
          value: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        },
      ],
    },
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button variant="primary">
          <Plus className="w-4 h-4 mr-2" />
          Add Item
        </Button>
        <Button variant="secondary">
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
        <Button variant="outline">
          Continue
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button size="icon" variant="ghost">
          <Heart className="w-4 h-4" />
        </Button>
        <Button size="icon" variant="outline">
          <Plus className="w-4 h-4" />
        </Button>
        <Button size="icon" variant="glass">
          <Download className="w-4 h-4" />
        </Button>
      </div>
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="glass">Normal Glass</Button>
        <Button variant="glass" disabled>Disabled Glass</Button>
      </div>
    </div>
  ),
};

// Responsive example
export const Responsive: Story = {
  render: () => (
    <Button className="w-full sm:w-auto" variant="primary">
      Responsive Button
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button adapts to different screen sizes using responsive classes.',
      },
    },
  },
};

// Glass showcase
export const GlassShowcase: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Light Glass</h3>
        <div className="space-y-2">
          <Button variant="glass" className="w-full">
            Glass Button
          </Button>
          <Button variant="glass" size="sm" className="w-full">
            Small Glass
          </Button>
          <Button variant="glass" size="lg" className="w-full">
            Large Glass
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Dark Glass</h3>
        <div className="space-y-2">
          <Button variant="glass-dark" className="w-full">
            Dark Glass Button
          </Button>
          <Button variant="glass-dark" size="sm" className="w-full">
            Small Dark Glass
          </Button>
          <Button variant="glass-dark" size="lg" className="w-full">
            Large Dark Glass
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: {
      default: 'glass-demo',
      values: [
        {
          name: 'glass-demo',
          value: 'linear-gradient(135deg, #ff7eb3 0%, #ff758c 25%, #ff7eb3 50%, #8b5fbf 75%, #4e54c8 100%)',
        },
      ],
    },
  },
}; 