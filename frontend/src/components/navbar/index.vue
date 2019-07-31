<template>
  <div class="navbar ">
    <div class="navbar-itens">
      <div class="brand">
        <span class="logo">Bluetest</span>
      </div>
        <menus/>
    </div>
    <div class=""></div>
  </div>
</template>
<script>
export default {
  components: {
    menus: () => import('@/components/navbar/menus.vue')
  }
}
</script>
<style lang="stylus" scoped>
  .brand
    margin 18px 240px
  .logo
    color var(--white)
    font-weight 900
    font-size 2.8em
  .navbar-itens
    display flex
    flex-direction row
    justify-content left
  .navbar
    width 100%
    height 96px
    background-color var(--primary)
</style>


