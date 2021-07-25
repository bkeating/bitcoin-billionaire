<script>
  // The question payload and it's handler come in by way of a component prop.
  export let question;
  export let handleNextQuestion;

  // We keep track of the current question verdict ephemirally in local state.
  let verdict;

  import {
    currentScreen,
    totalScore,
    lifeline5050Enabled,
    lifelinePhoneEnabled,
    lifelineAudienceEnabled,
    currentQuestion,
  } from '../store';

  const handleShowResults = () => currentScreen.set(2);

  const handleUseLifeLine = (slug) => {
    if (slug === '5050') {
      lifeline5050Enabled.set(false);
    }
    if (slug === 'audience') {
      lifelineAudienceEnabled.set(false);
    }
    if (slug === 'phone') {
      lifelinePhoneEnabled.set(false);
    }
  };

  // is-active
  $: sat1 = $totalScore > 1 ? 'is-past' : '';
  $: sat2 = $totalScore > 10 ? 'is-past' : '';
  $: sat3 = $totalScore > 100 ? 'is-past' : '';
  $: sat4 = $totalScore > 1000 ? 'is-past' : '';
  $: sat5 = $totalScore > 10000 ? 'is-past' : '';
  $: sat6 = $totalScore > 100000 ? 'is-past' : '';
  $: sat7 = $totalScore > 1000000 ? 'is-past' : '';
  $: sat8 = $totalScore > 10000000 ? 'is-past' : '';
  $: sat9 = $totalScore > 100000000 ? 'is-past' : '';
  $: sat10 = $totalScore > 100000000 ? 'is-past' : '';

  let answers = question.incorrect_answers;
  answers.push(question.correct_answer);

  let shuffledAnswers = answers.sort(() => 0.5 - Math.random());

  // let buttonElList = document.querySelectorAll("input[type=button]");

  const handleSelectAnswer = (e, answer) => {
    e.preventDefault();
    if (answer === question.correct_answer) {
      console.log('CORRECT!');
      totalScore.update(n => n + question.points);
      verdict = 'correct';
    } else {
      console.log('incorrect');
      verdict = 'incorrect';
    }
  };
</script>

<link href="/styles.css" rel="stylesheet" type="text/css" />

{#if $currentQuestion.id === question.id}
  <div class="screen">
    <ul class="progress">
      <li class="{sat10} transition-all">10 BTC</li>
      <li class="{sat9} transition-all">1 BTC</li>
      <li class="{sat8} transition-all">10,000,000 sats</li>
      <li class="{sat7} transition-all">1,000,000 sats</li>
      <li class="{sat6} transition-all">100,000 sats</li>
      <li class="{sat5} transition-all">10,000 sats</li>
      <li class="{sat4} transition-all">1,000 sats</li>
      <li class="{sat3} transition-all">100 sats</li>
      <li class="{sat2} transition-all">10 sats</li>
      <li class="{sat1} transition-all">1 sat</li>
    </ul>

    {#if verdict === 'correct'}
      <div class="content correct-content">
        CORRECT! <br /> {question.points} sats for youuuu.
        <div class="mt-12 actions is-visible">
          <button class="px-12 py-2 bg-blue-500" on:click={() => handleNextQuestion(question.id)}>Next</button>
        </div>
      </div>
    {:else if verdict === 'incorrect'}
      <div class="content incorrect-content">
        D'oh. Sorry, but you just missed out on {question.points} sats.
        <p class="mt-10 text-base text-white">The correct answer was "{question.correct_answer}"</p>
        <div class="mt-12 actions is-visible">
          <button class="px-12 py-2 bg-red-900" on:click={() => handleNextQuestion(question.id)}>Next</button>
        </div>
      </div>
    {:else}
      <div class="content">
        <div class="question">
          {question.id}: {question.question}
          <p class="text-sm">{question.points} sats</p>
        </div>
        <ul class="answers">
          {#each shuffledAnswers as answer}
            <li class="answer">
              <button on:click={(e) => handleSelectAnswer(e, answer)}>{answer}</button>
            </li>
          {/each}
        </ul>
      </div>
      <div class="footer">
        <div class="score">
          <div>
            <input type="range" bind:value={$totalScore} max="10000000000" class="block w-full" />
            <div class="block">{$totalScore} sats</div>
          </div>
        </div>

        <div class="lifelines is-visible">
          <button
            on:click={() => lifelinePhoneEnabled.set(false)}
            disabled={!$lifelinePhoneEnabled}
            class="btn-lifeline {!$lifelinePhoneEnabled && 'opacity-50 cursor'}"
          >
            <img src="./images/phone-a-friend.png" />
          </button>
          <button
            on:click={() => lifeline5050Enabled.set(false)}
            disabled={!$lifeline5050Enabled}
            class="btn-lifeline {!$lifeline5050Enabled && 'opacity-50 cursor'}"
          >
            <img src="./images/50-50.png" />
          </button>
          <button
            on:click={() => lifelineAudienceEnabled.set(false)}
            disabled={!$lifelineAudienceEnabled}
            class="btn-lifeline {$lifelineAudienceEnabled ? 'opacity-100' : 'opacity-50 cursor'}"
          >
            <img src="./images/audience.webp" />
          </button>
        </div>
      </div>
    {/if}
  </div>
{/if}

<style>
  .btn-lifeline {
    @apply border-none;
  }
  .btn-lifeline:active {
    @apply bg-transparent;
  }
  .correct-content {
    @apply text-4xl text-center text-green-500;
  }
  .incorrect-content {
    @apply text-4xl text-center text-red-500;
  }
</style>
