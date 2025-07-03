import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const sliderVariants = cva(
  'relative flex w-full touch-none select-none items-center',
  {
    variants: {
      variant: {
        default: '',
        glass: 'backdrop-blur-sm',
      },
      size: {
        sm: 'h-4',
        default: 'h-6',
        lg: 'h-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const trackVariants = cva(
  'relative h-2 w-full grow overflow-hidden rounded-full',
  {
    variants: {
      variant: {
        default: 'bg-secondary',
        glass: 'bg-white/10 border border-white/20 backdrop-blur-md shadow-lg',
        'glass-dark': 'bg-black/10 border border-black/20 backdrop-blur-md shadow-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const rangeVariants = cva(
  'absolute h-full',
  {
    variants: {
      variant: {
        default: 'bg-primary',
        glass: 'bg-primary/80 backdrop-blur-sm',
        'glass-dark': 'bg-primary/80 backdrop-blur-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const thumbVariants = cva(
  'block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: '',
        glass: 'bg-white/90 border-primary/80 backdrop-blur-sm shadow-lg',
        'glass-dark': 'bg-black/90 border-primary/80 backdrop-blur-sm shadow-lg',
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

export interface SliderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof sliderVariants> {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  label?: string;
  description?: string;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ 
    className, 
    variant, 
    size, 
    min = 0, 
    max = 100, 
    step = 1, 
    value, 
    defaultValue = min,
    onValueChange,
    label,
    description,
    ...props 
  }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const currentValue = value !== undefined ? value : internalValue;
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
      props.onChange?.(e);
    };

    const percentage = ((currentValue - min) / (max - min)) * 100;
    const id = props.id || `slider-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full space-y-3">
        {(label || description) && (
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
        )}
        
        <div className={cn(sliderVariants({ variant, size }), className)}>
          <div className={cn(trackVariants({ variant }))}>
            <div 
              className={cn(rangeVariants({ variant }))}
              style={{ width: `${percentage}%` }}
            />
          </div>
          
          <input
            ref={ref}
            id={id}
            type="range"
            min={min}
            max={max}
            step={step}
            value={currentValue}
            onChange={handleChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            {...props}
          />
          
          <div
            className={cn(thumbVariants({ variant, size }))}
            style={{
              position: 'absolute',
              left: `calc(${percentage}% - 10px)`,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
        </div>
        
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{min}</span>
          <span className="font-medium">{currentValue}</span>
          <span>{max}</span>
        </div>
      </div>
    );
  }
);

Slider.displayName = 'Slider';

export { Slider, sliderVariants, trackVariants, rangeVariants, thumbVariants as sliderThumbVariants };
