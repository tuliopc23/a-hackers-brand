export interface BaseComponentProps {
    class?: string;
    id?: string;
    'data-testid'?: string;
    [key: string]: any;
}
export type ComponentVariant = 'glass' | 'terminal' | 'liquid' | 'neon' | 'classic' | 'default';
export type ComponentSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type ComponentState = 'default' | 'hover' | 'active' | 'disabled' | 'loading' | 'error';
export interface ButtonProps extends BaseComponentProps {
    variant?: ComponentVariant;
    size?: ComponentSize;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    loading?: boolean;
    glow?: boolean;
    jelly?: boolean;
    liquid?: boolean;
    magnetic?: boolean;
    ripple?: boolean;
    animated?: boolean;
    children?: any;
}
export interface InputProps extends BaseComponentProps {
    variant?: ComponentVariant;
    size?: ComponentSize;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
    error?: string;
    label?: string;
    name?: string;
    minlength?: number;
    maxlength?: number;
    glow?: boolean;
    liquid?: boolean;
    blur?: ComponentSize;
    animated?: boolean;
}
export interface ModalProps extends BaseComponentProps {
    open: boolean;
    title?: string;
    description?: string;
    variant?: ComponentVariant;
    size?: ComponentSize;
    showHeader?: boolean;
    closable?: boolean;
    closeOnOverlay?: boolean;
    closeOnEscape?: boolean;
    backdrop?: 'blur' | 'solid' | 'transparent';
    breathing?: boolean;
    glow?: boolean;
    animated?: boolean;
    transition?: string;
    portalTarget?: string;
}
export interface AlertProps extends BaseComponentProps {
    variant?: 'success' | 'error' | 'warning' | 'info' | 'terminal';
    title?: string;
    description?: string;
    closable?: boolean;
    animated?: boolean;
    glow?: boolean;
    jelly?: boolean;
    icon?: boolean;
    position?: 'static' | 'fixed' | 'absolute';
    placement?: 'top' | 'bottom' | 'left' | 'right' | 'center';
}
export interface ToastProps extends BaseComponentProps {
    open: boolean;
    type?: 'success' | 'error' | 'warning' | 'info';
    variant?: ComponentVariant;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
    blur?: ComponentSize;
    duration?: number;
    closable?: boolean;
    animate?: boolean;
    reduceMotion?: boolean;
    title?: string;
    description?: string;
    action?: {
        label: string;
        onClick: () => void;
    };
}
export interface ListItem {
    id: string;
    label: string;
    value?: string;
    href?: string;
    disabled?: boolean;
    [key: string]: any;
}
export interface BreadcrumbItem extends ListItem {
    href?: string;
}
export interface SelectOption extends ListItem {
    value: string;
    disabled?: boolean;
}
export interface TableColumn {
    key: string;
    label: string;
    sortable?: boolean;
    render?: (value: any, row?: any) => any;
    width?: string;
    align?: 'left' | 'center' | 'right';
}
export interface UploadFile {
    id: string;
    name: string;
    size: number;
    type: string;
    status: 'pending' | 'uploading' | 'success' | 'error';
    progress?: number;
    error?: string;
    url?: string;
}
export interface GridProps extends BaseComponentProps {
    cols?: 'auto' | number;
    rows?: 'auto' | number;
    gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    colSpan?: number;
    rowSpan?: number;
    autoFit?: boolean;
    autoFill?: boolean;
    minColWidth?: string;
    maxColWidth?: string;
    responsive?: boolean;
    breakpoints?: Record<string, any>;
    align?: 'start' | 'end' | 'center' | 'stretch';
    justify?: 'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'space-around';
    placeItems?: string;
}
export interface GlassComponentProps {
    class?: string;
    variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    disabled?: boolean;
    magnetic?: boolean;
    ripple?: boolean;
}
export interface TerminalComponentProps {
    theme?: 'matrix' | 'cyberpunk' | 'hacker' | 'liquid';
    animated?: boolean;
    glitch?: boolean;
    class?: string;
}
export interface WebGLComponentProps {
    quality?: 'low' | 'medium' | 'high' | 'ultra';
    autoRotate?: boolean;
    interactive?: boolean;
    enableBloom?: boolean;
    enableParticles?: boolean;
    class?: string;
}
export interface MotionConfig {
    spring?: {
        tension: number;
        friction: number;
        mass: number;
    };
    magnetic?: {
        strength: number;
        radius: number;
        easing: string;
    };
    ripple?: {
        duration: number;
        scale: number;
        opacity: number;
    };
}
export interface BrandTokens {
    colors: {
        terminal: {
            green: string;
            cyan: string;
            blue: string;
            purple: string;
        };
        glass: {
            primary: string;
            secondary: string;
            accent: string;
            background: string;
        };
    };
    spacing: Record<string, string>;
    typography: {
        mono: string;
        sans: string;
        sizes: Record<string, string>;
    };
    effects: {
        blur: Record<string, string>;
        shadow: Record<string, string>;
        glow: Record<string, string>;
    };
}
export interface PerformanceMetrics {
    fps: number;
    memory: {
        used: number;
        total: number;
    };
    webgl: {
        active: boolean;
        renderer: string;
        triangles: number;
    };
    bundle: {
        size: number;
        gzipped: number;
    };
}
export type ThemeMode = 'light' | 'dark' | 'auto';
export type TerminalTheme = 'matrix' | 'cyberpunk' | 'hacker' | 'liquid' | 'neon';
export type GlassQuality = 'low' | 'medium' | 'high' | 'ultra';
export interface GlassEvent<T = any> {
    type: string;
    detail: T;
    target: EventTarget | null;
}
export interface TerminalCommand {
    command: string;
    args: string[];
    output?: string;
    error?: string;
    timestamp: number;
}
export type LegacyComponentSize = 'sm' | 'md' | 'lg' | 'xl';
export type LegacyComponentVariant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'danger';
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
