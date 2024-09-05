import { defineStore } from 'pinia'
import { unref } from 'vue'

import { useApi } from '@/composables/useApi.ts'
import { IBrand } from '@/types/api/brands.ts'
import { IApiResponse } from '@/types/common.ts'

import { IBrandsStoreState } from './brands.types.ts'

export const useBrandsStore = defineStore('brands', {
  state: (): IBrandsStoreState => ({
    brands: new Map(),
  }),
  getters: {
    getBrand: (state) => (id: IBrand['_id']) => state.brands.get(id),
  },
  actions: {
    async fetchBrand(id: IBrand['_id'], force?: boolean): Promise<IBrand> {
      if (!force && this.brands.has(id))
        return unref(this.brands.get(id)) as IBrand
      const { data } = await useApi().$get<IApiResponse<IBrand>>(
        `/api/v1/brands/${id}`,
      )
      this.brands.set(data._id, data)
      return data
    },
  },
})
