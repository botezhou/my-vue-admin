<template>
    <div class="layout">
    <div class="app-right">
        <component :is="obj.type" :obj="obj"></component>
    </div>
    </div>
</template>

<script>
    import SetComponent from '@/components/setComponent'
    export default {
        props: {
            obj: {
                type: Object
            }
        },
        components: {
            ...SetComponent
        },
    }
</script>

<style lang="less" scoped>
    .app-right{
        position: fixed;
        width: 200px;
        right: 0px;
        bottom: 0;
        top: 60px;
        background: #262626;
        padding: 0 10px 9px 10px;
        z-index: 10;
        color:#fff;
        overflow: auto;
    }
</style>

