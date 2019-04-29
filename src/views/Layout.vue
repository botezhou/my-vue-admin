<template>
  <div class="layout">
     <layout-header @delAll="delAllClick" @preview="previewClick"></layout-header>
     <layout-left></layout-left>
     <layout-preview ref="preview" @setComponent="setComponent" @setRow="setComponent"></layout-preview>     
     <layout-right :obj="obj"></layout-right>
  </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import LayoutHeader from '@/components/layout/layout-header'
    import LayoutLeft from '@/components/layout/layout-left'
    import LayoutRight from '@/components/layout/layout-right'
    import LayoutPreview from '@/components/layout/layout-preview'
	export default {
		components: {
            LayoutHeader,
            LayoutLeft,
            LayoutRight,
            LayoutPreview,
            draggable
		},
        data() {
            return {
                obj: {}
            }
        },
        methods: {
            //  预览
            previewClick() {
               this.$refs.preview.previewClick()
            },
            // 布局组件设置
            setComponent(obj) {
                this.obj = obj
            },
            delAllClick() {
                this.$refs.preview.delAllClick()
            }
        }
	}
</script>
<style lang="less" scoped>
   .layout {
       width: 100%;
       height: 100%;
   }
</style>
