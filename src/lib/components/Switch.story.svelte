<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import Switch from './Switch.svelte'
  let checkedA = false
  let checkedB = true
</script>

<Story title="Switch">
  <Variant title="Basic">
    <div class="flex items-center gap-4">
      <Switch bind:checked={checkedA} label="Enable feature" />
      <span class="text-white/80 text-sm">{checkedA ? 'On' : 'Off'}</span>
    </div>
  </Variant>

  <Variant title="Variants + Sizes">
    <div class="flex flex-col gap-3">
      <div class="flex items-center gap-3">
        <Switch size="sm" bind:checked={checkedB} />
        <Switch size="md" bind:checked={checkedB} />
        <Switch size="lg" bind:checked={checkedB} />
      </div>
      <div class="flex items-center gap-3">
        <Switch variant="default" />
        <Switch variant="glass" />
        <Switch variant="terminal" />
        <Switch variant="liquid" />
      </div>
    </div>
  </Variant>
</Story>

