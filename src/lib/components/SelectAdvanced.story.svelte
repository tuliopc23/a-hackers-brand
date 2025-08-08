<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import SelectAdvanced from './SelectAdvanced.svelte'
  const options = [
    { value: 'alpha', label: 'Alpha' },
    { value: 'bravo', label: 'Bravo' },
    { value: 'charlie', label: 'Charlie' },
  ]
  let value = 'alpha'
</script>

<Story title="SelectAdvanced">
  <Variant title="Default">
    <div class="w-96">
      <SelectAdvanced {options} bind:value />
    </div>
  </Variant>
</Story>

