import { createRouter, createWebHistory } from 'vue-router'

import { RouteGuards } from '@/router/guards'

import routes from './routes.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(RouteGuards)

export default router
