<template>
    <div class="setComponent">
        <div class="form-item">
            <label>标题</label>
            <input v-model="obj.label" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'Textarea',
    props: {
        obj: {
            type: Object,

        }
    }
}
</script>
<style lang="less">

</style>

