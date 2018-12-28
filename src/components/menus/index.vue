<template>
  <div class="sidebar">
  <el-menu
    :collapse="isCollapse"
    :default-active="$route.name"
    class="el-menu-vertical-demo"
    :background-color="backgroundColor"
    :text-color="textColor"
    router
    :active-text-color="activeColor">
    <template v-if="menus" v-for="menu in menus">
      <el-submenu v-if="menu.is_group == true" :index="menu.index" :key="menu.index">
        <template slot="title">
          <i :class="menu.class_i"></i>
          <span slot="title">{{generateTitle(menu.name)}}</span>
        </template>
        <template v-for="menuitem in menu.children">
          <template v-if="menuitem.is_group == true">
            <el-submenu :index="menuitem.index" :key="menuitem.index">
              <template slot="title">
                <i :class="menuitem.class_i"></i>
                <span slot="title">{{generateTitle(menuitem.name)}}</span>
              </template>
              <template v-for="menuitemChild in menuitem.children">
                <el-menu-item :index="menuitemChild.index" :key="menuitemChild.index">
                  <i :class="menuitemChild.class_i"></i>
                  <span :class="menuitemChild.class_span">{{generateTitle(menuitemChild.name)}}</span>
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
          <el-menu-item v-else :index="menuitem.index" :key="menuitem.index">
            <i :class="menuitem.class_i"></i>
            <span :class="menuitem.class_span">{{generateTitle(menuitem.name)}}</span>
          </el-menu-item>
        </template>
      </el-submenu>
      <el-menu-item v-else :index="menu.index" :key="menu.index">
        <i :class="menu.class_i"></i>
        <span slot="title" :class="menu.class_span">{{generateTitle(menu.name)}}</span>
      </el-menu-item>
    </template>
  </el-menu>
  </div>
</template>
<script>
    import { generateTitle } from '@/utils/i18n';
    export default {
        name: "menus",
        props: {
          isCollapse: {
            type: Boolean,
            default: false
          },
          textColor: {
            type: String,
            default: '#fff'
          },
          activeColor: {
            type: String,
            default: '#ffd04b'
          },
          backgroundColor: {
            type: String,
            default: '#16AAD8'
          }
        },
        methods:{
          generateTitle
        },
        data(){
          let menus = [
            {
              index:'view',
              name:'dashboard',
              class_i:'fa fa-dashboard',
              class_span:'sb-cn',
              is_group:false,
              children:null
            },
            {
              index:'gantt',
              name:'gantt',
              class_i:'fa fa-life-saver',
              class_span:'sb-cn',
              is_group:false,
              children:null
            },
            {
              index:'dragForm',
              name:'dragForm',
              class_i:'fa fa-tasks',
              class_span:'sb-cn',
              is_group:false,
              children:null
            },
            {
              index:'5',
              name:'echarts',
              class_i:'fa fa-area-chart',
              class_span:'sb-cn',
              is_group:true,
              children: [
                {
                  index:'mapCharts',
                  name:'map',
                  class_i:'fa fa-map-o',
                  class_span:'sb-cn',
                  is_group:false,
                  children:null
                },
                {
                  index:'radarCharts',
                  name:'radar',
                  class_i:'fa fa-bolt',
                  class_span:'sb-cn',
                  is_group:false,
                  children:null
                },
                {
                  index:'barCharts',
                  name:'bar',
                  class_i:'fa fa-bar-chart',
                  class_span:'sb-cn',
                  is_group:false,
                  children:null
                },
                {
                  index:'pieCharts',
                  name:'pie',
                  class_i:'fa fa-pie-chart',
                  class_span:'sb-cn',
                  is_group:false,
                  children:null
                },
              ]
            },
            {
              index:'driver',
              name:'driver',
              class_i:'fa fa-paper-plane',
              class_span:'sb-cn',
              is_group:false,
              children:null
            },
            {
              index:'6',
              name:'components',
              class_i:'fa fa-area-chart',
              class_span:'sb-cn',
              is_group:true,
              children: [
                {
                  index:'html5Editor',
                  name:'editor',
                  class_i:'fa fa-edit',
                  class_span:'sb-cn',
                  is_group:false,
                  children:null
                },
                {
                  index:'avatarUpload',
                  name:'avatarUpload',
                  class_i:'fa fa-paper-plane',
                  class_span:'sb-cn',
                  is_group:false,
                  children:null
                },
                {
                  index:'countTo',
                  name:'countTo',
                  class_i:'fa fa-paper-plane',
                  class_span:'sb-cn',
                  is_group:false,
                  children:null
                },
                {
                  index:'awesomeSwiper',
                  name:'awesomeSwiper',
                  class_i:'fa fa-paper-plane',
                  class_span:'sb-cn',
                  is_group:false,
                  children:null
                }
              ]
              
            },
          ];
          return{
            menus,
          }
        }
    }
</script>

<style lang="less" >
   .sidebar{
     width:200px;
     overflow: hidden;
   }
   .el-menu{
     border:none;
     i{
       font-size:18px;
       margin-right: 6px;
     }
   }
</style>
