import { IEmployee } from '@/types/api/employees'

export interface IEmployeeStoreState {
  employees: Map<IEmployee['_id'], IEmployee>
}
