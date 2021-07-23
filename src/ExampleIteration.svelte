<script>
  const handleQuestionClick = (question) => {
    alert(question);
  }
  const questionList = [
    { title: 'This is the title of question 1', question: 'How are you doing?'},
    { title: 'This is the title of question 2', question: 'Who are you?'},
    { title: 'This is the title of question 3', question: 'Why are you here?'},
    { title: 'This is the title of question 4', question: 'What are we suppose to do?'},
  ];
</script>

<div class="bg-yellow-100 border rounded-lg p-6 my-6">
  <h2 class="text-2xl">ExampleIteration.svelte</h2>
  <p class="mb-6">Click to reveal a question</p>
  {#each questionList as { title, question }}
     <button
      class="block mb-2 cursor-pointer px-3"
      on:click={() => handleQuestionClick(question)}
    >
      {title}
    </button>
  {/each}
</div>
