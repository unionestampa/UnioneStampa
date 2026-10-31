/** Canonical public URL for a Markdown article entry. */
export function articleHref(base: string, id: string): string {
  const fileSlug = id.toLowerCase().endsWith('.md') ? id : `${id}.md`;
  return `${base}articoli/${fileSlug}/`;
}
