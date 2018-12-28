<template>
    <div class="mel-alert">
        <el-alert
            :title="title"
            type="info"
            :description="description"
            show-icon
            :closable="false"
            class="alert_desc"
            >
        </el-alert>
    </div>
</template>
<script>
export default {
    props: {
        description: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: '重要提示'
        }
    }
}
</script> 
<style lang="less" scoped>
    
</style>
   


