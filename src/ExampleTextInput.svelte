<script>
  import { exampleTextInput } from './store';

  // 'exported' variables appear as 'props' to Svelte components.
  export let foo;

  // Local (component) state is as simple as using a basic operator. (no useState!)
  let value = foo;

  // '$:' is valid js. it means 're-run this everytime any of my variables change'.
  $: console.log(value);
</script>

<div class="bg-yellow-200 border rounded-lg p-6">
  <h2 class="text-2xl">ExampleTextInput.svelte</h2>
  <input type="text" bind:value={$exampleTextInput} />
</div>
