import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import electron from 'electron'
import axios from 'axios'

Vue.config.productionTip = false

Vue.electron = Vue.prototype.$electron = electron

Vue.ipc = Vue.prototype.$ipc = electron.ipcRenderer
Vue.axios = Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
