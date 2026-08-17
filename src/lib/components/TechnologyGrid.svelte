<script lang="ts">
  import type { Technology } from '$lib/types';

  let { technologies }: { technologies: Technology[] } = $props();

  function handleImageError(event: Event) {
    const image = event.currentTarget as HTMLImageElement;
    image.hidden = true;
  }
</script>

<section class="section technologies" aria-labelledby="technologies-title">
  <div class="section-heading compact">
    <div>
      <h2 id="technologies-title">Platforms &amp; technologies</h2>
      <p>Tools I use to build reliable data systems.</p>
    </div>
  </div>

  <ul class="technology-grid">
    {#each technologies as technology}
      <li class="technology-card" style={`--brand-color: ${technology.color}`}>
        <span class="technology-icon" class:wide-mark={technology.name === 'Aerospike'}>
          <img
            src={technology.icon}
            alt=""
            width="48"
            height="48"
            onerror={handleImageError}
          />
          <span class="technology-fallback" aria-hidden="true">{technology.name.slice(0, 2)}</span>
        </span>
        <span>{technology.name}</span>
      </li>
    {/each}
  </ul>
</section>
