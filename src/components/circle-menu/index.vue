<template>
    <div class="circle-menu">
        <circle-menu type="middle-around" :number='4' mask="black" animate="animated jello" btn circle>
            <a slot="item_1" class="fa fa-twitter fa-lg"></a>
            <a slot="item_2" class="fa fa-weixin fa-lg"></a>
            <a slot="item_3" class="fa fa-weibo fa-lg"></a>
            <a slot="item_4" class="fa fa-github fa-lg"></a>
        </circle-menu>
    </div>
</template>
<script>
import CircleMenu from 'vue-circle-menu'
export default {
  components: {
    CircleMenu
  }
}
</script>
<style lang="less" scoped>
    .circle-menu{
        a{
            color:#fff;
        }
    }
</style>


