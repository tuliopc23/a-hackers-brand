import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const progressVariants = cva(
  'relative h-4 w-full overflow-hidden rounded-full',
  {
    variants: {
      variant: {
        default: 'bg-secondary',
        glass: 'bg-white/10 border border-white/20 backdrop-blur-md shadow-lg',
        'glass-dark': 'bg-black/10 border border-black/20 backdrop-blur-md shadow-lg',
      },
      size: {
        sm: 'h-2',
        default: 'h-4',
        lg: 'h-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const progressBarVariants = cva(
  'h-full w-full flex-1 transition-all duration-300 ease-in-out',
  {
    variants: {
      variant: {
        default: 'bg-primary',
        glass: 'bg-primary/80 backdrop-blur-sm shadow-sm',
        'glass-dark': 'bg-primary/80 backdrop-blur-sm shadow-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants> {
  value?: number;
  max?: number;
  showValue?: boolean;
  label?: string;
  description?: string;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ 
    className, 
    variant, 
    size, 
    value = 0, 
    max = 100, 
    showValue = false,
    label,
    description,
    ...props 
  }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    const id = props.id || `progress-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full space-y-2">
        {(label || description || showValue) && (
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              {label && (
                <label htmlFor={id} className="text-sm font-medium text-foreground">
                  {label}
                </label>
              )}
              {description && (
                <p className="text-xs text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
            {showValue && (
              <span className="text-sm text-muted-foreground">
                {Math.round(percentage)}%
              </span>
            )}
          </div>
        )}

        <div
          ref={ref}
          id={id}
          className={cn(progressVariants({ variant, size }), className)}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={label}
          {...props}
        >
          <div
            className={cn(progressBarVariants({ variant }))}
            style={{
              transform: `translateX(-${100 - percentage}%)`,
            }}
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = 'Progress';

export { Progress, progressVariants, progressBarVariants };
