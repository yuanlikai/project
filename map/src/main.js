// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import qs from 'qs'
Vue.prototype.Qs=qs;
import axios from 'axios'
Vue.prototype.Axios=axios;
import 'babel-polyfill'
import 'url-search-params-polyfill'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

//测试
// Vue.prototype.Url='https://slave-mcb-mall.smhui.cn';
//生产
Vue.prototype.Url='https://mcb-mall.smhui.cn';


Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
