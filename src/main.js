import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import Tailwind CSS
import "./assets/scss/tailwind.scss"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
