<template>
    <div class="setComponent">
        <div class="form-item">
            <label>图片链接地址</label>
            <input v-model="obj.value" />
        </div>
        <div class="form-item">
            <label>图片宽度</label>
            <el-slider v-model="obj.width" :min="30" :max="100"></el-slider>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Img',
    props: {
        obj: {
            type: Object,

        }
    }
}
</script>
<style lang="less">

</style>

