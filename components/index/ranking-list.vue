<template>
   <div class="ranking-list">
     <st-row class="nav">
        <nuxt-link to="/game/ranking/?rank=1" :class="rank === 1 && 'active'">
          {{ $t('index.dayRank') }}
        </nuxt-link>
        <nuxt-link to="/game/ranking/?rank=2" :class="rank === 2 && 'active'">
          {{ $t('index.weekRank') }}
        </nuxt-link>
        <nuxt-link to="/game/ranking/?rank=3" :class="rank === 3 && 'active'">
          {{ $t('index.totalRank') }}
        </nuxt-link>
     </st-row>
     <div class="title">
       <st-row>
         <p>{{ $t('index.ranking') }}</p>
         <p>ID</p>
         <p v-if="rank === 1">{{ $t('index.dayChange') }}</p>
         <p v-if="rank === 2">{{ $t('index.weekChange') }}</p>
         <p v-if="rank === 3">{{ $t('index.netValue') }}(BTC)</p>
       </st-row>
     </div>
     <ul class="list">
       <li :key="index" v-for="(item, index) in getRankList()">
        <nuxt-link :to="`/game/ranking/?rank=${rank || 1}&id=${index + 1}`" :class="id === (index + 1) && 'active'">
          <st-row class="item">
           <p>
             <template v-if="index === 0">
               <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiangbei-"></use>
              </svg>
             </template>
             <template v-else-if="index === 1">
             <svg class="icon" aria-hidden="true">
               <use xlink:href="#icon-jiangbei-1"></use>
             </svg>
             </template>
              <template v-else-if="index === 2">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-jiangbei-2"></use>
                </svg>
             </template>
             <template v-else>
               {{index + 1}}
             </template>
           </p>
           <st-row align="center" justify="between">
             <div class="lx news" v-if="item.oldRankId === -1" ><span style="font-size: 12px;">New</span></div>
             <div class="lx" v-else :class="item.oldRankId - item.rankId >= 0 ? '' : 'red'"><i class="iconfont" :class="item.oldRankId - item.rankId >= 0 ? 'icon-xiangshang' : 'icon-xiangxia'"></i>{{ Math.abs(item.oldRankId - item.rankId) }}</div>
             <p>{{ item.name }}</p>
             <p style="width: 32px;">
                <svg v-if="item.userNameChain === user.userNameChain" class="icon" aria-hidden="true">
                  <use xlink:href="#icon-qizi"></use>
                </svg>
             </p>
           </st-row>
           <p class="needColor" v-if="~[1, 2].indexOf(rank)" :class="item[assetKey] >= 0 ? 'green' : 'red'">{{ item[assetKey] }}</p>
           <p v-else>{{item[assetKey]}}</p>
         </st-row>
        </nuxt-link>
       </li>
     </ul>
   </div>
</template>
<script>
// import BaseApi from '../../assets/js/api/baseApi.js'
export default {
  // async asyncData() {
  //   let rankList = await BaseApi.getRankList()
  //   console.log(rankList, 22)
  //   return { rankList }
  // },
  data() {
    return {
      assetKey: ''
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    rank() {
      return Number(this.$route.query.rank) || 1
    },
    id() {
      return Number(this.$route.query.id) || 1
    },
    rankList() {
      return this.$store.state.auth.rankList
    }
  },
  methods: {
    getRankList() {
      let str = ''
      switch (this.rank) {
        case 1:
          this.assetKey = 'day_asset'
          str = 'day'
          break
        case 2: str = 'week'
          this.assetKey = 'week_asset'
          break
        default: str = 'total'
          this.assetKey = 'total_asset'
          break
      }
      let list = []
      if (this.rankList) {
        list = JSON.parse(this.rankList)
        this.$store.commit('auth/SET_VALUE', {otherUser: list[str][this.id - 1]} || {})
        list = list[str].sort((a, b) => b[this.assetKey] - a[this.assetKey])
      }
      console.log(list)
      return list
    }
  }
}
</script>
<style lang="less" scope>
@import url(../../assets/css/theme.less);
@import url(../common/font/iconfont.css);
.ranking-list {
  background-color: @lauoutBackground;
  .nav {
    a {
      height: 90px;
      line-height: 90px;
      font-size: @fontSize_30;
      color: @mainFontColor;
      flex: 1;
      text-align: center;
      &.active {
        background-color: #191e38;
        border-bottom: 4px solid #0090ff;
      }
    }
  }
  .title {
    height: 80px;
    background-color: #1e233d;
    p {
      flex: 1;
      line-height: 80px;
      color: @mainFontColor;
      font-size: @fontSize_24;
      text-align: center;
    }
  }
  .list {
    li {
      .needColor {
        &.red {
          color: #ff4148;
        }
        &.green {
          color: #039d90;
        }
      }
      .active {
        div {
          background-color: #191e38;
        }
      }
      .item {
        height: 70px;
        // padding-left: 4%;
        &>p {
          width: 40px;
        }
        &>div, &>p {
          flex: 1;
          text-align: center;
        }
        &>div {
          flex: 1.6;
          // div {
          //   line-height: 70px;
          // }
          p {
            color: #b7cad6
          }
          .lx {
            // width: 36px;
            padding-right: 6px;
            height: 22px;
            margin-right: 6px;
            background-color: #0fa194;
            border-radius: 6px;
            transform: skewX(-12deg);
            color: @mainFontColor;
            &.red {
              background-color: #d45958;
            }
            &.news {
              padding: 0 4px;
              background-color: #ffba00;
            }
          }
        }
        p {
          line-height: 70px;
           color: @mainFontColor;
        }
      }
    }
  }
}
</style>
