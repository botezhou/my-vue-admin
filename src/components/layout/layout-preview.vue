<template>
    <div class="layout">
    <div class="app-preview">
        <div class="preview-container">
            <span class="row-tag">Container</span>
            <draggable class="drag-box" @change="changeList" :list="templateList" :options="{group: 'row',scroll: true, dragClass: 'dragClass',}">
                <div v-for="(element,index) in templateList" :key="index">                  
                    <el-row class="row-fluid" :style="{
                        height: element.heightAuto ? 'auto' : element.height+'px',width: element.width+'%',
                        background: element.background,
                        margin: element.margin+'px',
                        padding: element.padding+'px'
                    }"> 
                        <span class="row-tag">Row</span>
                        <span class="row-edit label" @click="setRow(index)"><i class="iconfont icon-editor"></i> 编辑</span>
                        <span class="row-remove label" @click="delRow(index)"><i class="iconfont icon-shanchu"></i> 删除</span>
                        <div v-if="element.type!='RowTab'">
                            <el-col class="row-column" :span="element.span[columnIndex]" v-for="(column, key, columnIndex) in element.childList" :key="key">
                                <span class="row-tag">Column</span>  
                                <el-form label-width="60px">                         
                                    <draggable class="child-drag-box" @change="changeList" :list="column" :options="{group:{ name:'base' }, dragClass: 'dragClass',}">                                       
                                        <div v-for="(child, childIndex) in column" :key="childIndex" class="child-component">
                                            <span class="row-remove label" @click="delComponent(index, key, childIndex)"><i class="iconfont icon-shanchu"></i> 删除</span>
                                            <span class="row-edit label" @click="setComponent(index, key, childIndex)"><i class="iconfont icon-editor"></i> 编辑</span>
                                            <component :is="child.type" :obj="child"></component>
                                        </div>                                                   
                                    </draggable>
                                </el-form>  
                            </el-col>
                        </div>
                        <div v-else>
                            <el-tabs class="row-column" v-model="element.curTab" type="card">
                                <el-tab-pane :style="{
                                    height: element.heightAuto ? 'auto' : element.height+'px',width: element.width+'%',
                                    background: element.background,
                                    margin: element.margin+'px',
                                    padding: element.padding+'px'
                                }" 
                                v-for="(column, key, columnIndex) in element.childList" :key="columnIndex" 
                                :label="(element.tabList[columnIndex]).label" 
                                :name="(element.tabList[columnIndex]).value">
                                    <el-form label-width="60px">                                          
                                        <draggable class="child-drag-box" @change="changeList" :list="column" :options="{group:{ name:'base' }, dragClass: 'dragClass',}">                                       
                                            <div v-for="(child, childIndex) in column" :key="childIndex" class="child-component">
                                                <span class="row-remove label" @click="delComponent(index, key, childIndex)"><i class="iconfont icon-shanchu"></i> 删除</span>
                                                <span class="row-edit label" @click="setComponent(index, key, childIndex)"><i class="iconfont icon-editor"></i> 编辑</span>
                                                <component :is="child.type" :obj="child"></component>
                                            </div>                                                   
                                        </draggable>
                                    </el-form>  
                                </el-tab-pane>
                            </el-tabs>                             
                        </div>
                    </el-row>
                </div>
            </draggable>
        </div>
    </div>
    </div>
</template>
<script>
import draggable from 'vuedraggable'
import deepClone from '@/utils/deepClone'
import Template from '@/components/template'
import { mapGetters } from 'vuex'
export default {
    components: {
        draggable,
        ...Template
    },

    data() {
        return {
            templateList: JSON.parse(localStorage.getItem('templateList')) ? JSON.parse(localStorage.getItem('templateList')) : [],
        }
    },

    methods: {
        // 当布局数据改变时 克隆数据
        changeList() {
           this.templateList = deepClone(this.templateList)
        },
        // 预览   
        previewClick() {
            this.$router.push({path: '/preview'})
            this.dispatch()
        },
        // 删除布局
        delRow(index) {
            this.templateList.splice(index,1)
            this.dispatch()
        },
        // 删除组件
        delComponent(index, key, childIndex) {
            this.templateList[index].childList[key].splice(childIndex,1)
            this.dispatch()
        },
        // 布局设置
        setRow(index) {
            this.$emit('setRow',this.templateList[index])
            console.log(this.templateList[index])
        },
        // 组件设置
        setComponent(index, key, childIndex) {           
            this.$emit('setComponent',this.templateList[index].childList[key][childIndex])
        },
        // 保存数据到vuex 
        dispatch() {
            this.$store.dispatch('set_template_list',this.templateList)
        },
        // 清空数据
        delAllClick() {
            this.templateList = []
            this.$store.dispatch('del_template_list')
        }
    }
}
</script>

<style lang="less" scoped>
    .app-preview{
       height: calc(100% - 60px);
       overflow-y: auto; 
       width: calc(100% - 400px);
       position: fixed;
       top:60px;
       left: 200px;
       background: #fff;
       padding: 10px;
       .dragClass{
           background: skyblue !important;
       }
    }
    .preview-container,.drag-box{
        width: 100%;
        min-height: 100px;
    }
    .preview-container{
        padding: 30px 15px 15px;
        border: 1px solid #DDDDDD;
        border-radius: 4px;
        position: relative;
        word-wrap: break-word;
        height: auto;
        min-height:100%;
    }
    .child-component{
        padding-top: 28px;
        font-size: 12px;
        position: relative;
        cursor: pointer;
        &:hover{
            >.row-remove{
                opacity: 0.9;
            }
            >.row-edit{
                opacity: 0.9;
            }
        }
    }
</style>

