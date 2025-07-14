interface Props {
	showWebVitals?: boolean;
	showFPS?: boolean;
	showMemory?: boolean;
	updateInterval?: number;
	position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
	theme?: 'terminal' | 'cyberpunk' | 'minimal';
	class?: string;
}
interface $$__sveltets_2_IsomorphicComponent<
	Props extends Record<string, any> = any,
	Events extends Record<string, any> = any,
	Slots extends Record<string, any> = any,
	Exports = {},
	Bindings = string
> {
	new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<
		Props,
		Events,
		Slots
	> & {
		$$bindings?: Bindings;
	} & Exports;
	(
		internal: unknown,
		props: Props & {
			$$events?: Events;
			$$slots?: Slots;
		}
	): Exports & {
		$set?: any;
		$on?: any;
	};
	z_$$bindings?: Bindings;
}
declare const PerformanceMonitor: $$__sveltets_2_IsomorphicComponent<
	Props,
	{
		metricsUpdate: CustomEvent<any>;
	} & {
		[evt: string]: CustomEvent<any>;
	},
	{},
	{},
	''
>;
type PerformanceMonitor = InstanceType<typeof PerformanceMonitor>;
export default PerformanceMonitor;
