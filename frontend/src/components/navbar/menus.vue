<template>
  <div class="menu">
    <div v-for="(btn, id) in menu" :key="id" >
      <button class="btn" :class="btn.class" :value="btn.value">
        {{btn.name}}
      </button>
    </div>
  </div> 
</template>
<script>
export default {
  data: () => ({
    menu: [
    {id:0, name: 'Bleutest Buy', action: '', value: '', icon: '', class: 'btn__nav'},
    {id:1, name: 'Compare', action: '', value: '', icon: '', class: 'btn__nav'},
    {id:2, name: 'Remittance', action: '', value: '', icon: '', class: 'btn__nav'},
    {id:3, name: 'Exchanges', action: '', value: '', icon: '', class: 'btn__nav'},
    {id:4, name: `Exchanges'Fees`, action: '', value: '', icon: '', class: 'btn__nav'},
    {id:5, name: 'Login', action: '', value: '', icon: '', class: 'btn__login'},]
  })
}
</script>
<style lang="stylus" scoped>

  .btn
    cursor pointer
    margin 0px 16px
    text-decoration none
    font-size 1.1em
    min-width 120px
    min-height 56px
    background transparent
    color var(--white)
    &__login
      font-weight bold
      border-radius 12px
      border  solid 3px var(--white)
    &__nav
      outline 0px auto -webkit-focus-ring-color
      outline-offset 0px
      border none
    &:hover 
      border-bottom 2px solid var(--white)

  .menu
    margin 20px 0px 0px 0px
    display flex
    flex-direction row
</style>



