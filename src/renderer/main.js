import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import electron from 'electron'
import axios from 'axios'

import VueStroll from 'vue-stroll'


import startup from './plugins/Startup'

// run start scripts
startup()

Vue.config.productionTip = false

Vue.electron = Vue.prototype.$electron = electron

Vue.ipc = Vue.prototype.$ipc = electron.ipcRenderer
Vue.axios = Vue.prototype.$axios = axios

// Vue.use(PerfectScrollbar)

new Vue({
  components: {
    VueStroll
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
