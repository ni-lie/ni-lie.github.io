<script lang="ts">
  import type { BlogPost } from '$lib/types';

  let { data }: { data: { posts: BlogPost[] } } = $props();
</script>

<svelte:head>
  <title>Blog — Willie Coronel</title>
  <meta name="description" content="Notes by Willie Coronel on data engineering, systems, and learning." />
</svelte:head>

<main class="subpage">
  <header class="page-intro">
    <p class="eyebrow">Blog</p>
    <h1>Notes on data engineering, systems, and learning.</h1>
    <p>Plain Markdown, written as I learn.</p>
  </header>

  <div class="post-list">
    {#each data.posts as post}
      <a class="post-row" href={`/blog/${post.slug}/`}>
        <span>
          <strong>{post.title}</strong>
          <small>{post.description}</small>
        </span>
        <span class="post-meta">
          <time datetime={post.date}>{post.date}</time>
          <small>{post.readingTime}</small>
        </span>
      </a>
    {/each}
  </div>
</main>
