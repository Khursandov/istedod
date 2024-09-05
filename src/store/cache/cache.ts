import { defineStore } from 'pinia'
import { unref } from 'vue'

export const useCacheStore = defineStore('cache', {
  state: () => ({
    apiData: new Map<string, any>(),
  }),
  getters: {
    getApiResponse: (state) => {
      return (key: string) => state.apiData.get(key)
    },
  },
  actions: {
    setResponse<T = any>(key: string, response: T, override?: boolean) {
      const exists = this.getApiResponse(key)
      if (exists && !override) {
        return false
      }
      this.apiData.set(key, unref(response))
      return true
    },
    removeResponse(key: string) {
      const data = this.getApiResponse(key)
      this.apiData.delete(key)
      return data
    },
    generateKey(
      url: string,
      query?: Record<string, string | number | boolean>,
    ) {
      let key = url
      if (query && Object.keys(query).length > 0) {
        key += '?'
        for (const i of Object.keys(query).sort()) {
          key += `${i}=${query[i]}&`
        }
        key = key.slice(0, -1)
      }
      return key
    },
  },
})
