<template>
  <div class="other-user-assert">
    <h4>{{ $t('index.otherUserAssert') }}</h4>
    <st-row align="center">
     <div id="main-one" style="width: 260px;height:300px;"></div>
     <st-row class="instructions">
          <div class="two">
          <div class="info">
            <span></span>
            <span>BTC</span>
            <span style="width: 50px;display: inline-block;">{{ (info.asset.btc_asset / info.asset.total_asset * 100 ).toFixed(2) }}%</span>
          </div>
          <div class="info">
            <span style="background-color: #00f69a"></span>
            <span>ETH</span>
            <span style="width: 50px;display: inline-block;">{{ (info.asset.eth_asset / info.asset.total_asset * 100).toFixed(2) }}%</span>
          </div>
      </div>
      <div class="two">
          <div class="info">
            <span style="background-color: #611df5"></span>
            <span>EOS</span>
            <span style="width: 50px;display: inline-block;">{{ (info.asset.eos_asset / info.asset.total_asset * 100).toFixed(2) }}%</span>
          </div>
          <div class="info">
            <span style="background-color: #22efff"></span>
            <span>{{ $t('index.other') }}</span>
            <span style="width: 50px;display: inline-block;">{{ (info.asset.other_asset / info.asset.total_asset * 100).toFixed(2) }}%</span>
          </div>
      </div>
     </st-row>
    </st-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: {
        asset: {}
      }
    }
  },
  computed: {
    otherUser() {
      return this.$store.state.auth.otherUser
    }
  },
  watch: {
    otherUser() {
      this.getList()
    }
  },
  methods: {
    chartInit(info) {
      var myChart = window.echarts.init(document.getElementById('main-one'))
      // app.title = '嵌套环形图';
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [
          {
            name: this.$t('index.coin'),
            type: 'pie',
            radius: ['30%', '50%'],
            data: [
              {value: info.asset.eth_asset, name: 'ETH', itemStyle: {color: '#00f69a'}},
              {value: info.asset.eos_asset, name: 'EOS', itemStyle: {color: '#611df5'}},
              {value: info.asset.other_asset, name: this.$t('index.other'), itemStyle: {color: '#22efff'}},
              {value: info.asset.btc_asset, name: 'BTC', itemStyle: {color: '#0090ff'}}
            ]
          }
        ]
      }
      myChart.setOption(option)
    },
    getList() {
      // this.chartInit()
      this.otherUser && this.baseApi.getUserRecord(this.otherUser.userNameChain)
      .then(res => {
        res.data.forEach(item => {
          item.asset = JSON.parse(item.asset)
        })
        this.info = res.data[0]
        this.$store.commit('auth/SET_VALUE', {getUserRecord: res.data || []})
        this.chartInit(this.info)
        // console.log(res.data)
      })
    }
  },
  mounted() {
    this.getList()
  }
}
</script>
<style lang="less" scoped>
@import url(../../assets/css/theme.less);
.other-user-assert {
  height: 434px;
  padding: 0 6%;
  margin-top: 20px;
  background-color: @lauoutBackground;
  color: @mainFontColor;
  .instructions {
    flex: 1;
    // flex-direction: column;
  }
  h4 {
    text-align: left;
    height: 80px;
    line-height: 80px;
    font-size: @fontSize_30;
  }
  .two {
    flex: 1;
  }
  .info {
    height: 40px;
    span {
      &:first-child {
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-right: 20px;
        background-color: #0090ff;
        border-radius: 50%;
        vertical-align: baseline;
      }
      &:nth-child(2) {
        margin-right: 20px;
        color: @otherFontColor;
      }
    }
  }
}
@media screen  and (max-width:1200px) {
  .other-user-assert {
    .instructions {
      flex-direction: column;
      align-items: flex-end;
    }
  }
}
</style>
