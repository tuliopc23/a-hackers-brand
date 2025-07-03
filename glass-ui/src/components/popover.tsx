import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const popoverVariants = cva(
  'absolute z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none',
  {
    variants: {
      variant: {
        default: 'bg-background border-border',
        glass: 'bg-white/10 border-white/20 backdrop-blur-md shadow-xl',
        'glass-dark': 'bg-black/10 border-black/20 backdrop-blur-md shadow-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface PopoverProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof popoverVariants> {}

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(popoverVariants({ variant }), className)}
      {...props}
    />
  )
);
Popover.displayName = 'Popover';

export { Popover, popoverVariants };
