import { GuardClass, IGuardContext } from '@/router/guards/guard.types.ts'
import { GuardError } from '@/router/guards/index.ts'
import { useCarInfosStore } from '@/store/car-infos/car-infos.ts'

export class CarInfoGuard implements GuardClass {
  public async canActivate({ to }: IGuardContext) {
    const store = useCarInfosStore()
    try {
      await store.fetchCarInfo(to.params.infoId.toString())
      return true
    } catch {
      throw new GuardError({
        name: 'Dashboard',
      })
    }
  }
}
