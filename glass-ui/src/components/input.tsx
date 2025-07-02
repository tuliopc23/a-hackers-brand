import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const inputVariants = cva(
  'flex w-full rounded-md text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'h-10 border border-input bg-background px-3 py-2',
        filled: 'h-10 bg-white/10 border border-white/20 backdrop-blur-md px-3 py-2 hover:bg-white/20',
        outline: 'h-10 border-2 border-input bg-transparent px-3 py-2 focus:border-primary',
        ghost: 'h-10 bg-transparent border-none px-3 py-2 hover:bg-white/5',
        glass: 'h-10 bg-white/5 border border-white/20 backdrop-blur-md px-3 py-2 shadow-lg',
        'glass-dark': 'h-10 bg-black/5 border border-black/20 backdrop-blur-md px-3 py-2 shadow-lg',
      },
      inputSize: {
        default: 'h-10',
        sm: 'h-9 text-xs',
        lg: 'h-12 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'default',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, inputSize, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input, inputVariants };
