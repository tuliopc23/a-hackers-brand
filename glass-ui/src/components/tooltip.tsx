import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const tooltipVariants = cva(
  'inline-block align-middle text-center select-none',
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

export interface TooltipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tooltipVariants> {
  content: React.ReactNode;
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ className, content, variant, children, ...props }, ref) => (
    <div className={cn('relative inline-flex items-center', className)}>
      {children}
      <div className={cn('absolute z-10 p-2 mt-2 text-xs rounded-md shadow-lg', tooltipVariants({ variant }))} {...props}>
        {content}
      </div>
    </div>
  )
);
Tooltip.displayName = 'Tooltip';

export { Tooltip, tooltipVariants };
