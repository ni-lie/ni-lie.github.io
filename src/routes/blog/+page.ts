import { getPosts } from '$lib/blog';

export function load() {
  return { posts: getPosts() };
}
