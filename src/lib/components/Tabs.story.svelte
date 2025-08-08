<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import Tabs from './Tabs.svelte'

  const tabs = [
    { id: 'one', label: 'First' },
    { id: 'two', label: 'Second' },
    { id: 'three', label: 'Disabled', disabled: true },
  ]
</script>

<Story title="Tabs">
  <Variant title="Glass">
    <Tabs {tabs} variant="glass">
      {#snippet children(activeTab)}
        <div class="text-white/80">Active tab is: <b>{activeTab}</b></div>
      {/snippet}
    </Tabs>
  </Variant>

  <Variant title="Terminal">
    <Tabs {tabs} variant="terminal">
      {#snippet children(activeTab)}
        <div class="text-terminal-green font-mono">Panel for: {activeTab}</div>
      {/snippet}
    </Tabs>
  </Variant>
</Story>
