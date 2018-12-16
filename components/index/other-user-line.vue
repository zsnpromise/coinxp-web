<template>
  <div class="other-user-line" >
    <st-row align="center" justify="between">
      <h4>{{ $t('index.otherUserLine') }}</h4>
      <st-row class="change">
        <a :class="type === 1 && 'curry'" @click="changeTime(1)">{{ $t('index.week') }}</a>
        <a :class="type === 2 && 'curry'" @click="changeTime(2)">{{ $t('index.month') }}</a>
        <a :class="type === 3 && 'curry'" @click="changeTime(3)">{{ $t('index.all') }}</a>
      </st-row>
    </st-row>
    <div id="main-Two"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: 1
    }
  },
  computed: {
    getUserRecord() {
      return this.$store.state.auth.getUserRecord
    }
  },
  watch: {
    getUserRecord() {
      this.chartInit(this.getUserRecord)
    }
  },
  methods: {
    changeTime(num) {
      this.type = num
      this.chartInit(this.getUserRecord)
    },
    chartInit(list) {
      let len = list.length
      let timeList = []
      let dataList = []
      let step = 1
      if (this.type === 1) {
        len = len > 7 ? 7 : len
      } else if (this.type === 2 && len > 30) {
        step = 3
      } else if (this.type === 3 && len > 30) {
        step = len / 10
      }
      for (let i = 0; i < len; i += step) {
        timeList.push(list[i].time.replace(/_/g, '.'))
        dataList.push(list[i].asset.total_asset)
      }
      var myChart = window.echarts.init(document.getElementById('main-Two'))
      // app.title = '嵌套环形图';
      let option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: timeList,
          axisLine: {show: false},
          axisTick: {show: false},
          splitLine: {show: true, lineStyle: {color: '#272e4d'}},
          axisLabel: {color: '#6f7282', fontSize: 14}
        },
        tooltip: {
          trigger: 'axis'
        },
        yAxis: {
          type: 'value',
          splitLine: {lineStyle: {color: '#272e4d'}},
          axisLabel: {color: '#6f7282', fontSize: 14},
          axisLine: {show: false},
          axisTick: {show: false},
          scale: true
        },
        series: [{
          data: dataList,
          type: 'line',
          // smooth: true,
          symbolSize: 18,
          markPoint: {
            data: [
              {type: 'max', name: this.$t('index.max')},
              {type: 'min', name: this.$t('index.min')}
            ]
          },
          lineStyle: {
            normal: {
              color: '#00b8ff',
              width: 6
            }
          },
          itemStyle: {
            normal: {
              borderWidth: 6,
              borderColor: '#0090ff',
              color: '#00b8ff',
              width: 4
            }}
        }]
        // media: [
        //   {
        //     query: {
        //       maxWidth: 500
        //       // maxWidth: 1800
        //     }
        //   }
        // ]
      }
      myChart.setOption(option)
      window.onresize = () => {
        window.requestAnimationFrame(() => {
          myChart.resize()
        })
      }
    }
  },
  mounted() {
    // this.chartInit()
  }
}
</script>
<style lang="less" scoped>
@import url(../../assets/css/theme.less);
.other-user-line {
  height: 540px;
  padding: 0 6%;
  margin-top: 20px;
  background-color: @lauoutBackground;
  color: @mainFontColor;
  h4 {
    text-align: left;
    height: 80px;
    line-height: 80px;
    font-size: @fontSize_30;
  }
  #main-Two {
    max-width: 100%;
    height: 80%;
  }
  .change {
    font-size: 16px;
    a {
      padding: 0 12px;
      color: #6f7282;
      &:nth-child(n+2) {
        border-left: 2px solid #6f7282;
      }
      &.curry {
        position: relative;
        color: #fff;
        &::after {
          position: absolute;
          display: block;
          bottom: -4px;
          left: 50%;
          margin-left: -10px;
          content: '';
          width: 20px;
          height: 4px;
          background-color: #0099ff;
        }
      }
    }
  }
}
</style>
