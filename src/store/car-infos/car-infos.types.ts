import { ICarInfo } from '@/types/api/cars/info.ts'

export interface ICarInfoStoreState {
  infos: Map<ICarInfo['_id'], ICarInfo>
}
