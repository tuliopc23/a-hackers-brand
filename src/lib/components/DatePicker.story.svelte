<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import DatePicker from './DatePicker.svelte'
  let value = new Date()
</script>

<Story title="DatePicker">
  <Variant title="Glass">
    <div class="w-72">
      <DatePicker bind:value variant="glass" />
    </div>
  </Variant>
</Story>

