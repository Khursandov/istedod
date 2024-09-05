import { IMongoModel } from '@/types/api/mongo-model.ts'

export interface IApplication extends IMongoModel {
  city: string
  name: string
  phone: string
  solved: boolean
}
