<template>
    <div class="setComponent">
        <div class="form-item">
            <label>按钮内容</label>
            <input v-model="obj.value" />
        </div>
        <div class="form-item">
            <label>按钮类型</label>
            <el-select v-model="obj.bType" placeholder="请选择">
                <el-option
                    v-for="item in typeOptions"
                    :key="item"
                    :label="item"
                    :value="item">
                </el-option>
            </el-select>
        </div>
        <div class="form-item">
            <label>按钮大小</label>
            <el-select v-model="obj.size" placeholder="请选择">
                <el-option
                    v-for="item in sizeOptions"
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
    name: 'Button',
    props: {
        obj: {
            type: Object,

        }
    },
    data() {
        return {
            typeOptions: [
               'primary', 'success', 'warning ', 'danger', 'info', 'text'
            ],
            sizeOptions: [
                'medium', 'small', 'mini'
            ]
        }
    }
}
</script>
<style lang="less">

</style>

