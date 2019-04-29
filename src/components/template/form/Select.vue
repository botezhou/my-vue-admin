<template>
    <el-form-item :label="obj.label">
        <el-select v-model="obj.value" placeholder="请选择">
            <el-option
            v-for="item in obj.options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
    </el-form-item> 
</template>
<script>
export default {
    name: 'Select',
    props: {
        obj: {
            type: Object
        }
    }
}
</script>
<style lang="less">
    .el-select{
        width: 100%;
    }
</style>


