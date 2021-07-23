<script>
  import { currentScreen, totalQuestions } from '../store';
</script>

<link href="/styles.css" rel="stylesheet" type="text/css" />
<div class="screen" style="background-image: url('/images/Welcome.png');">
  <div class="center">
    <h2 class="block text-4xl text-white">Total Questions: {$totalQuestions}</h2>
    <button class="start-button " on:click={() => currentScreen.set(1)}>START</button>
</div>
</div>
