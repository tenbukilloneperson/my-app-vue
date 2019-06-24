<template>
    <div id="father">
        <l-com :breadName="breadName" :articleTitle="articleTitle">
            <template slot="content" slot-scope="scope">
                {{ scope.text }}
              <h2>父传子主要是通过 <span class="mark">Props Down(属性下发)</span>来完成</h2>
                    <ul>
                        <li>
                            <span>父组件通过绑定属性来下发要传递的值</span>
                            <div><img src="../../assets/img/father.png" alt="父组件绑定值"></div>
                        </li>
                        <li>
                            <span>子组件通过props来接收</span>
                            <div><img src="../../assets/img/props.png" alt="props接收父组件的传值"></div>
                        </li>
                    </ul>
            </template>
        </l-com>
    </div>
</template>

<script>
import Com from '../../components/base_templete'
import Vue from 'vue'
export default {
    components : {
        'l-com': Com
    },
    data() {
       return {
           breadName:['组件传值','父传子'],
           articleTitle: [
               {text:  'Props Down'}
           ],
            msg: '我是父组件的值'
       }
    },
    methods: {
        getValueFromSon(value) {
            console.log(value)  // 传递组件的值
        }
    },
    mounted() {
    }
}
</script>

<style>
</style>
