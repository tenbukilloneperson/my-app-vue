<template>
    <div>
        <slot name="slot" :text="slotObj"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slotObj: {
                name: '通过slot传值',
                desc: '第一次用这种方法来传值'
            }
        }
    }
}
</script>

<style>

</style>
