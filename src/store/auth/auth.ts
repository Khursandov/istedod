import { defineStore } from 'pinia'

import { useApi } from '@/composables/useApi.ts'
import { LocalStorageKey } from '@/global/enums/local-storage.ts'
import { SessionStorageKey } from '@/global/enums/session-storage.ts'
import { IAuthStoreState } from '@/store/auth/auth.types.ts'
import { IAuthTokens, IAuthUser } from '@/types/auth.ts'
import { IApiResponse } from '@/types/common'

export const useAuthStore = defineStore('auth', {
  state: (): IAuthStoreState => ({
    tokens: null,
    authUser: null,
  }),
  getters: {
    getTokens: (state) => state.tokens,
    getAuthUser: (state) => state.authUser,
  },
  actions: {
    loadSessionTokens(): IAuthTokens | null {
      const accessToken = sessionStorage.getItem(SessionStorageKey.AccessToken)
      const refreshToken = sessionStorage.getItem(
        SessionStorageKey.RefreshToken,
      )
      if (accessToken && refreshToken) return { accessToken, refreshToken }
      return null
    },
    loadLocalTokens(): IAuthTokens | null {
      const accessToken = localStorage.getItem(LocalStorageKey.AccessToken)
      const refreshToken = localStorage.getItem(LocalStorageKey.RefreshToken)
      if (accessToken && refreshToken) return { accessToken, refreshToken }
      return null
    },
    loadTokens() {
      const sessionTokens = this.loadSessionTokens()
      if (sessionTokens) {
        this.tokens = sessionTokens
        return sessionTokens
      }
      const localTokens = this.loadLocalTokens()
      if (localTokens) {
        this.tokens = localTokens
        return localTokens
      }
      return null
    },
    setTokens(tokens: IAuthTokens, save?: boolean) {
      this.tokens = tokens
      if (!save) {
        sessionStorage.setItem(
          SessionStorageKey.AccessToken,
          tokens.accessToken,
        )
        sessionStorage.setItem(
          SessionStorageKey.RefreshToken,
          tokens.refreshToken,
        )
      } else {
        localStorage.setItem(LocalStorageKey.AccessToken, tokens.accessToken)
        localStorage.setItem(LocalStorageKey.RefreshToken, tokens.refreshToken)
      }
    },
    clearStorage() {
      sessionStorage.removeItem(SessionStorageKey.AccessToken)
      sessionStorage.removeItem(SessionStorageKey.RefreshToken)
      localStorage.removeItem(SessionStorageKey.RefreshToken)
      localStorage.removeItem(SessionStorageKey.RefreshToken)
    },
    logout() {
      this.clearStorage()
      this.tokens = null
      this.authUser = null
    },
    async fetchUser() {
      if (this.authUser) return this.authUser
      const user = await useApi().$get<IAuthUser>('/api/v1/auth/me')
      this.authUser = user
      return user
    },
    async refreshToken() {
      const { data } = await useApi().$post<
        IApiResponse<Pick<IAuthTokens, 'accessToken'>>
      >('/api/v1/auth/refresh-token', {
        token: this.getTokens?.refreshToken,
      })
      const session = sessionStorage.getItem(SessionStorageKey.RefreshToken)
      this.setTokens(
        {
          accessToken: data.accessToken,
          refreshToken: this.getTokens!.refreshToken,
        },
        session == null,
      )
      return data
    },
  },
})
