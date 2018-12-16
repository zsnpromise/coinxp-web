<template>
  <div class="user-left">
     <div class="tradeLink">
       <a href="/"><i class="iconfont icon-jiantoudingweixiangzuo"></i>{{ $t('index.tradeLink') }}</a>
     </div>
     <user-logo style="margin-bottom: 20px"></user-logo>
     <ranking-list></ranking-list>
  </div>
</template>
<script>
import userLogo from './user-logo'
import rankingList from './ranking-list'
export default {
  components: {
    userLogo,
    rankingList
  }
}
</script>
<style lang="less" scope>
@import url(../../assets/css/theme.less);
.user-left {
    min-width: 375px;
    margin-right: 20px;
    .tradeLink {
       margin-bottom: 20px;
       height: 80px;
       padding-left: 60px;
       background-color: @lauoutBackground;
       text-align: left;
       a {
         line-height: 80px;
         color: @mainFontColor;
         font-size: @fontSize_30;
         i {
           margin-right: 8px;
           font-size: @fontSize_30;
           vertical-align: middle;
           color: #b7cad6;
         }
       }
     }
}
</style>
