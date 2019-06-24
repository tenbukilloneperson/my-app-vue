import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/base.css'
import Plugin from './plugin'

Vue.config.productionTip = false

Vue.use(Plugin)
Vue.use(ElementUI)

new Vue({ router, store, render: h => h(App) }).$mount('#app')
