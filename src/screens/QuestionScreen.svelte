<script>
  // The question payload and it's handler come in by way of a component prop.
  export let question;
  export let handleNextQuestion;

  // We keep track of the current question verdict ephemirally in local state.
  let verdict;

  import {
    totalScore,
    lifeline5050Enabled,
    lifelinePhoneEnabled,
    lifelineAudienceEnabled,
    currentQuestion,
    currentScreen,
  } from '../store';

  $: lifelineOpts = [
    { label: 'Phone a Friend', slug: 'phone', imageUrl: '/images/phone-a-friend.png', isEnabled: $lifelinePhoneEnabled },
    { label: '50/50', slug: '50-50', imageUrl: '/images/50-50.png', isEnabled: $lifeline5050Enabled },
    { label: 'Ask the Audience', slug: 'audience', imageUrl: '/images/audience.png', isEnabled: $lifelineAudienceEnabled },
  ];

  const handleUseLineLine = (slug) => {
    if (slug === 'phone') { lifelinePhoneEnabled.set(false)};
    if (slug === '50-50') { lifeline5050Enabled.set(false)};
    if (slug === 'audience') { lifelineAudienceEnabled.set(false)};
  }

  const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // is-active
  $: sat1 = $totalScore >= 1 ? 'is-past' : '';
  $: sat2 = $totalScore >= 10 ? 'is-past' : '';
  $: sat3 = $totalScore >= 100 ? 'is-past' : '';
  $: sat4 = $totalScore >= 1000 ? 'is-past' : '';
  $: sat5 = $totalScore >= 10000 ? 'is-past' : '';
  $: sat6 = $totalScore >= 100000 ? 'is-past' : '';
  $: sat7 = $totalScore >= 1000000 ? 'is-past' : '';
  $: sat8 = $totalScore >= 10000000 ? 'is-past' : '';
  $: sat9 = $totalScore >= 100000000 ? 'is-past' : '';
  $: sat10 = $totalScore >= 100000000 ? 'is-past' : '';

  let answers = question.incorrect_answers;
  answers.push(question.correct_answer);

  let shuffledAnswers = answers.sort(() => 0.5 - Math.random());

  const handleSelectAnswer = (e, answer) => {
    e.preventDefault();
    if (answer === question.correct_answer) {
      totalScore.update(n => n + question.points);
      verdict = 'correct';
    } else {
      verdict = 'incorrect';
    }
  };
</script>

<link href="/styles.css" rel="stylesheet" type="text/css" />

{#if $currentQuestion.id === question.id}
  <div class="">
    <img src="/images/welcome.png" alt="" class="w-40 mt-6 ml-6" on:click={() => currentScreen.set(0)} />
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
        <span class="text-white shake text-7xl">CORRECT!</span> <br /> {question.points} sats for youuuu.
        <div class="mt-12 actions is-visible">
          <button class="px-12 py-2 bg-blue-900" on:click={() => handleNextQuestion(question.id)}>Next</button>
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
            <input type="range" bind:value={$totalScore} max="10000" class="block" style="width: 300px;" />
            <div class="block">{numberWithCommas($totalScore)} sats</div>
          </div>
        </div>

        <div class="lifelines is-visible">
          {#each lifelineOpts as {label, slug, imageUrl, isEnabled}}
            <button
              on:click={() => handleUseLineLine(slug)}
              class="btn-lifeline {!isEnabled ? 'opacity-50' : 'opacity-100'}"
            >
              <img src={imageUrl} alt={label} />
            </button>
          {/each}
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
  @-webkit-keyframes spaceboots {
	0% { -webkit-transform: translate(2px, 1px) rotate(0deg); }
	10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); }
	20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); }
	30% { -webkit-transform: translate(0px, 2px) rotate(0deg); }
	40% { -webkit-transform: translate(1px, -1px) rotate(1deg); }
	50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); }
	60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); }
	70% { -webkit-transform: translate(2px, 1px) rotate(-1deg); }
	80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); }
	90% { -webkit-transform: translate(2px, 2px) rotate(0deg); }
	100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); }
}
.shake {
	-webkit-animation-name: spaceboots;
	-webkit-animation-duration: 0.1s;
	-webkit-transform-origin:50% 50%;
	-webkit-animation-iteration-count: infinite;
	-webkit-animation-timing-function: linear;
}
</style>
