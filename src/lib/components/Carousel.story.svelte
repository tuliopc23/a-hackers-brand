<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import Carousel from './Carousel.svelte'

  const items = [
    { id: '1', title: 'Slide 1', description: 'First slide' },
    { id: '2', title: 'Slide 2', description: 'Second slide' },
    { id: '3', title: 'Slide 3', description: 'Third slide' },
  ]
</script>

<Story title="Carousel">
  <Variant title="Slides">
    <div class="w-[640px]">
      <Carousel {items} showDots showControls />
    </div>
  </Variant>
</Story>

