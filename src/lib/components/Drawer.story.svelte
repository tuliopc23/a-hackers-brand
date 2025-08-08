<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import Drawer from './Drawer.svelte'
  import Button from './Button.svelte'
  let open=false
</script>

<Story title="Drawer">
  <Variant title="Right">
    <Button on:click={() => (open=true)}>Open Drawer</Button>
    <Drawer bind:open variant="glass">
      <h3 class="text-white font-semibold text-lg mb-2">Drawer Content</h3>
      <p class="text-white/70">Place any content here.</p>
    </Drawer>
  </Variant>
</Story>

