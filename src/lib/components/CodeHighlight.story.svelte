<script>
  import { Story, Variant } from '@histoire/plugin-svelte'
  import CodeHighlight from './CodeHighlight.svelte'
  const code = `function greet(name){\n  return 'Hello ' + name;\n}`
</script>

<Story title="CodeHighlight">
  <Variant title="JavaScript">
    <CodeHighlight language="js">{code}</CodeHighlight>
  </Variant>
</Story>

