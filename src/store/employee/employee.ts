import { defineStore } from 'pinia'
import { unref } from 'vue'

import { useApi } from '@/composables/useApi.ts'
import { IEmployee } from '@/types/api/employees'
import { IApiResponse } from '@/types/common.ts'

import { IEmployeeStoreState } from './employee.types'

export const useEmployeeStore = defineStore('employee', {
  state: (): IEmployeeStoreState => ({
    employees: new Map(),
  }),
  getters: {
    getEmployee: (state) => (id: IEmployee['_id']) => state.employees.get(id),
  },
  actions: {
    async fetchEmployee(
      id: IEmployee['_id'],
      force?: boolean,
    ): Promise<IEmployee> {
      if (!force && this.employees.has(id))
        return unref(this.employees.get(id)) as IEmployee
      const { data } = await useApi().$get<IApiResponse<IEmployee>>(
        `/api/v1/employees/${id}`,
      )
      this.employees.set(data._id, data)
      return data
    },
  },
})
