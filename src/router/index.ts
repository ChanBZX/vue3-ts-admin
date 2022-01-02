import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/login.vue')
  }

]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export { router }  