<script lang="ts">
	import { flexVariants, type FlexVariantProps } from '$lib/utils/responsive';

	interface Props extends FlexVariantProps {
		as?: keyof HTMLElementTagNameMap;
		class?: string;
	}

	const {
		direction = 'row',
		align = 'center',
		justify = 'start',
		wrap = false,
		gap = 'sm',
		as = 'div',
		class: className = '',
		children,
		...restProps
	}: Props = $props();

	const flexClasses = $derived(flexVariants({ direction, align, justify, wrap, gap, className }));
</script>

<svelte:element 
	this={as} 
	class={flexClasses}
	{...restProps}
>
	{@render children?.()}
</svelte:element>