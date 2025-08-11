<svelte:options customElement={{ tag: "ahb-modal" }} />

<script lang="ts">
    import Modal from "$lib/components/Modal.svelte";
    const { open, title } = $props<{ open?: boolean; title?: string }>();
</script>

<Modal {open} {title}><slot /></Modal>
