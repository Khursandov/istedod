import { defineStore } from 'pinia'
import { unref } from 'vue'

import { useApi } from '@/composables/useApi.ts'
import { IBankMain } from '@/types/api/banks/main.ts'
import { IApiResponse } from '@/types/common.ts'

import { IMainBanksStoreState } from './main-banks.types.ts'

export const useMainBanksStore = defineStore('main-banks', {
  state: (): IMainBanksStoreState => ({
    banks: new Map(),
  }),
  getters: {
    getBank: (state) => (id: IBankMain['_id']) => state.banks.get(id),
  },
  actions: {
    async fetchBank(id: IBankMain['_id'], force?: boolean): Promise<IBankMain> {
      if (!force && this.banks.has(id))
        return unref(this.banks.get(id)) as IBankMain
      const { data } = await useApi().$get<IApiResponse<IBankMain>>(
        `/api/v1/main-banks/${id}`,
      )
      this.banks.set(data._id, data)
      return data
    },
  },
})
