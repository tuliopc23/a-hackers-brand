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
export type ComponentSize = 'sm' | 'md' | 'lg' | 'xl';
export type ComponentVariant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'danger';
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
