<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import DataTable from './DataTable.svelte'
  const columns = ['Name','Role']
  const data = [ ['Alice','Admin'], ['Bob','User'] ]
</script>

<Story title="DataTable">
  <Variant title="Basic">
    <DataTable {columns} {data} />
  </Variant>
</Story>

