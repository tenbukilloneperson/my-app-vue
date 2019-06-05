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
                    
                </el-col>
            </el-row>
        </el-card>
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

