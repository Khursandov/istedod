import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import Ripple from 'primevue/ripple'
import StyleClass from 'primevue/styleclass'
import { App } from 'vue'

import { pinia } from '@/plugins/pinia.ts'
import { Components, PrimeVueOptions } from '@/plugins/prime-vue.ts'
import { i18n } from '@/plugins/vue-i18n.ts'
// import { vueYandexMaps } from '@/plugins/vue-yandex-maps.ts'
import router from '@/router'

export function registerPlugins(app: App): void {
  app
    .use(router)
    .use(pinia)
    .use(i18n)
    .use(PrimeVue, PrimeVueOptions)
    // .use(vueYandexMaps)

  app.use(ConfirmationService)
  app.directive('ripple', Ripple)
  app.directive('styleclass', StyleClass)

  for (const name in Components) {
    app.component(name, Components[name])
  }
}
