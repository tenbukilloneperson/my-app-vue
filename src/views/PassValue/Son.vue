<template id="son">
    <div>
        <my-card :breadName="breadName"></my-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            breadName: ['组件传值','子传父'],
            msg: '我是子组件的值'
        }
    }
}
</script>

<style>

</style>
