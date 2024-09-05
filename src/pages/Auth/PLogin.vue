<template>
  <div class="w-full max-w-[400px]">
    <h1 class="font-semibold text-2xl text-slate-900">{{ $t('login') }}</h1>
    <p class="text-slate-700 mt-2">{{ $t('login_description') }}</p>

    <form @submit.prevent="submit" class="flex flex-col gap-5 mt-5">
      <div class="w-full flex flex-col gap-1">
        <InputGroup>
          <InputGroupAddon>+998</InputGroupAddon>
          <InputMask
            @blur="$v.phone.$touch"
            :invalid="$v.phone.$error"
            :disabled="loading"
            v-model="form.phone"
            mask="99 999-99-99"
            :placeholder="$t('phone')"
          />
        </InputGroup>
        <div v-if="$v.phone.$error">
          <small
            class="text-red-500"
            v-for="err in $v.phone.$errors"
            :key="err.$uid"
          >
            {{ err.$message }}
          </small>
        </div>
      </div>

      <div class="w-full flex flex-col gap-1">
        <Password
          v-model="form.password"
          @blur="$v.password.$touch"
          :invalid="$v.password.$error"
          :disabled="loading"
          :placeholder="$t('password')"
          toogle-mask
          :feedback="false"
        />
        <div v-if="$v.password.$error">
          <small
            class="text-red-500"
            v-for="err in $v.password.$errors"
            :key="err.$uid"
          >
            {{ err.$message }}
          </small>
        </div>
      </div>

      <div class="flex gap-2 items-center">
        <Checkbox id="form_login_save_me" v-model="form.saveMe" binary />
        <label for="form_login_save_me" class="text-slate-600">{{
          $t('save_me')
        }}</label>
      </div>

      <Button class="w-full" type="submit">{{ $t('login') }}</Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { helpers, required } from '@vuelidate/validators'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'

import { useApi } from '@/composables/useApi.ts'
import { useHandleErrors } from '@/composables/useHandleErrors.ts'
import { useAuthStore } from '@/store/auth/auth.ts'
import { IAuthTokens, ILoginPayload } from '@/types/auth'
import { IApiResponse } from '@/types/common.ts'
import { formatPhone } from '@/utils/format-phone/format-phone.ts'

const { t } = useI18n()
const error = useHandleErrors()
const api = useApi()
const authStore = useAuthStore()
const router = useRouter()

const form = reactive<ILoginPayload>({
  phone: '',
  password: '',
  saveMe: false,
})

const $v = useVuelidate(
  {
    phone: { required: helpers.withMessage(t('field_required'), required) },
    password: { required: helpers.withMessage(t('field_required'), required) },
  },
  form,
)

const loading = ref(false)
async function submit() {
  try {
    const { data } = await api.$post<
      IApiResponse<IAuthTokens>,
      Omit<ILoginPayload, 'saveMe'>
    >('/api/v1/auth/login', {
      phone: formatPhone(form.phone),
      password: form.password,
    })
    authStore.setTokens(data, form.saveMe)
    await authStore.fetchUser()
    toast.success(t('signed_in'))
    router.push({ name: 'Dashboard' })
  } catch (err) {
    error.handle(err)
  } finally {
    loading.value = false
  }
}
</script>
