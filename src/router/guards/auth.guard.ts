import { GuardClass, IGuardContext } from '@/router/guards/guard.types.ts'
import { GuardError } from '@/router/guards/index.ts'
import { useAuthStore } from '@/store/auth/auth.ts'

export class AuthGuard implements GuardClass {
  public async canActivate({ to }: IGuardContext) {
    const { fetchUser, loadTokens, logout } = useAuthStore()
    const tokens = loadTokens()

    try {
      if (!tokens) throw new Error()
      await fetchUser()
      return true
    } catch {
      logout()
      throw new GuardError({
        name: 'AuthLogin',
      })
    }
  }
}
