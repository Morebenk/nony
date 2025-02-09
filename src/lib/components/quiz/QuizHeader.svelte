<script lang="ts">
  import { createEventDispatcher } from "svelte"
  import { goto } from "$app/navigation"

  export let darkMode = false
  export let showInstantFeedback = true

  const dispatch = createEventDispatcher()

  function handleExit() {
    goto("/account/practice")
  }

  function handleDarkMode() {
    dispatch("toggleDarkMode")
  }

  function handleFeedback() {
    dispatch("toggleFeedback")
  }
</script>

<header
  class="sticky top-0 z-30 bg-base-100 border-b border-base-200 px-4 py-3"
>
  <div class="flex justify-between items-center">
    <button
      class="btn btn-ghost btn-sm"
      on:click={handleExit}
      aria-label="Exit Quiz"
    >
      <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path
          d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
        />
      </svg>
    </button>

    <div class="flex items-center gap-2">
      <button
        class="btn btn-ghost btn-sm gap-2"
        class:btn-primary={showInstantFeedback}
        on:click={handleFeedback}
        aria-label="Toggle Instant Feedback"
      >
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z"
          />
          <path d="M10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
        <span class="hidden sm:inline"
          >{showInstantFeedback ? "Instant" : "Manual"}</span
        >
      </button>

      <button
        class="btn btn-ghost btn-sm"
        on:click={handleDarkMode}
        aria-label="Toggle Dark Mode"
      >
        {#if darkMode}
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clip-rule="evenodd"
            />
          </svg>
        {:else}
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            />
          </svg>
        {/if}
      </button>
    </div>
  </div>
</header>
