// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';
import '@/assets/less/main.less';
import '@/assets/less/base.less';
import '@/assets/less/elementui.less';
import '@/assets/less/scrollbar.css';
import '@/assets/iconfont/iconfont.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '@/styles/index.less'

import i18n from './lang'
import store from './store'
import '@/utils/filter.js'
Vue.use(ElementUI,{
  i18n: (key, value) => i18n.t(key, value)
});
Vue.config.productionTip = false


// 路由跳转
var whiteList = ['view', 'login'];
router.beforeEach((to, from, next) => {
  NProgress.start();
  return next();
});

router.afterEach(transition => {
  setTimeout(() => {
    NProgress.done()
  })
});
/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})

window.app = app
