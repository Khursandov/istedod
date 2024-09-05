import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'

import { LocalStorageKey } from '@/global/enums/local-storage.ts'

export const useFingerprint = () => {
  const fingerprint = ref<null | string>(null)

  if (!fingerprint.value) {
    const local = localStorage.getItem(LocalStorageKey.Fingerprint)
    if (!local) {
      const newFingerprint = uuidv4()
      localStorage.setItem(LocalStorageKey.Fingerprint, newFingerprint)
      fingerprint.value = newFingerprint
    } else {
      fingerprint.value = local
    }
  }

  return { fingerprint }
}
