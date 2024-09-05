import { RouteLocationNormalized, RouteRecordRaw } from 'vue-router'

export class GuardClass {
  canActivate(context: IGuardContext): Promise<boolean> | boolean {
    // Make logic here.
    return true
  }
}

export interface IGuardContext {
  to: RouteLocationNormalized
  from: RouteLocationNormalized
}

export type TArrayOfMetaGuards = Array<typeof GuardClass.name>

export type TRouteRecordLike = {
  meta?:
    | {
        guards?: TArrayOfMetaGuards
      }
    | Record<string, any>
} & RouteRecordRaw
