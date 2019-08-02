import MainLayout from '@/layouts/Main.vue'
import Home from '@/pages/Home.vue'

import auth from './groups/auth'
import profile from './groups/profile'
import other from './groups/other'
import Roles from '@/pages/role/Role.vue'

export default [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        name: 'home',
        path: '',
        component: Home
      },
      {
        name: 'role',
        path: '/roles',
        component: Roles
      },
      ...auth,
      ...profile,
      ...other,
      {
        path: '*',
        component: () => import(/* webpackChunkName: "page404" */ '@/pages/404.vue')
      }
    ]
  }
]
