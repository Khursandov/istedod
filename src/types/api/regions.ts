import { IMongoModel } from '@/types/api/mongo-model.ts'
import { TLocaleField } from '@/types/locales.ts'

export interface IRegion extends IMongoModel {
  name: TLocaleField
  isActive: boolean
}
