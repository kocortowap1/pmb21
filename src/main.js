import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  // NavbarPlugin,
  // NavPlugin,
  // DropdownPlugin,
  // LayoutPlugin,
  // CollapsePlugin,
  // FormPlugin,
  // FormInputPlugin,
  // FormDatepickerPlugin,
  // IconsPlugin,
  // ModalPlugin
} from 'bootstrap-vue'
// import  './scss/custom.scss'

// import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Vue.use(NavbarPlugin)
// Vue.use(NavPlugin)
// Vue.use(DropdownPlugin)
// Vue.use(LayoutPlugin)
// Vue.use(CollapsePlugin)
// Vue.use(FormPlugin)
// Vue.use(FormInputPlugin)
// Vue.use(FormDatepickerPlugin)
// Vue.use(IconsPlugin)

// Vue.use(ModalPlugin )

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
