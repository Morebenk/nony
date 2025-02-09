<script lang="ts">
  import { createEventDispatcher } from "svelte"
  import type { QuizAnswer } from "$lib/types/quiz"
  import type { RuntimeQuizAnswer } from "$lib/types/runtime-quiz"
  import { currentAnswer } from "$lib/stores/quizSessionStore"
  import ReportIcon from "../icons/ReportIcon.svelte"
  import BookmarkIcon from "../icons/BookmarkIcon.svelte"

  export let content: string

  const dispatch = createEventDispatcher()

  function handleReport() {
    dispatch("report")
  }

  function handleBookmark() {
    dispatch("bookmark")
  }

  function isRuntimeAnswer(
    answer: QuizAnswer | undefined | null,
  ): answer is RuntimeQuizAnswer {
    return answer !== undefined && answer !== null && "bookmarked" in answer
  }

  $: isBookmarked = isRuntimeAnswer($currentAnswer) && $currentAnswer.bookmarked
</script>

<header class="flex justify-between items-start">
  <div class="space-y-1">
    <h1 class="text-lg md:text-xl font-semibold" id="question-title">
      {content}
    </h1>
    {#if $currentAnswer?.choice_id}
      <p class="text-sm text-base-content/70">You've answered this question</p>
    {/if}
  </div>

  <div class="flex gap-2">
    <button
      class="btn btn-ghost btn-sm"
      on:click={handleReport}
      aria-label="Report Question"
    >
      <ReportIcon />
    </button>

    <button
      class="btn btn-ghost btn-sm"
      on:click={handleBookmark}
      aria-label={isBookmarked ? "Remove Bookmark" : "Bookmark Question"}
    >
      <BookmarkIcon filled={isBookmarked} />
    </button>
  </div>
</header>
