<script>
  import { currentScreen, exampleTextInput } from './store';
</script>

<div class="bg-purple-100 border rounded-lg p-6 my-6">
  <h2 class="text-2xl mb-6">ExampleGlobalState.svelte</h2>
  <ul>
    <li>currentScreen: {$currentScreen}</li>
    <li>example text input: {$exampleTextInput}</li>
  </ul>
</div>
