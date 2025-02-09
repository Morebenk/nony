<script lang="ts">
  import { createEventDispatcher } from "svelte"
  export let imageUrl: string

  const dispatch = createEventDispatcher()

  function handleClick() {
    dispatch("zoomImage")
  }
</script>

<button
  class="group relative w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
  on:click={handleClick}
  aria-label="View full size image"
>
  <img
    src={imageUrl}
    alt="Question illustration"
    class="my-4 rounded-lg shadow-lg w-full object-cover max-h-[400px] transform transition-transform group-hover:scale-[1.02]"
  />
  <div
    class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
  >
    <span class="bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
      Click to zoom
    </span>
  </div>
</button>
