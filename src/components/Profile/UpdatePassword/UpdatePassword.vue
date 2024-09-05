<template>
  <form @submit.prevent="submit">
    <div class="flex gap-5 flex-col">
      <div class="w-full flex flex-col gap-1">
        <label for="profile_passwords_current">
          {{ $t('current_password') }}
        </label>
        <Password
          v-model="passwordForm.password"
          @blur="$v.passwordForm.password.$touch"
          :invalid="$v.passwordForm.password.$error"
          :disabled="loading"
          id="profile_passwords_current"
          toogle-mask
          :feedback="false"
        />
        <div class="flex flex-col" v-if="$v.passwordForm.password.$error">
          <small
            class="text-red-500"
            v-for="err in $v.passwordForm.password.$errors"
            :key="err.$uid"
          >
            {{ err.$message }}
          </small>
        </div>
      </div>

      <div class="w-full flex flex-col gap-1">
        <label for="profile_passwords_new">
          {{ $t('new_password') }}
        </label>
        <Password
          v-model="passwordForm.newPassword"
          @blur="$v.passwordForm.newPassword.$touch"
          :invalid="$v.passwordForm.newPassword.$error"
          :disabled="loading"
          id="profile_passwords_new"
          toogle-mask
          :feedback="false"
        />
        <div class="flex flex-col" v-if="$v.passwordForm.newPassword.$error">
          <small
            class="text-red-500"
            v-for="err in $v.passwordForm.newPassword.$errors"
            :key="err.$uid"
          >
            {{ err.$message }}
          </small>
        </div>
      </div>

      <div class="w-full flex flex-col gap-1">
        <label for="profile_passwords_confirm">
          {{ $t('confirm_new_password') }}
        </label>
        <Password
          v-model="passwordForm.newPasswordConfirm"
          @blur="$v.passwordForm.newPasswordConfirm.$touch"
          :invalid="$v.passwordForm.newPasswordConfirm.$error"
          :disabled="loading"
          id="profile_passwords_current"
          toogle-mask
          :feedback="false"
        />
        <div
          class="flex flex-col"
          v-if="$v.passwordForm.newPasswordConfirm.$error"
        >
          <small
            class="text-red-500"
            v-for="err in $v.passwordForm.newPasswordConfirm.$errors"
            :key="err.$uid"
          >
            {{ err.$message }}
          </small>
        </div>
      </div>

      <div>
        <Button type="submit" class="!px-7">{{ $t('update') }}</Button>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import useVuelidate from '@vuelidate/core'
import { helpers, required, sameAs } from '@vuelidate/validators'
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { toast } from 'vue-sonner'

import { useApi } from '@/composables/useApi.ts'
import { useHandleErrors } from '@/composables/useHandleErrors.ts'
import { EGender } from '@/types/api/employees.ts'

defineOptions({
  name: 'ProfileUpdatePassword',
})

const { t } = useI18n()
const api = useApi()
const error = useHandleErrors()

const loading = ref(false)
async function submit() {
  $v.value.passwordForm.$touch()
  if ($v.value.passwordForm.$invalid) return
  try {
    loading.value = true
    await api.$patch('/api/v1/profile/password', passwordForm)
    toast.success(t('password_updated'))
    passwordForm.password = ''
    passwordForm.newPassword = ''
    passwordForm.newPasswordConfirm = ''
    $v.value.$reset()
  } catch (err) {
    error.handle(err)
  } finally {
    loading.value = false
  }
}

const passwordForm = reactive({
  password: '',
  newPassword: '',
  newPasswordConfirm: '',
})
const $v = useVuelidate(
  {
    passwordForm: {
      password: {
        required: helpers.withMessage(t('field_required'), required),
      },
      newPassword: {
        required: helpers.withMessage(t('field_required'), required),
      },
      newPasswordConfirm: {
        sameAs: helpers.withMessage(
          t('passwords_mismatch'),
          sameAs(computed(() => passwordForm.newPassword)),
        ),
      },
    },
  },
  { passwordForm },
)

const genders = computed<{ label: string; value: EGender }[]>(() => [
  { label: t('male'), value: EGender.MALE },
  { label: t('female'), value: EGender.FEMALE },
])
</script>
