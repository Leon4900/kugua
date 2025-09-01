import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
const router = createRouter({
  history: createWebHistory('/kugua/'),
  routes,
})

export default router
