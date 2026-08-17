import type { BlogPost } from '$lib/types';

const markdownFiles = import.meta.glob('/src/content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
}) as Record<string, string>;

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function inlineMarkdown(value: string): string {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" rel="noreferrer">$1</a>');
}

function renderMarkdown(markdown: string): string {
  const lines = markdown.trim().split('\n');
  const output: string[] = [];
  let listOpen = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    const listItem = line.match(/^-\s+(.+)/);

    if (listItem) {
      if (!listOpen) {
        output.push('<ul>');
        listOpen = true;
      }
      output.push(`<li>${inlineMarkdown(listItem[1])}</li>`);
      continue;
    }

    if (listOpen) {
      output.push('</ul>');
      listOpen = false;
    }

    if (!line) continue;
    if (line.startsWith('### ')) output.push(`<h3>${inlineMarkdown(line.slice(4))}</h3>`);
    else if (line.startsWith('## ')) output.push(`<h2>${inlineMarkdown(line.slice(3))}</h2>`);
    else if (line.startsWith('# ')) output.push(`<h1>${inlineMarkdown(line.slice(2))}</h1>`);
    else output.push(`<p>${inlineMarkdown(line)}</p>`);
  }

  if (listOpen) output.push('</ul>');
  return output.join('\n');
}

function parsePost(path: string, source: string): BlogPost {
  const frontmatterMatch = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!frontmatterMatch) throw new Error(`Missing frontmatter in ${path}`);

  const metadata = Object.fromEntries(
    frontmatterMatch[1].split('\n').map((line) => {
      const separator = line.indexOf(':');
      const key = line.slice(0, separator).trim();
      const value = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, '');
      return [key, value];
    })
  );
  const slug = path.split('/').at(-1)?.replace('.md', '') ?? '';

  return {
    slug,
    title: metadata.title,
    description: metadata.description,
    date: metadata.date,
    readingTime: metadata.readingTime,
    html: renderMarkdown(frontmatterMatch[2])
  };
}

export function getPosts(): BlogPost[] {
  return Object.entries(markdownFiles)
    .map(([path, source]) => parsePost(path, source))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): BlogPost | undefined {
  return getPosts().find((post) => post.slug === slug);
}
