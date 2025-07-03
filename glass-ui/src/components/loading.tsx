import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const loadingVariants = cva(
  'inline-block animate-spin rounded-full border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
  {
    variants: {
      variant: {
        default: 'border-primary',
        glass: 'border-primary/80 backdrop-blur-sm',
        'glass-dark': 'border-primary/80 backdrop-blur-sm',
      },
      size: {
        sm: 'h-4 w-4 border-2',
        default: 'h-6 w-6 border-2',
        lg: 'h-8 w-8 border-2',
        xl: 'h-12 w-12 border-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface LoadingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingVariants> {
  label?: string;
  description?: string;
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ className, variant, size, label, description, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col items-center justify-center space-y-2', className)}
        {...props}
      >
        <div className={cn(loadingVariants({ variant, size }))} />
        {label && (
          <p className="text-sm font-medium text-foreground">{label}</p>
        )}
        {description && (
          <p className="text-xs text-muted-foreground text-center">{description}</p>
        )}
      </div>
    );
  }
);

Loading.displayName = 'Loading';

export { Loading, loadingVariants };
