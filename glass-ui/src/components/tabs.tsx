import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const tabsVariants = cva(
  'w-full',
  {
    variants: {
      variant: {
        default: '',
        glass: 'backdrop-blur-md',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const tabsListVariants = cva(
  'inline-flex h-10 items-center justify-center rounded-md p-1 transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'bg-muted text-muted-foreground',
        glass: 'bg-white/10 border border-white/20 backdrop-blur-md shadow-lg text-foreground',
        'glass-dark': 'bg-black/10 border border-black/20 backdrop-blur-md shadow-lg text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const tabsTriggerVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
        glass: 'data-[state=active]:bg-white/20 data-[state=active]:text-foreground data-[state=active]:shadow-md backdrop-blur-sm',
        'glass-dark': 'data-[state=active]:bg-black/20 data-[state=active]:text-foreground data-[state=active]:shadow-md backdrop-blur-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const tabsContentVariants = cva(
  'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: '',
        glass: 'backdrop-blur-md',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface TabsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsVariants> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export interface TabsListProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsListVariants> {}

export interface TabsTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tabsTriggerVariants> {
  value: string;
}

export interface TabsContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsContentVariants> {
  value: string;
}

const TabsContext = React.createContext<{
  value?: string;
  onValueChange?: (value: string) => void;
  variant?: 'default' | 'glass' | 'glass-dark';
}>({});

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, variant, defaultValue, value, onValueChange, children, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || '');
    const currentValue = value !== undefined ? value : internalValue;

    const handleValueChange = (newValue: string) => {
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    };

    return (
      <TabsContext.Provider value={{ value: currentValue, onValueChange: handleValueChange, variant }}>
        <div
          ref={ref}
          className={cn(tabsVariants({ variant }), className)}
          {...props}
        >
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);
Tabs.displayName = 'Tabs';

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, variant, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    const currentVariant = variant || context.variant;
    
    return (
      <div
        ref={ref}
        className={cn(tabsListVariants({ variant: currentVariant }), className)}
        {...props}
      />
    );
  }
);
TabsList.displayName = 'TabsList';

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, variant, value, children, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    const currentVariant = variant || context.variant;
    const isActive = context.value === value;

    return (
      <button
        ref={ref}
        className={cn(tabsTriggerVariants({ variant: currentVariant }), className)}
        data-state={isActive ? 'active' : 'inactive'}
        onClick={() => context.onValueChange?.(value)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, variant, value, children, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    const currentVariant = variant || context.variant;
    const isActive = context.value === value;

    if (!isActive) return null;

    return (
      <div
        ref={ref}
        className={cn(tabsContentVariants({ variant: currentVariant }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TabsContent.displayName = 'TabsContent';

export { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent, 
  tabsVariants, 
  tabsListVariants, 
  tabsTriggerVariants, 
  tabsContentVariants 
};
