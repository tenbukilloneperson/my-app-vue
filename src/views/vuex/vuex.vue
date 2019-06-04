<template>
    <div>
        <my-card :breadName="breadName">
            aaa
        </my-card>
        <a href=""> aaa</a>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mpaActions, mapActions} from 'vuex'
export default {
    data() {
        return {
            breadName: ['组件传值','Vuex']
        }
    },
    computed: {
        ...mapState(['name','count']),
        ...mapGetters(['countSum']),
        ...{

        }
    },
    methods: {
        ...mapMutations({
            // add: 'adad'
        }),
        // ...mapActions(['adadAsync'])
        adadAsync() {
            this.$store.dispatch('adadAsync')
        }
     }
}
</script>

<style>

</style>

