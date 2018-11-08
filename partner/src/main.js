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
import axios from 'axios'

Vue.prototype.Qs = qs;
Vue.prototype.Axios = axios;

// 添加响应拦截器
axios.interceptors.response.use(function (response) {// 对响应数据做点什么
  response.data.error === 2 ? v.$router.push('/') : '';
  return response;
}, function (error) {// 对响应错误做点什么
  return Promise.reject(error);
});


Vue.prototype.getLocalTime=function (nS) {
  return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
}


Vue.config.productionTip = true;

/* eslint-disable no-new */
let v = new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
