import type { Snippet } from 'svelte';
interface Props {
	isOpen: boolean;
	title?: string;
	titleClassName?: string;
	contentClassName?: string;
	class?: string;
	children?: Snippet;
	onClose?: () => void;
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
declare const GlassModal: $$__sveltets_2_IsomorphicComponent<
	Props,
	{
		close: CustomEvent<any>;
	} & {
		[evt: string]: CustomEvent<any>;
	},
	{},
	{},
	'isOpen'
>;
type GlassModal = InstanceType<typeof GlassModal>;
export default GlassModal;
