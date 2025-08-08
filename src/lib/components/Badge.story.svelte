<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import Badge from './Badge.svelte'
</script>

<Story title="Badge">
  <Variant title="Variants">
    <div class="flex gap-2 items-center flex-wrap">
      <Badge>Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  </Variant>

  <Variant title="Sizes">
    <div class="flex gap-2 items-center">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  </Variant>
</Story>

