<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import Button from './Button.svelte'
</script>

<Story title="Button">
  <Variant title="Default">
    <Button>Click me</Button>
  </Variant>

  <Variant title="Variants">
    <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="glass">Glass</Button>
    </div>
  </Variant>

  <Variant title="Sizes">
    <div style="display: flex; gap: 8px; align-items: center;">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  </Variant>
</Story>

