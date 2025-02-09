<script lang="ts">
  import LoadingSkeleton from "../LoadingSkeleton.svelte"
</script>

<div class="flex flex-col items-center justify-center h-full p-4">
  <LoadingSkeleton variant="quiz-card">
    <div class="h-8 w-3/4 mb-4"></div>
    <div class="space-y-4">
      <div class="h-12 w-full"></div>
      <div class="h-12 w-full"></div>
      <div class="h-12 w-full"></div>
      <div class="h-12 w-full"></div>
    </div>
  </LoadingSkeleton>
</div>
