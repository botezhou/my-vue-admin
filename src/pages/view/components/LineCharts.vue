<template>
    <div id="lineChart" style="width:100%;height:300px;"></div>
</template>
<script>
// 按需引入 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')

// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/theme/macarons')
const animationDuration = 3000;
export default {
    props: {
        chartData: {
            type: Object,
            required: true
        }
    },
    watch: {
        chartData: {
            deep: true,
            handler(val) {
                this.setOptions(val)
            }
        }
    },
    data() {
        return {
           chart: null
        }
    },
    mounted() {
        this.initChart()
    },
    beforeDestroy() {
        if (!this.chart) {
           return
        }
        this.chart.dispose()
        this.chart = null
    },
    methods: {
        setOptions({ expectedData, actualData } = {}) {
            this.chart.setOption({
                xAxis: {
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                boundaryGap: false,
                axisTick: {
                    show: false
                }
                },
                grid: {
                left: 10,
                right: 10,
                bottom: 20,
                top: 30,
                containLabel: true
                },
                tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                },
                padding: [5, 10]
                },
                yAxis: {
                axisTick: {
                    show: false
                }
                },
                legend: {
                data: ['expected', 'actual']
                },
                series: [{
                name: 'expected', itemStyle: {
                    normal: {
                    color: '#FF005A',
                    lineStyle: {
                        color: '#FF005A',
                        width: 2
                    }
                    }
                },
                smooth: true,
                type: 'line',
                data: expectedData,
                animationDuration: 2800,
                animationEasing: 'cubicInOut'
                },
                {
                name: 'actual',
                smooth: true,
                type: 'line',
                itemStyle: {
                    normal: {
                    color: '#3888fa',
                    lineStyle: {
                        color: '#3888fa',
                        width: 2
                    },
                    areaStyle: {
                        color: '#f3f8ff'
                    }
                    }
                },
                data: actualData,
                animationDuration: 2800,
                animationEasing: 'quadraticOut'
                }]
            })
        },
        initChart() {
            this.chart = echarts.init(this.$el, 'macarons')
            this.setOptions(this.chartData)
        }
    }
}
</script>

