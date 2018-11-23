// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import iView from 'iview';
Vue.use(iView);

import 'babel-polyfill'

import qs from 'qs'
import axios from 'axios'

Vue.prototype.Qs = qs;
Vue.prototype.Axios = axios;
axios.defaults.baseURL = '/apis';
// 添加响应拦截器
axios.interceptors.response.use(function (response) {// 对响应数据做点什么
  response.data.error === 2 ? v.$router.push('/') : '';
  return response;
}, function (error) {// 对响应错误做点什么
  return Promise.reject(error);
});


Vue.prototype.getLocalTime=function (nS) {
  return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
};

function timestampToTime(timestamp) {
  let date = new Date(timestamp * 1000);
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  let D = date.getDate() + ' ';
  let h = date.getHours() + ':';
  let m = date.getMinutes() + ':';
  let s = date.getSeconds();
  return Y + M + D + h + m + s;
}
Vue.prototype.timestampToTime = timestampToTime;

Vue.config.productionTip = true;


/* eslint-disable no-new */
let v = new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
