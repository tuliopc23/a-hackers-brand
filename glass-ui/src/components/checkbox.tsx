import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';
import { Check } from 'lucide-react';

const checkboxVariants = cva(
  'inline-flex items-center justify-center rounded border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none backdrop-blur-sm relative overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-white/10 border-white/20 hover:bg-white/20 shadow-lg data-[state=checked]:bg-primary data-[state=checked]:border-primary',
        glass: 'bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/20 shadow-xl data-[state=checked]:bg-primary/80 data-[state=checked]:border-primary',
        'glass-dark': 'bg-black/10 border-black/20 backdrop-blur-md hover:bg-black/20 shadow-xl data-[state=checked]:bg-primary/80 data-[state=checked]:border-primary',
      },
      size: {
        sm: 'h-4 w-4',
        default: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  description?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, variant, size, label, description, checked, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(checked || false);

    React.useEffect(() => {
      setIsChecked(checked || false);
    }, [checked]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked);
      props.onChange?.(e);
    };

    const id = props.id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="flex items-start space-x-3">
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
              checkboxVariants({ variant, size }),
              'cursor-pointer',
              className
            )}
            data-state={isChecked ? 'checked' : 'unchecked'}
          >
            {isChecked && (
              <Check 
                className={cn(
                  'text-primary-foreground transition-all duration-200',
                  size === 'sm' && 'h-3 w-3',
                  size === 'default' && 'h-4 w-4', 
                  size === 'lg' && 'h-5 w-5'
                )}
              />
            )}
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

Checkbox.displayName = 'Checkbox';

export { Checkbox, checkboxVariants };
