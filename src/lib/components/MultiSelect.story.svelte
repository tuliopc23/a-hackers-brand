<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import MultiSelect from './MultiSelect.svelte'
  const options = [
    { value: 'alpha', label: 'Alpha' },
    { value: 'bravo', label: 'Bravo' },
    { value: 'charlie', label: 'Charlie' },
  ]
  let values = ['alpha']
</script>

<Story title="MultiSelect">
  <Variant title="Default">
    <div class="w-96">
      <MultiSelect {options} bind:value={values} />
    </div>
  </Variant>
</Story>

