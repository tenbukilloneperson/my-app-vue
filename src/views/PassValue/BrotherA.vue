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
                    <h2>通过<span class="mark">Event Bus</span>来实现兄弟组件传值</h2><br/>
                    <el-card>
                        <h3>这是A组件</h3><br>
                        <el-button type="primary" @click="sendValue">点击向B组件传值</el-button>
                    </el-card>
                    <br>
                    <el-card>
                        <h3>这是B组件</h3><br>
                        <my-brother></my-brother>
                    </el-card>
                    <ul>
                        <li>
                            <span>首先创建一个EventBus.js文件</span>
                            <div>
                                <img src="../../assets/img/eventbus.png" alt="">
                            </div>
                        </li>
                        <li>
                            <span>通过EventBus.$emit('EventName',params)传值</span>
                            <div>
                                <img src="../../assets/img/zhuceevent.png" alt="注册事件">
                            </div>
                        </li>
                        <li>
                            <span>用EventBus.$on()来监听事件</span>
                            <div>
                                <img src="../../assets/img/jiantingshijian.png" alt="监听事件">
                            </div>
                        </li>
                    </ul>
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
           breadName:['组件传值','兄弟间传值'],
           articleTitle: [
               {text:  'Event Bus'}
           ],
            msg: '这里是A组件的值'
       }
    },
    methods: {
        getValueFromSon(value) {
            console.log(value)  // 传递组件的值
        },
        sendValue() {
            EventBus.$emit('sendValue',this.msg)
        }
    },
    components: {
        'my-brother': BrotherB
    }
}
</script>

<style>
    .box-card {
        min-height: 926px;
    }
</style>
