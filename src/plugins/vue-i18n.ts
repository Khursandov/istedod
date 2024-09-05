import { createI18n } from 'vue-i18n'

import { LocalStorageKey } from '@/global/enums/local-storage.ts'
import locales from '@/locales/locales.ts'
import { LocaleCode } from '@/types/locales.ts'

const messages = {}
locales.forEach((i) => {
  Object.assign(messages, {
    [i.code]: i.messages,
  })
})

function getLocale() {
  const local = localStorage.getItem(LocalStorageKey.Locale)
  if (!local || (local && !locales.find((i) => i.code === local))) {
    localStorage.setItem(LocalStorageKey.Locale, LocaleCode.UZ)
    return LocaleCode.UZ
  }
  return local
}

export const i18n = createI18n({
  locale: getLocale(),
  messages,
  legacy: false,
})
