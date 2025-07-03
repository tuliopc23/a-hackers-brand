import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const switchVariants = cva(
  'inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm',
  {
    variants: {
      variant: {
        default: 'data-[state=checked]:bg-primary data-[state=unchecked]:bg-white/10 shadow-lg',
        glass: 'data-[state=checked]:bg-primary/80 data-[state=unchecked]:bg-white/10 backdrop-blur-md shadow-xl border-white/20',
        'glass-dark': 'data-[state=checked]:bg-primary/80 data-[state=unchecked]:bg-black/10 backdrop-blur-md shadow-xl border-black/20',
      },
      size: {
        sm: 'h-5 w-9',
        default: 'h-6 w-11',
        lg: 'h-7 w-13',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const thumbVariants = cva(
  'pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform',
  {
    variants: {
      size: {
        sm: 'h-4 w-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
        default: 'h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
        lg: 'h-6 w-6 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof switchVariants> {
  label?: string;
  description?: string;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, variant, size, label, description, checked, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(checked || false);

    React.useEffect(() => {
      setIsChecked(checked || false);
    }, [checked]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked);
      props.onChange?.(e);
    };

    const id = props.id || `switch-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="flex items-center space-x-3">
        <div className="relative">
          <input
            type="checkbox"
            ref={ref}
            id={id}
            checked={isChecked}
            onChange={handleChange}
            className="sr-only"
            {...props}
          />
          <label
            htmlFor={id}
            className={cn(
              switchVariants({ variant, size }),
              className
            )}
            data-state={isChecked ? 'checked' : 'unchecked'}
          >
            <span
              className={cn(thumbVariants({ size }))}
              data-state={isChecked ? 'checked' : 'unchecked'}
            />
          </label>
        </div>

        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <label
                htmlFor={id}
                className="text-sm font-medium text-foreground cursor-pointer"
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-xs text-muted-foreground mt-1">
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';

export { Switch, switchVariants, thumbVariants as switchThumbVariants };
