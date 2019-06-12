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
                   <h2>ES6中的扩展符的用法</h2>
                   <h2>ES6中class的用法</h2>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            breadName: ['ES2015','Promise']
        }
    }
}
</script>

<style>

</style>
