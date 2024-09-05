import { TClassName } from '@/types/common.ts'

export interface ITableCol<T = any> {
  title: string
  key: keyof T
  colClass?: TClassName
}
