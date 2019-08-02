export default [
  {
    path: '/roles',
    // route level code-splitting
    // this generates a separate chunk (profile.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ '@/pages/role/Role.vue'),
    children: [
      {
        name: 'roles-create',
        path: '/add-role',
        component: () => import(/* webpackChunkName: "profile-main-info" */ '@/pages/role/Create.vue'),
        meta: { auth: true }
      },
      {
        name: 'roles-edit',
        path: '/edit-role',
        component: () => import(/* webpackChunkName: "profile-change-password" */ '@/pages/role/Edit.vue'),
        meta: { auth: true }
      }
    ]
  }
]
