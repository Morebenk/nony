<script lang="ts">
  import { createEventDispatcher } from "svelte"
  import {
    currentQuestion,
    currentAnswer,
    quizProgress,
  } from "$lib/stores/quizSessionStore"
  import type { Quiz } from "$lib/types/quiz"

  export let quiz: Quiz

  const dispatch = createEventDispatcher()

  function handlePrevious() {
    dispatch("previous")
  }

  function handleNext() {
    dispatch("next")
  }

  function handleToggleControls() {
    dispatch("toggleControls")
  }

  function handleComplete() {
    dispatch("complete")
  }

  $: currentQuestionNumber = $currentQuestion
    ? quiz.questions.indexOf($currentQuestion) + 1
    : 0

  $: isLastQuestion =
    $currentQuestion &&
    quiz.questions.indexOf($currentQuestion) === quiz.questions.length - 1

  $: isComplete = isLastQuestion && $quizProgress.percentage === 100
</script>

<footer
  class="sticky bottom-0 left-0 right-0 bg-base-100 border-t border-base-200 p-4"
>
  <!-- Wrap content in a container with a max-width and horizontal padding -->
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between items-center">
      <button
        class="btn btn-ghost"
        disabled={currentQuestionNumber === 1}
        on:click={handlePrevious}
      >
        <svg class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          />
        </svg>
        Previous
      </button>

      <button
        class="btn btn-ghost"
        on:click={handleToggleControls}
        aria-label="Show question navigation"
      >
        {currentQuestionNumber} / {quiz.questions.length}
      </button>

      {#if isComplete}
        <button class="btn btn-primary" on:click={handleComplete}>
          Complete
        </button>
      {:else}
        <button
          class="btn btn-primary"
          on:click={handleNext}
          disabled={!$currentAnswer?.choice_id}
        >
          Next
          <svg class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            />
          </svg>
        </button>
      {/if}
    </div>
  </div>
</footer>
