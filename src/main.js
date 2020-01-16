import Vue from 'vue'
import App from './App.vue'

import router from './router'

import '@/styles/index.scss' // global css

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})