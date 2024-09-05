import { IMongoModel } from '@/types/api/mongo-model.ts'
import { TLocaleField } from '@/types/locales.ts'

export interface IModification extends IMongoModel {
  name: TLocaleField
  isActive: boolean
}

export interface IModificationPayload {
  name: TLocaleField
  isActive?: boolean
}
