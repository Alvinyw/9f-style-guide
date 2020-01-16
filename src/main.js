import Vue from 'vue'
import App from './App.vue'

import router from './router'

// 引入字体图标库 iconfont
import '@/styles/iconfont/iconfont.css'
import '@/styles/iconfont/iconfont.js'

import '@/styles/index.scss' // global css

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})