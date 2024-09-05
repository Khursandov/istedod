export enum LocaleCode {
  UZ = 'uz',
  RU = 'ru',
  EN = 'en',
}

export interface ILocale {
  code: LocaleCode
  name: string
  messages: Record<string, any>
}

export type TLocaleField<T = string> = Record<LocaleCode, T>
