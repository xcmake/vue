// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView,
//     },
//     {
//       path: '/about',
//       name: 'about',
//       component: () => import('../views/AboutView.vue'),
//     },
//   ],
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Friends from '../views/Friends.vue'
import Settings from '../views/Settings.vue'

const routes = [
  { path: '/home', name: 'Home', component: Home },
  { path: '/search', name: 'Search', component: Search },
  { path: '/friends', name: 'Friends', component: Friends },
  { path: '/settings', name: 'Settings', component: Settings },

  // 捕获所有未定义的路由并重定向到首页
  { path: '/:pathMatch(.*)*', redirect: '/home' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
