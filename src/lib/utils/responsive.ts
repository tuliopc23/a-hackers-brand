import { tv, type VariantProps } from 'tailwind-variants';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function to merge Tailwind classes properly
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// Responsive breakpoints configuration
export const breakpoints = {
	xs: 475,
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	'2xl': 1536,
	mobile: 390,
	tablet: 768,
	desktop: 1024,
	wide: 1440,
	ultrawide: 1920
} as const;

export type Breakpoint = keyof typeof breakpoints;

// Media query utilities
export const mediaQueries = {
	xs: `(min-width: ${breakpoints.xs}px)`,
	sm: `(min-width: ${breakpoints.sm}px)`,
	md: `(min-width: ${breakpoints.md}px)`,
	lg: `(min-width: ${breakpoints.lg}px)`,
	xl: `(min-width: ${breakpoints.xl}px)`,
	'2xl': `(min-width: ${breakpoints['2xl']}px)`,
	mobile: `(min-width: ${breakpoints.mobile}px)`,
	tablet: `(min-width: ${breakpoints.tablet}px)`,
	desktop: `(min-width: ${breakpoints.desktop}px)`,
	wide: `(min-width: ${breakpoints.wide}px)`,
	ultrawide: `(min-width: ${breakpoints.ultrawide}px)`,
	// Max width queries
	'max-xs': `(max-width: ${breakpoints.xs - 1}px)`,
	'max-sm': `(max-width: ${breakpoints.sm - 1}px)`,
	'max-md': `(max-width: ${breakpoints.md - 1}px)`,
	'max-lg': `(max-width: ${breakpoints.lg - 1}px)`,
	'max-xl': `(max-width: ${breakpoints.xl - 1}px)`,
	'max-2xl': `(max-width: ${breakpoints['2xl'] - 1}px)`,
} as const;

// Container variants for different contexts
export const containerVariants = tv({
	base: 'mx-auto px-4 sm:px-6 lg:px-8',
	variants: {
		size: {
			sm: 'max-w-3xl',
			md: 'max-w-5xl',
			lg: 'max-w-7xl',
			xl: 'max-w-none',
			full: 'max-w-full',
			// Custom sizes for design system
			terminal: 'max-w-4xl',
			portfolio: 'max-w-6xl',
			styleguide: 'max-w-7xl'
		},
		padding: {
			none: 'px-0',
			sm: 'px-4 sm:px-6',
			md: 'px-4 sm:px-6 lg:px-8',
			lg: 'px-6 sm:px-8 lg:px-12',
			xl: 'px-8 sm:px-12 lg:px-16'
		}
	},
	defaultVariants: {
		size: 'lg',
		padding: 'md'
	}
});

// Grid system variants
export const gridVariants = tv({
	base: 'grid gap-4',
	variants: {
		cols: {
			1: 'grid-cols-1',
			2: 'grid-cols-1 sm:grid-cols-2',
			3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
			4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
			5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5',
			6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6',
			auto: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-auto',
			// Custom responsive patterns for components
			portfolio: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
			features: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
			terminal: 'grid-cols-1 lg:grid-cols-2',
			showcase: 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'
		},
		gap: {
			xs: 'gap-2',
			sm: 'gap-4',
			md: 'gap-6',
			lg: 'gap-8',
			xl: 'gap-12',
			'2xl': 'gap-16'
		},
		responsive: {
			true: 'gap-4 sm:gap-6 lg:gap-8'
		}
	},
	defaultVariants: {
		cols: 'auto',
		gap: 'md'
	}
});

// Flex system variants
export const flexVariants = tv({
	base: 'flex',
	variants: {
		direction: {
			row: 'flex-row',
			col: 'flex-col',
			'row-reverse': 'flex-row-reverse',
			'col-reverse': 'flex-col-reverse',
			responsive: 'flex-col sm:flex-row'
		},
		align: {
			start: 'items-start',
			center: 'items-center',
			end: 'items-end',
			stretch: 'items-stretch',
			baseline: 'items-baseline'
		},
		justify: {
			start: 'justify-start',
			center: 'justify-center',
			end: 'justify-end',
			between: 'justify-between',
			around: 'justify-around',
			evenly: 'justify-evenly'
		},
		wrap: {
			true: 'flex-wrap',
			false: 'flex-nowrap',
			reverse: 'flex-wrap-reverse'
		},
		gap: {
			xs: 'gap-2',
			sm: 'gap-4',
			md: 'gap-6',
			lg: 'gap-8',
			xl: 'gap-12',
			responsive: 'gap-4 sm:gap-6 lg:gap-8'
		}
	},
	defaultVariants: {
		direction: 'row',
		align: 'center',
		justify: 'start',
		wrap: false,
		gap: 'sm'
	}
});

