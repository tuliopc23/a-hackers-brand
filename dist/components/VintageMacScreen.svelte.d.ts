interface Props {
    content?: string;
    variant?: 'classic' | 'se30' | 'plus' | 'modern-retro';
    animated?: boolean;
    scanlines?: boolean;
    crtEffect?: boolean;
    glowIntensity?: number;
    textColor?: string;
    backgroundColor?: string;
    class?: string;
}
declare const VintageMacScreen: import("svelte").Component<Props, {}, "">;
type VintageMacScreen = ReturnType<typeof VintageMacScreen>;
export default VintageMacScreen;
