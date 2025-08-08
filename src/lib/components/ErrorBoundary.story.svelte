<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import ErrorBoundary from './ErrorBoundary.svelte'
  import Button from './Button.svelte'

  let throwError = false
  function Problem() {
    if (throwError) {
      throw new Error('Boom!')
    }
    return <div class="text-white">All good.</div>
  }
</script>

<Story title="ErrorBoundary">
  <Variant title="Glass">
    <div class="space-y-3">
      <Button on:click={() => (throwError = !throwError)}>
        {throwError ? 'Reset' : 'Trigger Error'}
      </Button>
      <ErrorBoundary showDetails>
        <Problem />
      </ErrorBoundary>
    </div>
  </Variant>
</Story>

