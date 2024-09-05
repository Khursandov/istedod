import { IMongoModel } from '@/types/api/mongo-model.ts'

export interface ICarModel extends Pick<IMongoModel, '_id' | 'updatedAt'> {
  name: string
  isActive: boolean
  isSale: boolean
}
