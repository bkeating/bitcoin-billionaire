<script>
  import { onMount } from 'svelte';
  import { currentQuestion, currentScreen, totalQuestions } from './store';

  import QuestionScreen from './screens/QuestionScreen.svelte';
  import ResultsScreen from './screens/ResultsScreen.svelte';
  import WelcomeScreen from './screens/WelcomeScreen.svelte';

  import data from '../mockups/data.json';

  onMount(() => {
    currentQuestion.set(data[0]);
    totalQuestions.set(data.length);
  });

  const handleNextQuestion = () => {
    const curr = $currentQuestion.id;
    console.log('curr @@@@@@@@@@', curr);
    currentQuestion.set(data[curr + 1])
  }

  // import Examples from './Examples.svelte';
</script>

<div class="bg-gray-`00 max-w-7xl mx-auto p-12">
  <!-- <Examples /> -->

  {#if $currentScreen === 0}
    <WelcomeScreen />
  {/if}

  {#if $currentScreen === 1}
    {#each data as q}
      <QuestionScreen question={q} handleNextQuestion={handleNextQuestion} />
    {/each}
  {/if}

  {#if $currentScreen === 2}
    <ResultsScreen />
  {/if}
</div>
