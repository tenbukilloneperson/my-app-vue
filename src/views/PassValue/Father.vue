<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <my-bread :breadName="breadName"></my-bread>
                <my-guide :articleTitle="articleTitle"></my-guide>
            </div>
            <el-row>
                <!-- 主体内容区域 -->
                <el-col :span="20">
                    <h2>父传子主要是通过 <span class="mark">Props Down(属性下发)</span>来完成</h2>
                    <code>
                        
                    </code>
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
               {text:  'A'},
               {text:  'B'},
               {text:  'C'}
           ],
            msg: '我是父组件的值'
       }
    }
}
</script>

<style>
    .box-card {
        min-height: 926px;
    }
</style>
