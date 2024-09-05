import { ICarInfo } from '@/types/api/cars/info.ts'
import { IMongoModel } from '@/types/api/mongo-model.ts'
import { TLocaleField } from '@/types/locales.ts'

export interface ICarSubInfo extends IMongoModel {
  title: TLocaleField
  description: TLocaleField
  image: string
  infoId: ICarInfo['_id']
}

export interface ICarSubInfoPayload {
  title: TLocaleField
  description: TLocaleField
  image: string | File
  infoId: ICarInfo['_id']
}
