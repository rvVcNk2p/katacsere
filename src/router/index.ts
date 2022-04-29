import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "hello-page" */ '@/views/HomePage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about-page" */ '@/views/AboutPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  // TODO - Define BASE_URL in production - process.env.BASE_URL
  history: createWebHistory(''),
  routes
})

export default router
