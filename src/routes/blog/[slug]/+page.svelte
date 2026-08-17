<script lang="ts">
  import type { BlogPost } from '$lib/types';

  let { data }: { data: { post: BlogPost } } = $props();
</script>

<svelte:head>
  <title>{data.post.title} — Willie Coronel</title>
  <meta name="description" content={data.post.description} />
</svelte:head>

<main class="article-page">
  <a class="back-link" href="/blog/">← All articles</a>
  <header>
    <p class="eyebrow">{data.post.date} · {data.post.readingTime}</p>
    <h1>{data.post.title}</h1>
    <p>{data.post.description}</p>
  </header>
  <article class="prose">{@html data.post.html}</article>
</main>
