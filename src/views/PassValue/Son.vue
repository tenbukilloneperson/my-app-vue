<template id="son">
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <my-bread :breadName="breadName"></my-bread>
                <my-guide :articleTitle="articleTitle"></my-guide>
            </div>
            <el-row>
                <!-- 主体内容区域 -->
                <el-col :span="20">
                    <h2>子传父通过 <span class="mark">Events Up(事件上传)</span>来传值</h2>
                    <ul>
                        <li>
                            <span>子组件内注册自定义事件并传值</span>
                            <div><img src="../../assets/img/emit.jpg" alt="emit"></div>
                        </li>
                        <li>
                            <span>父组件绑定自定义事件并获取这个值</span>
                            <div>
                                <img src="../../assets/img/bangdingshijian.png" alt="父组件绑定事件">
                                <br>
                                <img src="../../assets/img/huoquzhi.png" alt="获取值">
                            </div>
                        </li>
                    </ul>
                    <h2>通过<span class="mark">slot(插槽)</span>向父组件传值</h2>

                    <ul>
                        <li>
                            <span>子组件内通过slot绑定传递出去的值</span>
                            <div><img src="../../assets/img/slot.jpg" alt="slot"></div>
                        </li>
                        <li>
                            <span>父组件内通过具名的slot来获取</span>
                            <div>
                                <img src="../../assets/img/getslot.jpg" alt="">
                            </div>
                        </li>
                        <li>
                            <span>下面是获取到值</span>
                            <div>
                                <my-slot>
                                    <div slot="slot" slot-scope="scope">
                                        {{ scope }}
                                    </div>
                                </my-slot>
                            </div>
                        </li>
                    </ul>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
import slot from './slotPassValue' 
export default {
    data() {
        return {
            breadName: ['组件传值','子传父'],
            articleTitle: [
                {text: 'Events Up'},
                {text: 'slot(插槽)'}
            ],
            msg: '我是子组件的值'
        }
    },
    components: {
        'my-slot': slot
    },
    mounted() {
        this.$emit('sendValue','传递子组件的值')
    }
}
</script>

<style>

</style>
