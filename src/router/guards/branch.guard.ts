import { GuardClass, IGuardContext } from '@/router/guards/guard.types.ts'
import { GuardError } from '@/router/guards/index.ts'
import { useBranchStore } from '@/store/branch/branch.ts'

export class BranchGuard implements GuardClass {
  public async canActivate({ to }: IGuardContext) {
    const branchStore = useBranchStore()
    try {
      await branchStore.fetchBranch(to.params.id.toString())
      return true
    } catch {
      throw new GuardError({
        name: 'Dashboard',
      })
    }
  }
}
