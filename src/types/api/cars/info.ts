import { ICarModel } from '@/types/api/car-models.ts'
import { IMongoModel } from '@/types/api/mongo-model.ts'
import { TLocaleField } from '@/types/locales.ts'

export interface ICarInfo extends IMongoModel {
  title: TLocaleField
  description: TLocaleField
  carId: ICarModel['_id']
  isActive: boolean
}

export interface ICarInfoPayload {
  title: TLocaleField
  description: TLocaleField
  carId: ICarModel['_id']
  isActive: boolean
}
