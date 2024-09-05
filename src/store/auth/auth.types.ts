import { IAuthTokens, IAuthUser } from '@/types/auth.ts'

export interface IAuthStoreState {
  tokens: IAuthTokens | null
  authUser: IAuthUser | null
}
