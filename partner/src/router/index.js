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
        //开发商
        {
          path: '/welcome',
          name: 'welcome',
          component: resolve => require(['@/components/welcome'], resolve)
        },

        //开发商
        {
          path: '/deve/houses',
          name: 'deveHouses',
          component: resolve => require(['@/components/deve/houses'], resolve)
        },
        {
          path: '/deve/appoin',
          name: 'deveAppoin',
          component: resolve => require(['@/components/deve/appoin'], resolve)
        },
        {
          path: '/deve/order',
          name: 'deveOrder',
          component: resolve => require(['@/components/deve/order'], resolve)
        },
        {
          path: '/deve/collect',
          name: 'deveCollect',
          component: resolve => require(['@/components/deve/collect'], resolve)
        },
        {
          path: '/deve/deveType',
          name: 'deveType',
          component: resolve => require(['@/components/deve/deveType'], resolve)
        },
        {
          path: '/deve/superiorAdd',
          name: 'superiorAdd',
          component: resolve => require(['@/components/deve/superiorAdd'], resolve)
        },

        // 合作伙伴
        {
          path: '/partner/disk',
          name: 'partnerDisk',
          component: resolve => require(['@/components/partner/disk'], resolve)
        },
        {
          path: '/partner/look',
          name: 'partnerLook',
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
          name: 'brokerHouses',
          component: resolve => require(['@/components/broker/houses'], resolve)
        },
        {
          path: '/broker/appoin',
          name: 'brokerAppoin',
          component: resolve => require(['@/components/broker/appoin'], resolve)
        },
        {
          path: '/broker/collect',
          name: 'brokerCollect',
          component: resolve => require(['@/components/broker/collect'], resolve)
        },
        {
          path: '/broker/addHouses',
          name: 'addHouses',
          component: resolve => require(['@/components/broker/addHouses'], resolve)
        },

        //报备
        {
          path: '/report/disk',
          name: 'reportDisk',
          component: resolve => require(['@/components/report/disk'], resolve)
        },
        {
          path: '/report/look',
          name: 'reportLook',
          component: resolve => require(['@/components/report/look'], resolve)
        },
        {
          path: '/report/addReport',
          name: 'addReport',
          component: resolve => require(['@/components/report/addReport'], resolve)
        }

      ]
    }
  ]
})
