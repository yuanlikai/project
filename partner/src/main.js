// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

import 'babel-polyfill'

import qs from 'qs'
Vue.prototype.Qs=qs;
import axios from 'axios'
Vue.prototype.Axios=axios;

Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
