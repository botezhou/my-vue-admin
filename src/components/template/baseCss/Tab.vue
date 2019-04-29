<template>
    <el-tabs v-model="obj.curTab" type="card">
        <el-tab-pane :style="{
            height: obj.heightAuto ? 'auto' : obj.height+'px',width: obj.width+'%',
            background: obj.background,
            margin: obj.margin+'px',
            padding: obj.padding+'px'
        }" 
        v-for="(column, key, columnIndex) in obj.childList" :key="columnIndex" 
        :label="(obj.tabList[columnIndex]).label" 
        :name="(obj.tabList[columnIndex]).value">
            
            <el-table
                :data="column"
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
            </el-table>
        </el-tab-pane>
    </el-tabs>             
</template>

<script>
import draggable from 'vuedraggable'
import Template from '@/components/template'
import deepClone from '@/utils/deepClone'
export default {
    name: 'Tab',
    components: {
        draggable,
        ...Template 
    },
    props: {
        obj: {
            type: Object
        }
    },

    data() {
        return {
         
        }
    },
    methods: {
        handleClick(value) {
            console.log(value)
        },
        changeList() {
            

        }
    }
}
</script>