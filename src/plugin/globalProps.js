// 全局的方法或者属性

export default {

  // 带条件的对象
  getDynamicObj: function (bool = true) {
    return {
      name: '章邯',
      desc: '其疾如风,其徐如林,侵略如火,不动如山,',
      ...(bool ? { comeWhere: '孙子兵法' } : null)
    }
  },

  getDynamicProps: function (strs = name) {
    return {
      [strs]: '我叫什么完全取决于你想让我叫什么',
      desc: '风林火山'
    }
  }
}
