<script lang="ts">
  import { createEventDispatcher } from "svelte"
  import { fade } from "svelte/transition"
  import type { Question, QuizAnswer } from "$lib/types/quiz"
  import type { RuntimeQuizAnswer } from "$lib/types/runtime-quiz"
  import { currentAnswer } from "$lib/stores/quizSessionStore"
  import QuestionHeader from "./question-parts/QuestionHeader.svelte"
  import QuestionImage from "./question-parts/QuestionImage.svelte"
  import QuestionChoice from "./question-parts/QuestionChoice.svelte"
  import QuestionExplanation from "./question-parts/QuestionExplanation.svelte"

  export let question: Question
  export let showInstantFeedback = true

  const dispatch = createEventDispatcher()

  let showImageModal = false

  function handleChoice(choiceId: string) {
    if (!$currentAnswer?.choice_id) {
      dispatch("answer", { choiceId })
    }
  }

  function handleBookmark() {
    dispatch("bookmark")
  }

  function handleReport() {
    dispatch("report")
  }

  function handleZoomImage() {
    showImageModal = true
  }

  function closeImageModal() {
    showImageModal = false
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      closeImageModal()
    }
  }

  function isRuntimeAnswer(
    answer: QuizAnswer | undefined | null,
  ): answer is RuntimeQuizAnswer {
    return answer !== undefined && answer !== null && "is_correct" in answer
  }
</script>

<svelte:window on:keydown={handleKeyDown} />

<article
  class="max-w-3xl mx-auto p-4 md:p-6 space-y-6"
  in:fade={{ duration: 200 }}
>
  <QuestionHeader
    content={question.content}
    on:bookmark={handleBookmark}
    on:report={handleReport}
  />

  {#if question.image_url}
    <QuestionImage
      imageUrl={question.image_url}
      on:zoomImage={handleZoomImage}
    />
  {/if}

  <div class="space-y-3" role="radiogroup" aria-labelledby="question-title">
    {#each question.choices as choice, i}
      {@const isSelected = $currentAnswer?.choice_id === choice.id}

      <QuestionChoice
        {choice}
        index={i}
        {isSelected}
        showFeedback={showInstantFeedback}
        isDisabled={!!$currentAnswer?.choice_id}
        isCorrect={isSelected && isRuntimeAnswer($currentAnswer)
          ? $currentAnswer.is_correct
          : undefined}
        on:select={() => handleChoice(choice.id)}
      />
    {/each}
  </div>

  {#if question.explanation && showInstantFeedback && $currentAnswer?.choice_id}
    <QuestionExplanation explanation={question.explanation} />
  {/if}
</article>

{#if showImageModal}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
  >
    <div
      class="absolute inset-0"
      on:click={closeImageModal}
      on:keydown={(e) => e.key === "Escape" && closeImageModal()}
      role="button"
      tabindex="0"
      aria-label="Close modal"
    />
    <div class="relative max-w-4xl w-full">
      <h2 id="modal-title" class="sr-only">Question Image</h2>
      <img
        src={question.image_url}
        alt="Question illustration"
        class="w-full h-auto rounded-lg"
      />
      <button
        class="absolute top-4 right-4 btn btn-circle btn-ghost text-white"
        on:click={closeImageModal}
        aria-label="Close image"
      >
        <svg
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          />
        </svg>
      </button>
    </div>
  </div>
{/if}

<style lang="postcss">
  :global(.focus-visible) {
    @apply ring-2 ring-primary ring-offset-2 outline-none;
  }

  @media (prefers-reduced-motion: reduce) {
    :global(*) {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
</style>
