import { IMongoModel } from '@/types/api/mongo-model.ts'
import { TLocaleField } from '@/types/locales.ts'

export interface IBankRefundType extends IMongoModel {
  name: TLocaleField
  isActive: boolean
}

export interface IBankRefundTypePayload {
  name: TLocaleField
  isActive: boolean
}
