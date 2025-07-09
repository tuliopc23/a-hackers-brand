interface Props {
	intensity?: number;
	frequency?: number;
	amplitude?: number;
	speed?: number;
	color?: string;
	opacity?: number;
	distortion?: number;
	refraction?: number;
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
declare const LiquidGlassShader: $$__sveltets_2_IsomorphicComponent<
	Props,
	{
		ready: CustomEvent<any>;
	} & {
		[evt: string]: CustomEvent<any>;
	},
	{},
	{},
	''
>;
type LiquidGlassShader = InstanceType<typeof LiquidGlassShader>;
export default LiquidGlassShader;