// Responsive text variants
export const textVariants = tv({
	base: 'font-sans',
	variants: {
		size: {
			xs: 'text-xs',
			sm: 'text-sm',
			base: 'text-base',
			lg: 'text-lg',
			xl: 'text-xl',
			'2xl': 'text-2xl',
			'3xl': 'text-3xl',
			'4xl': 'text-4xl',
			// Responsive text sizes
			'responsive-sm': 'text-sm sm:text-base',
			'responsive-base': 'text-base sm:text-lg',
			'responsive-lg': 'text-lg sm:text-xl',
			'responsive-xl': 'text-xl sm:text-2xl lg:text-3xl',
			'responsive-2xl': 'text-2xl sm:text-3xl lg:text-4xl',
			// Brand-specific sizes
			'hero': 'text-2xl sm:text-3xl lg:text-4xl xl:text-5xl',
			'heading': 'text-xl sm:text-2xl lg:text-3xl',
			'subheading': 'text-lg sm:text-xl',
			'terminal': 'text-sm sm:text-base font-mono',
			'code': 'text-xs sm:text-sm font-mono'
		},
		weight: {
			light: 'font-light',
			normal: 'font-normal',
			medium: 'font-medium',
			semibold: 'font-semibold',
			bold: 'font-bold',
			black: 'font-black'
		},
		align: {
			left: 'text-left',
			center: 'text-center',
			right: 'text-right',
			justify: 'text-justify',
			responsive: 'text-center sm:text-left'
		},
		family: {
			sans: 'font-sans',
			mono: 'font-mono',
			brand: 'font-sans' // PP Supply Sans
		}
	},
	defaultVariants: {
		size: 'base',
		weight: 'normal',
		align: 'left',
		family: 'sans'
	}
});

// Spacing variants for consistent responsive spacing
export const spacingVariants = tv({
	variants: {
		p: {
			xs: 'p-2',
			sm: 'p-4',
			md: 'p-6',
			lg: 'p-8',
			xl: 'p-12',
			responsive: 'p-4 sm:p-6 lg:p-8'
		},
		px: {
			xs: 'px-2',
			sm: 'px-4',
			md: 'px-6',
			lg: 'px-8',
			xl: 'px-12',
			responsive: 'px-4 sm:px-6 lg:px-8'
		},
		py: {
			xs: 'py-2',
			sm: 'py-4',
			md: 'py-6',
			lg: 'py-8',
			xl: 'py-12',
			responsive: 'py-4 sm:py-6 lg:py-8'
		},
		m: {
			xs: 'm-2',
			sm: 'm-4',
			md: 'm-6',
			lg: 'm-8',
			xl: 'm-12',
			responsive: 'm-4 sm:m-6 lg:m-8'
		},
		mx: {
			xs: 'mx-2',
			sm: 'mx-4',
			md: 'mx-6',
			lg: 'mx-8',
			xl: 'mx-12',
			auto: 'mx-auto',
			responsive: 'mx-4 sm:mx-6 lg:mx-8'
		},
		my: {
			xs: 'my-2',
			sm: 'my-4',
			md: 'my-6',
			lg: 'my-8',
			xl: 'my-12',
			responsive: 'my-4 sm:my-6 lg:my-8'
		}
	}
});

// Hook for checking if we're at a specific breakpoint
export function useBreakpoint() {
	if (typeof window === 'undefined') return 'lg'; // SSR fallback

	const width = window.innerWidth;
	
	if (width >= breakpoints.ultrawide) return 'ultrawide';
	if (width >= breakpoints.wide) return 'wide';
	if (width >= breakpoints.desktop) return 'desktop';
	if (width >= breakpoints.tablet) return 'tablet';
	if (width >= breakpoints.mobile) return 'mobile';
	if (width >= breakpoints['2xl']) return '2xl';
	if (width >= breakpoints.xl) return 'xl';
	if (width >= breakpoints.lg) return 'lg';
	if (width >= breakpoints.md) return 'md';
	if (width >= breakpoints.sm) return 'sm';
	if (width >= breakpoints.xs) return 'xs';
	
	return 'xs';
}

// Responsive visibility utilities
export const visibilityVariants = tv({
	variants: {
		show: {
			xs: 'block xs:hidden',
			sm: 'hidden sm:block md:hidden',
			md: 'hidden md:block lg:hidden',
			lg: 'hidden lg:block xl:hidden',
			xl: 'hidden xl:block 2xl:hidden',
			'2xl': 'hidden 2xl:block',
			mobile: 'block tablet:hidden',
			tablet: 'hidden tablet:block desktop:hidden',
			desktop: 'hidden desktop:block'
		},
		hide: {
			xs: 'hidden xs:block',
			sm: 'block sm:hidden',
			md: 'block md:hidden',
			lg: 'block lg:hidden',
			xl: 'block xl:hidden',
			'2xl': 'block 2xl:hidden',
			mobile: 'hidden tablet:block',
			tablet: 'block tablet:hidden',
			desktop: 'block desktop:hidden'
		}
	}
});

// Export variant props types for TypeScript
export type ContainerVariantProps = VariantProps<typeof containerVariants>;
export type GridVariantProps = VariantProps<typeof gridVariants>;
export type FlexVariantProps = VariantProps<typeof flexVariants>;
export type TextVariantProps = VariantProps<typeof textVariants>;
export type SpacingVariantProps = VariantProps<typeof spacingVariants>;
export type VisibilityVariantProps = VariantProps<typeof visibilityVariants>;