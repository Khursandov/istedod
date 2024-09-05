import { IBranch } from '@/types/api/branches.ts'
import { EGender } from '@/types/api/employees.ts'
import { IMongoModel } from '@/types/api/mongo-model.ts'

export interface ILoginPayload {
  phone: string
  password: string
  saveMe?: boolean
}

export interface IAuthTokens {
  accessToken: string
  refreshToken: string
}

export interface IAuthUser extends IMongoModel {
  name: string
  phone: string
  email: string
  dob: string | Date
  image: null | string
  gender: EGender
  branchId: IBranch['_id']
  isActive: boolean
}
