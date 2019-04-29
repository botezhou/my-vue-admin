<template>
    <div class="layout">
    <div class="app-left">
        <div class="app-left-nav">
            <div class="nav nav-groups" :class="{active: listIndex==curIndex }" v-for="(list,listIndex) in layout" :key="listIndex">
                <div class="nav-header" @click="navClick(listIndex)"><i class="icon">+</i> {{list.title}}</div>
                <div class="nav-rows" v-if="list.type=='containerComponent'">              
                    <draggable v-model="list.list" :options="{group:{ name:'row',  pull:'clone', put:false}, dragClass: 'dragClass', scroll: true, sort:false}">
                        <div v-for="(element,elIndex) in list.list" :key="elIndex" class="el-row">
                            <div class="row-text">{{element.text}}</div>
                            <!-- <el-row class="row-fluid">
                                <span class="row-tag">Row</span>
                                    <el-col class="row-column" :span="24/element.type" v-for="(column,key) in element.childList" :key="key">
                                       <span class="row-tag">Column</span>
                                    </el-col>
                            </el-row> -->
                        </div>
                    </draggable>
                </div>
                <div class="nav-rows" v-else>   
                    <el-form>                     
                    <draggable v-model="list.list" :options="{group:{ name:'base',  pull:'clone', put:false}, dragClass: 'dragClass', scroll: true, sort:false}" @end="moved">
                        <div v-for="(element,elIndex) in list.list" :key="elIndex" class="el-row">
                            <div class="nav-component">
                                <div class="nav-component-title">{{element.text}}</div>
                                <!-- <div class="nav-componnet-box">
                                   <component :is="element.type" :obj="element"></component>
                                </div> -->
                            </div>
                        </div>
                    </draggable>
                    </el-form> 
                </div>
            </div>           
        </div>
    </div>
    </div>
</template>
<script>
import draggable from 'vuedraggable'
import ContainerComponent from '@/utils/template/containerList'
import FormComponent from '@/utils/template/formList'
import BaseCssComponent from '@/utils/template/baseCssList'
import ComponentList from '@/components/template'

export default {
    components: {
        draggable,
        ...ComponentList
    },
    created() {

    },
    data() {
        return {
            curIndex: 0,
            layout: [
                ContainerComponent,
                FormComponent,
                BaseCssComponent
            ]
        }
    },
    methods: {
        moved(value) {
           
        },
        navClick(index) {
            this.curIndex = index
        },
        getData() {

        }
    }
}
</script>

<style lang="less">
    .app-left{
        position: fixed;
        width: 200px;
        left: 0px;
        bottom: 0;
        top: 60px;
        background: #262626;
        padding: 9px 0;
        z-index: 10;
        -webkit-transition: all 500ms ease;
        -moz-transition: all 500ms ease;
        -ms-transition: all 500ms ease;
        -o-transition: all 500ms ease;
        transition: all 500ms ease;
        overflow: auto;
        
        .nav-groups{
            color:#fff;
            padding: 10px 20px;    
            max-height: 30px;
            overflow: hidden;
            .nav-header{
                 font-size: 14px;
                 cursor: pointer;
                .icon{      
                    font-size: 16px;         
                    font-weight: bold;
                    margin-right: 5px;
                }
            }
            .nav-rows{                          
                .el-row{
                    background:#ccc;
                    width: 90%;
                    color:#666;
                    border-radius: 2px;
                    padding:6px;
                    margin-top:10px;
                    height: 30px;
                    position: relative;
                    overflow: hidden;
                    .row-text{
                        font-size: 12px;
                        cursor: move;
                    }
                    .row-fluid{
                       opacity: 0;
                    }
                }
               
                .dragClass{
                    background: skyblue;
                }
            }
            .nav-component{     
                .nav-component-title{
                    font-size: 12px;
                    cursor: move;
                }
                .nav-componnet-box{
                    opacity: 0;
                    height: 0;
                }
            }
            
        }
        .nav-groups.active{
            max-height: 1000px;
            transition: all 1000ms ease-in;
        }
    }
    
</style>

