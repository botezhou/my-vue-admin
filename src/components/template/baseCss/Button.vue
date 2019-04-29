<template>
    <el-button :size="obj.size" :type="obj.bType">{{obj.value}}</el-button>
</template>
<script>

export default {
    name: 'Button',
    props: {
        obj: {
            type: Object
        }
    }
}
</script>


