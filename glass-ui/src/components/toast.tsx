import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const toastVariants = cva(
  'fixed bottom-4 right-4 z-50 p-4 rounded-md shadow-lg transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-background border border-border text-foreground',
        success: 'bg-green-500/10 border border-green-500/20 text-green-400',
        error: 'bg-red-500/10 border border-red-500/20 text-red-400',
        warning: 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-400',
        glass: 'bg-white/10 border border-white/20 backdrop-blur-md shadow-xl',
        'glass-dark': 'bg-black/10 border border-black/20 backdrop-blur-md shadow-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {
  title?: string;
  description?: string;
  onClose?: () => void;
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, variant, title, description, onClose, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    >
      {title && <div className="font-semibold">{title}</div>}
      {description && <div className="text-sm opacity-90">{description}</div>}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded hover:bg-white/10"
        >
          ×
        </button>
      )}
    </div>
  )
);
Toast.displayName = 'Toast';

// Simple toast hook
export function useToast() {
  const [toasts, setToasts] = React.useState<Array<{ id: string; props: ToastProps }>>([]);

  const toast = React.useCallback((props: ToastProps) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts(prev => [...prev, { id, props }]);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 5000);
  }, []);

  const removeToast = React.useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return { toast, toasts, removeToast };
}

export { Toast, toastVariants };
