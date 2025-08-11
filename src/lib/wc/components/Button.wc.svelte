<svelte:options customElement={{ tag: "ahb-button" }} />

<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    const { variant, size, disabled } = $props<{
        variant?: string;
        size?: string;
        disabled?: boolean;
    }>();
</script>

<Button {variant} {size} {disabled}><slot /></Button>
