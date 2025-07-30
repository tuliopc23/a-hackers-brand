export function cn(...inputs: any[]): string;
export function useBreakpoint(): "md" | "sm" | "lg" | "xl" | "mobile" | "xs" | "2xl" | "ultrawide" | "wide" | "desktop" | "tablet";
export const breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    '2xl': number;
    mobile: number;
    tablet: number;
    desktop: number;
    wide: number;
    ultrawide: number;
};
export const mediaQueries: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    mobile: string;
    tablet: string;
    desktop: string;
    wide: string;
    ultrawide: string;
    'max-xs': string;
    'max-sm': string;
    'max-md': string;
    'max-lg': string;
    'max-xl': string;
    'max-2xl': string;
};
export const containerVariants: import("tailwind-variants").TVReturnType<{
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
}, undefined, "mx-auto px-4 sm:px-6 lg:px-8", {
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
}, undefined, import("tailwind-variants").TVReturnType<{
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
}, undefined, "mx-auto px-4 sm:px-6 lg:px-8", unknown, unknown, undefined>>;
export const gridVariants: import("tailwind-variants").TVReturnType<{
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
}, undefined, "grid gap-4", {
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
}, undefined, import("tailwind-variants").TVReturnType<{
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
}, undefined, "grid gap-4", unknown, unknown, undefined>>;
export const flexVariants: import("tailwind-variants").TVReturnType<{
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
}, undefined, "flex", {
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
}, undefined, import("tailwind-variants").TVReturnType<{
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
}, undefined, "flex", unknown, unknown, undefined>>;
export const textVariants: import("tailwind-variants").TVReturnType<{
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
}, undefined, "font-sans", {
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
}, undefined, import("tailwind-variants").TVReturnType<{
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
}, undefined, "font-sans", unknown, unknown, undefined>>;
export const spacingVariants: import("tailwind-variants").TVReturnType<{
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
}, undefined, undefined, {
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
}, undefined, import("tailwind-variants").TVReturnType<{
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
}, undefined, undefined, unknown, unknown, undefined>>;
export const visibilityVariants: import("tailwind-variants").TVReturnType<{
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
}, undefined, undefined, {
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
}, undefined, import("tailwind-variants").TVReturnType<{
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
}, undefined, undefined, unknown, unknown, undefined>>;
//# sourceMappingURL=responsive.d.ts.map