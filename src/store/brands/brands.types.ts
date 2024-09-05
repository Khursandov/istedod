import { IBrand } from '@/types/api/brands.ts'

export interface IBrandsStoreState {
  brands: Map<IBrand['_id'], IBrand>
}
