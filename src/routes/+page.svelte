<script lang="ts">
  import Contact from '$lib/components/Contact.svelte';
  import TechnologyGrid from '$lib/components/TechnologyGrid.svelte';
  import Timeline from '$lib/components/Timeline.svelte';
  import { experiences } from '$lib/data/experience';
  import { technologies } from '$lib/data/technologies';
</script>

<svelte:head>
  <title>Willie Coronel — Data Engineer</title>
  <meta
    name="description"
    content="Willie Coronel is a data engineer focused on reliable pipelines, analytics systems, and continuous learning."
  />
</svelte:head>

<main>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-grid" aria-hidden="true"></div>
    <h1 id="hero-title">I'm Willie Coronel.</h1>
    <p>Data Engineer. Learner.</p>
    <div class="pixel-accent" aria-hidden="true">
      {#each Array(12) as _, index}
        <span style={`--pixel-index: ${index}`}></span>
      {/each}
    </div>
  </section>

  <section class="section experience" id="experience" aria-labelledby="experience-title">
    <div class="section-heading">
      <h2 id="experience-title">Experience</h2>
    </div>
    <Timeline entries={experiences} />
  </section>

  <TechnologyGrid {technologies} />
  <Contact />
</main>
