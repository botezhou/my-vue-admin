<template>
    <div class="setComponent">
        <div class="form-item">
            <label>Tab选项设置</label>
            <div v-for="(tab, index) in obj.tabList" :key="index">
                <input v-model="(obj.tabList[index]).label" />
            </div>     
            <el-button type="text" @click="addTab"><i class="ft20 iconfont icon-jia"></i></el-button>    
            <el-button :disabled="obj.tabList.length<=2" type="text" @click="delTab"><i class="ft20 iconfont icon-jian"></i></el-button>    
        </div>
        <div class="form-item">
            <label>容器内边距</label>
            <el-slider v-model="obj.padding" :min="0" :max="100"></el-slider>
        </div>
    </div>
</template>
<script>
export default {
    name: 'RowTab',
    props: {
        obj: {
            type: Object,

        }
    },
    methods: {
        addTab() {
            this.obj.tabList.push({label: `Tab${this.obj.tabList.length}`, value: `f${this.obj.tabList.length}`})
            this.obj.childList[`childList${this.obj.tabList.length}`] = []
        },
        delTab() {
            this.obj.tabList.pop()
            delete this.obj.childList[`childList${this.obj.tabList.length}`]
        }
    }
}
</script>
<style lang="less" scoped>

</style>

