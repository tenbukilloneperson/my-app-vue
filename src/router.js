import Vue from 'vue'
import Router from 'vue-router'
import Store from './store'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('./views/Main/main.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./components/home.vue'),
      children: [
        //  组件间传值
        {
          path: 'passvalue/father-to-son',
          name: 'Father',
          component: () => import('./views/PassValue/Father.vue')
        },
        {
          path: 'passvalue/son-to-father',
          name: 'Son',
          component: () => import('./views/PassValue/Son.vue')
        },
        {
          path: 'passvalue/brother-to-brother',
          name: 'Brother',
          component: () => import('./views/PassValue/BrotherA.vue')
        },
        {
          path: 'passvalue/vuex',
          name: 'Vuex',
          component: () => import('./views/vuex/vuex.vue')
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  Store.state.currentMenu = to.path
  next()
})

export default router
