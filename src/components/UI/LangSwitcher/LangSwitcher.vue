<template>
  <div>
    <Button
      type="button"
      icon="pi pi-language"
      aria-haspopup="true"
      aria-controls="lang_switcher"
      @click="toggle"
      plain
      severity="secondary"
      class="!w-8 !h-8"
    />
    <Menu ref="menu" id="lang_switcher" :model="list" popup>
      <template #item="{ item }">
        <a
          href="javascript:void(0)"
          @click.prevent="changeLocale(item.key)"
          class="p-menu-item-link"
        >
          {{ item.label }}
        </a>
      </template>
    </Menu>
  </div>
</template>

<script lang="ts" setup>
import type { MenuItem } from 'primevue/menuitem'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { LocalStorageKey } from '@/global/enums/local-storage.ts'
import locales from '@/locales/locales.ts'
import { ILocale, LocaleCode } from '@/types/locales.ts'

defineOptions({
  name: 'UILangSwitcher',
})

const { locale } = useI18n()

const menu = ref()

const toggle = (e: MouseEvent) => menu.value.toggle(e)

const list: MenuItem[] = locales.map((i) => ({
  key: i.code,
  label: i.name,
}))

function changeLocale(code: LocaleCode) {
  locale.value = code
  localStorage.setItem(LocalStorageKey.Locale, code)
}
</script>
