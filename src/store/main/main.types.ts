import { RouteLocationRaw } from 'vue-router'

import { TLocaleField } from '@/types/locales.ts'

export interface IBreadcrumb {
  title: string | TLocaleField
  route: RouteLocationRaw
}
