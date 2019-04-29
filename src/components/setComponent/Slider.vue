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
    },
    data() {
        return {
            fontSizeOptions: [
                '12px',
                '14px',
                '16px',
                '18px',
                '20px',
                '22px',
            ],
            lineHeightOptions: [
                '20px',
                '30px',
                '40px',
            ]
        }
    }
}
</script>
<style lang="less">

</style>

