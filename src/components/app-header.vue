<template>
  <div class="head">
    <div class="headbox flex-container">
        <div class="logo-box">    
          <h1 style="width:200px;text-align: center;font-style: italic;">VUE-ADMIN</h1>    
          <!-- <img src="../assets/image/logo_fast.png" alt="" class="header-logo"> -->
        </div>
        <div>
          <div class="flex-container">
            <div class="flex-item lang">
              <span :class="{langActive: langActive==null || langActive=='zh'}" @click="changLang('zh')">中文</span>
              <i>/</i>
              <span :class="{langActive: langActive=='en'}" @click="changLang('en')">EngLish</span>
            </div>
            <div class="flex-item">
              <i class="fa fa-user-circle-o"></i>
              <span style="font-size:14px;margin: 0 15px 0 0;">{{$t('navbar.wellcome')}}</span>
            </div>
            <div class="flex-item full-driver" title="全屏">
              <i class="fa" @click="handleSwitchScreen" :class="isFullScreen ? 'fa-compress' : 'fa-expand'"></i>               
            </div>
            
            <div class="flex-item set-driver" title="主题设置">            
               <el-dropdown trigger="click" @command="handleCommand">
                  <span class="el-dropdown-link">
                    <i class="fa fa-gear set"></i>   
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="theme in themes" :key="theme.name" :command="theme">{{generateSkinColor(theme.name)}}</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>    
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import themes from './theme'
import Cookies from 'js-cookie'
import {generateSkinColor} from '@/utils/i18n'
export default {
  props: {
    backgroundColor: {
      type: String,
      default: null
    }
  },
  components:{

  },
  data() {
      return {
        themes,
        langActive: Cookies.get('language'),
        isFullScreen: false
      }
  },
  methods:{
    // 全屏切换
    handleSwitchScreen() {
      if (this.isFullScreen) {
        var doc = document;
        if (doc.exitFullscreen) {
          doc.exitFullscreen()
        } else if (doc.mozCancelFullScreen) {
          doc.mozCancelFullScreen()
        } else if (doc.webkitCancelFullScreen) {
          doc.webkitCancelFullScreen()
        } else if (doc.msExitFullscreen) {
          document.msExitFullscreen()
        }
        this.isFullScreen = false
      } else {
        var elem = document.documentElement;
        if (elem.requestFullscreen) {
          elem.requestFullscreen()
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen()
        } else if (elem.webkitRequestFullScreen) {
          elem.webkitRequestFullScreen()
        } else if (elem.msRequestFullscreen) {
          // elem.msRequestFullscreen() 没有指定元素
          document.body.msRequestFullscreen()
        }
        this.isFullScreen = true
      }
    },
    generateSkinColor,
    handleCommand(theme) {
      this.$emit('changeTheme',theme)
    },
    changLang(lang) {
      this.$i18n.locale = lang;
      this.langActive = lang;
      Cookies.set('language',lang, { expires: 30 })
    }
  }
}
</script>
<style lang="less" >
  .head{
    .flex-container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height:60px;
      color:#fff;
      font-size:16px;
      padding: 0 10px 0 0;
      .flex-item{
        min-width:30px;
        text-align: center;
        line-height: 30px;
        cursor: pointer;
      }
    }
    .lang{
      margin-right:20px;
      font-size:14px;
      span{
        cursor: pointer;
        font-weight: bold;
      }
      .langActive{
        color: #EE8262; 
        transition: all .3s ease;

      }
    }
    .driver-position-relative{
      background: rgb(22, 170, 216);
    }
    .logo-box{
      .header-logo{
        height:50px;
        margin-left:20px;
      }
    }
    .set{
      font-size: 20px;
      color:#fff;
      transition: 0.5s all ease;
      &:hover{
        transform: rotateZ(180deg);
        color: #32CD32;   
      }
        
    }
  }
</style>
