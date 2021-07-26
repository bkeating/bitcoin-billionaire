<script>
  import { currentScreen, totalQuestions } from '../store';
</script>

<div class="relative w-screen h-screen">
  <main>
    <img src="/images/welcome.png" alt="" class="mx-auto" />
  </main>
  <div class="splash">
    <h2>
      Total Questions: {$totalQuestions}
    </h2>
    <button on:click={() => currentScreen.set(1)}> START </button>
  </div>
</div>

<style>
  main {
    z-index: 9000;
    @apply flex items-center relative h-screen w-full overflow-hidden;
  }

  .splash {
    background-color: rgba(0, 30, 76, 0.411);
    z-index: 9999;
    @apply absolute bottom-0 left-0 w-full text-center py-3 box-border;
  }
  h2 {
    @apply block text-2xl text-white mb-6 animate-pulse;
  }
  button {
    background-color: #ffb102;
    @apply block text-3xl  mx-auto px-24 py-2 rounded-lg animate-bounce text-white;
  }
</style>
