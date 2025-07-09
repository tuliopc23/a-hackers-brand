import type { HTMLAttributes } from 'svelte/elements';
interface Tab {
	id: string;
	label: string;
	disabled?: boolean;
	content?: any;
}
interface Props extends HTMLAttributes<HTMLDivElement> {
	tabs: Tab[];
	activeTab?: string;
	variant?: 'default' | 'glass' | 'terminal';
	size?: 'sm' | 'md' | 'lg';
	orientation?: 'horizontal' | 'vertical';
	blur?: 'sm' | 'md' | 'lg' | 'xl';
	animate?: boolean;
	reduceMotion?: boolean;
	'aria-label'?: string;
	class?: string;
	children?: any;
	onTabChange?: (tabId: string) => void;
}
declare const Tabs: import('svelte').Component<Props, {}, ''>;
type Tabs = ReturnType<typeof Tabs>;
export default Tabs;
