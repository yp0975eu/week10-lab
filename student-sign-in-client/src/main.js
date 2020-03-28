import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import StudentServices from '@/services/StudentServices'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// attache api to Vue prototype for usage in templates
Vue.prototype.$studentApi = StudentServices
/// hide production tip duting startup
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
