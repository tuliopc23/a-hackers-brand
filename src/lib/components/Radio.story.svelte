<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import Radio from './Radio.svelte'
  let choice = 'b'
</script>

<Story title="Radio">
  <Variant title="Default">
    <div class="flex items-center gap-6 text-white">
      <label class="flex items-center gap-2"><Radio name="r" value="a" bind:group={choice}/> A</label>
      <label class="flex items-center gap-2"><Radio name="r" value="b" bind:group={choice}/> B</label>
    </div>
  </Variant>
</Story>

