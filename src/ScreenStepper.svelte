<script>
  import { currentScreen } from './store';

  const handleGoToNextScreen = () => {
    if ($currentScreen > 3) {
      currentScreen.set(0);
    } else {
      currentScreen.set($currentScreen + 1);
    }
  }
</script>

<button on:click={handleGoToNextScreen} class="bg-red-700 text-white p-2">
  Go To Next Step ({$currentScreen + 1})
</button>
