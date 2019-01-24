<template>
  <touch-ripple :speed="speed" :opacity="opacity" :color="color" :transition="transition">
    <slot></slot>
  </touch-ripple>
</template>
<script>
  import { touchRipple } from 'vue-touch-ripple'
  import 'vue-touch-ripple/dist/vue-touch-ripple.css'
  export default {
    components: {
      touchRipple
    },
    props: {
      speed: {
        type: Number,
        default: 0.8
      },
      opacity: {
        type: Number,
        default: 0.4
      },
      color: {
        type: String,
        default: '#fff'
      },
      transition: {
        type: String,
        default: 'ease'
      }
    },
    data() {
      return {

      }
    }

  }
</script>
