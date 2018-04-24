import Vue from 'vue'
import Router from 'vue-router'
import messageList from '@/components/messageList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'messageList',
      component: messageList
    }
  ]
})
