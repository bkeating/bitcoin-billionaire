<script>
  import { currentScreen } from '../store';
</script>

<link href="/styles.css" rel="stylesheet" type="text/css" />
<div class="screen" style="background-image: url('/images/Welcome.png');">
  <div class="center">
  <button class="start-button center" on:click={() => currentScreen.set(1)}>START</button>
</div>
</div>
