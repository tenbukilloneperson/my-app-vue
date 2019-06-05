<template>
    <div>
        <p>用来展示A组件的值：{{ msg }}</p>
    </div>
</template>

<script>
import EventBus from '../EventBus/EventBus'
export default {
    data() {
        return {
            msg: ''
        }
    },
    mounted() {
        EventBus.$on('sendValue',(value) => {
            this.msg = value
        })
    }
}
</script>

<style>

</style>
