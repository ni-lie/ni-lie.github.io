<script lang="ts">
  import TimelineEntry from './TimelineEntry.svelte';
  import type { Experience } from '$lib/types';

  let { entries }: { entries: Experience[] } = $props();
</script>

<div class="timeline">
  {#each entries as experience, index}
    <TimelineEntry {experience} position={index % 2 === 0 ? 'left' : 'right'} />
  {/each}
</div>
