<script lang="ts">
  import { fly } from "svelte/transition"
  export let explanation: string
</script>

<div
  class="mt-6 p-4 bg-base-200 rounded-lg border-l-4 border-info"
  in:fly={{ y: 20, duration: 200 }}
  role="complementary"
>
  <h2 class="font-semibold mb-2 flex items-center gap-2">
    <svg
      class="h-5 w-5 text-info"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
      />
    </svg>
    Explanation
  </h2>
  <p class="text-sm">{explanation}</p>
</div>
