import { defineStore } from 'pinia'
import { unref } from 'vue'

import { useApi } from '@/composables/useApi.ts'
import { ICarModelModificationsStoreState } from '@/store/car-modifications/car-modifications.types.ts'
import { ICarModelModification } from '@/types/api/cars/modifications.ts'
import { IApiResponse } from '@/types/common.ts'

export const useCarModificationsStore = defineStore('car-modifications', {
  state: (): ICarModelModificationsStoreState => ({
    modifications: new Map(),
  }),
  getters: {
    getModification: (state) => (id: ICarModelModification['_id']) =>
      state.modifications.get(id),
  },
  actions: {
    async fetchCarModification(
      id: ICarModelModification['_id'],
      force?: boolean,
    ): Promise<ICarModelModification> {
      if (!force && this.modifications.has(id))
        return unref(this.modifications.get(id)) as ICarModelModification
      const { data } = await useApi().$get<IApiResponse<ICarModelModification>>(
        `/api/v1/cars/modifications/${id}`,
      )
      this.modifications.set(data._id, data)
      return data
    },
  },
})
