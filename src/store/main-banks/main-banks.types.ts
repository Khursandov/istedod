import { IBankMain } from '@/types/api/banks/main.ts'

export interface IMainBanksStoreState {
  banks: Map<IBankMain['_id'], IBankMain>
}
