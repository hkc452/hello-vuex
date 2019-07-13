import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuex from './vuex'

Vue.config.productionTip = false
// 安装Vuex插件
Vue.use(Vuex)

let s = new Vuex.Store(store)
new Vue({
  render: h => h(App),
  store:s
}).$mount('#app')
