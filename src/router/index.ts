import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "hello-page" */ '@/views/HomePage.vue')
  },
  {
    path: '/araink',
    name: 'araink',
    component: () =>
      import(/* webpackChunkName: "pricing-page" */ '@/views/PricingPage.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () =>
      import(/* webpackChunkName: "about-page" */ '@/views/ContactPage.vue')
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
