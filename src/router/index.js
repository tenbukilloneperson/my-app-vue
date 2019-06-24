import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)

const route = new Router({
  mode: 'history',
  routes: routes
})

export default route
