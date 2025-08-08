<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import Tooltip from './Tooltip.svelte'
  import Button from './Button.svelte'
</script>

<Story title="Tooltip">
  <Variant title="Positions">
    <div class="flex gap-6 items-center">
      <Tooltip text="Top tooltip" position="top"><Button>Top</Button></Tooltip>
      <Tooltip text="Right tooltip" position="right"><Button>Right</Button></Tooltip>
      <Tooltip text="Bottom tooltip" position="bottom"><Button>Bottom</Button></Tooltip>
      <Tooltip text="Left tooltip" position="left"><Button>Left</Button></Tooltip>
    </div>
  </Variant>

  <Variant title="Variants">
    <div class="flex gap-6 items-center">
      <Tooltip text="Glass style" variant="glass"><Button>Glass</Button></Tooltip>
      <Tooltip text="Terminal style" variant="terminal"><Button>Terminal</Button></Tooltip>
      <Tooltip text="Liquid style" variant="liquid"><Button>Liquid</Button></Tooltip>
      <Tooltip text="Dark style" variant="dark"><Button>Dark</Button></Tooltip>
    </div>
  </Variant>
</Story>

