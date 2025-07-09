interface Props {
	time: number;
	mouseX: number;
	mouseY: number;
	colorPrimary: string;
	colorSecondary: string;
	glowIntensity: number;
	position?: [number, number, number];
}
declare const LiquidSphere: import('svelte').Component<Props, {}, ''>;
type LiquidSphere = ReturnType<typeof LiquidSphere>;
export default LiquidSphere;
