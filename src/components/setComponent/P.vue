<template>
    <div class="setComponent">
        <div class="form-item">
            <label>段落内容</label>
            <textarea v-model="obj.value"></textarea>
        </div>
        <div class="form-item">
            <label>文字大小</label>
            <el-select v-model="obj.fontSize" placeholder="请选择">
                <el-option
                    v-for="item in fontSizeOptions"
                    :key="item"
                    :label="item"
                    :value="item">
                </el-option>
            </el-select>
        </div>
        <div class="form-item">
            <label>行高</label>
            <el-select v-model="obj.lineHeight" placeholder="请选择">
                <el-option
                    v-for="item in lineHeightOptions"
                    :key="item"
                    :label="item"
                    :value="item">
                </el-option>
            </el-select>
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

