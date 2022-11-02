export const userRoutes=[
  {
    path: "/user",
    name:"user",
    component: () => import('@/views/UserView.vue'),
    children: [
      {
        path: "index",
        name:"index",
        component: () => import('@/views/UserIndexView.vue'),
      },
      {
        path: "collect",
        name:"collect",
        component: () => import('@/views/UserCollectView.vue'),
      },
      {
        path: "address",
        name:'address',
        component: () => import('@/views/UserAddressView.vue'),
      },
      {
        path: "order",
        name:'order',
        component: () => import('@/views/UserOrderView.vue'),
      }
    ]
  },
]