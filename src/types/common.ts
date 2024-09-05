export type TClassName =
  | string
  | string[]
  | Record<string, boolean>
  | TClassName[]

export interface IApiResponse<T = any> {
  success: boolean
  message: string
  data: T
}

export type TDataList<T = Record<string, any>> = IApiResponse<{
  items: T[]
  total: number
}>
