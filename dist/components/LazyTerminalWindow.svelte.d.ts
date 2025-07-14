interface Props {
	title?: string;
	class?: string;
	commands?: Record<string, string>;
	autoPlay?: boolean;
	children?: any;
}
declare const LazyTerminalWindow: import('svelte').Component<Props, {}, ''>;
type LazyTerminalWindow = ReturnType<typeof LazyTerminalWindow>;
export default LazyTerminalWindow;
