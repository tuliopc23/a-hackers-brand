<script lang="ts">
    const p = $props<{
        component: any;
        props?: Record<string, any>;
        slotHTML?: string;
    }>();
</script>

{#if p.component}
    <svelte:component this={p.component} {...p.props || {}}>
        {@html p.slotHTML || ""}
    </svelte:component>
{/if}
