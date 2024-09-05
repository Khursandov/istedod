import en from '@/locales/en.json'
import ru from '@/locales/ru.json'
import uz from '@/locales/uz.json'
import { ILocale, LocaleCode } from '@/types/locales.ts'

export default [
  {
    code: LocaleCode.UZ,
    name: 'O\'zbekcha',
    messages: uz,
  },
  {
    code: LocaleCode.RU,
    name: 'Русский',
    messages: ru,
  },
  {
    code: LocaleCode.EN,
    name: 'English',
    messages: en,
  },
] satisfies ILocale[]
