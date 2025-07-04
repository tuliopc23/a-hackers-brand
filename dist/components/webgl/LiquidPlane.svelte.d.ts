interface Props {
    time: number;
    mouseX: number;
    mouseY: number;
    colorPrimary: string;
    colorSecondary: string;
    glowIntensity: number;
    position?: [number, number, number];
}
declare const LiquidPlane: import("svelte").Component<Props, {}, "">;
type LiquidPlane = ReturnType<typeof LiquidPlane>;
export default LiquidPlane;
