<template>
  <div>
    <my-header/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '../components/Footer.vue'
import MyHeader from '../components/Header.vue'
export default {
  head() {
    return {
      title: 'CoinXP',
      meta: [
        { hid: 'description', name: 'description', content: 'CoinXP is the blockchain infrastructure for cryptocurrency exchange ecosystem' },
        { hid: 'keywords', name: 'keywords', content: 'coinxp, cryptocurrency, dex, exchange' },
        { hid: 'format-detection', name: 'format-detection', content: 'telephone=no' }
      ]
    }
  },
  components: {
    MyFooter,
    MyHeader
  },
  methods: {
    addUser() {
      let user = JSON.parse(window.localStorage.getItem('user'))
      if (user) {
        this.$store.commit('auth/SET_VALUE', { user })
        this.baseApi.addUser(user.name, user.userNameChain).then(res => {
          this.$store.commit('auth/SET_VALUE', { asset: res.data })
        })
      }
    }
  },
  mounted() {
    this.addUser()
  }
}
</script>

<style>

</style>
