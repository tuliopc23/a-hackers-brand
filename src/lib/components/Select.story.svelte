<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import Select from './Select.svelte'

  const options = [
    { value: 'alpha', label: 'Alpha' },
    { value: 'bravo', label: 'Bravo' },
    { value: 'charlie', label: 'Charlie' },
  ]
  let value = 'alpha'
</script>

<Story title="Select">
  <Variant title="Glass">
    <div class="w-80">
      <Select {options} bind:value label="Choose item" />
    </div>
  </Variant>

  <Variant title="Terminal">
    <div class="w-80">
      <Select {options} variant="terminal" placeholder="Pick one" />
    </div>
  </Variant>
</Story>

