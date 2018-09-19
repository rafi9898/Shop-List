import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddTask from '@/components/AddTask'
import EditTask from '@/components/EditTask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/AddTask',
      name: 'AddTask',
      component: AddTask
    },
    {
      path: '/EditTask/:list_slug',
      name: 'EditTask',
      component: EditTask
    }
  ]
})
