import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Upload from '@/components/Upload/Index'
import Hello from '@/components/Hello'
import FirstPage from '@/components/FirstPage'

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
    }
  ]
})
