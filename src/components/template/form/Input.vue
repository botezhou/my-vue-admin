<template>
    <el-form-item :label="obj.label">
        <el-input v-model="obj.value"></el-input>
    </el-form-item> 
</template>
<script>

export default {
    name: 'Input',
    props: {
        obj: {
            type: Object
        }
    }
}
</script>

