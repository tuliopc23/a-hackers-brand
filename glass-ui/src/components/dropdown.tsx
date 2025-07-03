import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const dropdownVariants = cva(
  'relative inline-block text-left',
  {
    variants: {
      variant: {
        default: '',
        glass: 'backdrop-blur-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface DropdownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dropdownVariants> {}

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ className, variant, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(dropdownVariants({ variant }), className)}
      {...props}
    >
      {children}
    </div>
  )
);
Dropdown.displayName = 'Dropdown';

export { Dropdown, dropdownVariants };
