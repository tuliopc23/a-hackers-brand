import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const avatarVariants = cva(
  'inline-flex items-center justify-center overflow-hidden rounded-full bg-muted select-none',
  {
    variants: {
      variant: {
        default: 'bg-muted',
        glass: 'bg-white/10 border border-white/20 backdrop-blur-md shadow-lg',
        'glass-dark': 'bg-black/10 border border-black/20 backdrop-blur-md shadow-lg',
      },
      size: {
        sm: 'h-8 w-8 text-xs',
        default: 'h-10 w-10 text-sm',
        lg: 'h-12 w-12 text-base',
        xl: 'h-16 w-16 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const avatarImageVariants = cva(
  'aspect-square h-full w-full object-cover',
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

const avatarFallbackVariants = cva(
  'flex h-full w-full items-center justify-center font-medium text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-muted text-muted-foreground',
        glass: 'bg-white/5 text-foreground/80',
        'glass-dark': 'bg-black/5 text-foreground/80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {}

export interface AvatarImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof avatarImageVariants> {}

export interface AvatarFallbackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarFallbackVariants> {}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(avatarVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Avatar.displayName = 'Avatar';

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, variant, ...props }, ref) => (
    <img
      ref={ref}
      className={cn(avatarImageVariants({ variant }), className)}
      {...props}
    />
  )
);
AvatarImage.displayName = 'AvatarImage';

const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(avatarFallbackVariants({ variant }), className)}
      {...props}
    />
  )
);
AvatarFallback.displayName = 'AvatarFallback';

export { Avatar, AvatarImage, AvatarFallback, avatarVariants, avatarImageVariants, avatarFallbackVariants };
