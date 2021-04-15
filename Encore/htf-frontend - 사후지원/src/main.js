import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import VueCookies from 'vue-cookies'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false

//쿠키의 지속시간은 1일
VueCookies.config('1d');
Vue.use(VueCookies)
Vue.use(VModal)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
