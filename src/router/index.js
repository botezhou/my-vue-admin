import Vue from 'vue'
import Router from 'vue-router'
import AppView from '@/components/app-view'
const page = name => () => import('@/pages/' + name)
Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'app_view',
      redirect: '/view',
      component: AppView,
      children: [
        {
          path: '/view',
          name: 'view',
          component: page('view'),
          meta: {title: '总览', name: 'dashboard'}
        },
        {
          path: '/gantt',
          name: 'gantt',
          component: page('gantt'),
          meta: {title: '甘特图', name: 'gantt'}
        },
        {
          path: '/dragForm',
          name: 'dragForm',
          component: page('dragForm'),
          meta: {title: '拖拽表单', name: 'dragForm'}
        },
        {
          path: '/formData',
          name: 'formData',
          component: page('dragForm/formData'),
          meta: {title: 'formData', name: 'formData'}
        },
        {
          path: '/driver',
          name: 'driver',
          component: page('driver'),
          meta: {title: '向导', name: 'driver'}
        },
        {
          path: '/css3',
          name: 'css3',
          component: page('css3'),
          meta: {title: 'Css3', name: 'css3'}
        },
        {
          path: '/print',
          name: 'print',
          component: page('print'),
          meta: {title: '打印', name: 'print'}
        },
        {
          path: '/tuicalendar',
          name: 'tuicalendar',
          component: page('tuicalendar'),
          meta: {title: '全日历', name: 'tuicalendar'}
        },
      ]
    },
    {
      path: '/print/download',
      name: 'printDownload',
      component: page('print/download'),
      hidden: true
      // meta: {title: '打印页面', name: 'printDownload'}
    },
    {
      path: '/charts',
      name: 'charts',
      redirect: 'noredirect',
      component: AppView,
      meta: {title: '图表', name: 'echarts'},
      children: [
        {
          path: '/mapCharts',
          name: 'mapCharts',
          component: page('charts/mapCharts'),
          meta: {title: '地图', name: 'map'}
        },
        {
          path: '/radarCharts',
          name: 'radarCharts',
          component: page('charts/radarCharts'),
          meta: {title: '雷达图', name: 'radar'}
        },
        {
          path: '/barCharts',
          name: 'barCharts',
          component: page('charts/barCharts'),
          meta: {title: '柱状图', name: 'bar'}
        },
        {
          path: '/pieCharts',
          name: 'pieCharts',
          component: page('charts/pieCharts'),
          meta: {title: '饼图', name: 'pie'}
        },
      ]
    },
    {
      path: '/components',
      name: 'component',
      redirect: 'noredirect',
      component: AppView,
      meta: {title: '组件', name: 'components'},
      children: [
        {
          path: '/html5Editor',
          name: 'html5Editor',
          component: page('components-demo/html5Editor'),
          meta: {title: '富文本编辑器', name: 'html5Editor'}
        },
        {
          path: '/quillEditor',
          name: 'quillEditor',
          component: page('components-demo/quillEditor'),
          meta: {title: 'Quill-Editor', name: 'quillEditor'}
        },
        {
          path: '/avatarUpload',
          name: 'avatarUpload',
          component: page('components-demo/avatarUpload'),
          meta: {title: '头像上传', name: 'avatarUpload'}
        },
        {
          path: '/countTo',
          name: 'countTo',
          component: page('components-demo/countTo'),
          meta: {title: 'countTo', name: 'countTo'}
        },
        {
          path: '/awesomeSwiper',
          name: 'awesomeSwiper',
          component: page('components-demo/awesomeSwiper'),
          meta: {title: 'Swiper轮播图', name: 'awesomeSwiper'}
        },
        {
          path: '/circleMenu',
          name: 'circleMenu',
          component: page('components-demo/circleMenu'),
          meta: {title: '圆环菜单', name: 'circleMenu'}
        },
        {
          path: '/videoPlayer',
          name: 'videoPlayer',
          component: page('components-demo/videoPlayer'),
          meta: {title: '视频播放', name: 'videoPlayer'}
        },
        {
          path: '/dragKanban',
          name: 'dragKanban',
          component: page('components-demo/dragKanban'),
          meta: {title: '可拖拽看板', name: 'dragKanban'}
        },
      ]
    }
  ]
})
