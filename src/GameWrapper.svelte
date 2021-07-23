<script>
  import { currentScreen } from './store';

  import QuestionScreen from './screens/QuestionScreen.svelte';
  import ResultsScreen from './screens/ResultsScreen.svelte';
  import WelcomeScreen from './screens/WelcomeScreen.svelte';

  import Examples from './Examples.svelte';
</script>

<div class="bg-gray-`00 max-w-7xl mx-auto p-12">
  <!-- <Examples /> -->

  {#if $currentScreen === 0}
    <WelcomeScreen />
  {/if}
  {#if $currentScreen === 1}
    <QuestionScreen />
  {/if}
  {#if $currentScreen === 2}
    <ResultsScreen />
  {/if}
</div>
