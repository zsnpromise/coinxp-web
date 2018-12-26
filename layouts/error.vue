<template>
  <section class="container">
    <st-row direction="column" justify="" align="center">
       <img src="../assets/img/logo.png" alt="Nuxt.js Logo" />
    <h1 class="title" >
      {{ error.statusCode }}
    </h1>
    <h2 class="info">
      {{ error.message }}
    </h2>
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
      Homepage
    </nuxt-link>
    </st-row>
  </section>
</template>
<script>
export default {
  props: ['error'],
  mounted() {
    setTimeout(() => {
      this.$router.push({path: '/game'})
    }, 1000)
  }
}
</script>

<style scoped>
.container>div {
   margin: 1.5rem auto;
}
.title
{
  margin-top: 15px;
  font-size: 5em;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}
.button
{
  margin-top: 50px;
}
</style>
