<script lang="ts">
  import type { Experience } from '$lib/types';

  let { experience, position }: { experience: Experience; position: 'left' | 'right' } = $props();
</script>

<article class="timeline-row {position}">
  <div class="timeline-card">
    <p class="period">
      <span class="calendar" aria-hidden="true"></span>
      {experience.period}
    </p>
    <h3>{experience.role}</h3>
    <p class="company">{experience.company}</p>
    <ul class="highlight-list" aria-label="Work highlights">
      {#each experience.highlights as highlight}
        <li>{highlight}</li>
      {/each}
    </ul>
    <ul class="skill-list" aria-label="Technologies used">
      {#each experience.skills as skill}
        <li>{skill}</li>
      {/each}
    </ul>
  </div>
  <span class="timeline-marker" aria-hidden="true"></span>
</article>
