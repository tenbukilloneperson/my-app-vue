<template id="home">
    <el-container>
        <el-aside width="260px">
              <el-menu
                :default-active="currentMenu"
                background-color="transparent"
                text-color="#fff"
                active-text-color="#fff"
                :unique-opened="true"
                router>
                    <el-submenu v-for="(firstMenu,index) in menu" :key="index" :index="firstMenu.routerName">
                       <span slot="title">{{ firstMenu.name }}</span>
                        <el-menu-item v-for="(secondMenu,i) in firstMenu.children" :key="i" :index="secondMenu.routerName">
                            <i class="iconfont icon-dot-tiny" ></i>
                            <span slot="title">{{ secondMenu.name }}</span>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
        </el-aside>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            menu:[
                {
                   routerName: '/passvalue',
                   name: '组件传值',
                   children: [
                       {
                           routerName: '/home/passvalue/father-to-son',
                           name: '父传子'
                       },
                       {
                           routerName: '/home/passvalue/son-to-father',
                           name: '子传父'
                       },
                       {
                           routerName: '/home/passvalue/brother-to-brother',
                           name: '兄弟间传值'
                       },
                       {
                           routerName: '/home/passvalue/vuex',
                           name: 'Vuex'
                       },
                   ]
                }
            ]
        }
    },
    computed: {
        ...mapState(['currentMenu'])
    }
}
</script>

<style>
  .el-submenu__title:focus, .el-submenu__title:hover, .el-menu-item:focus, .el-menu-item:hover, .el-menu-item.is-active, .el-aside {
      background: linear-gradient(135deg,rgba(23,176,252,1) 0%,rgba(114,85,231,1) 100%) ;
  }
  .el-menu-item, .el-submenu {
      text-align: left;
  }
 .el-submenu__title i, .el-menu-item i {
    color: #fff;
}
</style>
