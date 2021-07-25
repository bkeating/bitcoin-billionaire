<script>
  import { totalScore } from '../store';
</script>

<link href="/styles.css" rel="stylesheet" type="text/css" />
<div class="screen parent" style="background-image: url('./images/raining.gif');">
  <div class="absolute" style="z-index: 9999; color: red; font-size: 400%;">Your score: {$totalScore}</div>
  <img
    class="center-results image1"
    src="https://media.giphy.com/media/VsIvr9QjJJK2eQiCSf/giphy.gif"
    alt="scrouge"
    height="100%"
  />
  <img class="center-results image2 center center-winner" src="./images/Winner.gif" alt="winner" />
</div>
