import Vue from 'vue'
import CompApi from '@vue/composition-api'
import BootstrapVue from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import Snipper from '@/components/Spinner.vue'

import App from './App.vue'
import router from './router'

import './plugins/FontAwesome'

// CSS global
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'mdbootstrap/css/mdb.css'

import './assets/css/main.scss'

Vue.use(CompApi)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.component('apexchart', VueApexCharts)
Vue.component('spinner', Snipper)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
