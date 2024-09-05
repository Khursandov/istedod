import { GuardClass, IGuardContext } from '@/router/guards/guard.types.ts'
import { GuardError } from '@/router/guards/index.ts'
import { useCarsStore } from '@/store/cars/cars.ts'

export class CarGuard implements GuardClass {
  public async canActivate({ to }: IGuardContext) {
    const carsStore = useCarsStore()
    try {
      await carsStore.fetchCar(to.params.id.toString())
      return true
    } catch {
      throw new GuardError({
        name: 'Dashboard',
      })
    }
  }
}
