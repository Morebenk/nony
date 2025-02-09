<script lang="ts">
  import { onMount } from "svelte"
  import { browser } from "$app/environment"
  import type { Quiz } from "$lib/types/quiz"
  import { fade, slide } from "svelte/transition"
  import QuizHeader from "./QuizHeader.svelte"
  import QuizControls from "./QuizControls.svelte"
  import QuizFooter from "./QuizFooter.svelte"
  import QuizNav from "./QuizNav.svelte"
  import QuizQuestion from "./QuizQuestion.svelte"
  import {
    quizSession,
    currentQuestion,
    quizProgress,
  } from "$lib/stores/quizSessionStore"
  import NavigationIcon from "./icons/NavigationIcon.svelte"
  import SettingsIcon from "./icons/SettingsIcon.svelte"

  export let quiz: Quiz

  let screenSize: "small" | "medium" | "large" = "large"
  let showInstantFeedback = true
  let showLeftSidebar = false
  let showRightSidebar = false
  let footerHeight = 0

  // Get theme from localStorage
  let isDark = browser ? localStorage.getItem("ui_theme") === "dracula" : false

  // Reactive declarations for sidebar visibility
  $: showLeftSidebarPermanent = screenSize === "large"
  $: showRightSidebarPermanent = screenSize === "large"
  $: showSidebarButtons = screenSize !== "large"

  $: currentIndex = $currentQuestion
    ? quiz.questions.findIndex((q) => q.id === $currentQuestion.id)
    : -1

  onMount(() => {
    // Initialize session
    quizSession.initialize(quiz)

    // Check screen size and update layout
    const updateScreenSize = () => {
      const width = window.innerWidth
      if (width < 768) {
        screenSize = "small"
      } else if (width < 1400) {
        // Increased breakpoint for better layout
        screenSize = "medium"
      } else {
        screenSize = "large"
      }
    }

    // Get footer height for padding
    const updateFooterHeight = () => {
      const footer = document.querySelector(".quiz-footer")
      if (footer) {
        footerHeight = footer.clientHeight
      }
    }

    updateScreenSize()
    updateFooterHeight()
    window.addEventListener("resize", () => {
      updateScreenSize()
      updateFooterHeight()
    })

    return () => window.removeEventListener("resize", updateScreenSize)
  })

  function handleNavigate(
    event: CustomEvent<{ index: number }> | { detail: { index: number } },
  ) {
    const question = quiz.questions[event.detail.index]
    if (question) {
      quizSession.setCurrentQuestion(question)
    }
    showLeftSidebar = false
  }

  function handleAnswer(event: CustomEvent<{ choiceId: string }>) {
    if ($currentQuestion) {
      quizSession.answer({
        question_id: $currentQuestion.id,
        choice_id: event.detail.choiceId,
      })
    }
  }

  function handleBookmark() {
    if ($currentQuestion) {
      quizSession.toggleBookmark($currentQuestion.id)
    }
  }

  function handleNext() {
    if (currentIndex < quiz.questions.length - 1) {
      quizSession.setCurrentQuestion(quiz.questions[currentIndex + 1])
    }
  }

  function handlePrevious() {
    if (currentIndex > 0) {
      quizSession.setCurrentQuestion(quiz.questions[currentIndex - 1])
    }
  }

  function handleComplete() {
    quizSession.complete()
  }

  function toggleDarkMode() {
    isDark = !isDark
    const theme = isDark ? "dracula" : "default"
    document.documentElement.setAttribute("data-theme", theme)
    if (theme !== "default") {
      localStorage.setItem("ui_theme", theme)
    } else {
      localStorage.removeItem("ui_theme")
    }
  }
</script>

