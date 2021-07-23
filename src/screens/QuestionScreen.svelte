<script>
  export let question;
  import {
    currentScreen,
    totalScore,
    lifeline5050Enabled,
    lifelinePhoneEnabled,
    lifelineAudienceEnabled,
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
</script>

<link href="/styles.css" rel="stylesheet" type="text/css" />
<div class="screen">
  <div class="content">
    <div class="question">{question.question}</div>
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
    <div class="score" on:click={handleShowResults}>
      {$totalScore} sats
      <input type="range" bind:value={$totalScore} />
    </div>
    <!-- if nothing answered yet -->
    <div class="lifelines is-visible">
      <button
        on:click={() => handleUseLifeLine('phone')}
        disabled={!$lifelinePhoneEnabled}
        class={!$lifelinePhoneEnabled && 'opacity-50 cursor'}
      >
        <img src="./images/phone-a-friend.png" />
      </button>
      <button
        on:click={() => handleUseLifeLine('5050')}
        disabled={!$lifeline5050Enabled}
        class={!$lifeline5050Enabled && 'opacity-50 cursor'}
      >
        <img src="./images/50-50.png" />
      </button>
      <button
        on:click={() => handleUseLifeLine('audience')}
        disabled={!$lifelineAudienceEnabled}
        class={$lifelineAudienceEnabled ? 'opacity-100' : 'opacity-50 cursor'}
      >
        <img src="./images/audience.webp" />
      </button>
    </div>
    <!-- Once an answer is submitted -->
    <div class="actions">
      <button>Next</button>
    </div>
  </div>
</div>

<style>
  button:active {
    background: none;
  }
</style>
