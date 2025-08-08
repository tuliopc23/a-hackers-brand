<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import GlowText from './GlowText.svelte'
</script>

<Story title="GlowText">
  <Variant title="Examples">
    <div class="space-y-4">
      <GlowText>Glowing Text</GlowText>
      <GlowText intensity={1.5}>Stronger Glow</GlowText>
    </div>
  </Variant>
</Story>

