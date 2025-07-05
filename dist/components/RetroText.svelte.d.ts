interface Props {
    text?: string;
    variant?: 'bitmap' | 'terminal' | 'vintage' | 'commodore' | 'apple2' | 'atari';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    color?: 'green' | 'amber' | 'blue' | 'white' | 'red' | 'cyan' | 'magenta';
    glow?: boolean;
    scanlines?: boolean;
    flicker?: boolean;
    animate?: boolean;
    typewriter?: boolean;
    speed?: number;
    class?: string;
    children?: any;
}
declare const RetroText: import("svelte").Component<Props, {}, "">;
type RetroText = ReturnType<typeof RetroText>;
export default RetroText;
