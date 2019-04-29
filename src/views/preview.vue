<template>
    <div class="layout">
        <div class="head">
            <div class="headbox flex-container">
                <div class="logo-box">    
                    <div>Vue-Layout</div>    
                </div>
                <div>
                <div class="flex-container">
                    <div class="flex-item" @click="goBack"><i class="iconfont icon-baocun"></i>返回</div>
                    <div class="flex-item" @click="goBack"><i class="iconfont icon-plus-preview"></i>重新编辑</div>
                </div>  
                </div>
            </div>
        </div>
        <div v-for="(element,index) in fatherList" :key="index">
            <el-row :gutter="20" :style="{
                height: element.heightAuto ? 'auto' : element.height+'px',width: element.width+'%',
                background: element.background,
                margin: element.margin+'px',
                padding: element.padding+'px'
                }" v-if="element.type!='RowTab'"> 
                <el-col :span="element.span[columnIndex]" v-for="(column, key, columnIndex) in element.childList" :key="key">
                    <el-form label-width="60px">                     
                        <div v-for="(child, chiildIndex) in column" :key="chiildIndex">
                            <div>
                                <component :is="child.type" :obj="child"></component>
                            </div>
                        </div>   
                    </el-form>                         
                </el-col>
            </el-row>
            <el-row :gutter="20" :style="{
                    height: element.heightAuto ? 'auto' : element.height+'px',width: element.width+'%',
                    background: element.background,
                    margin: element.margin+'px',
                    padding: element.padding+'px'
                }" v-else>
                <el-tabs v-model="element.curTab" type="card">
                    <el-tab-pane v-for="(column, key, columnIndex) in element.childList" :label="(element.tabList[columnIndex]).label" :name="(element.tabList[columnIndex]).value" :key="key">
                        <el-form label-width="60px">                                            
                            <div v-for="(child, childIndex) in column" :key="childIndex">
                                <component :is="child.type" :obj="child"></component>
                            </div>                                                   
                        </el-form>  
                    </el-tab-pane>
                </el-tabs>                             
            </el-row>
        </div>
    </div>
</template>
<script>
import Template from '@/components/template'
import { mapGetters } from 'vuex'
export default {
    components: {
        ...Template
    },
    computed: {
      ...mapGetters([
        'templateList',
      ])
    },
    data() {
        return {
            fatherList: JSON.parse(localStorage.getItem('templateList')) ? JSON.parse(localStorage.getItem('templateList')) : []
        }
    }, 
    methods: {
        goBack() {
            this.$router.push({path: '/layout'})
        }
       
    }
}
</script>

<style lang="less">
    
</style>

