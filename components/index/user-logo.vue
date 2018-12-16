<template>
  <st-row class="user-logo" align="center" >
    <div class="user-logo-img">
      {{userInfo.name.slice(0, 1)}}
    </div>
    <div class="user-logo-info">
      <st-row>
        <p>{{userInfo.name}}</p>
      </st-row>
      <h6>{{ $t('index.rankId', {rankId: userInfo.rankId}) }}</h6>
      <p>
        {{ $t('index.userAsset') }}{{userInfo.total_asset}} BTC
      </p>
    </div>
  </st-row>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {rankId: '--', total_asset: 0, name: '--'}
    }
  },
  computed: {
    rankList() {
      return this.$store.state.auth.rankList
    },
    user() {
      return this.$store.state.auth.user
    },
    rank() {
      return this.$route.query.rank
    }
  },
  watch: {
    user() {
      this.getUserInfo()
    }
  },
  methods: {
    getUserInfo() {
      this.user.name && (this.userInfo.name = this.user.name)
      let list = JSON.parse(this.rankList)
      list.total.forEach(item => {
        if (item.userNameChain === this.user.userNameChain) {
          this.userInfo = item
        }
      })
    }
  },
  mounted() {
    this.getUserInfo()
  }
}
</script>
<style lang="less" scope>
@import url(../../assets/css/theme.less);
.user-logo {
  height: 160px;
  padding-left: 60px;
  background-color: @lauoutBackground;
  color: @mainFontColor;
  .user-logo-img {
    width: 80px;
    height: 80px;
    margin-right: 18px;
    text-align: center;
    line-height: 80px;
    background-color: #6085de;
    border-radius: 50%;
    font-size: @fontSize_30;
  }
  .user-logo-info {
    font-size: @fontSize_24;
    text-align: left;
    h6 {
      font-size: @fontSize_24;
    }
  }
}
</style>
