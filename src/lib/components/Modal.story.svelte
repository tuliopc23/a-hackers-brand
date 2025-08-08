<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import Modal from './Modal.svelte'
  import Button from './Button.svelte'
  let open = false
  let size = 'md'
</script>

<Story title="Modal">
  <Variant title="Open/Close">
    <div class="space-x-2">
      <Button on:click={() => (open = true)}>Open Modal</Button>
      <select class="bg-black/40 border border-white/10 rounded px-2 py-1" bind:value={size}>
        <option value="sm">sm</option>
        <option value="md">md</option>
        <option value="lg">lg</option>
        <option value="xl">xl</option>
        <option value="full">full</option>
      </select>
    </div>
    <Modal bind:open {size} variant="glass" onClose={() => (open = false)}>
      <h3 class="text-white font-semibold text-lg mb-2">Modal Title</h3>
      <p class="text-white/70 mb-4">This is modal content with actions.</p>
      <div class="flex justify-end gap-2">
        <Button variant="outline" on:click={() => (open = false)}>Cancel</Button>
        <Button on:click={() => (open = false)}>Confirm</Button>
      </div>
    </Modal>
  </Variant>

  <Variant title="Variants">
    <div class="flex gap-2 flex-wrap">
      <Button on:click={() => (open = 'glass')}>Glass</Button>
      <Button on:click={() => (open = 'terminal')}>Terminal</Button>
      <Button on:click={() => (open = 'liquid')}>Liquid</Button>
      <Button on:click={() => (open = 'bubbleTea')}>Bubble Tea</Button>
    </div>
    {#if open && typeof open === 'string'}
      <Modal open variant={open} onClose={() => (open = false)}>
        <h3 class="text-white font-semibold mb-2">{open} Modal</h3>
        <p class="text-white/70">Close with ESC or outside click.</p>
      </Modal>
    {/if}
  </Variant>
</Story>

