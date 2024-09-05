import { defineStore } from 'pinia'
import { unref } from 'vue'

import { useApi } from '@/composables/useApi.ts'
import { IBranchStoreState } from '@/store/branch/branch.types.ts'
import { IBranch } from '@/types/api/branches.ts'
import { IApiResponse } from '@/types/common.ts'

export const useBranchStore = defineStore('branch', {
  state: (): IBranchStoreState => ({
    branches: new Map(),
  }),
  getters: {
    getBranch: (state) => (id: IBranch['_id']) => state.branches.get(id),
  },
  actions: {
    async fetchBranch(id: IBranch['_id'], force?: boolean): Promise<IBranch> {
      if (!force && this.branches.has(id))
        return unref(this.branches.get(id)) as IBranch
      const { data } = await useApi().$get<IApiResponse<IBranch>>(
        `/api/v1/branches/${id}`,
      )
      this.branches.set(data._id, data)
      return data
    },
  },
})
