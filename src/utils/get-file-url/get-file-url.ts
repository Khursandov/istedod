export function getFileUrl(url: string): string {
  if (typeof url !== 'string') return url
  if (url.startsWith('http')) return url
  let baseUrl = import.meta.env.VITE_APP_SERVER_URL as string
  if (!baseUrl.endsWith('/') && !url.startsWith('/')) baseUrl += '/'
  return baseUrl + url
}
