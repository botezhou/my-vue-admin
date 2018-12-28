<template>
    <div class="page-title breadcrumb-driver" :style="{background: backgroundColor}">
        <el-breadcrumb class="app-breadcrumb" separator="/">
          <transition-group name="breadcrumb">
            <el-breadcrumb-item v-if="item.meta.title" v-for="(item,index) in levelList"  :key="item.path">
              <span v-if="item.redirect==='noredirect'||index==levelList.length-1" class="no-redirect">{{generateTitle(item.meta.name)}}</span>
              <router-link v-else :to="item.redirect||item.path">{{generateTitle(item.meta.name)}}</router-link>
            </el-breadcrumb-item>
          </transition-group>
        </el-breadcrumb>
    </div>
</template>

<script>
import { generateTitle } from '@/utils/i18n';
export default {
  props: {
    breadcrumbColor: {
      type: String,
      default: 'linear-gradient(to right, #16AAB8, #16AAD8)'
    },
    backgroundColor: {
      type: String,
      default: 'linear-gradient(to right, #16AAD8, #16AAB8)'
    }
  },
  created () {
    this.getBreadcrumb()
  },
  data () {
    return {
      levelList: null
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  methods: {
    generateTitle,
    getBreadcrumb () {
      let matched = this.$route.matched.filter(item => item)
    
      const first = matched[0]
      if (first && first.name !== 'dashboard') {
        matched = [{path: '/dashboard', meta: {name: 'dashboard', title: '总览'},redirect: '/view',}].concat(matched)
      }
      this.levelList = matched
    }
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .page-title{
      width:100%;
      padding:0px 10px;
      position: absolute;
      left:0;
      top:0;
      background: linear-gradient(to right, #16AAB8, #16AAD8);
      box-sizing: border-box;
      height: 40px;
      overflow: hidden;
      z-index: 999999;
      // border-radius: 3px;
      margin:0 0 5px 0;
      box-shadow: -3px 3px 10px #333333;

  }
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 40px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
    .el-breadcrumb__item{
      cursor: pointer;
      a{
        cursor: pointer;
      }
    }
  }
  .el-breadcrumb__inner a{
    color:#fff;
  }
  .app-breadcrumb.el-breadcrumb .no-redirect{
    color:#f1f1f1;
  }
</style>
