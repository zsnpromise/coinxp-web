<template>
  <section class="container">
    <st-row>
      <div class="left">
       <user-left></user-left>
      </div>
      <div class="right">
         <other-user></other-user>
         <other-user-assert></other-user-assert>
         <other-user-line></other-user-line>
         <other-user-record></other-user-record>
      </div>
    </st-row>
  </section>
</template>
<script>
import userLeft from '../../../components/index/user-left'
import otherUser from '../../../components/index/other-user'
import otherUserAssert from '../../../components/index/other-user-assert'
import otherUserLine from '../../../components/index/other-user-line'
import otherUserRecord from '../../../components/index/other-user-record'
export default {
  components: {
    userLeft,
    otherUser,
    otherUserAssert,
    otherUserLine,
    otherUserRecord
  },
  data() {
    return {
      list: []
    }
  },
  created() {
    // this.baseApi.getList().then(res => {
    //   this.list = res.data
    // })
  }
}
</script>

<style lang="less" scoped>
@import url(../../../components/common/font/iconfont.css);
@import url(../../../assets/css/theme.less);
.container {
  width: 100%;
  margin: 0 auto;
  padding: 20px 6%;
  .left {
    flex: 1;
  }
  .right {
    flex: 2;
    min-width: 560px;
  }
}
@media screen and (min-width:750px) and (max-width:1200px) {
  .container {
    // max-width: calc(100% - 40px);
    min-width: 1000px;
    padding: 20px;
  }
}
@media screen and (max-width:750px) {
  .container {
     padding: 20px 0;
    .left {
      display: none;
    }
  }
}
</style>
