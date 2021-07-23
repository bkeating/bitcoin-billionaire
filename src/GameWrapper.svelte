<script>
  import { onMount } from 'svelte';
  import { currentQuestion, currentScreen, totalQuestions } from './store';

  import QuestionScreen from './screens/QuestionScreen.svelte';
  import ResultsScreen from './screens/ResultsScreen.svelte';
  import WelcomeScreen from './screens/WelcomeScreen.svelte';

  import questionList from '../mockups/data.json';

  onMount(() => {
    currentQuestion.set(questionList[0]);
    totalQuestions.set(questionList.length);
  });

  const handleNextQuestion = (id) => {
    if (id >= $totalQuestions) {
      // Go to results screen
      currentQuestion.set(questionList[0]);
      currentScreen.set(2);
    } else {
      currentQuestion.set(questionList[id]);
    }
  };

  // import Examples from './Examples.svelte';
</script>

<!-- <Examples /> -->

{#if $currentScreen === 0}
  <WelcomeScreen />
{/if}

{#if $currentScreen === 1}
  {#each questionList as q}
    <QuestionScreen question={q} {handleNextQuestion} />
  {/each}
{/if}

{#if $currentScreen === 2}
  <ResultsScreen />
{/if}
