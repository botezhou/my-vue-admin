<template>
    <div class="setComponent">
        <div class="form-item">
            <label>标题</label>
            <input v-model="obj.label" />         
        </div>
        <div class="form-item">
            <label>多选项设置</label>
            <div v-for="(item, index) in obj.options" :key="index">
                <input v-model="item.label" />
            </div>            
        </div>
        <el-button type="text" @click="add"><i class="ft20 iconfont icon-jia"></i></el-button>    
        <el-button :disabled="obj.options.length<=2" type="text" @click="del"><i class="ft20 iconfont icon-jian"></i></el-button>    
    </div>
</template>
<script>
export default {
    name: 'Checkbox',
    props: {
        obj: {
            type: Object,

        }
    },
    methods: {
        add() {
            this.obj.options.push({label: `选项${this.obj.options.length+1}`, value: `${this.obj.options.length+1}`})
        },
        del() {
            this.obj.options.pop()
        }
    }
}
</script>
<style lang="less" scoped>

</style>

