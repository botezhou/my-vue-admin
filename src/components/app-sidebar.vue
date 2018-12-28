<template>
  <div class="app-sidebar">
    <menu-slide :isCollapse="isCollapse" :backgroundColor="backgroundColor" :textColor="textColor" :activeColor="activeColor"></menu-slide>
  </div>
</template>
<script>
//   import { menusURL } from '@/components/api/base'
  import MenuSlide from './menus'
  export default {
    name: 'sidebar',
    props: {
        isCollapse: {
          type: Boolean,
          default: false    
        },
        backgroundColor: {
          type: String,
          default: '#16AAD8'
        },
        textColor: {
          type: String,
          default: '#fff'
        },
        activeColor: {
          type: String,
          default: '#ffd04b'
        }
    },
    components:{
      MenuSlide
    },
    data(){      
      return{
        rotate:false
      }
    },
    methods: {
      changeCollapse(){
        this.rotate = !this.rotate
        this.isCollapse = !this.isCollapse
        this.$refs.menu.collapse()
      },
      goIndex(){
        this.$router.push('/view')
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      btnBrand(ev){
        ev.preventDefault();
        console.log(ev)
      },

    }
  }
</script>
<style lang="less" >

</style>
