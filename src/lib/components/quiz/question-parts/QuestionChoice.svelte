<script lang="ts">
  import { createEventDispatcher } from "svelte"
  import type { Choice } from "$lib/types/quiz"
  import { fly } from "svelte/transition"

  export let choice: Choice
  export let index: number
  export let isSelected: boolean
  export let showFeedback: boolean
  export let isDisabled: boolean
  export let isCorrect: boolean | undefined = undefined

  const dispatch = createEventDispatcher()

  function handleClick() {
    dispatch("select")
  }

  $: buttonClasses = [
    "group w-full p-4 text-left rounded-lg transition-all duration-200",
    "transform hover:scale-[1.01] focus:scale-[1.01]",
    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
    showFeedback && isCorrect ? "bg-success/20" : "",
    isSelected && showFeedback && isCorrect === false ? "bg-error/20" : "",
    isSelected && !showFeedback ? "bg-primary text-primary-content" : "",
    !isSelected && !showFeedback ? "bg-base-200 hover:bg-base-300" : "",
  ]
    .filter(Boolean)
    .join(" ")

  $: numberClasses = [
    "flex-none flex items-center justify-center w-8 h-8",
    "rounded-full border-2 text-sm font-medium",
    showFeedback && isCorrect
      ? "border-success bg-success text-success-content"
      : "",
    isSelected && showFeedback && isCorrect === false
      ? "border-error bg-error text-error-content"
      : "",
    isSelected && !showFeedback
      ? "border-primary-content bg-primary-content text-primary"
      : "",
    !isSelected && !showFeedback ? "border-current group-hover:border-primary" : "",
  ]
    .filter(Boolean)
    .join(" ")
</script>

<button
  class={buttonClasses}
  on:click={handleClick}
  disabled={isDisabled}
  role="radio"
  aria-checked={isSelected}
>
  <div class="flex items-center gap-3">
    <span class={numberClasses} aria-hidden="true">
      {index + 1}
    </span>
    <span class="flex-1">{choice.content}</span>
  </div>
</button>

{#if showFeedback && isSelected && choice.explanation}
  <div
    class="p-4 rounded-lg border-l-4 {isCorrect
      ? 'bg-success/10 border-success'
      : 'bg-error/10 border-error'}"
    in:fly={{ y: 20, duration: 200 }}
    role="alert"
  >
    <div class="flex items-start gap-3">
      <svg
        class="h-6 w-6 {isCorrect ? 'text-success' : 'text-error'}"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d={isCorrect
            ? "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            : "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"}
        />
      </svg>
      <div class="flex-1">
        <p class="font-semibold">{isCorrect ? "Correct!" : "Incorrect"}</p>
        <p class="mt-1 text-sm">{choice.explanation}</p>
      </div>
    </div>
  </div>
{/if}
