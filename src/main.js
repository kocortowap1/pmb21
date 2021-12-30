import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// import 'bootstrap/dist/css/bootstrap.css'
import './scss/main.css'
// import { ModalPlugin } from 'bootstrap-vue'
// Vue.use(ModalPlugin)
// import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
