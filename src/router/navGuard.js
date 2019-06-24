//  导航守卫
import Store from '../store/index'
import Router from './routes'

export function guard () {
  return Router.beforeEach((to, from, next) => {
    Store.state.currentMenu = to.path
    console.log('123')
    next()
  })
}
