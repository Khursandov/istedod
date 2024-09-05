import { IMongoModel } from '@/types/api/mongo-model.ts'
import { TLocaleField } from '@/types/locales.ts'

export interface IRole extends IMongoModel {
  name: TLocaleField
  value: string
  isActive: boolean
}

export interface IRolePayload {
  name: TLocaleField
  value: string
  isActive?: boolean
}
