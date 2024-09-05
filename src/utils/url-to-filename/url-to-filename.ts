export function urlToFilename(url: string): string {
  if (typeof url !== 'string') return url
  const chunks = url.split(/\//g)
  return chunks.at(-1) as string
}
