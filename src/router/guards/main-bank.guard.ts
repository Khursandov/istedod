import { GuardClass, IGuardContext } from '@/router/guards/guard.types.ts'
import { GuardError } from '@/router/guards/index.ts'
import { useMainBanksStore } from '@/store/main-banks/main-banks.ts'

export class MainBankGuard implements GuardClass {
  public async canActivate({ to }: IGuardContext) {
    const bankStore = useMainBanksStore()
    try {
      await bankStore.fetchBank(to.params.id.toString())
      return true
    } catch {
      throw new GuardError({
        name: 'Dashboard',
      })
    }
  }
}
