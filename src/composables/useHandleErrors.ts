import { AxiosError } from 'axios'
import { useI18n } from 'vue-i18n'
import { toast } from 'vue-sonner'

export const useHandleErrors = () => {
  const { t } = useI18n()

  function getErrorMessage(error: unknown) {
    const err = error as AxiosError<{
      message: string | string[]
      statusCode: number
    }>
    const message = err.response?.data?.message
    return (
      (typeof message === 'string' ? message : message?.[0]) ||
      t('unknown_error')
    )
  }

  function handle(error: unknown) {
    const message = getErrorMessage(error)
    toast.error(message)
  }

  return { handle, getErrorMessage }
}
