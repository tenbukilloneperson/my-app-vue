
import Bread from '../components/global_component/card.vue'
import GuideRrad from '../components/global_component/GuideRead.vue'
import Jqurey from 'jquery'
import Axios from 'axios'
import Echarts from 'echarts'
// 导入实例方法
import EM from './exampleMethods'
// 导入全局的方法和属性
import GP from './globalProps'
export default {
  install: function (Vue, option) {
    //   1. 添加全局方法或属性
    Vue.getDynamicObj = GP.getDynamicObj
    Vue.getDynamicProps = GP.getDynamicProps

    // 2. 添加全局资源
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
      }
    })

    // 3. 注入组件选项
    Vue.mixin({
      created: function () {
      }
    })

    // 4. 添加实例方法
    Vue.prototype.$getName = EM.getName
    Vue.prototype.$getAge = EM.getAge
    Vue.prototype.$getGender = EM.getGender
    Vue.prototype.$JQ = Jqurey
    Vue.prototype.$axios = Axios
    Vue.prototype.$echarts = Echarts

    // 5. 添加全局组件
    Vue.component('my-bread', Bread)
    Vue.component('my-guide', GuideRrad)
  }
}
