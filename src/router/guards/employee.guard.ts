import { GuardClass, IGuardContext } from '@/router/guards/guard.types.ts'
import { GuardError } from '@/router/guards/index.ts'
import { useEmployeeStore } from '@/store/employee/employee.ts'

export class EmployeeGuard implements GuardClass {
  public async canActivate({ to }: IGuardContext) {
    const employeeStore = useEmployeeStore()
    try {
      await employeeStore.fetchEmployee(to.params.id.toString())
      return true
    } catch {
      throw new GuardError({
        name: 'Dashboard',
      })
    }
  }
}
