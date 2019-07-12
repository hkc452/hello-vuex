import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuex from './vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const s = new Vuex.Store(store)
new Vue({
  render: h => h(App),
  store:s
}).$mount('#app')
