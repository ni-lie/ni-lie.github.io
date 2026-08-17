<script lang="ts">
  import '../app.css';
  import SiteHeader from '$lib/components/SiteHeader.svelte';

  let { children } = $props();
</script>

<div class="site-shell">
  <SiteHeader />
  {@render children()}
</div>