<div class="min-h-[100dvh] relative bg-base-100 overflow-x-hidden">
  <div class="flex flex-col h-[100dvh]">
    <!-- Header section -->
    <div class="flex-none">
      <div class="sticky top-0 z-30 bg-base-100 border-b border-base-300">
        <QuizHeader
          darkMode={isDark}
          {showInstantFeedback}
          on:toggleDarkMode={toggleDarkMode}
          on:toggleFeedback={() => (showInstantFeedback = !showInstantFeedback)}
        >
          {#if showSidebarButtons}
            <div class="flex gap-2 items-center">
              <button
                class="btn btn-ghost btn-sm"
                on:click={() => (showLeftSidebar = !showLeftSidebar)}
              >
                <NavigationIcon />
              </button>
              <button
                class="btn btn-ghost btn-sm"
                on:click={() => (showRightSidebar = !showRightSidebar)}
              >
                <SettingsIcon />
              </button>
            </div>
          {/if}
        </QuizHeader>

        <!-- Compact progress and navigation when sidebars are hidden -->
        {#if !showRightSidebarPermanent && !showRightSidebar}
          <div class="bg-base-100 border-b border-base-300 px-4 py-2 space-y-2">
            <!-- Progress bar -->
            <div class="flex items-center gap-2">
              <div
                class="flex-1 h-1.5 rounded-full bg-base-300 overflow-hidden"
              >
                <div
                  class="h-full bg-primary rounded-full transition-all duration-300"
                  style="width: {$quizProgress.percentage}%"
                />
              </div>
              <span class="text-sm font-medium"
                >{$quizProgress.answered}/{quiz.questions.length}</span
              >
            </div>

            <!-- Compact question navigation -->
            <div
              class="flex gap-1 overflow-x-auto py-1 -mx-4 px-4 hide-scrollbar"
              role="tablist"
              aria-label="Question navigation"
            >
              {#each quiz.questions as question, index}
                {@const answer = $quizSession?.answers?.[question.id]}
                {@const isSelected = question.id === $currentQuestion?.id}
                {@const status = !answer
                  ? "Not answered"
                  : answer.status === "skipped"
                    ? "Skipped"
                    : answer.is_correct === undefined
                      ? "Answered"
                      : answer.is_correct
                        ? "Correct"
                        : "Incorrect"}
                <button
                  role="tab"
                  class="flex-shrink-0 w-8 h-8 rounded flex items-center justify-center text-sm font-medium transition-colors duration-200
                      {isSelected ? 'ring-2 ring-primary ring-offset-2' : ''} 
                      {!answer
                    ? 'bg-base-300'
                    : answer.status === 'skipped'
                      ? 'bg-warning'
                      : answer.is_correct === undefined
                        ? 'bg-primary'
                        : answer.is_correct
                          ? 'bg-success text-white'
                          : 'bg-error text-white'}"
                  on:click={() => handleNavigate({ detail: { index } })}
                  aria-selected={isSelected}
                  aria-controls="question-panel"
                  aria-label="Question {index + 1} - {status}"
                >
                  {index + 1}
                </button>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </div>

    <!-- Main layout container -->
    <div class="flex-1 relative flex overflow-hidden">
      <!-- Left sidebar (Question Navigation) -->
      {#if showLeftSidebarPermanent || showLeftSidebar}
        <aside
          class="fixed lg:static left-0 top-[4rem] bottom-0 w-[300px] bg-base-200 border-r border-base-300 overflow-y-auto z-20"
          class:md:hidden={screenSize === "medium"}
          transition:slide={{ duration: 200 }}
        >
          <div
            class="sticky top-0 p-2 bg-base-200 border-b border-base-300 lg:hidden"
          >
            <button
              class="btn btn-ghost btn-sm w-full"
              on:click={() => (showLeftSidebar = false)}
            >
              Close Navigation
            </button>
          </div>
          <QuizNav {quiz} on:navigate={handleNavigate} />
        </aside>
      {/if}

      <!-- Main content area -->
      <main class="flex-1 overflow-y-auto px-4 pb-20">
        <div class="max-w-3xl mx-auto">
          {#if $currentQuestion}
            <div in:fade|local={{ duration: 200 }}>
              <div id="question-panel" role="tabpanel">
                <QuizQuestion
                  question={$currentQuestion}
                  {showInstantFeedback}
                  on:answer={handleAnswer}
                  on:bookmark={handleBookmark}
                />
              </div>
            </div>
          {/if}
        </div>
      </main>

      <!-- Right sidebar (Controls) -->
      {#if showRightSidebarPermanent || showRightSidebar}
        <aside
          class="fixed lg:static right-0 top-[4rem] bottom-0 w-[300px] bg-base-200 border-l border-base-300 overflow-y-auto z-20"
          class:md:hidden={screenSize === "medium"}
          transition:slide={{ duration: 200 }}
        >
          <div
            class="sticky top-0 p-2 bg-base-200 border-b border-base-300 lg:hidden"
          >
            <button
              class="btn btn-ghost btn-sm w-full"
              on:click={() => (showRightSidebar = false)}
            >
              Close Controls
            </button>
          </div>
          <QuizControls
            {quiz}
            darkMode={isDark}
            {showInstantFeedback}
            on:toggleDarkMode={toggleDarkMode}
            on:toggleFeedback={() =>
              (showInstantFeedback = !showInstantFeedback)}
          />
        </aside>
      {/if}
    </div>

    <!-- Footer -->
    <div class="flex-none">
      <div
        class="quiz-footer bg-base-100 border-t border-base-300"
        bind:clientHeight={footerHeight}
      >
        <QuizFooter
          {quiz}
          on:previous={handlePrevious}
          on:next={handleNext}
          on:complete={handleComplete}
        />
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  :global(.dark) .bg-base-200 {
    @apply bg-base-200/50 backdrop-blur-sm;
  }

  /* Responsive sidebar transitions */
  aside {
    transition: transform 0.2s ease-in-out;
  }

  /* Hide scrollbar for compact navigation */
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }

  /* High contrast mode */
  @media (prefers-contrast: high) {
    .border-base-300 {
      @apply border-2;
    }
  }

  /* Reduced motion preferences */
  @media (prefers-reduced-motion: reduce) {
    :global(*) {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Custom scrollbar for better UX */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-base-200;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-base-300 rounded-full;
  }

  ::-webkit-scrollbar-thumb:hover {
    @apply bg-base-content/20;
    @apply bg-base-content/20;
  }
</style>
