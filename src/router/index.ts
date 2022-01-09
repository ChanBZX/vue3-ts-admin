import { createRouter, createWebHashHistory } from "vue-router"
import localCache from "../utils/cache"

import { mainRouter } from "./main/main"

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/main/main.vue'),
    children: [...mainRouter]
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import('../views/not-found/not-found.vue')
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})
export default router   