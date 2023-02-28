import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
window.$router = router

console.log('before new vue')
const myvue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
console.log('after new vue')
window.myvue = myvue