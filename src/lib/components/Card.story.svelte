<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import Card from './Card.svelte'
  import Button from './Button.svelte'
</script>

<Story title="Card">
  <Variant title="Default">
    <Card>
      <h3 class="text-white font-semibold mb-2">Card Title</h3>
      <p class="text-white/70">Simple content in a default card.</p>
    </Card>
  </Variant>

  <Variant title="Glass + Interactive">
    <Card variant="glass" interactive blur="lg">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-white font-semibold">Glass Card</h3>
          <p class="text-white/70">Interactive hover and blur.</p>
        </div>
        <Button variant="outline" size="sm">Action</Button>
      </div>
    </Card>
  </Variant>

  <Variant title="Terminal">
    <Card variant="terminal">
      <code class="text-terminal-green">echo "Hello, world"</code>
    </Card>
  </Variant>

  <Variant title="Bubble Tea">
    <Card variant="bubbleTea" breathing>
      <h3 class="font-mono text-white">Bubble Tea Aesthetic</h3>
    </Card>
  </Variant>
</Story>

