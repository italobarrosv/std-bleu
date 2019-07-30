<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>
<script>
export default {
  components: {
    Nav: () => import('@/components/navbar/')
  }
}
</script>

<style lang="stylus">
@import '~@/assets/main.styl'
#app
  font-family 'Roboto', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
</style>
