<script>
  import { currentScreen, totalScore } from '../store';

  const handleShowResults = () => {
    currentScreen.set(2);
  }
</script>

<link href="/styles.css" rel="stylesheet" type="text/css" />
<div class="screen">
    <div class="content">
        <div class="question">
            Lorem Ipsum
        </div>
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
            <a href="#">
                <img src="./images/phone-a-friend.png" />
            </a>
            <a href="#">
                <img src="./images/50-50.png" />
            </a>
            <a href="#">
                <img src="./images/audience.webp" />
            </a>
        </div>
        <!-- Once an answer is submitted -->
        <div class="actions">
            <button>Next</button>
        </div>
    </div>
</div>
