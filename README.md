# Willie Coronel — Portfolio

A responsive personal portfolio built with SvelteKit and TypeScript. The homepage focuses on
professional experience, data platforms and technologies, and direct contact links. Projects and
articles live on dedicated routes, with an About page for a more personal introduction.

## Development

```bash
npm install
npm run dev
```

Run `npm run check` for Svelte and TypeScript validation, and `npm run build` to produce the static
site in `build/`.

## Updating experience

Edit `src/lib/data/experience.ts` to update the Experience cards. Add each responsibility or
achievement as a separate string in an entry's `highlights` array; each string is displayed as a
bullet point.

## Writing blog posts

Add a Markdown file to `src/content/blog`. Every article begins with this frontmatter:

```markdown
---
title: Article title
description: A short summary.
date: 2026-08-18
readingTime: 5 min read
---
```

The filename becomes the article URL. For example, `reliable-pipelines.md` is published at
`/blog/reliable-pipelines/`.

Add the `#draft` tag anywhere in a Markdown file to exclude it from the blog index and prevent its
article page from being generated. Remove the tag when the article is ready to publish.
