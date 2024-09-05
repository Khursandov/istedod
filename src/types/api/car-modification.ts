import { ICarModel } from '@/types/api/car-models.ts'
import { IMongoModel } from '@/types/api/mongo-model.ts'

export interface ICarModification
  extends Pick<IMongoModel, '_id' | 'updatedAt'> {
  name: string
  price: number | null
  car_id: ICarModel['_id']
  isActive: boolean
}
