<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import MetricsCard from './MetricsCard.svelte'
</script>

<Story title="MetricsCard">
  <Variant title="Default">
    <MetricsCard title="Sessions" value="1,234" delta="+12%" />
  </Variant>
</Story>

