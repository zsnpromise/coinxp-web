<template>
  <header>
    <st-row class="header-content" justify="between" align="center">
      <!-- CoinXP -->
      <st-row class="header-left" align="center">
        <p><a :href="`${ApiConfig.main}/`">CoinXP</a></p>
      </st-row>
      <st-row align="center">
        <div class="header-center" v-if="~$route.path.indexOf('ranking')">
          <i class="iconfont icon-zhankai" @click="isShow = true"></i>
          <div class="layer" v-if="isShow" @click="isShow = false"></div>
          <div class="user-left" v-if="isShow">
              <user-left ></user-left>
          </div>
        </div>
      <st-row class="header-right">
        <div class="btn l active"><a :href="`${ApiConfig.main}/trade`">Trade</a></div>
        <div class="btn"><a :href="`${ApiConfig.main}/orders`" >My Orders</a></div>
        <div class="btn"><a :href="`${ApiConfig.main}/wallet`" >My Wallets</a></div>
        <div class="btn"><a  href="http://tracker.coinxp.io" target="_blank">Block Expoler</a></div>
        <div class="btn"><a :href="`${ApiConfig.wallet}/`" >My Wallets</a></div>
        <div class="btn down">
          <a>{{ lang[locale] }}</a>
           <ul>
             <li @click="setLang(key)" :key="item" v-for="(item, key) in lang">
               {{ item }}
             </li>
           </ul>
        </div>
        <div class="sign-in-btn btn">
          <a class="ant-dropdown-link ant-dropdown-trigger" :href="`${ApiConfig.main}/`">
          {{ user.name }}<i class="anticon anticon-down"></i>
          </a>
        </div>
      </st-row>
      </st-row>
      </st-row>
  </header>
</template>
<script>
import userLeft from './index/user-left'
import cookie from '../assets/js/cookie.js'
import ApiConfig from '../config/api.config.js'
export default {
  data() {
    return {
      isShow: this.$route.path === '/ranking',
      lang: {'zh-cn': '简体中文', 'en': 'English'}
    }
  },
  components: {
    userLeft
  },
  watch: {
    $router() {
      return this.$router
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    locale() {
      return this.$store.state.auth.locale
    }
  },
  methods: {
    setLang(lang) {
      cookie.setCookie('lang', lang, 7, '/', ApiConfig.domain)
      this.$store.commit('auth/SET_LOCALE', {
        locale: lang
      })
      this._i18n.locale = lang
    }
  }
}
</script>

<style lang="less" scope>
@import url(./common/font/iconfont.css);
  .header-content {
       position: relative;
       height: 46px;
       min-width: 560px;
       line-height: 46px;
       color: #ffffff;
       background-color: #00021F;
       border-bottom: 1px solid #14181c;
       .header-left {
          // width: 279px;
          padding: 0px 28px;
          a {
            color: #ffffff;
          }
       }
       .header-center {
         display: none;
         margin-right: 28px;
       }
       .header-right {
         .btn {
              //  display: flex;
               height: 46px;
               line-height: 46px;
               font-size: 12px;
               font-weight: bold;
               color: rgba(255, 255, 255, 0.4);
               padding: 0px 28px;
               text-decoration: none;
               border-right: 1px solid #14181c;
               cursor: pointer;
               a {
                  color: rgba(255, 255, 255, 0.4);
               }
               &.active {
                 border-bottom: 2px solid #1890ff;
                 a {
                   color: white;
                 }
               }
         }
         .l {
           border-left: 1px solid #14181c;
         }
         .down {
           position: relative;
           a {
             position: relative;
              &::after {
               position: absolute;
               right: -15px;
               top: 50%;
               margin-top: -4px;
               display: block;
               content: '';
               width: 0px;
               height: 0px;
               border-width: 6px 6px 0;
               border-style: solid;
               border-color: rgba(255, 255, 255, 0.4) transparent transparent;
              }
           }
           &:hover {
             ul {
               display: block;
             }
           }
           ul {
             display: none;
             position: absolute;
             top: 36px;
             padding: 10px 0;
             background-color: rgba(0, 2, 31, 1);
             border: 1px solid #14181c;
             li {
               padding: 0 10px;
             }
            }
         }
       }
     }
@media screen and (min-width:750px) and (max-width:1200px) {
  .header-content {
    // width: 100%;
    min-width: 1000px;
  }
}
@media screen and (max-width:750px) {
  .header-content {
    .header-center {
      display: block;
      position: relative;
      .user-left {
        // display: none;
        position: absolute;
        right: -22px;
        background: #191e38;
        z-index: 3;
      }
      &:hover {
        .user-left {
         display: block;
       }
      }
      .layer {
        position: fixed;
        z-index: 2;
          left: 0px;
         top: 0px;
         right: 0px;
         bottom: 0px;
        background-color: rgba(13,17,47, 0.6)
      }
    }
    .header-right {
      .btn {
        display: none;
      }
      .down {
        display: block;
      }
    }

  }
}                                                       
</style>
