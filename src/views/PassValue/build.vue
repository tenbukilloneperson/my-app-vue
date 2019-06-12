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
                 <h2>问题:每次修改接口地址都需要重新打包,浪费精力</h2><br>
                 <h2>解决方法 </h2><br>
                 <p>写一个配置文件,里面配置请求的基本路径, 每次打包之后将配置文件暴露出来。如果只修改接口地址，只需要修改配置文件 然后刷新页面就可以</p><br>
                 <p>json文件的内容</p><br>
                 <p><img src="../../assets/img/json.png" alt=""></p>
                 <p></p>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
import EventBus from '../EventBus/EventBus'
import BrotherB from './BrotherB'
export default {
    data() {
       return {
           breadName:['组件传值','vue-build'],
           articleTitle: [
               {text:  'vue-build'}
           ]
       }
    }
}
</script>

<style>
    .box-card {
        min-height: 926px;
    }
</style>
