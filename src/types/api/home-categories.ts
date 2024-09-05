import { ICarModel } from '@/types/api/car-models.ts'
import { IMongoModel } from '@/types/api/mongo-model.ts'
import { TLocaleField } from '@/types/locales.ts'

export interface IHomeCategory extends IMongoModel {
  name: TLocaleField
  logo: string
  images: TLocaleField
  carId: ICarModel['_id'][]
  isActive: boolean
  isMenu: boolean
  isSlider: boolean
  isMain: boolean
  showImages: boolean
}

export interface IHomeCategoryPayload {
  name: TLocaleField
  logo: string | File
  images: TLocaleField<string | File>
  carId: ICarModel['_id'][]
  isActive: boolean
  isMenu: boolean
  isSlider: boolean
  isMain: boolean
  showImages: boolean
}
