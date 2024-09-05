import { defineStore } from 'pinia'
import { unref } from 'vue'

import { useApi } from '@/composables/useApi.ts'
import { ICarsStoreState } from '@/store/cars/cars.types.ts'
import { ICar } from '@/types/api/cars/cars.ts'
import { IApiResponse } from '@/types/common.ts'

export const useCarsStore = defineStore('cars', {
  state: (): ICarsStoreState => ({
    cars: new Map(),
  }),
  getters: {
    getCar: (state) => (id: ICar['_id']) => state.cars.get(id),
  },
  actions: {
    async fetchCar(id: ICar['_id'], force?: boolean): Promise<ICar> {
      if (!force && this.cars.has(id)) return unref(this.cars.get(id)) as ICar
      const { data } = await useApi().$get<IApiResponse<ICar>>(
        `/api/v1/car-models/${id}`,
      )
      this.cars.set(data._id, data)
      return data
    },
  },
})
