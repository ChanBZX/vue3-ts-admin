export const mainRouter = [

  // analysis
  {
    path: '/main/analysis/dashboard',
    name: "dashboard",
    component: () => import('../../views/main/analysis/dashboard/dashboard.vue'),
    children: []
  },
  {
    path: '/main/analysis/overview',
    name: "overview",
    component: () => import('../../views/main/analysis/overview/overview.vue'),
    children: []
  },

  // product
  {
    path: '/main/product/category',
    name: "category",
    component: () => import('../../views/main/product/category/category.vue')
  },
  {
    path: '/main/product/goods',
    name: "goods",
    component: () => import('../../views/main/product/goods/goods.vue')
  },

  // story
  {
    path: '/main/story/chat',
    name: "chat",
    component: () => import('../../views/main/story/chat/chat.vue')
  },
  {
    path: '/main/story/list',
    name: "list",
    component: () => import('../../views/main/story/list/list.vue')
  },

  // system
  {
    path: '/main/system/department',
    name: "department",
    component: () => import('../../views/main/system/department/department.vue')
  },
  {
    path: '/main/system/menu',
    name: "menu",
    component: () => import('../../views/main/system/menu/menu.vue')
  },
  {
    path: '/main/system/role',
    name: "role",
    component: () => import('../../views/main/system/role/role.vue')
  },
  {
    path: '/main/system/user',
    name: "user",
    component: () => import('../../views/main/system/user/user.vue')
  },

]