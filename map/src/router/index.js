import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'map',
      component: (resolve) => require(['@/components/home'], resolve),
      children:[
        {
          path: '/dex',
          name: 'dex',
          component: (resolve) => require(['@/components/dex'], resolve)
        },
        {
          path: '/city',
          name: 'city',
          component: (resolve) => require(['@/components/city'], resolve)
        },
        {
          path: '/order',
          name: 'order',
          component: (resolve) => require(['@/components/order'], resolve)
        },
        {
          path: '/merchant',
          name: 'merchant',
          component: (resolve) => require(['@/components/merchant'], resolve)
        },
        {
          path: '/oneKey',
          name: 'oneKey',
          component: (resolve) => require(['@/components/oneKey'], resolve)
        }
      ]
    },
  ]
})
