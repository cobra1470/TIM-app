import Vue from 'vue'
import Router from 'vue-router'
import contactList from '@/components/page/contactList'
import messagePanel from '@/components/page/messagePanel'
import friendPanel from '@/components/page/friendPanel'
import mainPanel from '@/components/page/mainPanel'
import messageList from '@/components/page/messageList'
import documentList from '@/components/page/documentList'
import workplace from '@/components/page/workplace'


Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
      	name: 'mainPanel',
      	component: mainPanel,
        children: [
          {
            path: '/',
            component: messageList,
            meta:{index:3}
          },
          {
            path: '/documentList',
            component: documentList
          },
          {
            path: '/workplace',
            component: workplace
          }
        ]
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
