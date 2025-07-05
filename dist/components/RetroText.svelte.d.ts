import type { HTMLAttributes } from 'svelte/elements';
interface Props extends HTMLAttributes<HTMLElement> {
    text: string;
    variant?: 'macintosh' | 'dos' | 'amiga' | 'commodore' | 'atari' | 'crt' | 'phosphor' | 'matrix' | 'cyberpunk' | 'vaporwave' | 'neon' | 'hologram' | 'glitch' | 'terminal';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    animated?: boolean;
    typewriter?: boolean;
    scanlines?: boolean;
    glow?: boolean;
    flicker?: boolean;
    chromatic?: boolean;
    breathing?: boolean;
    class?: string;
    element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}
declare const RetroText: import("svelte").Component<Props, {}, "">;
type RetroText = ReturnType<typeof RetroText>;
export default RetroText;
