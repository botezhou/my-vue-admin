<template>
  <div class="p20">
    <code>
      引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于
      <a class="link-type" target="_block" href="https://github.com/kamranahmedse/driver.js">driver.js</a>
    </code>
    <el-button type="primary" @click.prevent.stop="guide">打开引导</el-button>
  </div>
</template>

<script>
import elAlert from '@/components/el_alert'
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './steps'

export default {
  name: 'Guide',
  components: {
  	elAlert
  },
  data() {
    return {
      driver: null
    }
  },
  mounted() {
    this.driver = new Driver()
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
</script>
