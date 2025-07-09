import { type VariantProps } from 'tailwind-variants';
import { type ClassValue } from 'clsx';
export declare function cn(...inputs: ClassValue[]): string;
export declare const breakpoints: {
	readonly xs: 475;
	readonly sm: 640;
	readonly md: 768;
	readonly lg: 1024;
	readonly xl: 1280;
	readonly '2xl': 1536;
	readonly mobile: 390;
	readonly tablet: 768;
	readonly desktop: 1024;
	readonly wide: 1440;
	readonly ultrawide: 1920;
};
export type Breakpoint = keyof typeof breakpoints;
export declare const mediaQueries: {
	readonly xs: '(min-width: 475px)';
	readonly sm: '(min-width: 640px)';
	readonly md: '(min-width: 768px)';
	readonly lg: '(min-width: 1024px)';
	readonly xl: '(min-width: 1280px)';
	readonly '2xl': '(min-width: 1536px)';
	readonly mobile: '(min-width: 390px)';
	readonly tablet: '(min-width: 768px)';
	readonly desktop: '(min-width: 1024px)';
	readonly wide: '(min-width: 1440px)';
	readonly ultrawide: '(min-width: 1920px)';
	readonly 'max-xs': `(max-width: ${number}px)`;
	readonly 'max-sm': `(max-width: ${number}px)`;
	readonly 'max-md': `(max-width: ${number}px)`;
	readonly 'max-lg': `(max-width: ${number}px)`;
	readonly 'max-xl': `(max-width: ${number}px)`;
	readonly 'max-2xl': `(max-width: ${number}px)`;
};
export declare const containerVariants: import('tailwind-variants').TVReturnType<
	{
		size: {
			sm: string;
			md: string;
			lg: string;
			xl: string;
			full: string;
			terminal: string;
			portfolio: string;
			styleguide: string;
		};
		padding: {
			none: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
		};
	},
	undefined,
	'mx-auto px-4 sm:px-6 lg:px-8',
	{
		size: {
			sm: string;
			md: string;
			lg: string;
			xl: string;
			full: string;
			terminal: string;
			portfolio: string;
			styleguide: string;
		};
		padding: {
			none: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
		};
	},
	undefined,
	import('tailwind-variants').TVReturnType<
		{
			size: {
				sm: string;
				md: string;
				lg: string;
				xl: string;
				full: string;
				terminal: string;
				portfolio: string;
				styleguide: string;
			};
			padding: {
				none: string;
				sm: string;
				md: string;
				lg: string;
				xl: string;
			};
		},
		undefined,
		'mx-auto px-4 sm:px-6 lg:px-8',
		unknown,
		unknown,
		undefined
	>
>;
export declare const gridVariants: import('tailwind-variants').TVReturnType<
	{
		cols: {
			1: string;
			2: string;
			3: string;
			4: string;
			5: string;
			6: string;
			auto: string;
			portfolio: string;
			features: string;
			terminal: string;
			showcase: string;
		};
		gap: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			'2xl': string;
		};
		responsive: {
			true: string;
		};
	},
	undefined,
	'grid gap-4',
	{
		cols: {
			1: string;
			2: string;
			3: string;
			4: string;
			5: string;
			6: string;
			auto: string;
			portfolio: string;
			features: string;
			terminal: string;
			showcase: string;
		};
		gap: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			'2xl': string;
		};
		responsive: {
			true: string;
		};
	},
	undefined,
	import('tailwind-variants').TVReturnType<
		{
			cols: {
				1: string;
				2: string;
				3: string;
				4: string;
				5: string;
				6: string;
				auto: string;
				portfolio: string;
				features: string;
				terminal: string;
				showcase: string;
			};
			gap: {
				xs: string;
				sm: string;
				md: string;
				lg: string;
				xl: string;
				'2xl': string;
			};
			responsive: {
				true: string;
			};
		},
		undefined,
		'grid gap-4',
		unknown,
		unknown,
		undefined
	>
>;
export declare const flexVariants: import('tailwind-variants').TVReturnType<
	{
		direction: {
			row: string;
			col: string;
			'row-reverse': string;
			'col-reverse': string;
			responsive: string;
		};
		align: {
			start: string;
			center: string;
			end: string;
			stretch: string;
			baseline: string;
		};
		justify: {
			start: string;
			center: string;
			end: string;
			between: string;
			around: string;
			evenly: string;
		};
		wrap: {
			true: string;
			false: string;
			reverse: string;
		};
		gap: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			responsive: string;
		};
	},
	undefined,
	'flex',
	{
		direction: {
			row: string;
			col: string;
			'row-reverse': string;
			'col-reverse': string;
			responsive: string;
		};
		align: {
			start: string;
			center: string;
			end: string;
			stretch: string;
			baseline: string;
		};
		justify: {
			start: string;
			center: string;
			end: string;
			between: string;
			around: string;
			evenly: string;
		};
		wrap: {
			true: string;
			false: string;
			reverse: string;
		};
		gap: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			responsive: string;
		};
	},
	undefined,
	import('tailwind-variants').TVReturnType<
		{
			direction: {
				row: string;
				col: string;
				'row-reverse': string;
				'col-reverse': string;
				responsive: string;
			};
			align: {
				start: string;
				center: string;
				end: string;
				stretch: string;
				baseline: string;
			};
			justify: {
				start: string;
				center: string;
				end: string;
				between: string;
				around: string;
				evenly: string;
			};
			wrap: {
				true: string;
				false: string;
				reverse: string;
			};
			gap: {
				xs: string;
				sm: string;
				md: string;
				lg: string;
				xl: string;
				responsive: string;
			};
		},
		undefined,
		'flex',
		unknown,
		unknown,
		undefined
	>
