import { IMongoModel } from '@/types/api/mongo-model.ts'
import { TLocaleField } from '@/types/locales.ts'

export interface IPowertrainType extends IMongoModel {
  name: TLocaleField
  slug: ECarPowertrainSlug | string
  isActive: boolean
}

export interface IPowertrainTypePayload {
  name: TLocaleField
  slug: string
  isActive?: boolean
}

export enum ECarPowertrainSlug {
  HYBRID = 'HYBRID',
  EV = 'EV',
  GASOLINE = 'GASOLINE',
}
