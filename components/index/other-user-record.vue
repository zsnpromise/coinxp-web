<template>
  <div class="other-user-record" align="center" >
    <h4>{{ $t('index.userRecord') }}</h4>
    <table>
      <thead>
        <tr>
          <th style="text-align:left;">DATE</th>
          <th>Pair</th>
          <th>Side</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(item, index) in list">
          <td>{{ timeFormat(item.timestamp) }}</td>
          <td>{{ item.commodity_symbol.slice(2) + '/' + item.currency_symbol.slice(2) }}</td>
          <td :class="item.is_buy ? 'green' : 'red'">{{ item.is_buy ? $t('index.buy') : $t('index.sell') }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.traded_commodity }}</td>
          <td>{{ getStatus(item.status) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      coinName: [{
        id: 0,
        tokenSymbol: 5129558,
        token: 'VEN',
        symbol: 4740165
      }, {
        id: 1,
        tokenSymbol: 4345410,
        token: 'BNB',
        symbol: 4740165
      }, {
        id: 2,
        tokenSymbol: 4672847,
        token: 'OMG',
        symbol: 4740165
      }, {
        id: 3,
        tokenSymbol: 5393229,
        token: 'MKR',
        symbol: 4740165
      }, {
        id: 4,
        tokenSymbol: 5788250,
        token: 'ZRX',
        symbol: 4740165
      }, {
        id: 5,
        tokenSymbol: 4999514,
        token: 'ZIL',
        symbol: 4740165
      }, {
        id: 6,
        tokenSymbol: 5784393,
        token: 'ICX',
        symbol: 4740165
      }, {
        id: 7,
        tokenSymbol: 17729,
        token: 'AE',
        symbol: 4740165
      }, {
        id: 8,
        tokenSymbol: 1398296654,
        token: 'NPXS',
        symbol: 4740165
      }, {
        id: 9,
        tokenSymbol: 5067842,
        token: 'BTM',
        symbol: 4740165
      }, {
        id: 10,
        tokenSymbol: 5521730,
        token: 'BAT',
        symbol: 4740165
      }, {
        id: 11,
        tokenSymbol: 5525320,
        token: 'HOT',
        symbol: 4740165
      }, {
        id: 12,
        tokenSymbol: 5525063,
        token: 'GNT',
        symbol: 4740165
      }, {
        id: 13,
        tokenSymbol: 5525075,
        token: 'SNT',
        symbol: 4740165
      }, {
        id: 14,
        tokenSymbol: 5260626,
        token: 'REP',
        symbol: 4740165
      }, {
        id: 15,
        tokenSymbol: 4412503,
        token: 'WTC',
        symbol: 4740165
      }, {
        id: 16,
        tokenSymbol: 5525584,
        token: 'PPT',
        symbol: 4740165
      }, {
        id: 17,
        tokenSymbol: 1263421772,
        token: 'LINK',
        symbol: 4740165
      }, {
        id: 18,
        tokenSymbol: 1146312020,
        token: 'TUSD',
        symbol: 4740165
      }, {
        id: 19,
        tokenSymbol: 1414745929,
        token: 'IOST',
        symbol: 4740165
      }, {
        id: 20,
        tokenSymbol: 1213482248,
        token: 'ETH',
        symbol: 4740165
      }, {
        id: 21,
        tokenSymbol: 1129595400,
        token: 'BTC',
        symbol: 4740165
      }]
    }
  },
  computed: {
    otherUser() {
      return this.$store.state.auth.otherUser
    },
    productList() {
      return this.$store.state.auth.productList
    },
    getUserRecord() {
      return this.$store.state.auth.getUserRecord
    }
  },
  watch: {
    getUserRecord() {
      this.getOrderList()
    }
  },
  methods: {
    getCoinName(tokenSymbol) {
      let name = ''
      let info = this.coinName.filter(item => {
        return tokenSymbol === item.tokenSymbol
      })[0]
      if (info) {
        name = info.token
      }
      return name
    },
    getOrderList() {
      this.baseApi.getOrderList(this.otherUser.userNameChain)
      .then(res => {
        this.list = res.data
      })
    },
    getStatus(status) {
      let str = ''
      switch (status) {
        case 1: str = this.$t('index.orderStatus1')
          break
        case 2: str = this.$t('index.orderStatus2')
          break
        case 3: str = this.$t('index.orderStatus3')
          break
        case 4: str = this.$t('index.orderStatus4')
      }
      return str
    },
      // 获取时间年月日 时分秒
    timeFormat(time, type) {
      function getYMD(time) {
        let year = time.getFullYear()
        let month = time.getMonth() + 1
        let date = time.getDate()
        return year + '-' + singleFormat(month) + '-' + singleFormat(date)
      }
      function singleFormat(str) {
        return str.toString().length === 1 ? ('0' + str) : str
      }
      function getHMS(time) {
        let hours = time.getHours()
        let minutes = time.getMinutes()
        let seconds = time.getSeconds()
        return singleFormat(hours) + ':' + singleFormat(minutes) + ':' + singleFormat(seconds)
      }
      function getTimeZone(time) {
        let GTM_8 = 480  // -480
        let date = new Date(time)
        let subMin = date.getTimezoneOffset() + GTM_8
        date.setMinutes(date.getMinutes() + subMin)
        return date
      }
      let date = getTimeZone(time / 1000 / 1000)
      if (!type) return getYMD(date) + ' ' + getHMS(date)
      switch (type) {
        case 'HMS': return getHMS(date)
        case 'YMD': return getYMD(date)
      }
    }
  },
  mounted() {
    // this.getOrderList()
    // console.log(this.productList)
  }
}
</script>
<style lang="less" scope>
@import url(../../assets/css/theme.less);
.other-user-record {
  // height: 656px;
  min-height: 300px;
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
  table {
    width: 100%;
    border-collapse: collapse;
    tr {
      padding: 0 10px;
      height: 50px;
      th:first-child,td:first-child {
        padding-left: 20px;
      }
      th:last-child,td:last-child {
        padding-right: 20px;
        text-align: right;
      }
    }
    thead {
      background-color: #1e233d;
      th {
        font-weight: 400;
        color: #b7cad6;
      }
    }
    tbody {
      tr {
        text-align: center;
        border-bottom: 1px solid #1e233d;
        td:first-child {
          text-align: left;
        }
        .red {
          color: #ff4148;
        }
        .green {
          color: #00aa98;
        }
      }
    }
  }
}
</style>
