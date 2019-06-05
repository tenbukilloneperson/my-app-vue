<template>
    <div id="father">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <my-bread :breadName="breadName"></my-bread>
                <my-guide :articleTitle="articleTitle"></my-guide>
            </div>
            <el-row>
                <!-- 主体内容区域 -->
                <el-col :span="20">
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
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
export default {
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
    }
}
</script>

<style>
</style>
