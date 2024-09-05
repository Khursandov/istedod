import { IMongoModel } from '@/types/api/mongo-model.ts'
import { TLocaleField } from '@/types/locales.ts'

export interface IBankLoanTerm extends IMongoModel {
  name: TLocaleField
  value: number
  isActive: boolean
}

export interface IBankLoanTermPayload {
  name: TLocaleField
  value: number
  isActive: boolean
}
