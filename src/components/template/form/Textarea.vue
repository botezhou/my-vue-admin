<template>
    <el-form-item :label="obj.label">
        <el-input type="textarea" v-model="obj.value"></el-input>
    </el-form-item> 
</template>
<script>

export default {
    name: 'Textarea',
    props: {
        obj: {
            type: Object
        }
    }
}
</script>

