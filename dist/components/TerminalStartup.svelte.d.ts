import type { HTMLAttributes } from 'svelte/elements';
interface Props extends HTMLAttributes<HTMLDivElement> {
	autoStart?: boolean;
	onComplete?: () => void;
	variant?: 'retro' | 'modern' | 'hacker' | 'matrix';
	showBIOS?: boolean;
	fastBoot?: boolean;
	class?: string;
}
declare const TerminalStartup: import('svelte').Component<Props, {}, ''>;
type TerminalStartup = ReturnType<typeof TerminalStartup>;
export default TerminalStartup;
