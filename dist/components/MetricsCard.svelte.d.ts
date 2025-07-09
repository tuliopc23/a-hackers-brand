import type { HTMLAttributes } from 'svelte/elements';
export interface MetricData {
	label: string;
	value: string | number;
	previousValue?: string | number;
	change?: number;
	changeType?: 'positive' | 'negative' | 'neutral';
	trend?: 'up' | 'down' | 'flat';
	unit?: string;
	format?: 'number' | 'currency' | 'percentage';
	icon?: string;
	description?: string;
}
interface Props extends HTMLAttributes<HTMLDivElement> {
	metric: MetricData;
	size?: 'sm' | 'md' | 'lg';
	variant?: 'glass' | 'terminal' | 'liquid';
	layout?: 'horizontal' | 'vertical';
	showTrend?: boolean;
	showChange?: boolean;
	showIcon?: boolean;
	animated?: boolean;
	loading?: boolean;
	clickable?: boolean;
	class?: string;
}
declare const MetricsCard: import('svelte').Component<Props, {}, ''>;
type MetricsCard = ReturnType<typeof MetricsCard>;
export default MetricsCard;
