import { defineStore } from 'pinia'
import { unref } from 'vue'

import { useApi } from '@/composables/useApi.ts'
import { ICarInfoStoreState } from '@/store/car-infos/car-infos.types.ts'
import { ICarInfo } from '@/types/api/cars/info.ts'
import { IApiResponse } from '@/types/common.ts'

export const useCarInfosStore = defineStore('car-infos', {
  state: (): ICarInfoStoreState => ({
    infos: new Map(),
  }),
  getters: {
    getInfo: (state) => (id: ICarInfo['_id']) => state.infos.get(id),
  },
  actions: {
    async fetchCarInfo(
      id: ICarInfo['_id'],
      force?: boolean,
    ): Promise<ICarInfo> {
      if (!force && this.infos.has(id))
        return unref(this.infos.get(id)) as ICarInfo
      const { data } = await useApi().$get<IApiResponse<ICarInfo>>(
        `/api/v1/car/infos/${id}`,
      )
      this.infos.set(data._id, data)
      return data
    },
  },
})
