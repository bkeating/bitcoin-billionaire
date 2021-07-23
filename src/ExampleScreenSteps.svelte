<script>
  import { fade, fly } from 'svelte/transition';

  import { currentScreen } from './store';

  import ScreenStepper from './ScreenStepper.svelte';

  const screens = [
    { label: 0, bgColor: 'red'},
    { label: 1, bgColor: 'blue'},
    { label: 2, bgColor: 'yellow'},
    { label: 3, bgColor: 'green'},
    { label: 4, bgColor: 'orange'},
  ];
</script>

<div class="bg-red-100 border rounded-lg p-6 my-6">
  <h2 class="text-2xl mb-6">ExampleScreenSteps.svelte</h2>
  <ScreenStepper />
  <div class="relative overflow-hidden h-64 w-64">
    {#each screens as { label, bgColor }}
      {#if $currentScreen === label}
        <div
          class="absolute bottom-0 right-0 w-64 h-64"
          style="background-color: {bgColor};"
          in:fly="{{ x: 200, duration: 300 }}"
          out:fade
        >
          SCREEN {label}
        </div>
      {/if}
    {/each}
  </div>
</div>
