<template>
  <DataTable :loading="loading" :value="rows" scrollable stripedRows>
    <Column header="№" class="!w-[65px]">
      <template #body="{ index }">
        {{ index + 1 + (total / state.limit) * state.offset }}
      </template>
    </Column>
    <Column
      v-for="col in cols"
      :key="col.key"
      :field="col.key"
      :header="col.title"
      :class="col?.colClass"
    >
      <template #body="{ data }">
        <slot :name="`td-${col.key as string}`" v-bind="data">
          {{ data[col.key] }}
        </slot>
      </template>
    </Column>
    <Column
      v-if="actions"
      :header="$t('actions')"
      field="_actions"
      class="w-[150px]"
    >
      <template #body="{ data }">
        <div class="flex gap-2">
          <Button
            size="small"
            severity="secondary"
            type="button"
            class="w-10 h-10"
            icon="pi pi-eye"
            v-if="canView"
            @click="$emit('view', data)"
          />
          <Button
            size="small"
            severity="secondary"
            type="button"
            class="w-10 h-10"
            icon="pi pi-pencil"
            v-if="canEdit"
            @click="$emit('edit', data)"
          />
          <Button
            size="small"
            severity="danger"
            type="button"
            class="w-10 h-10"
            icon="pi pi-trash"
            v-if="canDelete"
            @click="$emit('delete', data)"
          />
        </div>
      </template>
    </Column>

    <template #footer>
      <div>
        <Paginator
          v-model:rows="state.limit"
          v-model:first="state.offset"
          :total-records="total"
          :rows-per-page-options="[5, 10, 20, 50]"
        ></Paginator>
      </div>
    </template>
  </DataTable>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { toast } from 'vue-sonner'

import { ITableCol } from '@/components/DynamicTable/DynamicTable.types.ts'
import { useApi } from '@/composables/useApi.ts'
import { useQuery } from '@/composables/useQuery.ts'
import { TDataList } from '@/types/common.ts'

interface Props {
  url: string
  cols: ITableCol[]
  query?: Record<string, string | boolean | number>
  filterDelay?: number
  actions?: boolean
  canView?: boolean
  canEdit?: boolean
  canDelete?: boolean
  type: 'UNIVERSITY' | 'LYCEUM'
}
const props = withDefaults(defineProps<Props>(), {
  filterDelay: 500,
  actions: true,
  canView: true,
  canEdit: true,
  canDelete: true,
})

interface Emits {
  (e: 'edit', val: any): void
  (e: 'delete', val: any): void
  (e: 'view', val: any): void
}
defineEmits<Emits>()

const api = useApi()
const route = useRoute()
const { t } = useI18n()
const { state } = useQuery<{ offset: number; limit: number }>(
  {
    offset: parseInt(route.query?.offset?.toString() || '0'),
    limit: parseInt(route.query?.limit?.toString() || '50'),
  },
  fetchData,
  {
    delay: props.filterDelay,
  },
)

const rows = shallowRef<Record<string, any>[]>([])
const total = ref(0)
const loading = ref(false)

async function fetchData() {
  try {
    loading.value = true
    const params = {
      offset: state.offset,
      size: state.limit,
    }
    if (props?.query) Object.assign(params, props.query)
    const res = await api.$get<any>(props.url, {
      params,
    })
    rows.value =
      res.content?.filter((item: any) => item?.studentType === props.type) || []
    total.value = res.size
  } catch {
    toast.error(t('unknown_error'))
  } finally {
    loading.value = false
  }
}

fetchData()

defineExpose({ fetchData })
</script>
