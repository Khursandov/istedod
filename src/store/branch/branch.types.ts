import { IBranch } from '@/types/api/branches.ts'

export interface IBranchStoreState {
  branches: Map<IBranch['_id'], IBranch>
}
