<script lang="ts">
  let menuOpen = false;

  const links = [
    { href: '/projects/', label: 'Projects' },
    { href: '/blog/', label: 'Blog' },
    { href: '/about/', label: 'About' },
  ];
</script>

<header class="site-header">
  <a class="monogram" href="/" aria-label="Willie Coronel — home">WC</a>

  <button
    class="menu-button"
    type="button"
    aria-label="Toggle navigation"
    aria-expanded={menuOpen}
    onclick={() => (menuOpen = !menuOpen)}
  >
    <span></span>
    <span></span>
  </button>

  <nav class:open={menuOpen} aria-label="Main navigation">
    {#each links as link}
      <a href={link.href} onclick={() => (menuOpen = false)}>{link.label}</a>
    {/each}
  </nav>
</header>
