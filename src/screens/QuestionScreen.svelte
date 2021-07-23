<script>
  // The question payload comes in by way of a component prop.
  export let question;
  export let handleNextQuestion;

  import {
    currentScreen,
    totalScore,
    lifeline5050Enabled,
    lifelinePhoneEnabled,
    lifelineAudienceEnabled,
    currentQuestion,
  } from '../store';

  const handleShowResults = () => {
    currentScreen.set(2);
  };

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
  $: sat2 = $totalScore > 100 ? 'is-past' : '';
  $: sat3 = $totalScore > 1000 ? 'is-past' : '';
  $: sat4 = $totalScore > 10000 ? 'is-past' : '';
  $: sat5 = $totalScore > 100000 ? 'is-past' : '';
  $: sat6 = $totalScore > 1000000 ? 'is-past' : '';
  $: sat7 = $totalScore > 10000000 ? 'is-past' : '';
  $: sat8 = $totalScore > 100000000 ? 'is-past' : '';
  $: sat9 = $totalScore > 1000000000 ? 'is-past' : '';
  $: sat10 = $totalScore > 10000000000 ? 'is-past' : '';
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
    <div class="content">
      <div class="question">
        {question.id}: {question.question}
      </div>
      <ul class="answers">
        <li class="answer">
          <button>One</button>
        </li>
        <li class="answer">
          <button disabled="disabled">Two</button>
        </li>
        <li class="answer">
          <button class="is-error">Three</button>
        </li>
        <li class="answer">
          <button class="is-success" on:click={() => handleNextQuestion(question.id)}>Four</button>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="score">
        <div>
          <input type="range" bind:value={$totalScore} max="10000000000" class="block w-full"  />
          <div class="block">{$totalScore} sats</div>
        </div>
      </div>

      <div class="lifelines">
        <button
          on:click={() => handleUseLifeLine('phone')}
          disabled={!$lifelinePhoneEnabled}
          class="btn-lifeline {!$lifelinePhoneEnabled && 'opacity-50 cursor'}"
        >
          <img src="./images/phone-a-friend.png" />
        </button>
        <button
          on:click={() => handleUseLifeLine('5050')}
          disabled={!$lifeline5050Enabled}
          class="btn-lifeline {!$lifeline5050Enabled && 'opacity-50 cursor'}"
        >
          <img src="./images/50-50.png" />
        </button>
        <button
          on:click={() => handleUseLifeLine('audience')}
          disabled={!$lifelineAudienceEnabled}
          class="btn-lifeline {$lifelineAudienceEnabled ? 'opacity-100' : 'opacity-50 cursor'}"
        >
          <img src="./images/audience.webp" />
        </button>
      </div>

      <div class="actions is-visible">
        <button>Next</button>
      </div>
    </div>
  </div>

  <!--


  <div class="screen">
    <div class="content">
      <div class="question">{question.id}: {question.question}</div>
      <ul class="answers">
        <li class="answer">
          <button>One</button>
        </li>
        <li class="answer">
          <button class="is-disabled" disabled>Two</button>
        </li>
        <li class="answer">
          <button class="is-error">Three</button>
        </li>
        <li class="answer">
          <button class="is-success">Four</button>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="score">
        {$totalScore} sats
      </div>

      <div class="lifelines is-visible">
        <button
          on:click={() => handleUseLifeLine('phone')}
          disabled={!$lifelinePhoneEnabled}
          class="btn-lifeline {!$lifelinePhoneEnabled && 'opacity-50 cursor'}"
        >
          <img src="./images/phone-a-friend.png" />
        </button>
        <button
          on:click={() => handleUseLifeLine('5050')}
          disabled={!$lifeline5050Enabled}
          class="btn-lifeline {!$lifeline5050Enabled && 'opacity-50 cursor'}"
        >
          <img src="./images/50-50.png" />
        </button>
        <button
          on:click={() => handleUseLifeLine('audience')}
          disabled={!$lifelineAudienceEnabled}
          class="btn-lifeline {$lifelineAudienceEnabled ? 'opacity-100' : 'opacity-50 cursor'}"
        >
          <img src="./images/audience.webp" />
        </button>
      </div>


      <div class="actions">
        <button>Next</button>
      </div>
    </div>
  </div> -->
{/if}

<style>
  .btn-lifeline {
    @apply border-none;
  }
  .btn-lifeline:active {
    @apply bg-transparent;
  }
</style>
