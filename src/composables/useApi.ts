import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  CreateAxiosDefaults,
} from 'axios'

import { useFingerprint } from '@/composables/useFingerprint.ts'
import { useAuthStore } from '@/store/auth/auth.ts'
import { useCacheStore } from '@/store/cache/cache.ts'

export const useApi = (apiUrl?: string) => {
  const baseURL = apiUrl || import.meta.env.VITE_APP_SERVER_URL
  const cacheStore = useCacheStore()
  const authStore = useAuthStore()
  const fp = useFingerprint()

  const $service = (config?: CreateAxiosDefaults): AxiosInstance => {
    const headers = {
      ...config?.headers,
      Fingerprint: fp.fingerprint.value,
      // Default headers
    }
    if (authStore.getTokens) {
      Object.assign(headers, {
        Authorization: `Bearer ${authStore.getTokens.accessToken}`,
      })
    }
    const _axios = axios.create({
      ...config,
      baseURL,
      headers,
    })
    // Use interceptors here
    _axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          authStore.getTokens?.refreshToken &&
          error.response.status === 401 &&
          !(error.response.config.url as string).includes('refresh-token')
        ) {
          const res = await authStore.refreshToken()
          return _axios.request({
            ...error.config,
            headers: {
              ...error.config.headers,
              Authorization: `Bearer ${res.accessToken}`,
            },
          })
        }
        return Promise.reject(error)
      },
    )
    return _axios
  }

  function $get<R = unknown>(
    url: string,
    config?: AxiosRequestConfig,
    cache?: boolean,
  ): Promise<R> {
    return new Promise((resolve, reject) => {
      const cacheKey = cacheStore.generateKey(url, config?.params)
      if (cache) {
        const cachedResponse = cacheStore.getApiResponse(cacheKey)
        if (cachedResponse) {
          resolve(cachedResponse)
          return
        }
      }
      $service()
        .get<R>(url, config)
        .then((response) => {
          if (cache) cacheStore.setResponse(cacheKey, response.data)
          resolve(response.data)
        })
        .catch((error) => reject(error))
    })
  }

  function $delete<R = unknown>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return new Promise((resolve, reject) => {
      $service()
        .delete<R>(url, config)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error))
    })
  }

  function $post<R = unknown, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return new Promise((resolve, reject) => {
      $service()
        .post<R>(url, data, config)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error))
    })
  }

  function $put<R = unknown, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return new Promise((resolve, reject) => {
      $service()
        .put<R>(url, data, config)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error))
    })
  }

  function $patch<R = unknown, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return new Promise((resolve, reject) => {
      $service()
        .patch<R>(url, data, config)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error))
    })
  }

  return { $get, $delete, $post, $patch, $put }
}
