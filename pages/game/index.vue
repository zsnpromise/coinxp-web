<template>
  <section>
    <div class="top">
      <h4>COINXP</h4>
      <h2>{{ $t('first.title') }}</h2>
      <h4>{{ $t('first.titleMessage') }}</h4>
    </div>
    <div class="content">
      <h3 class="title">{{ $t('first.signUp') }}</h3>
      <div class="form">
        <div>
          <p>{{ $t('first.nickName') }}</p>
          <input maxlength="6" v-model="nickName" type="text" :placeholder="$t('first.placeNickName')">
        </div>
        <div>
          <p>{{ $t('first.name') }}</p>
          <input maxlength="6" v-model="name" type="text" :placeholder="$t('first.placeName')">
        </div>
         <div>
          <p>{{ $t('first.phone') }}</p>
          <input maxlength="13" v-model="phone" type="text" :placeholder="$t('first.placePhone')">
        </div>
        <div>
          <p>{{ $t('first.career') }}</p>
          <input maxlength="12" v-model="career"  type="text" :placeholder="$t('first.placeCareer')">
        </div>
        <div class="textarea">
          <p>{{ $t('first.Introduction') }}</p>
          <textarea  v-model="Introduction"  rows="3" maxlength="60" :placeholder="$t('first.IntroductionText')"/>>
        </div>
        <h4><a @click="saveUserInfo">{{ $t('first.onGame') }}</a></h4>
      </div>
    </div>
    <div class="bottom">
      <h3 class="title">{{ $t('first.active.title') }}</h3>
      <div class="bottom-message">
        <div class="item">
          <h6>{{ $t('first.active.one1') }}</h6>
          <p>{{ $t('first.active.one2') }}</p>
          <p>{{ $t('first.active.one3') }}</p>
          <p>{{ $t('first.active.one4') }}</p>
          <p>{{ $t('first.active.one5') }}</p>
        </div>
        <div class="item">
          <h6>{{ $t('first.active.two1') }}</h6>
          <p>{{ $t('first.active.two2') }}</p>
          <p>{{ $t('first.active.two3') }}</p>
          <p>{{ $t('first.active.two4') }}</p>
          <p>{{ $t('first.active.two5') }}</p>
        </div>
          <div class="item">
          <h6>{{ $t('first.active.three1') }}</h6>
          <p>{{ $t('first.active.three2') }}</p>
          <p>{{ $t('first.active.three3') }}</p>
        </div>
            <div class="item">
          <h6>{{ $t('first.active.fore1') }}</h6>
          <p>{{ $t('first.active.fore2') }}</p>
        </div>
        <div class="item">
          <h6>{{ $t('first.active.five1') }}</h6>
          <p>{{ $t('first.active.five2') }}</p>
          <p>{{ $t('first.active.five3') }}</p>
        </div>
             <div class="item">
          <h6>{{ $t('first.active.six1') }}</h6>
          <p>{{ $t('first.active.six2') }}</p>
          <p>{{ $t('first.active.six3') }}</p>
          <p>{{ $t('first.active.six4') }}</p>
          <p>{{ $t('first.active.six5') }}</p>
        </div>
             <div class="item">
          <h6>{{ $t('first.active.seven1') }}</h6>
          <p>{{ $t('first.active.seven2') }}</p>
          <p>{{ $t('first.active.seven3') }}</p>
        </div>
      </div>
      <h3 class="title">{{ $t('first.stand') }}</h3>
      <st-row class="support" justify="center">
        <a></a>
        <a></a>
        <a></a>
        <a></a>
      </st-row>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      nickName: '',
      name: '',
      phone: '',
      career: '',
      Introduction: ''
    }
  },
  methods: {
    saveUserInfo() {
      if (!this.nickName || !this.name || !this.phone || !this.career || !this.Introduction) {
        this.$alert('请把信息补充完整！')
        return false
      }
      let user = JSON.parse(window.localStorage.getItem('user'))
      let info = {
        nickName: this.nickName,
        name: this.name,
        phone: this.phone,
        career: this.career,
        Introduction: this.Introduction
      }
      this.coinXpApi.competition('cxpzvrd3y' || user.userNameChain, '4bbe55e5-3f90-4059-8857-9d5ce326e06e' || window.localStorage.getItem('token'), info)
      .then(res => {
        if (res.retCode === '00') {
          this.$alert('s', '提交成功！')
          setTimeout(() => {
            this.$router({
              path: '/game/ranking'
            })
          }, 2000)
        } else if (res.retCode === '10097') {
          this.$alert('用户已提交过信息！')
        } else if (res.retCode === '03') {
          this.$alert('参数错误！')
        } else if (res.retCode === '10098') {
          this.$alert('用户信息异常，请重新登录！')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import url(../../assets/css/theme.less);
@media screen and (min-width:750px) and (max-width:1200px) {
  section {
    // width: 100%;
    min-width: 1000px;
  }
}
@media screen and (max-width:750px) {
   section {
    // width: 100%;
    min-width: 560px;
  }
}
section {
  width: 100%;
     .title {
        position: relative;
        font-size: .42rem;
        // font-weight: 700;
        color:  @mainFontColor;
        text-align: center;
        background-image: url(../../assets/img/bg.png);
        background-position: center;
        background-repeat: no-repeat;
        &::before, &::after{
          position: absolute;
          content: '';
          display: block;
          width: 2.1rem;
          height: 8px;
          background-image: url(../../assets/img/left.png);
          background-size: 2.1rem 100%; 
          top: 50%;
          margin-right: -4px;
          right:-2.2rem;
        }
        &::before {
         left: -2.2rem;
         transform: rotate(180deg);
        }
   }
  .top {
  // height: 640px;
  padding: 1.5rem 0 .4rem;
  // background-size: 100% 100%;
  background-image: url(../../assets/img/qiu.png);
  background-position: center -32px;
  background-repeat: no-repeat;
  text-align: center;
   background-color: #04052b;
  h4 {
    font-size: .24rem;
    color:   @mainFontColor;
    &:last-child {
      letter-spacing:6px
    }
  }
  h2 {
    font-size: .6rem;
    font-family: 700;
    line-height: 1.4rem;
    color:  @mainFontColor;
  }
}
.content {
  padding-top: .4rem;
  background-color: #04052b;
  background-image: url(../../assets/img/bg2.png);
 h3 {
    width: 3.7rem;
    margin: 0 auto .6rem;
 }
 .form {
   div {
     position: relative;
     width: 5.66rem;
     margin: 32px auto 0;
     text-align: center;
     font-size: .24rem;
     &.textarea P {
        margin-top: -0.66rem;
     }
     p {
       position: absolute;
       width: 150px;
       left: -150px;
       top: 50%;
       margin-top: -.18rem;
       text-align: right;
       font-weight: 300;
       color: @mainFontColor;
     }
     input,textarea {
       width: 5.56rem;
       height: 0.76rem;
       padding-left: .2rem;
       border: 2px solid #0984f4;
       border-image: linear-gradient(to right,#0984f4, #541f9d)30 30;
       border-image: -webkit-linear-gradient(to right,#0984f4, #541f9d)30 30;
       border-image: -o-linear-gradient(to right,#0984f4, #541f9d)30 30;
       border-image: -moz-linear-gradient(to right,#0984f4, #541f9d)30 30;
       background-color: #05062d;
       color: @mainFontColor;
       font-size: .24rem;
       border-radius: 6px;
     }
      input::-webkit-input-placeholder, textarea::-webkit-input-placeholder{
          color:#53648a;
      }
      input::-moz-placeholder, textarea::-moz-placeholder{   /* Mozilla Firefox 19+ */
          color:#53648a;
      }
      input:-moz-placeholder, textarea:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
          color:#53648a;
      }
      input:-ms-input-placeholder, textarea:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
          color:#53648a;
      }
      textarea {
        padding: .2rem;
        height: 1.36rem;
      }
   }
   h4 {
     padding-bottom: 1rem;
     a {
       display: block;
       margin: 0 auto;
       width: 5.6rem;
       height: 0.84rem;
       line-height: 0.84rem;
       text-align: center;
       font-size:  @fontSize_30;
       color: @mainFontColor;
       background: linear-gradient(to right,#0984f4, #fb1057);
       border-radius: 42px;
       box-shadow: 1px 1px 20px 1px #fb1057;
     }
   }
 } 
}
.bottom {
  background-color: #000121;
  h3 {
      padding: 60px 0;
      width: 246px;
      margin: 0 auto;
  }
 .bottom-message {
   .item {
     width: 8rem;
     margin: 0 auto;
     color: #cbd7f0;
     font-size: @fontSize_16;
     h6 {
       margin: 20px 0 1px;
       line-height: 34px;
       font-weight: 700;
       font-size: 16px;
     }
     p {
       line-height: 26px;
       width: 8rem;
     }
   }
 }
 .support {
   padding: 0 20px 100px;
   margin: 0 auto;
  //  flex-wrap: wrap;
   a {
      width: 2.4rem;
      height: 1.4rem;
      background-color: #fff;
      border-radius: 6px;
      &:nth-child(n+2) {
        margin-left: 10px;
      }
   }
 }
}
}
</style>
