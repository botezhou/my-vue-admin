<template>
    <div class="setComponent">
        <div class="form-item">
            <label>容器宽度</label>
            <el-slider v-model="obj.width" :min="30" :max="100"></el-slider>
        </div>
        <div class="form-item">
            <label>容器高度自适应</label>
            <el-switch
                v-model="obj.heightAuto"
            >
            </el-switch>
        </div>
        <div class="form-item" v-if="!obj.heightAuto">
            <label>容器高度</label>
            <el-slider v-model="obj.height" :min="100" :max="1000"></el-slider>
        </div>
        <div class="form-item">
            <label>容器内边距</label>
            <el-slider v-model="obj.padding" :min="0" :max="100"></el-slider>
        </div>
        <div class="form-item">
            <label>容器背景色</label>
            <el-color-picker v-model="obj.background"></el-color-picker>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Input',
    props: {
        obj: {
            type: Object,

        }
    }
}
</script>
<style lang="less">
   
</style>

