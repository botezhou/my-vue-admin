<template>
  <div class="layout">
  <div class="head">
    <div class="headbox flex-container">
        <div class="logo-box">    
          <div>Vue-Layout</div>    
        </div>
        <div>
          <div class="flex-container">
            <div class="flex-item" @click="goBack"><i class="iconfont icon-baocun"></i>返回</div>
            <div class="flex-item" @click="previewClick"><i class="iconfont icon-plus-preview"></i>预览</div>
            <div class="flex-item" @click="delAllClick"><i class="iconfont icon-shanchu"></i>清空数据</div>
          </div>  
        </div>
    </div>
  </div>
  </div>
</template>

<script>

export default {
	name: 'app-header',
	data() {
		return {

		}
  },
  methods: {
    // 预览
    previewClick() {
      this.$emit('preview')
    },
    // 清除数据
    delAllClick() {
      this.$emit('delAll')
    },
    goBack() {
      this.$router.push({path: '/'})
    }
  }
}
</script>
<style lang="less">

</style>
