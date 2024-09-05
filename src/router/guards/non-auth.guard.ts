import { GuardClass, IGuardContext } from '@/router/guards/guard.types.ts'
import { GuardError } from '@/router/guards/index.ts'
import { useAuthStore } from '@/store/auth/auth.ts'

export class NonAuthGuard implements GuardClass {
  public async canActivate({ to }: IGuardContext) {
    const { loadTokens, getAuthUser } = useAuthStore()
    const tokens = loadTokens()

    if (tokens || getAuthUser)
      throw new GuardError({
        name: 'Dashboard',
      })
    return true
  }
}
