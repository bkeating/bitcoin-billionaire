<script>
	import GameWrapper from './GameWrapper.svelte';
</script>

<div class="clockwise-bg" />
<div class="opacity-50 counter-clockwise-bg" />

<GameWrapper />

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    background: #001f49;
    @apply m-0 p-0 w-screen h-screen overflow-hidden
  }

  .clockwise-bg, .counter-clockwise-bg {
    z-index: -1;
    @apply absolute w-full h-screen;
  }
  .clockwise-bg:before, .counter-clockwise-bg:before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    z-index: -1;
    background-image: url(/images/main_background.jpg);
    background-position: top center;
    @apply bg-cover bg-no-repeat;
  }
  .clockwise-bg:before {
    animation: rotation 120s infinite linear;
  }
  .counter-clockwise-bg:before {
    animation: counter-clockwise 120s infinite linear;
  }

  @keyframes rotation {
    from { transform: rotate(0deg); }
    to { transform: rotate(359deg); }
  }
  @keyframes counter-clockwise {
    from { transform: rotate(0deg); }
    to { transform: rotate(-359deg); }
  }
</style>
