<svelte:options customElement={{ tag: "ahb-theme-toggle" }} />

<script lang="ts">
    import { theme } from "$lib/stores/theme";
    const { label } = $props<{ label?: string }>();
    function toggle() {
        theme.toggle();
    }
</script>

<button part="button" on:click={toggle}
    ><slot>{label ?? "Toggle Theme"}</slot></button
>
