import 'primeicons/primeicons.css'
import './assets/css/prime-theme.css'
import './assets/css/tailwind.css'

import { createApp } from 'vue'

import { registerPlugins } from '@/plugins'

import App from './App.vue'

const app = createApp(App)
registerPlugins(app)
app.mount('#app')
