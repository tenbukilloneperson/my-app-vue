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
                    <slot name="content" :text="msg">1000</slot>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
export default {
    props: {
        breadName: {
            type: Array,
            required: true,
            default() {
                return []
            }
        },
        articleTitle: {
            type: Array,
            required: true,
            default() {
                return []
            }
        }
    },
    data() {
       return {
    //        breadName:['组件传值','父传子'],
    //        articleTitle: [
    //            {text:  'Props Down'}
    //        ],
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
