<template>
  <div class="menu">
    <div v-for="(btn, id) in menu" :key="id" >
      <router-link :to="btn.action" :value="btn.value">
        <button class="btn" :class="btn.class">{{btn.name}}</button>
      </router-link>
    </div>
    <div>
      <select v-model="selectValue" class="flags-comp" name="" id="" @change="alterLanguage(selectValue)">
        <option class="flags flags__usd" value="USA">USA</option>
        <option class="flags flags__br" value="BR"><img src="./../../assets/flags/brazil.svg" alt="" width="120">BRL</option>
      </select>
    </div>
  </div> 
</template>
<script>
export default {
  data: () => ({
    selectValue: 'USD',
    menu: [
    {id:0, name: 'Bleutest Buy', action: '', value: '', icon: '', class: 'btn__nav'},
    {id:1, name: 'Compare', action: '/compare', value: '', icon: '', class: 'btn__nav'},
    {id:2, name: 'Remittance', action: '', value: '', icon: '', class: 'btn__nav'},
    {id:3, name: 'Exchanges', action: '', value: '', icon: '', class: 'btn__nav'},
    {id:4, name: `Exchanges'Fees`, action: '', value: '', icon: '', class: 'btn__nav'},
    {id:5, name: 'Login', action: '', value: '', icon: '', class: 'btn__login'},]
  }),
  methods: {
    alterLanguage(v) {
      switch (v) {
        case 'BR':
          this.$store.dispatch('SET_LANG', 0)
          break
        case 'USA':
          this.$store.dispatch('SET_LANG', 1)
          break
      }
    },
  }
}
</script>
<style lang="stylus" scoped>

  .flags
    width 150px
    color var(--secondary)
    &__br
      background-image url('../../assets/flags/brazil.svg')
    &__usd
      background-image url('../../assets/flags/united-states.svg')

  .flags-comp
    border solid 2px var(--white)
    margin-top 16px
    text-decoration  none
    background transparent
    min-width 40px 
    color var(--white)

  .btn
    cursor pointer
    margin 8px 16px
    text-decoration none
    font-size 0.9em
    min-width 46px
    min-height 42px
    background transparent
    color var(--white)
    &__login
      padding 0px
      width 76px
      height 42px
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



