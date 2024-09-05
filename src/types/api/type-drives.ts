import { IMongoModel } from '@/types/api/mongo-model.ts'

export interface ITypeDrive extends IMongoModel {
  name: string
}

export interface ITypeDrivePayload {
  name: string
}
