<template>
    <div class="view">  
    <panel-group @handleSetLineChartData="handleSetLineChartData"/>
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-charts :chart-data="lineChartData"/>
    </el-row>
    </div>
</template>
<script>
import PanelGroup from './components/panelGroup'
import LineCharts from './components/LineCharts'
const lineChartData = {
  newVisits: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shopping: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
};

export default {
    components: {
        PanelGroup,
        LineCharts,
    },
    data() {
        return {
          lineChartData: lineChartData.newVisits
        }
    },
    methods: {
        handleSetLineChartData(type) {
           this.lineChartData = lineChartData[type]
        }
    }
}
</script>
<style lang="less" scoped>
  .view{
    width:100%;
    overflow-x: hidden;
  }
</style>


