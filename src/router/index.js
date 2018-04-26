import Vue from 'vue'
import Router from 'vue-router'
import messageList from '@/components/page/messageList'
import contactList from '@/components/page/contactList'
import messageDialog from '@/components/page/messageDialog'


Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
      	name: 'messageList',
        meta:{index:3},
      	component: messageList
    },
    {
      	path: '/',
        meta:{index:3},
      	component: messageList,
      	alias: '/messageList'
    },
    {
      path: '/contactList',
      meta:{index:5},
      name: 'contactList',
      component: contactList
    },
    {
    	path: '/messageDialog/:number',
      meta:{index:2},
    	name: 'messageDialog',
    	component: messageDialog
    }
  ]
});
