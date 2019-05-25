import Vue from 'vue'
import Router from 'vue-router'
import Company from '@/components/Company'
import FirstPage from '@/components/FirstPage'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Upload from '@/components/Upload/Index'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/first-page',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/company',
      name: 'Company',
      component: Company
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
