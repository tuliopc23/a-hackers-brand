<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import List from './List.svelte'
</script>

<Story title="List">
  <Variant title="Default">
    <List items={[ 'Alpha','Bravo','Charlie' ]} />
  </Variant>
</Story>

