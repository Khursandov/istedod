<template>
  <div>
    <div class="flex gap-3 items-center">
      <div
        class="w-14 h-14 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center"
      >
        <img ref="previewEl" v-if="image" class="w-full h-full object-cover" />
        <i
          v-else-if="image === null || !authStore.getAuthUser?.image"
          class="pi pi-user !text-2xl"
        ></i>
        <img
          v-else
          class="w-full h-full object-cover"
          :src="getFileUrl(authStore.getAuthUser!.image)"
          :alt="authStore.getAuthUser!.name"
        />
      </div>
      <div class="flex flex-col">
        <p class="text-slate-800">{{ $t('update_your_image') }}</p>
        <div class="text-sm text-slate-500 flex gap-2 items-center">
          <a
            v-if="image || authStore.getAuthUser?.image"
            @click.prevent="image = null"
            href="javascript:void(0)"
            class="hover:text-red-500"
            >{{ $t('delete') }}</a
          >
          <a
            @click.prevent="openFileUpload"
            href="javascript:void(0)"
            class="hover:text-primary"
            >{{ $t('update') }}</a
          >
        </div>
      </div>
    </div>

    <div
      tabindex="0"
      @click="openFileUpload"
      @drop.prevent="onFileDrop"
      @dragover.prevent
      class="w-full transition-all duration-200 cursor-pointer group hover:border-primary h-[200px] border border-dashed border-slate-400 mt-5 rounded-md flex flex-col items-center justify-center p-5"
    >
      <i
        class="pi pi-upload !text-3xl text-slate-600 transition-all duration-200 group-hover:text-primary"
      ></i>
      <p class="text-center text-slate-700 text-sm mt-5">
        {{ $t('image_drop_here') }}
      </p>
    </div>

    <Button
      @click="uploadImage"
      :disabled="image === undefined"
      class="!px-7 mt-5"
      :loading="loading"
      >{{ $t('save') }}</Button
    >
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { toast } from 'vue-sonner'

import { useApi } from '@/composables/useApi.ts'
import { useHandleErrors } from '@/composables/useHandleErrors.ts'
import { useAuthStore } from '@/store/auth/auth.ts'
import { IAuthUser } from '@/types/auth.ts'
import { IApiResponse } from '@/types/common.ts'
import { getFileUrl } from '@/utils/get-file-url/get-file-url.ts'

defineOptions({
  name: 'ProfileUpdateAvatar',
})

const authStore = useAuthStore()
const { t } = useI18n()
const api = useApi()
const error = useHandleErrors()

const loading = ref(false)
async function uploadImage() {
  try {
    loading.value = true
    const formData = new FormData()
    formData.append('image', image.value as File)
    const { data } = await api.$post<IApiResponse<IAuthUser>>(
      '/api/v1/profile/avatar',
      formData,
    )
    authStore.authUser = data
    image.value = undefined
    toast.success(t('avatar_updated'))
  } catch (err) {
    error.handle(err)
  } finally {
    loading.value = false
  }
}

const image = ref<File | null | undefined>(undefined)
const previewEl = ref<HTMLImageElement>()
watch(image, () => {
  if (image.value instanceof File) {
    setTimeout(() => {
      const reader = new FileReader()
      reader.onload = (e) => {
        previewEl.value?.setAttribute('src', e.target!.result as string)
      }
      reader.readAsDataURL(image.value as File)
    }, 1)
  }
})

const setImage = (file: File) => {
  if (loading.value) return
  if (!file.type.includes('image')) return toast.error(t('only_image_allowed'))
  image.value = file
}

function openFileUpload() {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = 'image/*'
  input.oninput = (e: any) => {
    setImage(e.target.files[0] as File)
  }
  input.click()
}

function onFileDrop(e: DragEvent) {
  if (e.dataTransfer?.files?.length) {
    setImage(e.dataTransfer?.files[0])
  }
}
</script>
