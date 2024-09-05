import {
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteLocationRaw,
} from 'vue-router'

import { AuthGuard } from '@/router/guards/auth.guard.ts'
import { BranchGuard } from '@/router/guards/branch.guard.ts'
import { BrandGuard } from '@/router/guards/brand.guard.ts'
import { CarGuard } from '@/router/guards/car.guard.ts'
import { CarInfoGuard } from '@/router/guards/car-info.guard.ts'
import { CarModificationGuard } from '@/router/guards/car-modification.guard.ts'
import { EmployeeGuard } from '@/router/guards/employee.guard.ts'
import { GuardClass, TArrayOfMetaGuards } from '@/router/guards/guard.types.ts'
import { MainBankGuard } from '@/router/guards/main-bank.guard.ts'
import { NonAuthGuard } from '@/router/guards/non-auth.guard.ts'

export class GuardError extends Error {
  public cause: RouteLocationRaw
  constructor(redirect: RouteLocationRaw) {
    super('RouteGuardError')
    this.cause = redirect
  }
}

const RegisteredGuards: (typeof GuardClass)[] = [
  BranchGuard,
  EmployeeGuard,
  AuthGuard,
  NonAuthGuard,
  MainBankGuard,
  BrandGuard,
  CarGuard,
  CarModificationGuard,
  CarInfoGuard,
]

const guards: Record<typeof GuardClass.name, GuardClass> = {}
for (const guard of RegisteredGuards) {
  if (guards.hasOwnProperty(guard.name)) {
    throw new Error('Duplicated guard name: ' + guard.name)
  }
  Object.assign(guards, {
    [guard.name]: guard,
  })
}

export async function RouteGuards(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) {
  if (
    !to?.meta?.hasOwnProperty('guards') ||
    !(to?.meta?.guards as TArrayOfMetaGuards)?.length
  ) {
    next()
  } else {
    const metaGuards = to.meta.guards as TArrayOfMetaGuards
    for (const guardName of metaGuards) {
      try {
        // @ts-ignore
        const guard: GuardClass = new guards[guardName]()
        await guard.canActivate({ to, from })
      } catch (err: unknown) {
        const redirectTo = (err as GuardError).cause as RouteLocationRaw
        next(redirectTo)
        return
      }
    }
    next()
  }
}
