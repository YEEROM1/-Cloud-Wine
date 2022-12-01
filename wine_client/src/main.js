import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

router.afterEach(() => {
  document.documentElement.scrollTop = 0;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
