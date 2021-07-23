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

    console.log(data);
  });

  const handleNextQuestion = () => {
    currentQuestion.set(data[$currentQuestion.id + 1]);
  };

  // import Examples from './Examples.svelte';
</script>

<!-- <Examples /> -->

{#if $currentScreen === 0}
  <WelcomeScreen />
{/if}

{#if $currentScreen === 1}
  {#each data as q}
    <QuestionScreen question={q} {handleNextQuestion} />
  {/each}
{/if}

{#if $currentScreen === 2}
  <ResultsScreen />
{/if}
