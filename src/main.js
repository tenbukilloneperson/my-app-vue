import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/base.css'
import Bread from './components/card.vue'
import GuideRrad from './components/GuideRead.vue'

Vue.config.productionTip = false
Vue.component('my-bread', Bread)
Vue.component('my-guide', GuideRrad)
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
