import HomeView from '@/views/HomeView.vue'
const defaultRoutes:any=[
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginView.vue')
    },
    {
        path: '/product',
        name: 'product',
        component: () => import('@/views/ProductView.vue')
    },
    {
        path: '/product/:id',
        name: 'productname',
        component: () => import('@/views/ProInfoView.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/ContactView.vue')
    },
    {
        path: '/confirm',
        name: 'confirm',
        component: () => import('@/views/ConfirmView.vue')
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/CartView.vue')
    },
    {
        path: '/pay',
        name: 'pay',
        component: () => import('@/views/PayView.vue')
    },
]

export default defaultRoutes;