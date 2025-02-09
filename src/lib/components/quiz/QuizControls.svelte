<script lang="ts">
  import { createEventDispatcher } from "svelte"
  import type { Quiz } from "$lib/types/quiz"
  import { quizProgress } from "$lib/stores/quizSessionStore"

  export let quiz: Quiz
  export let darkMode = false
  export let showInstantFeedback = true

  const dispatch = createEventDispatcher()

  function handleDarkMode() {
    dispatch("toggleDarkMode")
  }

  function handleFeedback() {
    dispatch("toggleFeedback")
  }

  const shortcuts = [
    { key: "→", label: "Next Question" },
    { key: "←", label: "Previous Question" },
    { key: "1-9", label: "Select Choice" },
    { key: "Ctrl+B", label: "Bookmark" },
    { key: "Ctrl+D", label: "Dark Mode" },
    { key: "?", label: "Show Shortcuts" },
  ]
</script>

<div class="p-4 space-y-6 h-full">
  <!-- Progress -->
  <section>
    <h3 class="font-semibold text-base-content/70 mb-4">Progress</h3>
    <div class="w-full h-2 rounded-full bg-base-300 mb-4">
      <div
        class="h-full bg-primary rounded-full transition-all"
        style="width: {$quizProgress.percentage}%"
      ></div>
    </div>
    <div class="grid grid-cols-2 gap-4 text-sm">
      <div>
        <div class="font-medium">Completed</div>
        <div class="text-2xl font-bold text-primary">
          {$quizProgress.answered}
          <span class="text-base font-normal text-base-content/70">
            / {quiz.questions.length}
          </span>
        </div>
      </div>
      <div>
        <div class="font-medium">Remaining</div>
        <div class="text-2xl font-bold">
          {$quizProgress.remaining}
        </div>
      </div>
    </div>
  </section>

  <!-- Settings -->
  <section>
    <h3 class="font-semibold text-base-content/70 mb-4">Settings</h3>
    <div class="space-y-3">
      <label class="flex items-center justify-between cursor-pointer">
        <span>Instant Feedback</span>
        <input
          type="checkbox"
          class="toggle toggle-primary"
          checked={showInstantFeedback}
          on:change={handleFeedback}
        />
      </label>
      <label class="flex items-center justify-between cursor-pointer">
        <span>Dark Mode</span>
        <input
          type="checkbox"
          class="toggle toggle-primary"
          checked={darkMode}
          on:change={handleDarkMode}
        />
      </label>
    </div>
  </section>

  <!-- Keyboard Shortcuts -->
  <section>
    <h3 class="font-semibold text-base-content/70 mb-4">Keyboard Shortcuts</h3>
    <div class="text-sm space-y-2">
      {#each shortcuts as shortcut}
        <div class="flex justify-between items-center">
          <span>{shortcut.label}</span>
          <kbd class="kbd kbd-sm">{shortcut.key}</kbd>
        </div>
      {/each}
    </div>
  </section>
</div>
