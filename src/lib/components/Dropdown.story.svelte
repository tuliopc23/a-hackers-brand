<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import Dropdown from './Dropdown.svelte'
  const items = [
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
    { divider: true },
    { label: 'Logout', value: 'logout' },
  ]
</script>

<Story title="Dropdown">
  <Variant title="Glass">
    <Dropdown {items} trigger="Open Menu" />
  </Variant>
</Story>

