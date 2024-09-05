import { GuardClass, IGuardContext } from '@/router/guards/guard.types.ts'
import { GuardError } from '@/router/guards/index.ts'
import { useCarModificationsStore } from '@/store/car-modifications/car-modifications.ts'

export class CarModificationGuard implements GuardClass {
  public async canActivate({ to }: IGuardContext) {
    const store = useCarModificationsStore()
    try {
      await store.fetchCarModification(to.params.modId.toString())
      return true
    } catch {
      throw new GuardError({
        name: 'Dashboard',
      })
    }
  }
}
