<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import Alert from './Alert.svelte'
</script>

<Story title="Alert">
  <Variant title="Info">
    <Alert variant="info" title="Heads up" description="This is an informational alert." closable />
  </Variant>

  <Variant title="Success / Error / Warning">
    <div class="space-y-3">
      <Alert variant="success" title="Saved" description="Your changes were saved." closable />
      <Alert variant="error" title="Failed" description="Something went wrong." closable />
      <Alert variant="warning" title="Caution" description="Check your inputs." closable />
    </div>
  </Variant>

  <Variant title="Terminal Styled">
    <Alert variant="terminal" title="System" description="Running security scan..." closable />
  </Variant>
</Story>

