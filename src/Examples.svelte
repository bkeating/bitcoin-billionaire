<script>
  import { fly } from 'svelte/transition';

  import ExampleTextInput from './ExampleTextInput.svelte';
  import ExampleIteration from './ExampleIteration.svelte';
  import ExampleGlobalState from './ExampleGlobalState.svelte';
  import ExampleScreenSteps from './ExampleScreenSteps.svelte';

  import Countdown from './Countdown.svelte';
  let done = false;
</script>

<ExampleGlobalState />
<ExampleTextInput />
<ExampleIteration />
<ExampleScreenSteps />

  <div class="p-6 my-6 bg-purple-100 border rounded-lg">
    <h2 class="mb-6 text-2xl">Countdown Component</h2>
    <div class="inner">
      <Countdown countdown={5} on:completed={() => (done = true)} />

      {#if done}
        <h2 in:fly>STOP</h2>
      {/if}
    </div>
  </div>
