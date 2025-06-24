import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const textareaVariants = cva(
  'flex min-h-[80px] w-full rounded-md text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'border border-input bg-background px-3 py-2',
        filled: 'bg-white/10 border border-white/20 backdrop-blur-md px-3 py-2 hover:bg-white/20',
        outline: 'border-2 border-input bg-transparent px-3 py-2 focus:border-primary',
        ghost: 'bg-transparent border-none px-3 py-2 hover:bg-white/5',
        glass: 'bg-white/5 border border-white/20 backdrop-blur-md px-3 py-2 shadow-lg',
        'glass-dark': 'bg-black/5 border border-black/20 backdrop-blur-md px-3 py-2 shadow-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea, textareaVariants }; 