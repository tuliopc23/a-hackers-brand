interface Props {
    title?: string;
    variant?: 'matrix' | 'cyberpunk' | 'neon' | 'classic';
    fullscreen?: boolean;
    minimized?: boolean;
    resizable?: boolean;
    commands?: string[];
    autoType?: boolean;
    liquidEffect?: boolean;
    glowIntensity?: number;
    class?: string;
}
declare const AdvancedLiquidTerminal: import("svelte").Component<Props, {}, "">;
type AdvancedLiquidTerminal = ReturnType<typeof AdvancedLiquidTerminal>;
export default AdvancedLiquidTerminal;
