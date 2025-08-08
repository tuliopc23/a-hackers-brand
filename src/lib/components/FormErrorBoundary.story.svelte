<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import FormErrorBoundary from './FormErrorBoundary.svelte'
  import Button from './Button.svelte'
  let error = ''
</script>

<Story title="FormErrorBoundary">
  <Variant title="Default">
    <FormErrorBoundary error={error}>
      {#snippet children()}
        <div class="flex gap-2">
          <Button on:click={() => (error = 'Something went wrong')}>Trigger</Button>
          <Button variant="outline" on:click={() => (error = '')}>Clear</Button>
        </div>
      {/snippet}
    </FormErrorBoundary>
  </Variant>
</Story>

