import Vue from 'vue'
import CompApi from '@vue/composition-api'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(CompApi)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
