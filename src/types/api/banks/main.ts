import { IBankIncomeType } from '@/types/api/banks/income-types.ts'
import { IBankInitialPayment } from '@/types/api/banks/initial-payments.ts'
import { IBankLoanTerm } from '@/types/api/banks/loan-terms.ts'
import { IBankRefundType } from '@/types/api/banks/refund-types.ts'
import { IMongoModel } from '@/types/api/mongo-model.ts'
import { TLocaleField } from '@/types/locales.ts'

export interface IBankMain extends IMongoModel {
  name: string
  description: TLocaleField
  link: string
  amount: string
  percent: number
  logo: string
  incomeTypeId: IBankIncomeType['_id'][]
  initialPaymentId: IBankInitialPayment['_id'][]
  loanTermId: IBankLoanTerm['_id'][]
  refundTypeId: IBankRefundType['_id'][]
}

export interface IBankMainPayload {
  name: string
  description: TLocaleField
  link: string
  amount: number
  percent: number
  logo: File | string
  incomeTypeId: IBankIncomeType['_id'][]
  initialPaymentId: IBankInitialPayment['_id'][]
  loanTermId: IBankLoanTerm['_id'][]
  refundTypeId: IBankRefundType['_id'][]
}
