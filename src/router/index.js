import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
Vue.use(VueRouter)
// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: { layout: 'Main' },
      component: Home
    },
    {
      path:'/register',
      name: 'register',
      meta : {layout: 'Empty'},
      component: () => import('@/views/Register.vue')
    },
    {
      path: '/login',
      name: 'Login',
      meta: { layout: 'Empty' },
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/categories',
      name: 'Categories',
      meta: { layout: 'Main' },
      component: () => import('@/views/Categories.vue')
    }
  ]
})

export default router
