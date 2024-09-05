export function formatPhone(phone: string) {
  if (!(typeof phone === 'string')) return phone
  const prefix = phone.startsWith('+998') ? '' : '+998'
  return prefix + phone.replace(/[-_)(a-zA-Z*\s]/g, '')
}
