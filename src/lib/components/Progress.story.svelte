<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import Progress from './Progress.svelte'
  let value = 45
</script>

<Story title="Progress">
  <Variant title="Linear">
    <div class="space-y-4 w-80">
      <Progress {value} max={100} label="Loading" showPercentage />
      <input type="range" min="0" max="100" bind:value class="w-full" />
    </div>
  </Variant>

  <Variant title="Circular">
    <div class="flex items-center gap-6">
      <Progress type="circular" {value} showPercentage />
      <Progress type="circular" indeterminate />
    </div>
  </Variant>
</Story>

