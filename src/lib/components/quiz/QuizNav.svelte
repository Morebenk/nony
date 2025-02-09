<script lang="ts">
  import { createEventDispatcher } from "svelte"
  import type { Quiz, QuizAnswer } from "$lib/types/quiz"
  import { quizSession, currentQuestion } from "$lib/stores/quizSessionStore"
  import type { RuntimeQuizAnswer } from "$lib/types/runtime-quiz"

  export let quiz: Quiz
  export let showBottomPanel = false

  const dispatch = createEventDispatcher()

  function handleClick(index: number) {
    dispatch("navigate", { index })
    if (window.innerWidth < 768) {
      showBottomPanel = false
    }
  }

  function getButtonClass(
    answer: QuizAnswer | undefined,
    isSelected: boolean,
  ): string {
    const base =
      "aspect-square rounded-lg flex items-center justify-center text-sm font-medium"
    const hover =
      "transition-all hover:scale-105 focus:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    const status = !answer
      ? "bg-base-300"
      : answer.status === "skipped"
        ? "bg-warning"
        : (answer as RuntimeQuizAnswer)?.is_correct === undefined
          ? "bg-primary"
          : (answer as RuntimeQuizAnswer)?.is_correct
            ? "bg-success"
            : "bg-error"
    const selected = isSelected ? "ring-2 ring-primary ring-offset-2" : ""

    return [base, hover, status, selected].join(" ")
  }

  function getQuestionLabel(
    index: number,
    answer: QuizAnswer | undefined,
  ): string {
    const number = `Question ${index + 1}`
    const status = !answer
      ? "Not answered"
      : answer.status === "skipped"
        ? "Skipped"
        : (answer as RuntimeQuizAnswer)?.is_correct === undefined
          ? "Answered"
          : (answer as RuntimeQuizAnswer)?.is_correct
            ? "Correct"
            : "Incorrect"
    return `${number} - ${status}`
  }

  function isRuntimeAnswer(
    answer: QuizAnswer | undefined,
  ): answer is RuntimeQuizAnswer {
    return answer !== undefined && "is_correct" in answer
  }
</script>

<div class="p-4 space-y-6">
  <section>
    <h2 class="font-semibold text-base-content/70 mb-4">Questions</h2>
    <div
      class="grid grid-cols-5 sm:grid-cols-8 gap-2 max-h-[40vh] lg:max-h-[60vh] overflow-y-auto p-1"
      role="listbox"
      aria-label="Question navigation"
    >
      {#each quiz.questions as question, index}
        {@const answer = $quizSession?.answers?.[question.id]}
        {@const isSelected = question.id === $currentQuestion?.id}

        <button
          class={getButtonClass(answer, isSelected)}
          on:click={() => handleClick(index)}
          aria-selected={isSelected}
          role="option"
          aria-label={getQuestionLabel(index, answer)}
        >
          {index + 1}
          {#if isRuntimeAnswer(answer) && answer.bookmarked}
            <div class="absolute -top-1 -right-1">
              <svg
                class="h-4 w-4 text-warning"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </div>
          {/if}
        </button>
      {/each}
    </div>
  </section>

  <section class="text-sm">
    <h3 class="font-semibold text-base-content/70 mb-3">Status Legend</h3>
    <div class="grid grid-cols-2 gap-2">
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded bg-base-300"></div>
        <span>Not Answered</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded bg-warning"></div>
        <span>Skipped</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded bg-primary"></div>
        <span>Answered</span>
      </div>
      {#if $quizSession?.answers && Object.values($quizSession.answers).some(isRuntimeAnswer)}
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded bg-success"></div>
          <span>Correct</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded bg-error"></div>
          <span>Incorrect</span>
        </div>
      {/if}
    </div>
  </section>
</div>
