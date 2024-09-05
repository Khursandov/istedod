import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

import { IBreadcrumb } from '@/store/main/main.types.ts'
import { LocaleCode } from '@/types/locales.ts'

export const useMainStore = defineStore('main', () => {
  const { t, locale } = useI18n()
  const route = useRoute()
  const breadcrumbs = ref<IBreadcrumb[]>([])

  const getBreadcrumbs = computed(() =>
    breadcrumbs.value.map<IBreadcrumb>((i) => ({
      ...i,
      title:
        typeof i.title === 'string'
          ? t(i.title)
          : i.title?.[locale.value as unknown as LocaleCode],
    })),
  )

  function updateBreadcrumb(list: IBreadcrumb[], override?: boolean) {
    if (override) {
      breadcrumbs.value = list
    } else {
      breadcrumbs.value.push(...list)
    }
  }

  watch(
    () => route.name,
    () => {
      breadcrumbs.value = [{ title: 'dashboard', route: { name: 'Dashboard' } }]
    },
    { immediate: true },
  )

  return { getBreadcrumbs, updateBreadcrumb }
})
