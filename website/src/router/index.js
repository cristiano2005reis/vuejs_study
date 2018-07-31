import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FirstPage from '@/components/FirstPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
