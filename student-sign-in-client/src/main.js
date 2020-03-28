import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import StudentServices from '@/services/StudentServices'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.prototype.$studentApi = StudentServices

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