>;
export declare const textVariants: import('tailwind-variants').TVReturnType<
	{
		size: {
			xs: string;
			sm: string;
			base: string;
			lg: string;
			xl: string;
			'2xl': string;
			'3xl': string;
			'4xl': string;
			'responsive-sm': string;
			'responsive-base': string;
			'responsive-lg': string;
			'responsive-xl': string;
			'responsive-2xl': string;
			hero: string;
			heading: string;
			subheading: string;
			terminal: string;
			code: string;
		};
		weight: {
			light: string;
			normal: string;
			medium: string;
			semibold: string;
			bold: string;
			black: string;
		};
		align: {
			left: string;
			center: string;
			right: string;
			justify: string;
			responsive: string;
		};
		family: {
			sans: string;
			mono: string;
			brand: string;
		};
	},
	undefined,
	'font-sans',
	{
		size: {
			xs: string;
			sm: string;
			base: string;
			lg: string;
			xl: string;
			'2xl': string;
			'3xl': string;
			'4xl': string;
			'responsive-sm': string;
			'responsive-base': string;
			'responsive-lg': string;
			'responsive-xl': string;
			'responsive-2xl': string;
			hero: string;
			heading: string;
			subheading: string;
			terminal: string;
			code: string;
		};
		weight: {
			light: string;
			normal: string;
			medium: string;
			semibold: string;
			bold: string;
			black: string;
		};
		align: {
			left: string;
			center: string;
			right: string;
			justify: string;
			responsive: string;
		};
		family: {
			sans: string;
			mono: string;
			brand: string;
		};
	},
	undefined,
	import('tailwind-variants').TVReturnType<
		{
			size: {
				xs: string;
				sm: string;
				base: string;
				lg: string;
				xl: string;
				'2xl': string;
				'3xl': string;
				'4xl': string;
				'responsive-sm': string;
				'responsive-base': string;
				'responsive-lg': string;
				'responsive-xl': string;
				'responsive-2xl': string;
				hero: string;
				heading: string;
				subheading: string;
				terminal: string;
				code: string;
			};
			weight: {
				light: string;
				normal: string;
				medium: string;
				semibold: string;
				bold: string;
				black: string;
			};
			align: {
				left: string;
				center: string;
				right: string;
				justify: string;
				responsive: string;
			};
			family: {
				sans: string;
				mono: string;
				brand: string;
			};
		},
		undefined,
		'font-sans',
		unknown,
		unknown,
		undefined
	>
>;
export declare const spacingVariants: import('tailwind-variants').TVReturnType<
	{
		p: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			responsive: string;
		};
		px: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			responsive: string;
		};
		py: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			responsive: string;
		};
		m: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			responsive: string;
		};
		mx: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			auto: string;
			responsive: string;
		};
		my: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			responsive: string;
		};
	},
	undefined,
	undefined,
	{
		p: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			responsive: string;
		};
		px: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			responsive: string;
		};
		py: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			responsive: string;
		};
		m: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			responsive: string;
		};
		mx: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			auto: string;
			responsive: string;
		};
		my: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			responsive: string;
		};
	},
	undefined,
	import('tailwind-variants').TVReturnType<
		{
			p: {
				xs: string;
				sm: string;
				md: string;
				lg: string;
				xl: string;
				responsive: string;
			};
			px: {
				xs: string;
				sm: string;
				md: string;
				lg: string;
				xl: string;
				responsive: string;
			};
			py: {
				xs: string;
				sm: string;
				md: string;
				lg: string;
				xl: string;
				responsive: string;
			};
			m: {
				xs: string;
				sm: string;
				md: string;
				lg: string;
				xl: string;
				responsive: string;
			};
			mx: {
				xs: string;
				sm: string;
				md: string;
				lg: string;
				xl: string;
				auto: string;
				responsive: string;
			};
			my: {
				xs: string;
				sm: string;
				md: string;
				lg: string;
				xl: string;
				responsive: string;
			};
		},
		undefined,
		undefined,
		unknown,
		unknown,
		undefined
	>
>;
export declare function useBreakpoint():
	| 'md'
	| 'lg'
	| 'sm'
	| 'xl'
	| 'mobile'
	| 'xs'
	| '2xl'
	| 'ultrawide'
	| 'wide'
	| 'desktop'
	| 'tablet';
export declare const visibilityVariants: import('tailwind-variants').TVReturnType<
	{
		show: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			'2xl': string;
			mobile: string;
			tablet: string;
			desktop: string;
		};
		hide: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			'2xl': string;
			mobile: string;
			tablet: string;
			desktop: string;
		};
	},
	undefined,
	undefined,
	{
		show: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			'2xl': string;
			mobile: string;
			tablet: string;
			desktop: string;
		};
		hide: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
			'2xl': string;
			mobile: string;
			tablet: string;
			desktop: string;
		};
	},
	undefined,
	import('tailwind-variants').TVReturnType<
		{
			show: {
				xs: string;
				sm: string;
				md: string;
				lg: string;
				xl: string;
				'2xl': string;
				mobile: string;
				tablet: string;
				desktop: string;
			};
			hide: {
				xs: string;
				sm: string;
				md: string;
				lg: string;
				xl: string;
				'2xl': string;
				mobile: string;
				tablet: string;
				desktop: string;
			};
		},
		undefined,
		undefined,
		unknown,
		unknown,
		undefined
	>
>;
export type ContainerVariantProps = VariantProps<typeof containerVariants>;
export type GridVariantProps = VariantProps<typeof gridVariants>;
export type FlexVariantProps = VariantProps<typeof flexVariants>;
export type TextVariantProps = VariantProps<typeof textVariants>;
export type SpacingVariantProps = VariantProps<typeof spacingVariants>;
export type VisibilityVariantProps = VariantProps<typeof visibilityVariants>;
