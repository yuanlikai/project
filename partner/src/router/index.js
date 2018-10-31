import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/components/login'], resolve)
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: resolve => require(['@/components/Layout'], resolve),
      children: [

        // 合作伙伴
        {

          path: '/partner/disk',
          name: 'disk',
          component: resolve => require(['@/components/partner/disk'], resolve)
        },
        {

          path: '/partner/look',
          name: 'look',
          component: resolve => require(['@/components/partner/look'], resolve)
        },
        {

          path: '/partner/place',
          name: 'place',
          component: resolve => require(['@/components/partner/place'], resolve)
        },

        //经纪人/中介
        {
          path: '/broker/houses',
          name: 'houses',
          component: resolve => require(['@/components/broker/houses'], resolve)
        },
        {
          path: '/broker/appoin',
          name: 'appoin',
          component: resolve => require(['@/components/broker/appoin'], resolve)
        },
        {
          path: '/broker/collect',
          name: 'collect',
          component: resolve => require(['@/components/broker/collect'], resolve)
        },

        //报备
        {
          path: '/report/disk',
          name: 'disk',
          component: resolve => require(['@/components/report/disk'], resolve)
        },
        {
          path: '/report/look',
          name: 'look',
          component: resolve => require(['@/components/report/look'], resolve)
        }

      ]
    }
  ]
})
