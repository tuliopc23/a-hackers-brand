<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import Textarea from './Textarea.svelte'
</script>

<Story title="Textarea">
  <Variant title="Default">
    <div style="padding: 16px; max-width: 520px;">
      <Textarea placeholder="Type something..." rows={4} />
    </div>
  </Variant>

  <Variant title="With error">
    <div style="padding: 16px; max-width: 520px;">
      <Textarea placeholder="Type something..." rows={4} error="This field is required" />
    </div>
  </Variant>
</Story>
