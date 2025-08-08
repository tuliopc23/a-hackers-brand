<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import Navbar from './Navbar.svelte'
</script>

<Story title="Navbar">
  <Variant title="Default">
    <Navbar title="A Hacker's Brand" links={[{label:'Home',href:'#'},{label:'Docs',href:'#'}]} />
  </Variant>
</Story>

