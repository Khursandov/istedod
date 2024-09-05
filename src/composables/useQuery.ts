import { reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useDebounce } from '@/composables/useDebounce.ts'

export const useQuery = <T = Record<string, string | number>>(
  _state: T,
  onQueryUpdateFn?: Function | null,
  options?: { delay: number },
) => {
  const $router = useRouter()
  const $route = useRoute()
  // @ts-ignore
  const state = reactive<T>(_state)

  async function updateQuery() {
    const stateQuery = {}

    for (const key in state) {
      // @ts-ignore
      if (typeof state[key] === 'string' && state[key] == '') {
        Object.assign(stateQuery, { [key]: undefined })
      } else {
        // @ts-ignore
        Object.assign(stateQuery, { [key]: state[key] })
      }
    }

    await $router.replace({
      query: {
        ...$route.query,
        ...stateQuery,
      },
    })

    onQueryUpdateFn?.()
  }

  const dfn = useDebounce(updateQuery, options?.delay ?? 500)
  watch(
    () => state,
    () => {
      dfn()
    },
    {
      deep: true,
    },
  )

  return { state }
}
