interface Props {
    autoRotate?: boolean;
    quality?: 'low' | 'medium' | 'high' | 'ultra';
    enableLiquidEffects?: boolean;
    enableParticles?: boolean;
    enableBloom?: boolean;
    theme?: 'terminal' | 'cyberpunk' | 'neural' | 'quantum';
}
declare const GlassScene: import("svelte").Component<Props, {}, "">;
type GlassScene = ReturnType<typeof GlassScene>;
export default GlassScene;
