import dayjs from 'dayjs'
export function formatDate(date: string | Date | number): string {
  if (!date) return ''
  try {
    return dayjs(date).format('DD.MM.YYYY')
  } catch {
    return ''
  }
}
