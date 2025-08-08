<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import ColorSwatch from './ColorSwatch.svelte'
</script>

<Story title="ColorSwatch">
  <Variant title="Examples">
    <div class="grid grid-cols-4 gap-4">
      <ColorSwatch color="#00ffaa" label="Terminal Green" />
      <ColorSwatch color="#00e6ff" label="Cyan" />
      <ColorSwatch color="#ff6b9d" label="Bubble Tea Pink" />
      <ColorSwatch color="#8b5cf6" label="Purple" />
    </div>
  </Variant>
</Story>

