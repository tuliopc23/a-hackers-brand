interface Props {
	text: string;
	class?: string;
	intensity?: 'low' | 'medium' | 'high' | 'extreme';
	continuous?: boolean;
	trigger?: boolean;
	speed?: number;
	colors?: string[];
}
declare const GlitchText: import('svelte').Component<Props, {}, ''>;
type GlitchText = ReturnType<typeof GlitchText>;
export default GlitchText;
