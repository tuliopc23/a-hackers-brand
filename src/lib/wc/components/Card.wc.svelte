<svelte:options customElement={{ tag: "ahb-card" }} />

<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    const { variant, interactive } = $props<{
        variant?: string;
        interactive?: boolean;
    }>();
</script>

<Card {variant} {interactive}><slot /></Card>
