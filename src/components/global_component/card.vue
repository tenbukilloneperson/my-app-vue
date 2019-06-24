<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item,index) in breadName" :key="index">{{ item }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    props: {
        breadName: {
            type: Array,
            required: false,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
</style>
