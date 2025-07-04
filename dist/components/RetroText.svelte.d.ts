interface Props {
    text: string;
    variant?: 'matrix' | 'neon' | 'cyberpunk' | 'hologram' | 'glitch' | 'terminal';
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    animated?: boolean;
    glow?: boolean;
    scanlines?: boolean;
    class?: string;
}
declare const RetroText: import("svelte").Component<Props, {}, "">;
type RetroText = ReturnType<typeof RetroText>;
export default RetroText;
