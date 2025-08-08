<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import CommandBlock from './CommandBlock.svelte'
</script>

<Story title="CommandBlock">
  <Variant title="Default">
    <CommandBlock command="npm i @org/ui" />
  </Variant>
</Story>

