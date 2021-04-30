import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import Tailwind CSS
import "./assets/scss/tailwind.scss"

Vue.config.productionTip = false

import VueMeta from 'vue-meta'

Vue.use(VueMeta)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
