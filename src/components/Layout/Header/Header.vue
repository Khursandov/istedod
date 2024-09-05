<template>
  <header
    class="w-full sticky top-0 z-40 h-16 bg-white shadow-lg border-b border-solid flex items-center justify-between"
  >
    <div class="block lg:hidden pl-3">
      <Button
        @click="$emit('toggle-menu')"
        class="!w-10 !h-10"
        severity="secondary"
      >
        <i class="pi pi-bars !text-xl"></i>
      </Button>
    </div>
    <div class="flex items-center gap-2 px-5 w-full overflow-x-auto">
      <template v-for="(i, idx) in mainStore.getBreadcrumbs" :key="idx">
        <RouterLink
          :to="i.route"
          class="text-gray-900"
          :aria-disabled="idx === mainStore.getBreadcrumbs.length - 1"
          :class="{
            '!text-gray-500 !pointer-events-none':
              idx === mainStore.getBreadcrumbs.length - 1,
          }"
        >
          {{ i.title }}
        </RouterLink>
        <i
          class="pi pi-chevron-right text-gray-400 !text-xs"
          v-if="idx !== mainStore.getBreadcrumbs.length - 1"
        ></i>
      </template>
    </div>

    <div class="pr-5 flex items-center gap-3">
      <UILangSwitcher />
      <LayoutUserProfile />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { RouteLocationRaw } from 'vue-router'

import LayoutUserProfile from '@/components/Layout/UserProfile/UserProfile.vue'
import UILangSwitcher from '@/components/UI/LangSwitcher/LangSwitcher.vue'
import { useAuthStore } from '@/store/auth/auth.ts'
import { useMainStore } from '@/store/main/main.ts'

defineOptions({
  name: 'LayoutHeader',
})

interface Emits {
  (e: 'toggle-menu'): void
}
defineEmits<Emits>()

const mainStore = useMainStore()
const authStore = useAuthStore()
</script>
