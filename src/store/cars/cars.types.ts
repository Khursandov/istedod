import { ICar } from '@/types/api/cars/cars.ts'

export interface ICarsStoreState {
  cars: Map<ICar['_id'], ICar>
}
