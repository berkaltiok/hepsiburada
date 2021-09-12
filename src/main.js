import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vue Meta Mask
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  metaInfo: {
    title: "Türkiye'nin En Büyük Online Alışveriş Teması",
    titleTemplate: '%s - Hepsişurada'
  }
}).$mount('#app')
