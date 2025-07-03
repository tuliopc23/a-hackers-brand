interface Props {
    title?: string;
    class?: string;
    commands?: Record<string, string>;
    autoPlay?: boolean;
    theme?: 'matrix' | 'cyberpunk' | 'hacker' | 'terminal';
    enableGlitch?: boolean;
    enableMatrixRain?: boolean;
    enableScanlines?: boolean;
    enableFlicker?: boolean;
    children?: any;
}
declare const AdvancedTerminal: import("svelte").Component<Props, {}, "">;
type AdvancedTerminal = ReturnType<typeof AdvancedTerminal>;
export default AdvancedTerminal;
