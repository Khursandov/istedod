import { ICarModel } from '@/types/api/car-models.ts'
import { IMongoModel } from '@/types/api/mongo-model.ts'
import { TLocaleField } from '@/types/locales.ts'

export interface ICarColor extends IMongoModel {
  name: TLocaleField
  image: string
  code: string
  car_id: ICarModel['_id']
  status: boolean
}
