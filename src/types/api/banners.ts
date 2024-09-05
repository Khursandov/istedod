import { IMongoModel } from '@/types/api/mongo-model.ts'
import { TLocaleField } from '@/types/locales.ts'

export interface IBanner extends IMongoModel {
  images: TLocaleField
}

export interface IBannerPayload {
  images: TLocaleField<string | File>
}
