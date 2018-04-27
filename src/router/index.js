import Vue from 'vue'
import Router from 'vue-router'
import messageList from '@/components/page/messageList'
import contactList from '@/components/page/contactList'
import messagePanel from '@/components/page/messagePanel'
import friendPanel from '@/components/page/friendPanel'


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
      path: '/messagePanel/:number',
      meta:{index:2},
      name: 'messagePanel',
      component: messagePanel
    },
    {
    	path: '/friendPanel/:number',
      meta:{index:1},
    	name: 'friendPanel',
    	component: friendPanel
    }
  ]
});
