import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/product/:id',
      name: 'productname',
      component: () => import('../views/ProInfoView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: () => import('../views/ConfirmView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: "/user",
      name:"user",
      component: () => import('../views/UserView.vue'),
      children: [
        {
          path: "collect",
          name:"collect",
          component: () => import('../views/UserCollectView.vue'),
        },
        {
          path: "address",
          name:'address',
          component: () => import('../views/UserAddressView.vue'),
        },
        {
          path: "order",
          name:'order',
          component: () => import('../views/UserOrderView.vue'),
        }
      ]
    },
  ]
})

export default router
