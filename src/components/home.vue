<template id="home">
    <el-container>
        <el-aside width="260px">
            <div class="logo">XNQIANDUAN</div>
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
            <router-view></router-view>
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
                },
            ]
        }
    },
    computed: {
        ...mapState(['currentMenu'])
    }
}
</script>

<style lang="scss">
    .logo {
        width: 100%;
        text-align: center;
        height: 100px;
        line-height: 100px;
        font-weight: 700;
        font-size: 20px;
        color: #6666ff;
    }
  /* .el-submenu__title:focus, .el-submenu__title:hover, .el-menu-item:focus, .el-menu-item:hover, .el-menu-item.is-active, .el-aside {
      background: linear-gradient(135deg,rgba(23,176,252,1) 0%,rgba(114,85,231,1) 100%) ;
  } */
  .el-aside {
      background: #373f51;
  }
    .el-submenu .el-menu-item.is-active {
        color: #6666ff !important;
    }
  .el-submenu__title:hover, .el-menu-item:hover {
      background: #4a5a6a !important;
  }
 .el-submenu__title i, .el-menu-item i {
    color: #fff;
}
</style>
