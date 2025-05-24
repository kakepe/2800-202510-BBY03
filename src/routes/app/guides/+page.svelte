<script lang="ts">
  export let data;
</script>

<div class="p-8 text-center bg-orange-50 min-h-screen">
  <h1 class="text-4xl font-bold mb-8">
    🌳 Vancouver Trees Guide 🌳
  </h1>

  {#if data.guides.length > 0}
    <ul class="space-y-4 max-w-xl mx-auto">
      {#each data.guides as guide}
        <li class="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
          <a href={guide.path} class="text-lg font-semibold text-orange-700 hover:text-orange-900 underline">
            {guide.name}
          </a>
        </li>
      {/each}
    </ul>
  {:else}
    <p class="text-gray-600">No guides found.</p>
  {/if}
</div>
