<template>
<el-container class="app-container">
  <el-header class="app-header" height="60" :style="{background: themes.theme.headerTheme}">
    <app-header @changeTheme="switchTheme" :backgroundColor="themes.theme.backgroundColor"></app-header>
  </el-header>
  <el-container style="height:100%;overflow-x: auto">
    <el-aside class="app-side" :width="isCollapse ? '64px' : '200px'"
      :style="{background: themes.theme.backgroundColor}"
      >
      <div class="flex-container showSide collapse-driver" :style="{background: themes.theme.backgroundColor}">
        <i class="fa" :class="isCollapse ? 'fa-chevron-circle-right' : 'fa-chevron-circle-left'" @click="changeSide"></i>
      </div>
      <app-sidebar :isCollapse="isCollapse" :backgroundColor="themes.theme.backgroundColor" :textColor="themes.theme.textColor" :activeColor="themes.theme.activeColor"></app-sidebar>
    </el-aside>
    <el-main class="app-body">
      <breadcrumb :breadcrumbColor="themes.theme.backgroundColor" :backgroundColor="themes.theme.backgroundColor"></breadcrumb>
        <el-main class="app-page-body"> 
          <router-view></router-view>
        </el-main>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from '@/pages/driver/steps'
import appHeader from './app-header'
import appSidebar from './app-sidebar'
import breadcrumb from './breadcrumb'
import { mapGetters, mapActions } from 'vuex'
import Cookies from 'js-cookie'
export default {
  components: {
    appHeader,
    appSidebar,
    breadcrumb
  },
  computed: {

    ...mapGetters([
      'themes',
    ])
    
  },
  data() {
    return {
      isCollapse: false,
      hasMsg: false,
      sideWidth: 200,
      headerHeight: 60,
      driver: null
    }
  },
  created() {
    
  },
  mounted() {
    if(this.themes.isDriver) {
      return false
    }
    this.setDriver(true);
    this.driver = new Driver();
    this.driver.defineSteps(steps);
    this.driver.start()
  },

  methods:{
    ...mapActions({
      setTheme: 'set_theme',
      setDriver: 'set_isdriver', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    }),
    switchTheme(theme) {
      this.setTheme(theme.theme);
    },
    changeSide() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>
<style lang="less">
 .app-container{
    margin: 0 auto;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .app-container .app-header{
    padding: 0;
    background: linear-gradient(to right, #16AAB8, #16AAD8);
    overflow: visible;
  }
  .app-container .app-side{
    width: 200px;
    overflow-x: hidden;
    transition: all 0.5s ease;
    background: #16AAD8;
  }
  .app-container .app-body{
    width:100%;
    height: 100%;
    padding:0px;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
  }
  .app-content{
    height: 100%;
    // overflow: auto
  }
  .app-container .app-footer{
    background: #fff;
    border-top: solid 1px rgba(48, 54, 62, 0.14);
  }
  .app-container .app-page-body{
    width:100%;
    padding:40px 0 0 0;
    height: 100%;
    overflow: auto;
  }
  .app-header-logo-box{
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .app-header-logo-box .header-logo{
    height: 42px;
    margin-top:6px;
    margin-left:13px;
    display: block;
  }
  .app-header-logo-box .header-logo-text{
    font-size: 20px;
    font-weight: bold;
    opacity: 1;
  }

  /*mini-side*/
  .app-container.mini-side .app-side{
    overflow: visible;
  }
  .app-container.mini-side .app-side .el-menu--collapse{
    width: 60px;
  }

  .app-container.mini-side .header-logo-text{
    opacity: 0;
  }
  /*hide-side*/
  .app-container.hide-side .app-side{
    display: none;
  }
  .flex-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height:40px;
  }
  .showSide{
    
    .fa{
      font-size:30px;
      color:#fff;
    }
  }
</style>
