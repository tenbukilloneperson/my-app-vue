const routes =
[
  {
    path: '/',
    name: 'main',
    component: () => import('../views/Main/main.vue')
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/home/passvalue/father-to-son',
    component: () => import('../components/common_component/home.vue'),
    children: [
      //  组件间传值
      {
        path: 'passvalue/father-to-son',
        name: 'Father',
        component: () => import('../views/PassValue/Father.vue')
      },
      {
        path: 'passvalue/son-to-father',
        name: 'Son',
        component: () => import('../views/PassValue/Son.vue')
      },
      {
        path: 'passvalue/brother-to-brother',
        name: 'Brother',
        component: () => import('../views/PassValue/BrotherA.vue')
      },
      {
        path: 'passvalue/vuex',
        name: 'Vuex',
        component: () => import('../views/vuex/vuex.vue')
      },
      {
        path: 'passvalue/build',
        name: 'Build',
        component: () => import('../views/PassValue/build.vue')
      },
      {
        path: 'es6/promise',
        name: 'Promise',
        component: () => import('../views/ES6/promise.vue')
      }
    ]
  }
]
export default routes
