/**
    本文导读插件
*/
<template>
    <div id="guide-read">
        <ul>
            <li v-for="(item, index) in articleTitle" 
            :key="index" :class="[isActive == index ? 'active' : '']" 
            @click="chooseTitle($event,item,index)" 
            :data-index="index">
              <span class="iconfont icon-shixinyuandian2"></span>
              <i>{{ item.text }}</i>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        articleTitle: {
            type: Array,
            required: false,
            default() {
                return []
            }
        },
        currentPosition: {
            type: Number,
            required: false,
            default: 0
        }
    },
    watch: {
        currentPosition(newVal) {
            this.isActive = newVal
            
        }
    },
    data () {
        return {
            isActive: 0
        }
    },
    methods: {
        chooseTitle(event,item,index) {
            this.isActive = event.currentTarget.dataset.index
            this.$emit('positionText',item.text,index)
        }
    }
}
</script>

<style lang="scss">
    #guide-read {
        position: fixed;
        right: 200px;
        top: 150px;
        ul {
            padding-left: 20px;
            li {
                display: flex;
                align-items: center;
                cursor: pointer;
                font-size:16px;
                font-family:MicrosoftYaHei;
                font-weight:400;
                color:#999;
                height: 60px;
                border-left: 1px solid #DCDCDC;
                padding-left: 20px;
                position: relative;
                span {
                    position: absolute;
                    left: -8Px;
                    font-size: 16px !important;
                }      
                a {
                    color:#eee;
                    &:hover {
                        color:rgba(18,210,171,1);
                    }
                }
                i {
                    font-style: normal;
                }
            }
            .active {
                color:#409eff;
            }
        }
    }
</style>
