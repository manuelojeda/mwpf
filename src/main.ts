import Vue from 'vue'
import CompApi from '@vue/composition-api'
import BootstrapVue from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'

import App from './App.vue'
import router from './router'

// CSS global
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/css/main.scss'

Vue.use(CompApi)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.component('apexchart', VueApexCharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
