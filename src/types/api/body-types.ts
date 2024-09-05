import { IMongoModel } from '@/types/api/mongo-model.ts'
import { TLocaleField } from '@/types/locales.ts'

export interface IBodyType extends IMongoModel {
  name: TLocaleField
  isActive: boolean
}

export interface IBodyTypePayload {
  name: TLocaleField
  isActive?: boolean
}
