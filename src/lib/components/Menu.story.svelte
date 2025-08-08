<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import Menu from './Menu.svelte'
</script>

<Story title="Menu">
  <Variant title="Default">
    <Menu items={[{label:'Home'},{label:'Docs'},{label:'About'}]} />
  </Variant>
</Story>

