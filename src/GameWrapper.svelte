<script>
  import { onMount } from 'svelte';
  import { currentQuestion, currentScreen, totalQuestions } from './store';

  import data from '../mockups/data.json';

  let questions;

  onMount(() => {
    questions = data;
    currentQuestion.set(data[0]);
    totalQuestions.set(data.length);
  });

  import QuestionScreen from './screens/QuestionScreen.svelte';
  import ResultsScreen from './screens/ResultsScreen.svelte';
  import WelcomeScreen from './screens/WelcomeScreen.svelte';

  // import Examples from './Examples.svelte';
</script>

<div class="bg-gray-`00 max-w-7xl mx-auto p-12">
  <!-- <Examples /> -->

  {#if $currentScreen === 0}
    <WelcomeScreen />
  {/if}

  {#if $currentScreen === 1}
    {#each questions as q}
        <QuestionScreen  question={q} />
    {/each}
  {/if}

  {#if $currentScreen === 2}
    <ResultsScreen />
  {/if}
</div>
