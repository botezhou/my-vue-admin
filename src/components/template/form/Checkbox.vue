<template>
    <el-form-item :label="obj.label">
       <el-checkbox-group v-model="obj.value">
            <el-checkbox :label="item.value" v-for="(item,index) in obj.options" :key="index">{{item.label}}</el-checkbox>
        </el-checkbox-group>
    </el-form-item> 
</template>
<script>
export default {
    name: 'Checkbox',
    props: {
        obj: {
            type: Object
        }
    }
}
</script>

