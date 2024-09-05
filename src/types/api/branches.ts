import { IMongoModel } from '@/types/api/mongo-model.ts'
import { TLocaleField } from '@/types/locales.ts'

export interface IBranch extends IMongoModel {
  name: TLocaleField
  address: TLocaleField
  description: TLocaleField
  phone: string
  regionId: IMongoModel['_id']
  districtId: IMongoModel['_id']
  image: string
  location: string
  // schedule: ISchedule
}

export interface IBranchPayload {
  name: TLocaleField
  address: TLocaleField
  description: TLocaleField
  phone: string
  regionId: IMongoModel['_id']
  districtId: IMongoModel['_id']
  image: File | string
}
