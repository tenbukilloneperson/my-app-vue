# vuex的使用
```js
    import Vue from 'vue'
    import Vuex from 'vuex'
    Vue.use(Vuex)
    const store = new Vue.Store({
        state: {},
        getters: {},
        mutations: {},
        actions: {},
        modules: {}
    })
```

###1. state(状态)的使用
```js
    import { mapState } from 'vuex'
    export default {
        computed: {
            ...mapState(['name','age']),
            ...{
                // 写自己的计算属性
            }
        }
    }

    export default {
        computed: {
            ...mapState({
                name: state => return state.name,
                Age: state => return state.age
            }),
            ...{
                // 写自己的计算属性
            }
        }
    }
```


### 2. mutations改变state的状态(同步)
```html
    <button @click.stop="add(100)">点击+100<button>
```
```js
    // 实现是通过this.$store.commit('add',num)
    import { mapMutations } from 'vuex'
    export default {
        methods: {
            ...mapMutations(['add','cancel']),
            ...{
                // 写自己的方法
            }
        }
        methods: {
            ...mapMutations({
                // 可以将当前页面的this.add() 映射为this.$store.commit('addd')
                add: 'addd'
            }),
            ...{
                // 写自己的属性
            }
        }
    }

    
    // store中需要做如下修改
    new Vuex.Store({
        mutations: {
            add: function(state,num) {
                // 第一个参数state,后续参数为传递的参数
                state.count += num;
            }
        }
    })
```

### 3. getters计算属性(vuex)
```js
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters([sumCount]),
            ...mapState(['name','age']),
            ...{
                
            }
        }
    }

     // store中需要做如下修改
    new Vuex.Store({
        getters: {
            sumCount: function(state) {
                // 第一个参数state,后续参数为传递的参数
                return state.count1 + state.count2
            }
        }
    })
```


### 4. actions的使用




`vuex的使用`

`Date() 和 new Date()的使用`

`对象的合并Object.assign()和扩展符(...)`

`数组去重`

`vue-cli 3.0的使用`

`组件的封装事件的处理`

`elementui 布局的使用 el-row / el-col (gutter, offset , span )`