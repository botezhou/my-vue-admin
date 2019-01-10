// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';
import '@/assets/less/main.less';
import '@/assets/less/elementui.less';
import '@/assets/less/scrollbar.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Axios from  'axios'
import i18n from './lang'
import store from './store'
import '@/utils/filter.js'
Vue.use(ElementUI,{
  i18n: (key, value) => i18n.t(key, value)
});
Vue.config.productionTip = false

Vue.prototype.$http = Axios
window.APP_INFO = process.env.APP_INFO
// 全局的 axios 默认值全局的 axios 默认值
Axios.defaults.baseURL = '/api'

Axios.defaults.validateStatus = status => {
  return status < 500
}
// 设置请求token
Axios.interceptors.request.use(config => {
  return config
})

// Axios.defaults.transformRequest = [function(data) {
//   return Qs.stringify(data, {allowDots: true })
// }]
// 接口错误拦截
Axios.interceptors.response.use(res => {
  if (res.status === 401) {
    app && app.$message({
      type: 'warning',
      message: res.data.msg
    })
  } else if (res.status >= 400 && res.status < 500  && typeof(res.data) === 'string') {
    app && app.$message({
      type: 'warning',
      message: res.data
    })
    return Promise.reject(res)
  } else {
    return res.data
  }
}, err => {
  app.$notify.error({
    title: '服务错误',
    message: err.response.data.msg
  })
  return Promise.reject(err)
})
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
