interface Props {
    title?: string;
    class?: string;
    commands?: Record<string, string>;
    autoPlay?: boolean;
    theme?: 'liquid' | 'plasma' | 'neural' | 'quantum';
    enableLiquidFlow?: boolean;
    enableParticles?: boolean;
    enableWaveform?: boolean;
    enableHologram?: boolean;
    children?: any;
}
declare const LiquidTerminal: import("svelte").Component<Props, {}, "">;
type LiquidTerminal = ReturnType<typeof LiquidTerminal>;
export default LiquidTerminal;
