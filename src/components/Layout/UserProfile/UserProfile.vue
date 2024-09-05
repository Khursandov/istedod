<template>
  <div>
    <div
      class="flex items-center gap-2 cursor-pointer pr-2"
      tabindex="0"
      aria-haspopup="true"
      aria-controls="profile_menu"
      @click="toggle"
    >
      <Avatar class="!bg-slate-100" shape="circle" v-bind="avatarProps" />
      <div class="w-max flex flex-col items-center">
        <p class="text-sm">{{ authStore.getAuthUser!.name }}</p>
      </div>
    </div>
    <Menu ref="menu" id="lang_switcher" :model="list" popup>
      <template #item="{ item }">
        <a
          href="javascript:void(0)"
          @click.prevent="onAction(item.key)"
          class="p-menu-item-link !inline-flex items-center gap-2 w-full"
          :class="item?.class"
        >
          <i :class="item?.icon"></i>
          <span>
            {{ item.label }}
          </span>
        </a>
      </template>
    </Menu>
    <Dialog
      v-model:visible="showDialog"
      :draggable="false"
      modal
      closable
      close-on-escape
      class="w-full max-w-[380px]"
      :header="$t('logout')"
    >
      <p>{{ $t('logout_confirmation') }}</p>

      <div class="mt-5 flex gap-3">
        <Button severity="secondary" class="w-1/2" @click="showDialog = false">
          {{ $t('no') }}
        </Button>
        <Button class="w-1/2" severity="danger" @click="logout">
          {{ $t('yes') }}
        </Button>
      </div>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import { MenuItem } from 'primevue/menuitem'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import { useAuthStore } from '@/store/auth/auth.ts'
import { getFileUrl } from '@/utils/get-file-url/get-file-url.ts'

defineOptions({
  name: 'LayoutUserProfile',
})

const authStore = useAuthStore()
const { t } = useI18n()
const router = useRouter()

const menu = ref()
const showDialog = ref(false)

const toggle = (e: MouseEvent) => menu.value.toggle(e)

function logout() {
  authStore.clearStorage()
  window.location.reload()
}

function onAction(action: Action) {
  switch (action) {
    case Action.GoProfile:
      router.push({ name: 'Profile' })
      break
    case Action.Logout:
      showDialog.value = true
      break
  }
}

const avatarProps = computed(() => {
  const obj = {}
  if (authStore.getAuthUser?.image) {
    Object.assign(obj, {
      image: getFileUrl(authStore.getAuthUser.image),
    })
  } else {
    Object.assign(obj, {
      icon: 'pi pi-user',
    })
  }
  return obj
})

enum Action {
  GoProfile = 'go_profile',
  Logout = 'logout',
}

const list = computed<MenuItem[]>(() => [
  { icon: 'pi pi-user', label: t('profile'), key: Action.GoProfile },
  {
    icon: 'pi pi-sign-out',
    label: t('logout'),
    key: Action.Logout,
    class: '!text-red-500',
  },
])
</script>
