<template>
    <el-form-item :label="obj.label">
       <el-radio-group v-model="obj.value">
            <el-radio :label="item.value" v-for="(item,index) in obj.options" :key="index">{{item.label}}</el-radio>
        </el-radio-group>
    </el-form-item> 
</template>
<script>
export default {
    name: 'Radio',
    props: {
        obj: {
            type: Object
        }
    }
}
</script>

