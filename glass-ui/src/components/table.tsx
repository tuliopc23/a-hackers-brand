import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const tableVariants = cva(
  'w-full caption-bottom text-sm',
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

const tableHeaderVariants = cva(
  'border-b transition-colors',
  {
    variants: {
      variant: {
        default: '[&_tr]:border-b',
        glass: '[&_tr]:border-white/20 bg-white/5 backdrop-blur-sm',
        'glass-dark': '[&_tr]:border-black/20 bg-black/5 backdrop-blur-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const tableBodyVariants = cva(
  '[&_tr:last-child]:border-0',
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

const tableRowVariants = cva(
  'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
  {
    variants: {
      variant: {
        default: '',
        glass: 'border-white/10 hover:bg-white/5 data-[state=selected]:bg-white/10',
        'glass-dark': 'border-black/10 hover:bg-black/5 data-[state=selected]:bg-black/10',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const tableHeadVariants = cva(
  'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
  {
    variants: {
      variant: {
        default: '',
        glass: 'text-foreground/80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const tableCellVariants = cva(
  'p-4 align-middle [&:has([role=checkbox])]:pr-0',
  {
    variants: {
      variant: {
        default: '',
        glass: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const tableCaptionVariants = cva(
  'mt-4 text-sm text-muted-foreground',
  {
    variants: {
      variant: {
        default: '',
        glass: 'text-foreground/60',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface TableProps
  extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariants> {}

export interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement>,
    VariantProps<typeof tableHeaderVariants> {}

export interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement>,
    VariantProps<typeof tableBodyVariants> {}

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement>,
    VariantProps<typeof tableRowVariants> {}

export interface TableHeadProps
  extends React.ThHTMLAttributes<HTMLTableCellElement>,
    VariantProps<typeof tableHeadVariants> {}

export interface TableCellProps
  extends React.TdHTMLAttributes<HTMLTableCellElement>,
    VariantProps<typeof tableCellVariants> {}

export interface TableCaptionProps
  extends React.HTMLAttributes<HTMLTableCaptionElement>,
    VariantProps<typeof tableCaptionVariants> {}

const TableContext = React.createContext<{
  variant?: 'default' | 'glass' | 'glass-dark';
}>({});

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <TableContext.Provider value={{ variant }}>
        <div className="relative w-full overflow-auto">
          <table
            ref={ref}
            className={cn(tableVariants({ variant }), className)}
            {...props}
          >
            {children}
          </table>
        </div>
      </TableContext.Provider>
    );
  }
);
Table.displayName = 'Table';

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, variant, ...props }, ref) => {
    const context = React.useContext(TableContext);
    const currentVariant = variant || context.variant;
    
    return (
      <thead
        ref={ref}
        className={cn(tableHeaderVariants({ variant: currentVariant }), className)}
        {...props}
      />
    );
  }
);
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, variant, ...props }, ref) => {
    const context = React.useContext(TableContext);
    const currentVariant = variant || context.variant;
    
    return (
      <tbody
        ref={ref}
        className={cn(tableBodyVariants({ variant: currentVariant }), className)}
        {...props}
      />
    );
  }
);
TableBody.displayName = 'TableBody';

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, variant, ...props }, ref) => {
    const context = React.useContext(TableContext);
    const currentVariant = variant || context.variant;
    
    return (
      <tr
        ref={ref}
        className={cn(tableRowVariants({ variant: currentVariant }), className)}
        {...props}
      />
    );
  }
);
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, variant, ...props }, ref) => {
    const context = React.useContext(TableContext);
    const currentVariant = variant || context.variant;
    
    return (
      <th
        ref={ref}
        className={cn(tableHeadVariants({ variant: currentVariant }), className)}
        {...props}
      />
    );
  }
);
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, variant, ...props }, ref) => {
    const context = React.useContext(TableContext);
    const currentVariant = variant || context.variant;
    
    return (
      <td
        ref={ref}
        className={cn(tableCellVariants({ variant: currentVariant }), className)}
        {...props}
      />
    );
  }
);
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  ({ className, variant, ...props }, ref) => {
    const context = React.useContext(TableContext);
    const currentVariant = variant || context.variant;
    
    return (
      <caption
        ref={ref}
        className={cn(tableCaptionVariants({ variant: currentVariant }), className)}
        {...props}
      />
    );
  }
);
TableCaption.displayName = 'TableCaption';

const TableFooter = TableHeader; // Alias for semantic purposes

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  tableVariants,
  tableHeaderVariants,
  tableBodyVariants,
  tableRowVariants,
  tableHeadVariants,
  tableCellVariants,
  tableCaptionVariants,
};
