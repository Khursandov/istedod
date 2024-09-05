import { IMongoModel } from '@/types/api/mongo-model.ts'

export interface IBankInitialPayment extends IMongoModel {
  value: number
}

export interface IBankInitialPaymentPayload {
  val: number
}
