<template>
  <st-row class="other-user" align="center" justify="between">
     <st-row class="logo" align="center">
        <div class="logo-svg">
          <span>{{otherUser.name && otherUser.name.slice(0, 1)}}</span>
          <template v-if="id === 1">
               <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiangbei-"></use>
              </svg>
             </template>
             <template v-else-if="id === 2">
             <svg class="icon" aria-hidden="true">
               <use xlink:href="#icon-jiangbei-1"></use>
             </svg>
             </template>
              <template v-else-if="id === 3">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-jiangbei-2"></use>
                </svg>
             </template>
        </div>
        <h6>{{otherUser.name}}</h6>
     </st-row>
     <div>
       <h6>
         {{otherUser.total_asset}} BTC
       </h6>
       <p>
         {{ $t('index.curryAsset') }}
       </p>
     </div>
     <div>
      <h6>
         {{otherUser.rankId}}
      </h6>
       <p>
         {{ $t('index.curryRank') }}
       </p>
     </div>
     <div>
      <h6>{{otherUser.oldRankId === -1 ? 'New' : otherUser.oldRankId}}</h6>
       <p>{{ $t('index.oldRank') }}</p>
     </div>
  </st-row>
</template>
<script>
export default {
  computed: {
    id() {
      return Number(this.$route.query.id) || 1
    },
    otherUser() {
      return this.$store.state.auth.otherUser || {}
    }
  }
}
</script>
<style lang="less" scope>
@import url(../../assets/css/theme.less);
.other-user {
  height: 160px;
  padding: 0 6%;
  background-color: @lauoutBackground;
  color: @mainFontColor;
  .logo {
    div {
      width: 80px;
      height: 80px;
      margin-right: 18px;
      text-align: center;
      line-height: 80px;
      background-color: #6085de;
      border-radius: 50%;
      font-size: @fontSize_30;
    }
    .logo-svg {
      position: relative;
      svg {
        position: absolute;
        right: 0px;
        bottom: 0px;
        font-size: 16px;
      }
    }
  }
  h6 {
    font-size: @fontSize_30; 
  }
  p {
    color: #66697b;
  }
}
</style>
