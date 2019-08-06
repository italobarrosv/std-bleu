<template>
  <div class="component__compare">
    <compare/>
  </div>  
</template>
<script>
export default {
  components: {
    Compare: () => import('@/components/compare/')
  }
}
</script>
<style lang="stylus" scoped>
  .component__compare
    padding 30px
    display flex
    justify-content center
    text-align center
</style>

