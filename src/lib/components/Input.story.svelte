<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import Input from './Input.svelte'
</script>

<Story title="Input">
  <Variant title="Basic">
    <div class="w-80 space-y-3">
      <Input label="Email" placeholder="you@example.com" />
      <Input variant="glass" placeholder="Glass variant" />
      <Input variant="terminal" placeholder="Terminal variant" />
    </div>
  </Variant>

  <Variant title="Error State">
    <div class="w-80">
      <Input label="Username" placeholder="jdoe" error="Username is taken" />
    </div>
  </Variant>
</Story>

