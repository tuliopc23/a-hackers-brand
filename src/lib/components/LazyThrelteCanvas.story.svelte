<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import LazyThrelteCanvas from './LazyThrelteCanvas.svelte'
  let enable3D=false
</script>

<Story title="LazyThrelteCanvas">
  <Variant title="Opt-in 3D">
    <div class="space-y-3">
      <label class="text-white flex items-center gap-2">
        <input type="checkbox" bind:checked={enable3D} /> Enable 3D
      </label>
      <div class="h-64"><LazyThrelteCanvas {enable3D} scene="terminal" /></div>
    </div>
  </Variant>
</Story>

