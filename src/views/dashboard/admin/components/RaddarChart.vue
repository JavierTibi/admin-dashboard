<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

const animationDuration = 3000

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        radar: {
          radius: '66%',
          center: ['50%', '42%'],
          splitNumber: 8,
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15
            }
          },
          indicator: [
            { name: 'Liderazgo', max: 20000 },
            { name: 'Creatividad', max: 20000 },
            { name: 'Comunicación', max: 20000 },
            { name: 'Pensamiento Critico', max: 20000 },
            { name: 'Actitud Positiva', max: 20000 },
            { name: 'Work Ethic', max: 20000 }
          ]
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['Escenario 1', 'Escenario 2', 'Escenario 3']
        },
        series: [{
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1
            }
          },
          data: [
            {
              value: [Math.floor(Math.random() * (10000) + 10000), Math.floor(Math.random() * (10000) + 10000), Math.floor(Math.random() * (10000) + 10000), Math.floor(Math.random() * (10000) + 10000), Math.floor(Math.random() * (10000) + 10000), Math.floor(Math.random() * (10000) + 10000)],
              name: 'Escenario 1'
            },
            {
              value: [Math.floor(Math.random() * (10000) + 10000), Math.floor(Math.random() * (10000) + 10000), Math.floor(Math.random() * (10000) + 10000), Math.floor(Math.random() * (10000) + 10000), Math.floor(Math.random() * (10000) + 10000), Math.floor(Math.random() * (10000) + 10000)],
              name: 'Escenario 2'
            },
            {
              value: [Math.floor(Math.random() * (10000) + 10000), Math.floor(Math.random() * (10000) + 10000), Math.floor(Math.random() * (10000) + 10000), Math.floor(Math.random() * (10000) + 10000), Math.floor(Math.random() * (10000) + 10000), Math.floor(Math.random() * (10000) + 10000)],
              name: 'Escenario 3'
            }
          ],
          animationDuration: animationDuration
        }]
      })
    }
  }
}
</script>
