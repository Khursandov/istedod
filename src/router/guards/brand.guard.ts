import { GuardClass, IGuardContext } from '@/router/guards/guard.types.ts'
import { GuardError } from '@/router/guards/index.ts'
import { useBrandsStore } from '@/store/brands/brands.ts'

export class BrandGuard implements GuardClass {
  public async canActivate({ to }: IGuardContext) {
    const brandsStore = useBrandsStore()
    try {
      await brandsStore.fetchBrand(to.params.id.toString())
      return true
    } catch {
      throw new GuardError({
        name: 'Dashboard',
      })
    }
  }
}
