import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Advertisements from '@/components/Advertisements'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/root',
      name: 'root',
      component: Hello
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/advertisements',
      name: 'advertisements',
      component: Advertisements
    }
  ]
})
