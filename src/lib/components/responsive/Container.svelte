<script lang="ts">
	import { containerVariants, type ContainerVariantProps } from '$lib/utils/responsive';

	interface Props extends ContainerVariantProps {
		as?: keyof HTMLElementTagNameMap;
		class?: string;
	}

	const {
		size = 'lg',
		padding = 'md',
		as = 'div',
		class: className = '',
		children,
		...restProps
	}: Props = $props();

	const containerClasses = $derived(containerVariants({ size, padding, className }));
</script>

<svelte:element 
	this={as} 
	class={containerClasses}
	{...restProps}
>
	{@render children?.()}
</svelte:element>