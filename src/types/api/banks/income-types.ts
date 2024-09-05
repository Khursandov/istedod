import { IMongoModel } from '@/types/api/mongo-model.ts'
import { TLocaleField } from '@/types/locales.ts'

export interface IBankIncomeType extends IMongoModel {
  name: TLocaleField
  isActive: boolean
}

export interface IBankIncomeTypePayload {
  name: TLocaleField
  isActive: boolean
}
