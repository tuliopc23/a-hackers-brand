<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import Breadcrumb from './Breadcrumb.svelte'

  const items = [
    { id: 'docs', label: 'Docs', href: '#' },
    { id: 'components', label: 'Components', href: '#' },
    { id: 'button', label: 'Button' },
  ]
</script>

<Story title="Breadcrumb">
  <Variant title="Default">
    <Breadcrumb {items} />
  </Variant>

  <Variant title="Glass + Slash">
    <Breadcrumb {items} variant="glass" separator="slash" />
  </Variant>
</Story>

