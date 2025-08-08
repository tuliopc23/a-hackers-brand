<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import Pagination from './Pagination.svelte'
  let page = 2
</script>

<Story title="Pagination">
  <Variant title="Default">
    <Pagination bind:page total={10} />
  </Variant>
</Story>

