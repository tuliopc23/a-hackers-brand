<svelte:options customElement={{ tag: "ahb-badge" }} />

<script lang="ts">
    import Badge from "$lib/components/Badge.svelte";
    const { variant, tone } = $props<{ variant?: string; tone?: string }>();
</script>

<Badge {variant} {tone}><slot /></Badge>
