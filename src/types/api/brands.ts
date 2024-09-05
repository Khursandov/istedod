import { IMongoModel } from '@/types/api/mongo-model.ts'
import { TLocaleField } from '@/types/locales.ts'

export interface IBrand extends IMongoModel {
  name: string
  description: TLocaleField
  logo: string
  mainImg: string
  banners: string[]
  isActive: boolean
  info: {
    phone: string
    website: string
    geo: {
      lat: number
      lng: number
    }
    telegram: string
    instagram: string
    facebook: string
  }
}

export interface IBrandPayload {
  name: string
  description: TLocaleField
  logo: string | File
  mainImg: string | File
  banners: (string | File)[]
  isActive: boolean
  info: {
    phone: string
    website: string
    geo: {
      lat: number | null
      lng: number | null
    }
    telegram: string
    instagram: string
    facebook: string
  }
}
