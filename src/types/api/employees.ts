import { IBranch } from '@/types/api/branches.ts'
import { IRole } from '@/types/api/roles.ts'

import { IMongoModel } from './mongo-model'

export interface IEmployee extends IMongoModel {
  name: string
  password: string
  phone: string
  email: string
  dob: string | Date
  image: string
  gender: EGender
  branchId: IBranch['_id']
  isActive: boolean
  roles: Array<IRole['_id']>
}

export interface IEmployeePayload {
  name: string
  // password: string
  phone: string
  email: string
  dob: string | Date
  image?: string | File
  gender: EGender | null
  branchId: IBranch['_id']
  isActive: boolean
  roles: Array<IRole['_id']>
}

export enum EGender {
  FEMALE,
  MALE,
}
