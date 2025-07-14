interface Props {
	title?: string;
	class?: string;
	commands?: Record<string, string>;
	autoPlay?: boolean;
	children?: any;
}
declare const TerminalWindow: import('svelte').Component<Props, {}, ''>;
type TerminalWindow = ReturnType<typeof TerminalWindow>;
export default TerminalWindow;
