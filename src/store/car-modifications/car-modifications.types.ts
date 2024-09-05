import { ICarModelModification } from '@/types/api/cars/modifications.ts'

export interface ICarModelModificationsStoreState {
  modifications: Map<ICarModelModification['_id'], ICarModelModification>
}
