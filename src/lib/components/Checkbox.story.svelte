<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import Checkbox from './Checkbox/Checkbox.svelte'
  let a=false, b=true
</script>

<Story title="Checkbox">
  <Variant title="States">
    <div class="flex items-center gap-6 text-white">
      <label class="flex items-center gap-2"><Checkbox bind:checked={a}/> Option A</label>
      <label class="flex items-center gap-2"><Checkbox bind:checked={b}/> Option B</label>
    </div>
  </Variant>
</Story>

