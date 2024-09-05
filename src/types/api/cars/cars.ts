import { IBodyType } from '@/types/api/body-types.ts'
import { IBrand } from '@/types/api/brands.ts'
import { IMongoModel } from '@/types/api/mongo-model.ts'
import { TLocaleField } from '@/types/locales.ts'

export interface ICar extends IMongoModel {
  name: string
  carBodyId: IBodyType['_id']
  carBrandId: IBrand['_id']
  iconLeft: string
  iconFront: string
  title: TLocaleField
  description: TLocaleField
  parameters: {
    width: string
    height: string
    length: string
    base: string
  }
  isActive: boolean
}

export interface ICarPayload {
  name: string
  carBodyId: IBodyType['_id']
  carBrandId: IBrand['_id']
  iconLeft: string | File
  iconFront: string | File
  title: TLocaleField
  description: TLocaleField
  parameters: {
    width: string
    height: string
    length: string
    base: string
  }
  isActive: boolean
}

export interface ICarFormSubmitPayload {
  form: ICarPayload
  formData: FormData
}
