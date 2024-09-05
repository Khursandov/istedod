import { ICarModel } from '@/types/api/car-models.ts'
import { IMongoModel } from '@/types/api/mongo-model.ts'
import { TLocaleField } from '@/types/locales.ts'

export interface ICarColor extends IMongoModel {
  name: TLocaleField
  code: string
  image: string
  carId: ICarModel['_id']
}

export interface ICarColorPayload {
  name: TLocaleField
  code: string
  image: string | File
  carId: ICarModel['_id']
}
