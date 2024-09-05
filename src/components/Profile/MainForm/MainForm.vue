<template>
  <form @submit.prevent="submit">
    <div class="flex gap-5 flex-col">
      <div class="w-full flex flex-col gap-1">
        <label for="profile_main_form_name">
          {{ $t('full_name') }}
        </label>
        <InputText
          :disabled="loading"
          id="profile_main_form_name"
          v-model="mainForm.name"
          class="!w-full"
          :invalid="$v.mainForm.name.$error"
          @blur="$v.mainForm.name.$touch"
        />
        <div v-if="$v.mainForm.name.$error">
          <small
            class="text-red-500"
            v-for="err in $v.mainForm.name.$errors"
            :key="err.$uid"
          >
            {{ err.$message }}
          </small>
        </div>
      </div>
      <div class="w-full flex flex-col gap-1">
        <label for="profile_main_form_phone">
          {{ $t('phone') }}
        </label>
        <InputGroup>
          <InputGroupAddon>+998</InputGroupAddon>
          <InputMask
            @blur="$v.mainForm.phone.$touch"
            :invalid="$v.mainForm.phone.$error"
            id="profile_main_form_phone"
            v-model="mainForm.phone"
            mask="99 999-99-99"
            :disabled="loading"
          />
        </InputGroup>
        <div v-if="$v.mainForm.phone.$error">
          <small
            class="text-red-500"
            v-for="err in $v.mainForm.phone.$errors"
            :key="err.$uid"
          >
            {{ err.$message }}
          </small>
        </div>
      </div>
      <div class="w-full flex flex-col gap-1">
        <label for="profile_main_form_email">
          {{ $t('email') }}
        </label>
        <InputText
          :disabled="loading"
          type="email"
          id="profile_main_form_email"
          v-model="mainForm.email"
          class="!w-full"
          :invalid="$v.mainForm.email.$error"
          @blur="$v.mainForm.email.$touch"
        />
        <div v-if="$v.mainForm.email.$error">
          <small
            class="text-red-500"
            v-for="err in $v.mainForm.email.$errors"
            :key="err.$uid"
          >
            {{ err.$message }}
          </small>
        </div>
      </div>
      <div class="w-full flex flex-col gap-1">
        <label for="profile_main_form_dob">
          {{ $t('birth_date') }}
        </label>
        <DatePicker
          :disabled="loading"
          id="profile_main_form_dob"
          v-model="mainForm.dob"
          date-format="dd.mm.yy"
          :placeholder="$t('date_format_hint')"
          :max-date="new Date()"
          class="!w-full"
          :invalid="$v.mainForm.dob.$error"
          @blur="$v.mainForm.dob.$touch"
        />
        <div v-if="$v.mainForm.dob.$error">
          <small
            class="text-red-500"
            v-for="err in $v.mainForm.dob.$errors"
            :key="err.$uid"
          >
            {{ err.$message }}
          </small>
        </div>
      </div>
      <div class="w-full flex flex-col gap-1">
        <label for="profile_main_form_gender">
          {{ $t('gender') }}
        </label>
        <Select
          :disabled="loading"
          id="profile_main_form_gender"
          :options="genders"
          option-label="label"
          option-value="value"
          v-model="mainForm.gender"
          class="!w-full"
          :invalid="$v.mainForm.gender.$error"
          @blur="$v.mainForm.gender.$touch"
        />
        <div v-if="$v.mainForm.gender.$error">
          <small
            class="text-red-500"
            v-for="err in $v.mainForm.gender.$errors"
            :key="err.$uid"
          >
            {{ err.$message }}
          </small>
        </div>
      </div>

      <div>
        <Button type="submit" class="!px-7">{{ $t('save') }}</Button>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import useVuelidate from '@vuelidate/core'
import { email, helpers, required } from '@vuelidate/validators'
import dayjs from 'dayjs'
import DatePicker from 'primevue/datepicker'
import Select from 'primevue/select'
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { toast } from 'vue-sonner'

import { useApi } from '@/composables/useApi.ts'
import { useHandleErrors } from '@/composables/useHandleErrors.ts'
import { useAuthStore } from '@/store/auth/auth.ts'
import { EGender } from '@/types/api/employees.ts'
import { IAuthUser } from '@/types/auth.ts'
import { IApiResponse } from '@/types/common'
import { formatPhone } from '@/utils/format-phone/format-phone.ts'

defineOptions({
  name: 'ProfileMainForm',
})

const { t } = useI18n()
const authStore = useAuthStore()
const api = useApi()
const error = useHandleErrors()

const loading = ref(false)
async function submit() {
  $v.value.mainForm.$touch()
  if ($v.value.mainForm.$invalid) return
  try {
    loading.value = true
    const { data } = await api.$patch<IApiResponse<IAuthUser>>(
      '/api/v1/profile',
      {
        name: mainForm.name,
        email: mainForm.email,
        gender: mainForm.gender,
        phone: formatPhone(mainForm.phone),
        dob: dayjs(mainForm.dob).format('YYYY-MM-DD'),
      },
    )
    authStore.authUser = data
    toast.success(t('profile_updated'))
  } catch (err) {
    error.handle(err)
  } finally {
    loading.value = false
  }
}

const mainForm = reactive({
  phone: authStore.getAuthUser!.phone.replace(/\+998/, ''),
  name: authStore.getAuthUser!.name,
  email: authStore.getAuthUser!.email,
  gender: authStore.getAuthUser!.gender,
  dob: dayjs(authStore.getAuthUser!.dob).format('DD.MM.YYYY'),
})
const $v = useVuelidate(
  {
    mainForm: {
      name: {
        required: helpers.withMessage(t('field_required'), required),
      },
      phone: {
        required: helpers.withMessage(t('field_required'), required),
      },
      email: {
        required: helpers.withMessage(t('field_required'), required),
        email: helpers.withMessage(t('enter_valid_email'), email),
      },
      dob: {
        required: helpers.withMessage(t('field_required'), required),
      },
      gender: {
        required: helpers.withMessage(t('field_required'), required),
      },
    },
  },
  { mainForm },
)

const genders = computed<{ label: string; value: EGender }[]>(() => [
  { label: t('male'), value: EGender.MALE },
  { label: t('female'), value: EGender.FEMALE },
])
</script>
