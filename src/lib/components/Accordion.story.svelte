<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import Accordion from './Accordion.svelte'

  const items = [
    { id: 'one', title: 'Section One' },
    { id: 'two', title: 'Section Two' },
    { id: 'three', title: 'Disabled', disabled: true },
  ]
</script>

<Story title="Accordion">
  <Variant title="Glass">
    <Accordion {items} variant="glass">
      {#snippet children(item)}
        <div class="text-white/80">Content for {item.title}</div>
      {/snippet}
    </Accordion>
  </Variant>

  <Variant title="Multiple Open">
    <Accordion {items} multiple defaultOpen={["one", "two"]} />
  </Variant>
</Story>

