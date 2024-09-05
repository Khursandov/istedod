import { ICar } from '@/types/api/cars/cars.ts'
import { IModification } from '@/types/api/modifications.ts'
import { IMongoModel } from '@/types/api/mongo-model.ts'
import { IPowertrainType } from '@/types/api/powertrain-types.ts'
import { ITypeDrive } from '@/types/api/type-drives.ts'
import { TLocaleField } from '@/types/locales.ts'

export interface ICarModelModification extends IMongoModel {
  name: string
  description: TLocaleField
  price: number
  oldPrice: number
  accelerationTime: string
  fuelTankCapacity: string
  engineModificationId: IModification['_id']
  trunkVolume: string
  fuelConsumption: string
  electricMotorPower: string
  transmission: string
  batteryCapacity: string
  horsepower: number
  powertrainTypeId: IPowertrainType['_id']
  powerReserve: string
  batteryType: string
  carId: ICar['_id']
  typeDriveId: ITypeDrive['_id']
  isActive: boolean
  electricSeats: TLocaleField
  cruiseControl: TLocaleField
  speakersNumber: TLocaleField
  seatTrim: TLocaleField
  electricMirrors: TLocaleField
  centralMultimedia: TLocaleField
  heatFrontSeats: TLocaleField
  heatRearSeats: TLocaleField
  frontTireSize: TLocaleField
  rearTireSize: TLocaleField
  hud: TLocaleField
  lightType: TLocaleField
  electricTrunk: TLocaleField
  sunroof: TLocaleField
  adjustableSteering: TLocaleField
}

export interface ICarModelModificationPayload {
  name: string
  description: TLocaleField
  price: number
  oldPrice: number
  accelerationTime: string
  fuelTankCapacity: string
  engineModificationId: IModification['_id'] | null
  trunkVolume: string
  fuelConsumption: string
  electricMotorPower: string
  transmission: string
  batteryCapacity: string
  horsepower: number
  powertrainTypeId: IPowertrainType['_id']
  powerReserve: string
  batteryType: string
  carId: ICar['_id']
  typeDriveId: ITypeDrive['_id']
  isActive: boolean
  electricSeats: TLocaleField
  cruiseControl: TLocaleField
  speakersNumber: TLocaleField
  seatTrim: TLocaleField
  electricMirrors: TLocaleField
  centralMultimedia: TLocaleField
  heatFrontSeats: TLocaleField
  heatRearSeats: TLocaleField
  frontTireSize: TLocaleField
  rearTireSize: TLocaleField
  hud: TLocaleField
  lightType: TLocaleField
  electricTrunk: TLocaleField
  sunroof: TLocaleField
  adjustableSteering: TLocaleField
}
