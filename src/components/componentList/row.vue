<template>
    <div class="row-conmon">
        <el-row class="row-fluid">
            <span class="row-tag">Row</span>
                <el-col class="row-column" :span="24/element.type" v-for="(column,key) in element.childList" :key="key">
                <span class="row-tag">Column</span>
                </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    props: {
        RowList: {
            type: Array,
            default: null
        }
    }
}
</script>
<style lang="less" scoped>
.row-conmon{

}
    
</style>


