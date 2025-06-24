import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none backdrop-blur-sm',
  {
    variants: {
      variant: {
        default: 'bg-white/10 text-foreground border border-white/20 hover:bg-white/20 shadow-lg',
        primary: 'bg-primary/90 text-primary-foreground hover:bg-primary shadow-lg',
        secondary: 'bg-secondary/90 text-secondary-foreground hover:bg-secondary shadow-lg',
        outline: 'border border-input bg-white/5 hover:bg-white/10 hover:text-accent-foreground',
        ghost: 'hover:bg-white/10 hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary bg-transparent',
        glass: 'bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 shadow-xl',
        'glass-dark': 'bg-black/10 border border-black/20 backdrop-blur-md hover:bg-black/20 shadow-xl',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
