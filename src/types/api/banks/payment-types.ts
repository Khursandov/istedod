import { IMongoModel } from '@/types/api/mongo-model.ts'
import { TLocaleField } from '@/types/locales.ts'

export interface IBankPaymentType extends IMongoModel {
  name: TLocaleField
  isActive: boolean
}

export interface IBankPaymentTypePayload {
  name: TLocaleField
  isActive: boolean
}
