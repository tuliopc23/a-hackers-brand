<script lang="ts">
	import { gridVariants, type GridVariantProps } from '../../utils/responsive';

	interface Props extends GridVariantProps {
		as?: keyof HTMLElementTagNameMap;
		class?: string;
	}

	const {
		cols = 'auto',
		gap = 'md',
		responsive = false,
		as = 'div',
		class: className = '',
		children,
		...restProps
	}: Props = $props();

	const gridClasses = $derived(gridVariants({ cols, gap, responsive, className }));
</script>

<svelte:element 
	this={as} 
	class={gridClasses}
	{...restProps}
>
	{@render children?.()}
</svelte:element>