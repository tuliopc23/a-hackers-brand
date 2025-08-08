<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import DataGrid from './DataGrid.svelte'
  const rows = [
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'User' },
  ]
</script>

<Story title="DataGrid">
  <Variant title="Basic">
    <DataGrid {rows} />
  </Variant>
</Story>

