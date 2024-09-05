import { IMongoModel } from '@/types/api/mongo-model.ts'
import { TLocaleField } from '@/types/locales.ts'

export interface IDistrict extends IMongoModel {
  name: TLocaleField
  regionId: IMongoModel['_id']
  isActive: boolean
}

export interface IDistrictPayload {
  name: TLocaleField
  regionId: IMongoModel['_id']
  isActive?: boolean
}
