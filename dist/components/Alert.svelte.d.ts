import type { HTMLAttributes } from 'svelte/elements';
interface Props extends HTMLAttributes<HTMLDivElement> {
	variant?: 'success' | 'error' | 'warning' | 'info' | 'terminal';
	title?: string;
	description?: string;
	closable?: boolean;
	animated?: boolean;
	glow?: boolean;
	jelly?: boolean;
	icon?: boolean;
	position?: 'static' | 'fixed';
	placement?: 'top' | 'bottom' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
	class?: string;
	onclose?: () => void;
}
declare const Alert: import('svelte').Component<Props, {}, ''>;
type Alert = ReturnType<typeof Alert>;
export default Alert;
