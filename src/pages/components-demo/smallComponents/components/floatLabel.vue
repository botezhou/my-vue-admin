<template>
  <float-label :class="type">
      <slot></slot>  
  </float-label>
</template>
<script>
  import FloatLabel from "vue-float-label/components/FloatLabel";
  export default {
    props: {
        type: {
            type: String,
            default: null
        }
    },
    components: {
      FloatLabel
    },
    
    data() {
      return {

      }
    }

  }
</script>
<style lang="less">
@import '../../../../styles/index.less';
input,textarea,select{
    width: 90%;
    border-radius: 2px;
}
select{
    padding:8px;
}

.vfl-label {
  text-transform: uppercase;
}

.vfl-label-on-input {
  top: -1.5em;
}


.vfl-label + input {
  padding: 8px 5px;
  font-size: 100%;
  border: 1px solid #aaa;
  transition: border 0.2s;
  border-radius: 2px;
}

.color(@color){
    .vfl-label + input {
        border:none;
        border-bottom: 2px solid #aaa;
    }    
    .vfl-label-on-focus + input {
      border-bottom: 2px solid @color;
    }
    .vfl-label-on-focus {
      color: @color;
    }
}

.primary{
    .color(@panGreen)
}
.danger{
    .color(@pink)
}
.success{
    .color(@tiffany)
}
.info{
    .color(@yellow)
}
</style>

