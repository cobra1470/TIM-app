import Vue from 'vue'
import Router from 'vue-router'
import messageList from '@/components/page/messageList'
import contactList from '@/components/page/contactList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
      	name: 'messageList',
        meta:{index:0},
      	component: messageList
    },
    {
      	path: '/',
        meta:{index:0},
      	component: messageList,
      	alias: '/messageList'
    },
    {
    	path: '/contactList',
      meta:{index:1},
    	name: 'contactList',
    	component: contactList
    }
  ]
});
